import templateOnlyComponent from '@ember/component/template-only';

export const Header = {
  component: templateOnlyComponent(),
  shorthandProperty: 'content',
  meta: {
    description: 'A header',
    properties: [
      {
        name: 'content',
        description:
          'A value or array of values that will be concatenated together and displayed',
      },
    ],
  },
};

export default Header.component;
