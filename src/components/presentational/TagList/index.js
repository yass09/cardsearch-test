import React from 'react';

import TagListWrapper from './TagListWrapper';
import Tag from '../Tag';

const TagList = ({ tagListData }) => {
  return (
    <TagListWrapper tagListData={tagListData}>
      {tagListData.map((tag, i) => {
        return <Tag tag={tag} key={i} />;
      })}
    </TagListWrapper>
  );
};

export default TagList;
