import Base from '.';
import { mockBase } from './mock';
import { renderTheme } from '../../styles/render-theme';

describe('<Base />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Base {...mockBase} />);
    expect(container).toMatchSnapshot();
  });
});
