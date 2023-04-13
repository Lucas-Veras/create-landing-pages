import P from 'prop-types';
import TextComponent from '../TextComponent';
import { Container } from './styles';
import { SectionContainer } from '../SectionContainer';

const Footer = ({ footerHtml }) => {
  return (
    <Container>
      <SectionContainer>
        <TextComponent>{footerHtml}</TextComponent>
      </SectionContainer>
    </Container>
  );
};

Footer.propTypes = {
  footerHtml: P.string.isRequired,
};

export default Footer;
