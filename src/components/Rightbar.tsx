import {
  Avatar,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: 'sticky',
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: '#555',
  },
  link: {
    marginRight: theme.spacing(2),
    color: '#555',
    fontSize: 16,
  },
}));

const Rightbar = () => {
  const styles = useStyles();
  return (
    <Container className={styles.container}>
      <Typography className={styles.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={3} style={{ marginBottom: 20 }}>
        <Avatar
          alt='Remy Sharp'
          src='https://material-ui.com/static/images/avatar/156.jpg'
        />
        <Avatar
          alt='Travis Howard'
          src='https://material-ui.com/static/images/avatar/2.jpg'
        />
        <Avatar
          alt='Cindy Baker'
          src='https://material-ui.com/static/images/avatar/3.jpg'
        />
        <Avatar
          alt='Agnes Walker'
          src='https://material-ui.com/static/images/avatar/4.jpg'
        />
        <Avatar
          alt='Trevor Henderson'
          src='https://material-ui.com/static/images/avatar/5.jpg'
        />
      </AvatarGroup>
      <Typography className={styles.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList cols={2} rowHeight={100} style={{ marginBottom: 20 }}>
        <ImageListItem>
          <img
            src='https://c.ndtvimg.com/2021-04/2l7dt0hg_kohli-instagram_625x300_07_April_21.jpg'
            alt='king'
            loading='lazy'
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://c.ndtvimg.com/2021-04/2l7dt0hg_kohli-instagram_625x300_07_April_21.jpg'
            alt='king'
            loading='lazy'
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://c.ndtvimg.com/2021-04/2l7dt0hg_kohli-instagram_625x300_07_April_21.jpg'
            alt='king'
            loading='lazy'
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://c.ndtvimg.com/2021-04/2l7dt0hg_kohli-instagram_625x300_07_April_21.jpg'
            alt='king'
            loading='lazy'
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://c.ndtvimg.com/2021-04/2l7dt0hg_kohli-instagram_625x300_07_April_21.jpg'
            alt='king'
            loading='lazy'
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://c.ndtvimg.com/2021-04/2l7dt0hg_kohli-instagram_625x300_07_April_21.jpg'
            alt='king'
            loading='lazy'
          />
        </ImageListItem>
      </ImageList>
      <Typography className={styles.title} gutterBottom>
        Categories
      </Typography>
      <Link href='#' className={styles.link} variant='body2'>
        Sport
      </Link>
      <Link href='#' className={styles.link} variant='body2'>
        Food
      </Link>
      <Link href='#' className={styles.link} variant='body2'>
        Music
      </Link>
      <Divider flexItem style={{ marginBottom: 5 }} />
      <Link href='#' className={styles.link} variant='body2'>
        Life
      </Link>

      <Link href='#' className={styles.link} variant='body2'>
        Movies
      </Link>
      <Link href='#' className={styles.link} variant='body2'>
        Science
      </Link>
    </Container>
  );
};

export default Rightbar;
