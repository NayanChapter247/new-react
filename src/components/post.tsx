import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 150,
    [theme.breakpoints.up('sm')]: {
      height: 250,
    },
    [theme.breakpoints.up('lg')]: {
      height: 350,
    },
  },
}));
type PostProps = {
  title: string;
  text: string;
};
const Post = ({ title, text }: PostProps) => {
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <CardActionArea>
        <CardMedia
          className={styles.media}
          image='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/AP22063286730322_1200x768.jpeg?iXkP0R6FO58n9uqcXot8inmrNtcCTng5&size=770:433'
          title='myPost'
        />
        <CardContent>
          <Typography gutterBottom variant='h5'>
            {title}
          </Typography>
          <Typography variant='body2'>{text}</Typography>
        </CardContent>
        <CardActions>
          <Button variant='outlined' color='primary' size='small'>
            Share
          </Button>
          <Button variant='outlined' color='primary' size='small'>
            Learn More
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default Post;
