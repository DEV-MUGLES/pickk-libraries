import { RuleTester } from '../RuleTester';
import rule from '../../lib/rules/array-naming-convention';

const ruleTester = new RuleTester({
  parser: '@typescript-eslint/parser',
});

ruleTester.run('array-naming-convention', rule, {
  valid: [
    { code: 'const looks = [];' },
    { code: 'const LOOKS = [];' },
    { code: 'const lookList = [];' },
    { code: 'const look_list = [];' },
    { code: 'const LOOK_LIST = [];' },
    { code: 'let ids:Array<number>;' },
    { code: 'const [ids, setIds] = useState([]);' },
    { code: 'const [ids, setIds] = useState<Array<number>>();' },
  ],
  invalid: [
    {
      code: 'const look = [];',
      errors: [{ messageId: 'showingSingularName' }],
    },
    {
      code: 'let lookId:Array<number>;',
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
    {
      code: 'const [id, setIds] = useState<Array<number>>();',
      errors: [
        {
          messageId: 'showingSingularStateName',
        },
      ],
    },
    // {
    //   code: 'const initailIds = []; const [id, setId] = useState(initailIds);',
    //   errors: [
    //     {
    //       messageId: 'showingSingularStateName',
    //     },
    //   ],
    // },
  ],
});
