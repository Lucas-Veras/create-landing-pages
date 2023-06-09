import P from 'prop-types';
import { Container, Html } from './styles';
import { SectionBackground } from '../SectionBackground';
import Heading from '../Heading';
import TextComponent from '../TextComponent';

const GridContent = ({ title, html, background = false, sectionId = '' }) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Container>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Html>
          <TextComponent>{html}</TextComponent>
        </Html>
      </Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  sectionId: P.string,
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
};

export default GridContent;
