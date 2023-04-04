import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import "./Homestyle.css"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const { loading, posts, error } = useSelector((state) => state.posts);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
   
    <div>
      
      <Navbar ><Container >Social Media App</Container>
      </Navbar>
      <div className='mainDiv'>
        {posts.map((post) => (
          <div key={post.id} className='container1'>
            <p><img src="https://picsum.photos/200?random=${post.id}" alt='img'/></p>
            <p>User ID: {post.userId}</p>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>

            </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
