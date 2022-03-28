import { Container, makeStyles } from '@material-ui/core';
import { usePostContext } from '../../context/posts';

import Post from '../post';
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const { state } = usePostContext();
  const { posts } = state;
  const styles = useStyles();
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
