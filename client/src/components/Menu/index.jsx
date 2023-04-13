import P from 'prop-types';
import { Button, Container, MenuContainer } from './styles';
import { SectionContainer } from '../SectionContainer';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';
import LogoLink from '../LogoLink';

const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button
        onClick={() => setVisible((prev) => !prev)}
        aria-label="Open/Close Menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close Menu" />
        ) : (
          <MenuIcon aria-label="Open Menu" />
        )}
      </Button>
      <Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </MenuContainer>
        </SectionContainer>
      </Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};

export default Menu;
