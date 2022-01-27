import React from 'react';
import PostItem from './PostItem';

const PostList = (props) => {

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        {props.title}
      </h1>
      <div className="post-list">
        {props.posts.map((p, i) => {
          return (
            <div key={i}>
              <PostItem post={p} />
            </div>);
        })}
      </div>
    </>
  );
};

export default PostList;