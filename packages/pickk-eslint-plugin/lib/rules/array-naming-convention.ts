import {
  AST_NODE_TYPES,
  TSESLint,
  TSESTree,
} from '@typescript-eslint/experimental-utils';

const checkIsInvalidateArrayNaming = (
  pattern: TSESTree.DestructuringPattern
) => {
  const regex = /\w+(s|S|list|List|LIST)$/;
  return pattern.type === 'Identifier' && !pattern.name.match(regex);
};

const checkIsArrayType = (node: TSESTree.VariableDeclarator) => {
  const typeAnnotation: TSESTree.TSTypeAnnotation = node.id.typeAnnotation;
  if (!typeAnnotation) {
    return false;
  }
  return (
    typeAnnotation.type === AST_NODE_TYPES.TSTypeAnnotation &&
    typeAnnotation.typeAnnotation.type === AST_NODE_TYPES.TSTypeReference &&
    typeAnnotation.typeAnnotation.typeName.type === AST_NODE_TYPES.Identifier &&
    typeAnnotation.typeAnnotation.typeName.name === 'Array'
  );
};

const checkIsArrayTypeFunction = (node: TSESTree.VariableDeclarator) => {
  const _arguments = (node.init as any).arguments;
  // useState([]) : default 값이 배열인 경우
  const isInitializeToArray: boolean =
    _arguments.length === 1 && _arguments[0].type === 'ArrayExpression';

  if (isInitializeToArray) {
    return true;
  }

  // useState<Array>() : Array로 타입이 지정된 배열인 경우
  const _typeParameters = (node.init as any).typeParameters;
  const isTypedArray: boolean =
    _typeParameters.type === AST_NODE_TYPES.TSTypeParameterInstantiation &&
    _typeParameters.params[0].type === AST_NODE_TYPES.TSTypeReference &&
    _typeParameters.params[0].typeName.type === AST_NODE_TYPES.Identifier &&
    _typeParameters.params[0].typeName.name === 'Array';

  return isTypedArray;
};

type MessageIds = 'showingSingularName' | 'showingSingularStateName';
type RuleListener = {
  VariableDeclarator(node): void;
};

export default {
  name: 'array-naming-convention',
  meta: {
    type: 'suggestion',
    docs: {
      description: '배열 변수는 영문 복수형으로 명명합니다.',
      category: 'Stylistic Issues',
      recommended: false,
      url: '',
    },
    fixable: 'code',
    schema: [],
    messages: {
      showingSingularName:
        '배열 변수는 영문 복수형으로 명명합니다. (ex) const looks = []; const posts = [])',
      showingSingularStateName:
        '배열의 state명은 영문 복수형으로 명명합니다. (ex) const [ids, setIds] = useState([]); )',
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      VariableDeclarator(node: TSESTree.VariableDeclarator) {
        try {
          if (checkIsArrayType(node) || node.init.type === 'ArrayExpression') {
            if (checkIsInvalidateArrayNaming(node.id)) {
              context.report({
                node,
                messageId: 'showingSingularName',
              });
              return;
            }
          }

          if (
            node.init.type === 'CallExpression' &&
            node.init.callee.type === 'Identifier' &&
            node.init.callee.name === 'useState' &&
            checkIsArrayTypeFunction(node)
          ) {
            if (
              node.id.type === 'ArrayPattern' &&
              (checkIsInvalidateArrayNaming(node.id.elements[0]) ||
                checkIsInvalidateArrayNaming(node.id.elements[1]))
            )
              context.report({
                node,
                messageId: 'showingSingularStateName',
              });
          }
        } catch {}
      },
    };
  },
} as TSESLint.RuleModule<MessageIds, [], RuleListener>;
