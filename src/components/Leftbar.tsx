import { alpha, Container, makeStyles, Typography } from '@material-ui/core';
import {
  Bookmark,
  CameraAlt,
  ExitToApp,
  Home,
  ListAlt,
  Person,
  PhoneAndroid,
  Settings,
} from '@material-ui/icons';
import { useCallback } from 'react';
import { usePost } from '../context/posts';
const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    color: 'white',
    paddingTop: theme.spacing(10),
    paddingLeft: '0',
    paddingRight: '0',
    background: theme.palette.primary.main,
    position: 'sticky',
    top: 0,
    // width: '100%',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(1.5),
      paddingBottom: theme.spacing(1.5),
      paddingLeft: theme.spacing(0),
    },
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
      cursor: 'pointer',
    },
  },
  icon: {
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
    },
  },
  text: {
    display: 'block',
    marginLeft: theme.spacing(1),
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const Leftbar = () => {
  const styles = useStyles();
  const { state, actions } = usePost();
  const { posts } = state;
  useCallback(() => {
    console.log('21  leftbar=> ', posts);
  }, [posts]);
  return (
    <Container className={styles.container}>
      <div className={styles.item}>
        <Home className={styles.icon} />
        <Typography className={styles.text}>Homepage</Typography>
      </div>
      <div className={styles.item}>
        <Person className={styles.icon} />
        <Typography className={styles.text}>Friends</Typography>
      </div>
      <div className={styles.item}>
        <ListAlt className={styles.icon} />
        <Typography className={styles.text}>List</Typography>
      </div>
      <div className={styles.item}>
        <CameraAlt className={styles.icon} />
        <Typography className={styles.text}>Camera</Typography>
      </div>
      <div className={styles.item}>
        <PhoneAndroid className={styles.icon} />
        <Typography className={styles.text}>Apps</Typography>
      </div>
      <div className={styles.item}>
        <Bookmark className={styles.icon} />
        <Typography className={styles.text}>Collection</Typography>
      </div>
      <div className={styles.item}>
        <Settings className={styles.icon} />
        <Typography className={styles.text}>Settings</Typography>
      </div>
      <div className={styles.item}>
        <ExitToApp className={styles.icon} />
        <Typography className={styles.text}>Log out</Typography>
      </div>
    </Container>
  );
};
export default Leftbar;
