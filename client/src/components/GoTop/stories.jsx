import GoTop from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde
        soluta labore placeat, numquam alias obcaecati. Tenetur, culpa.
        Voluptatem itaque nisi totam accusantium voluptatibus voluptates
        reprehenderit, quisquam error assumenda! Ullam.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde
        soluta labore placeat, numquam alias obcaecati. Tenetur, culpa.
        Voluptatem itaque nisi totam accusantium voluptatibus voluptates
        reprehenderit, quisquam error assumenda! Ullam.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde
        soluta labore placeat, numquam alias obcaecati. Tenetur, culpa.
        Voluptatem itaque nisi totam accusantium voluptatibus voluptates
        reprehenderit, quisquam error assumenda! Ullam.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde
        soluta labore placeat, numquam alias obcaecati. Tenetur, culpa.
        Voluptatem itaque nisi totam accusantium voluptatibus voluptates
        reprehenderit, quisquam error assumenda! Ullam.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde
        soluta labore placeat, numquam alias obcaecati. Tenetur, culpa.
        Voluptatem itaque nisi totam accusantium voluptatibus voluptates
        reprehenderit, quisquam error assumenda! Ullam.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde
        soluta labore placeat, numquam alias obcaecati. Tenetur, culpa.
        Voluptatem itaque nisi totam accusantium voluptatibus voluptates
        reprehenderit, quisquam error assumenda! Ullam.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde
        soluta labore placeat, numquam alias obcaecati. Tenetur, culpa.
        Voluptatem itaque nisi totam accusantium voluptatibus voluptates
        reprehenderit, quisquam error assumenda! Ullam.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde
        soluta labore placeat, numquam alias obcaecati. Tenetur, culpa.
        Voluptatem itaque nisi totam accusantium voluptatibus voluptates
        reprehenderit, quisquam error assumenda! Ullam.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde
        soluta labore placeat, numquam alias obcaecati. Tenetur, culpa.
        Voluptatem itaque nisi totam accusantium voluptatibus voluptates
        reprehenderit, quisquam error assumenda! Ullam.
      </p>
      <GoTop {...args} />
    </div>
  );
};
