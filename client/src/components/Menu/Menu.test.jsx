import { fireEvent, screen } from '@testing-library/react';
import Menu from '.';
import { renderTheme } from '../../styles/render-theme';
import linksMock from '../NavLinks/mock';
import { theme } from '../../styles/theme';

const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu />', () => {
  it('should render logo and Main Menu Nan', () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData} />,
    );
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render menu mobile and button for open and close the menu', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);
    const button = screen.getByLabelText('Open/Close Menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open Menu')).toBeInTheDocument();

    fireEvent.click(button);

    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Close Menu')).toBeInTheDocument();

    fireEvent.click(button);

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open Menu')).toBeInTheDocument();
  });

  it('should close menu when click on container', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);
    const button = screen.getByLabelText('Open/Close Menu');
    const menuContainer = button.nextSibling;

    fireEvent.click(button);

    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });

    fireEvent.click(menuContainer);

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
  });

  it('should not render links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);
    expect(
      screen.queryByRole('navigation', { name: 'Main menu' }).firstChild,
    ).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
