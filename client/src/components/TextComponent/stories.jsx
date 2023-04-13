import TextComponent from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, quos recusandae officia eveniet commodi illum animi ipsum, eius provident voluptatem, maiores voluptate nesciunt. Eum officia nesciunt totam consequuntur minus repellendus?`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <TextComponent {...args} />;
