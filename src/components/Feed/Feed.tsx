import { Container, makeStyles } from '@material-ui/core';
import { useCallback, useContext, useEffect, useState } from 'react';
import { PostContext, usePost } from '../../context/posts';
import Add from '../Add';
import Post from '../post';
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  // const { state, actions } = usePost();
  const posts = useContext(PostContext);

  const styles = useStyles();
  console.log('24  feed=> ', posts);
  return (
    <Container className={styles.container}>
      {posts.length &&
        posts.map((post, index) => (
          <Post key={index} title={post.title} text={post.text} />
        ))}
    </Container>
  );
};

export default Feed;
