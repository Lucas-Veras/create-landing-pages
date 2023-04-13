import GridTwoCollums from '.';
import mock from './mock';

export default {
  title: 'GridTwoColums',
  component: GridTwoCollums,
  args: mock,
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoCollums {...args} />
    </div>
  );
};
