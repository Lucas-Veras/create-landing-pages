import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Container, Grid, GridElement } from './styles';
import Heading from '../Heading';
import TextComponent from '../TextComponent';

const GridText = ({
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
            <GridElement key={`${el.title}-${i}`}>
              <Heading size="small" colorDark={!background} as="h3">
                {el.title}
              </Heading>
              <TextComponent>{el.description}</TextComponent>
            </GridElement>
          ))}
        </Grid>
      </Container>
    </SectionBackground>
  );
};

GridText.protoTypes = {
  title: P.string.isRequired,
  background: P.bool,
  description: P.string.isRequired,
  sectionId: P.string,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
};

export default GridText;
