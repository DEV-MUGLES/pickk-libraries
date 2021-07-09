import { Rule } from 'eslint';
import { Pattern } from 'estree';

const isInvalidateArrayNaming = (pattern: Pattern) => {
  const regex = /\w+(s|S|list|List|LIST)$/;
  return pattern.type === 'Identifier' && !pattern.name.match(regex);
};

export default {
  name: 'array-naming-convention',
  meta: {
    type: 'suggestion',
    docs: {
      description: '배열 변수는 영문 복수형으로 명명합니다.',
      category: 'Stylistic Issues',
      recommended: false,
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
  create(context: Rule.RuleContext): Rule.RuleListener {
    return {
      VariableDeclarator(node) {
        try {
          if (node.init.type === 'ArrayExpression') {
            if (isInvalidateArrayNaming(node.id)) {
              context.report({
                node,
                messageId: 'showingSingularName',
              });
            }
          }

          if (
            // useState([]) : default 값이 배열인지 확인한다.
            (node.init.type === 'CallExpression' &&
              node.init.callee.type === 'Identifier' &&
              node.init.callee.name === 'useState' &&
              node.init.arguments.length === 1 &&
              node.init.arguments[0].type === 'ArrayExpression') ||
            // useState<Array>() : Array로 타입이 지정된 배열인 경우
            (node.init.type === 'BinaryExpression' &&
              node.init.left.type === 'BinaryExpression' &&
              node.init.left.left.type === 'Identifier' &&
              node.init.left.left.name === 'useState' &&
              node.init.left.right.type === 'Identifier' &&
              node.init.left.right.name === 'Array')
          ) {
            if (
              node.id.type === 'ArrayPattern' &&
              (isInvalidateArrayNaming(node.id.elements[0]) ||
                isInvalidateArrayNaming(node.id.elements[1]))
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
} as Rule.RuleModule;
