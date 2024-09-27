export default function (
  /** @type {import('plop').NodePlopAPI} **/
  plop,
) {
  // controller generator
  plop.setGenerator('resource-types', {
    description: 'Resources types',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name (PascalCase)',
      },
      {
        type: 'input',
        name: 'path',
        message: 'API Path (no prefix, with trailing slash, lowercase)',
      },
      {
        type: 'input',
        name: 'path-param',
        message: 'API Param name (INCLUDE BRACKETS, lowercase, id or name)',
      },
      {
        type: 'checkbox',
        name: 'methods',
        choices: ['list', 'retrieve', 'create', 'update', 'del'],
        message: 'Resource Methods',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'types/{{pascalCase name}}Resource.d.ts',
        templateFile: 'plop-templates/ResourceTypes.ts.hbs',
      },
    ],
  });

  plop.setHelper('ifEquals', function (arg1, arg2) {
    return arg1 == arg2;
  });
}
