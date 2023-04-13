import GridText from '../../components/GridText';
import linksMock from '../../components/NavLinks/mock';
import gridMock from '../../components/GridText/mock';

export const mockBase = {
  children: (
    <>
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
    </>
  ),
  links: linksMock,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footerHtml: `<p>My Company 2020 - All rights reserved</p>`,
};
