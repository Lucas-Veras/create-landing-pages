import { Container } from './styles';
import P from 'prop-types';

const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  return (
    <Container href={link} target={target}>
      {children}
    </Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
};

export default MenuLink;
