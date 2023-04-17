import P from 'prop-types';
import { Container, Image, ImageContainer, TextContainer } from './styles';
import { SectionBackground } from '../SectionBackground';
import Heading from '../Heading';
import TextComponent from '../TextComponent';

const GridTwoColumns = ({
  title,
  text,
  srcImg,
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Container>
        <TextContainer>
          <Heading uppercase colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </TextContainer>
        <ImageContainer>
          <Image src={srcImg} alt={title} />
        </ImageContainer>
      </Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  sectionId: P.string,
  background: P.bool,
};

export default GridTwoColumns;
