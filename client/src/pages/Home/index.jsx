import { useEffect, useState } from 'react';

import { mapData } from '../../api/mapData';

import GridTwoColumns from '../../components/GridTwoColumns';
import GridContent from '../../components/GridContent';
import GridImage from '../../components/GridImage';
import GridText from '../../components/GridText';
import Loading from '../Loading';

import Base from '../Base';
import PageNotFound from '../PageNotFound';
import { useLocation } from 'react-router-dom';
import config from '../../config';

const Home = () => {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathname ? pathname : config.defaultSlug;

    const load = async () => {
      try {
        const apiData = await fetch(config.url);
        const data = await apiData.json();

        const json = await Object.values(data);

        const attributes = json[0].filter(
          (item) => item.attributes.slug === slug,
        )[0].attributes;
        const pageData = mapData([attributes]);

        setData(pageData[0]);
      } catch (error) {
        console.log(error)
        setData(undefined);
      }
    };
    load();
  }, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }
    if (data && !data.slug) {
      document.title = 'Carregando...';
    }
    if (data && data.title) {
      document.title = data.title;
    }
  }, [data]);

  if (data === undefined) return <PageNotFound />;
  if (data && !data.slug) return <Loading />;

  const { menu, sections, footerHtml } = data;
  const { links, text, link, srcImg } = menu;
  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${component}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumns key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
};

export default Home;
