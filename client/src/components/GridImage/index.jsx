import Heading from '../Heading';
import { SectionBackground } from '../SectionBackground';
import TextComponent from '../TextComponent';
import { Container, Grid, GridElement, Image } from './styles';
import P from 'prop-types';

const GridImage = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Grid>
          {grid.map((el, i) => (
            <GridElement key={`${el.srcImg}-${i}`}>
              <Image src={el.srcImg} alt={el.altText} />
            </GridElement>
          ))}
        </Grid>
      </Container>
    </SectionBackground>
  );
};

GridImage.protoTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  sectionId: P.string,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ).isRequired,
};

export default GridImage;
