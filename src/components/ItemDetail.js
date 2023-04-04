import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../actions/posts';

const ItemDetail = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(match.params.id));
  }, [dispatch, match.params.id]);

  const { loading, posts, error } = useSelector((state) => state.posts);
  const postId = match.params.id;
  console.log(postId, 'postId');
  console.log(posts, 'posts');
  const post = posts.find((p) => p.id === postId);
  console.log(post, 'post');


  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default ItemDetail;

