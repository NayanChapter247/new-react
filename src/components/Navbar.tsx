import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Search, Close } from '@material-ui/icons';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { useState } from 'react';
import clsx from 'clsx';
import { usePostContext } from '../context/posts';

const useStyles = makeStyles((theme: any) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  search: {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    padding: '5px',
    display: (props: any) => (props.mySearch ? 'flex' : 'none'),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    alignItems: 'center',
    width: '100%',
    // display: (props: any) => (props.mySearch ? 'flex' : 'none'),
  },
  searchDesktop: {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    padding: '5px',
    // display: 'flex',
    alignItems: 'center',
    width: '50%',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: (props: any) => (props.mySearch ? 'none' : 'flex'),
    },
  },
  'desktop-icons': {
    display: (props: any) => (props.mySearch ? 'none' : 'flex'),
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  'cursor-pointer': {
    cursor: 'pointer',
  },
  searchIcon: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    alignItems: 'center',
  },
  closeIcon: {
    display: 'flex',
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
  },
  'pad-12': { margin: '12px' },
  'search-input': { width: '100%', color: 'white', 'font-weight': 'bold' },
  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: { display: 'block' },
  },
  logoSm: {
    display: 'block',
    [theme.breakpoints.up('sm')]: { display: 'none' },
  },
  avatar: {
    marginLeft: '5px',
  },
}));

const Navbar = () => {
  const [mySearch, setMySearch] = useState(false);
  const styles = useStyles({ mySearch });
  const { state } = usePostContext();
  const { posts } = state;
  return (
    <AppBar position='fixed'>
      <Toolbar className={styles.toolbar}>
        <Typography variant='h6' className={styles.logoLg}>
          Virat Kohli
        </Typography>
        <Typography variant='h6' className={styles.logoSm}>
          King
        </Typography>

        <div className={styles.searchDesktop}>
          <InputBase placeholder='Search…' className={styles['search-input']} />
        </div>

        <div className={styles.icons}>
          <div className={styles['desktop-icons']}>
            <div
              className={styles.searchIcon}
              onClick={() => setMySearch(true)}
            >
              <Search className={styles['cursor-pointer']} />
            </div>
            <Badge
              color='secondary'
              badgeContent={posts.length}
              className={clsx(styles['pad-12'], styles['cursor-pointer'])}
            >
              <MailIcon />
            </Badge>
            <Badge
              color='secondary'
              badgeContent={3}
              className={clsx(styles['pad-12'], styles['cursor-pointer'])}
            >
              <NotificationsNoneIcon />
            </Badge>
            <Avatar
              alt='King'
              src='https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg'
              className={styles.avatar}
            />
          </div>

          <div className={styles.search}>
            <InputBase
              placeholder='Search…'
              className={styles['search-input']}
            />
            <Close
              onClick={() => setMySearch(false)}
              className={clsx(styles['cursor-pointer'], styles.closeIcon)}
            />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
