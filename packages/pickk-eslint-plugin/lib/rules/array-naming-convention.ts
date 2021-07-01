import { Rule } from 'eslint';

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
  },
  defaultOptions: [],
  create(context: Rule.RuleContext): Rule.RuleListener {
    return {
      VariableDeclarator(node) {
        try {
          if (
            node.init.type === 'ArrayExpression' &&
            node.id.type === 'Identifier'
          ) {
            if (node.id.name[node.id.name.length - 1].toLowerCase() !== 's') {
              context.report({
                node,
                message:
                  '배열 변수는 영문 복수형으로 명명합니다. (ex) const looks = []; const posts = [])',
              });
            }
          }
        } catch {}
      },
    };
  },
} as Rule.RuleModule;
