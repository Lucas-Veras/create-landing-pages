import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import { Container } from './styles';

export const SectionBackground = ({
  children,
  background = false,
  sectionId = '',
}) => {
  return (
    <Container background={background} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  sectionId: P.string,
  background: P.bool,
};
