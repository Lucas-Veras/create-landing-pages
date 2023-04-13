import { screen } from '@testing-library/react';
import MenuLink from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="https://localhost">children</MenuLink>);
    expect(screen.getByRole('link', { name: 'children' })).toHaveAttribute(
      'href',
      'https://localhost',
    );
  });

  it('should render a link with target _blank', () => {
    renderTheme(
      <MenuLink link="https://localhost" newTab={true}>
        children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should match a snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link="https://localhost">children</MenuLink>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
        padding: 1.6rem;
        color: #0A1128;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: .76rem;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: #dc143c;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href="https://localhost"
        target="_self"
      >
        children
      </a>
    `);
  });
});
