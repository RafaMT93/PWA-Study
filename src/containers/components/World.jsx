import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { createMarkup } from '../../utils';

const World = ({ values }) => {
  const history = useHistory();
  const renderImg = ({ image, description }) => (
    <div>
      <img src={image.url} alt={description} width="100%" />
    </div>
  );

  const renderDescription = (description) => (
    <p dangerouslySetInnerHTML={createMarkup(description)} />
  );

  const openPost = (id) => {
    history.push(`/world/${id}`);
  };

  const renderPost = (post, index) => {
    const { title, image, description, id } = post;
    const isFirst = index === 0;
    const spanValue = isFirst ? 24 : 12;

    return (
      <Col span={spanValue} key={`World-${index}`}>
        <article onClick={() => openPost(id)}>
          <p>
            <strong dangerouslySetInnerHTML={createMarkup(title)} />
          </p>
          {isFirst && renderImg({ image, description })}
        </article>
      </Col>
    );
  };

  return <Row gutter={[16, 16]}>{values?.map(renderPost)}</Row>;
};

World.defaultProps = {
  values: [],
};

World.propTypes = {
  values: PropTypes.array.isRequired,
};

export default React.memo(World);
