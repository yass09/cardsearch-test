import React from 'react';

import TagWrapper from './TagWrapper';

const Tag = ({ tag }) => {
  return <TagWrapper tag={tag}>{tag}</TagWrapper>;
};

export default Tag;
