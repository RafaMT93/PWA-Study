import React from 'react';
import { Row, Col } from 'antd';
import Economy from './components/Economy';
import Technology from './components/Technology';
import World from './components/World';
import API from '../API';

const Home = () => {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(false); //

  const handleNews = (articles) => {
    setLoading(false);
    setNews({
      world: articles[0]?.value.value,
      economy: articles[1]?.value.value,
      technology: articles[2]?.value.value,
    });
  };

  React.useEffect(() => {
    setLoading(true);
    Promise.allSettled([
      API.GET_NEWS('world'),
      API.GET_NEWS('economy'),
      API.GET_NEWS('technology'),
    ])
      .then(handleNews)
      .catch((err) => console.log('Error', err));
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24} md={16}>
          <h2>World</h2>
          <World values={news?.world} />
        </Col>
        <Col span={24} md={8}>
          <h2>Economy</h2>
          <Economy values={news?.economy} />
        </Col>
      </Row>
      <hr />
      <Row gutter={[16, 16]}>
        <Col span={24} md={16}>
          <h2>Technology</h2>
          <Technology values={news?.technology} />
        </Col>
      </Row>
    </div>
  );
};

export default React.memo(Home);
