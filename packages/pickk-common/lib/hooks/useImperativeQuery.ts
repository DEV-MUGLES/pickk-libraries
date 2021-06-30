import {
  OperationVariables,
  QueryResult,
  useQuery,
  QueryHookOptions,
  DocumentNode,
} from '@apollo/client';

/**
 * Small wrapper around `useQuery` so that we can use it imperatively.
 *
 * @see Credit: https://github.com/apollographql/react-apollo/issues/3499#issuecomment-586039082
 *
 * @example
 * const callQuery = useImperativeQuery(query, options)
 * const handleClick = async () => {
 *   const{ data, error } = await callQuery()
 * }
 */
export const useImperativeQuery = <
  TData = unknown,
  TVariables = OperationVariables
>(
  query: DocumentNode,
  options: QueryHookOptions<TData, TVariables> = {}
): QueryResult<TData, TVariables>['refetch'] => {
  const { refetch } = useQuery<TData, TVariables>(query, {
    ...options,
    skip: true,
  });

  const imperativelyCallQuery = (queryVariables: TVariables) => {
    return refetch(queryVariables);
  };

  return imperativelyCallQuery;
};
