import { Grid, makeStyles } from '@material-ui/core';
import Add from './components/Add';
import Feed from './components/Feed/Feed';
import Leftbar from './components/Leftbar';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
// import posts from './components/Feed/postData.json';
import { PostContext, usePost } from './context/posts';
import { useCallback, useEffect } from 'react';
const useStyles = makeStyles((theme) => ({
  right: {
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const App = () => {
  const styles = useStyles();
  const { state, actions } = usePost();
  const { posts } = state;
  useEffect(() => {
    console.log('useEffect=> ', posts);
  }, [posts]);
  return (
    <div>
      <PostContext.Provider value={posts}>
        <Navbar />
        <Grid container>
          <Grid item sm={1} md={2} xs={2}>
            <Leftbar />
          </Grid>
          <Grid item sm={11} md={7} xs={10}>
            <Feed />
          </Grid>
          <Grid item sm={3} className={styles.right}>
            <Rightbar />
          </Grid>
          <Add />
        </Grid>
      </PostContext.Provider>
    </div>
  );
};

export default App;
