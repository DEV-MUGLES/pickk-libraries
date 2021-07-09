/* eslint-disable @typescript-eslint/no-var-requires */
import { RuleTester } from 'eslint';
import rule from '../../lib/rules/array-naming-convention';

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2017,
  },
  // @todo : add typescript parser
  // parser: '@typescript-eslint/parser',
});

ruleTester.run('array-naming-convention', rule, {
  valid: [
    { code: 'const looks = [];' },
    { code: 'const LOOKS = [];' },
    { code: 'const lookList = [];' },
    { code: 'const look_list = [];' },
    { code: 'const LOOK_LIST = [];' },
    { code: 'const [ids, setIds] = useState([]);' },
    { code: 'const [ids, setIds] = useState<Array>([]);' },
    // @todo : add typescript parser
    // { code: 'const [ids, setIds] = useState<Array<number>>();' },
  ],
  invalid: [
    {
      code: 'const look = [];',
      errors: [{ messageId: 'showingSingularName' }],
    },
    {
      code: 'const [id, setId] = useState([]);',
      errors: [
        {
          messageId: 'showingSingularStateName',
        },
      ],
    },
    {
      code: 'const [ids, setId] = useState([]);',
      errors: [
        {
          messageId: 'showingSingularStateName',
        },
      ],
    },
    {
      code: 'const [id, setIds] = useState([]);',
      errors: [
        {
          messageId: 'showingSingularStateName',
        },
      ],
    },
  ],
});
