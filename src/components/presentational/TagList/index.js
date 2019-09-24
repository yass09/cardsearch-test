import React from 'react';
import PropTypes from 'prop-types';

import TagListWrapper from './TagListWrapper';
import Tag from '../Tag';

const TagList = ({ tagListData }) => {
  if (!tagListData) {
    return null;
  }
  return (
    <TagListWrapper tagListData={tagListData}>
      {tagListData.map((tag, i) => {
        return <Tag tag={tag} key={i} />;
      })}
    </TagListWrapper>
  );
};

TagList.propTypes = {
  tagListData: PropTypes.arrayOf(PropTypes.string),
};

TagList.defaultProps = {
  tagListData: [],
};

export default TagList;
