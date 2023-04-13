import mock from './mock';
import GridTwoColumns from '.';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';

describe('<GridTwoColumns />', () => {
  it('should render two coloumns grid', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
