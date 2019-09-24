import React from 'react';
import PropTypes from 'prop-types';

import TagWrapper from './TagWrapper';

const Tag = ({ tag }) => {
  return <TagWrapper tag={tag}>{tag}</TagWrapper>;
};

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tag;
