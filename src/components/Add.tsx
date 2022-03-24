import {
  Button,
  Container,
  FormControlLabel,
  FormLabel,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Typography,
} from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
// import { Alert } from '@material-ui/lab';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Fab, Tooltip } from '@material-ui/core';
import { AddOutlined } from '@material-ui/icons';
import React, { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { usePost } from '../context/posts';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: 20,
    right: 20,
  },
  container: {
    outline: 'none',
    maxWidth: '100vw',
    width: '100%',
    height: '100%',
    maxHeight: '100vh',
    background: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    overflow: 'auto',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 500,
      maxHeight: 550,
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
  },
  buttonContainer: {
    marginBottom: theme.spacing(3),
  },
}));
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});
type FormValues = {
  title: string;
  text: string;
};

const defaultValues = {
  title: '',
  text: '',
};
const schema = Yup.object().shape({
  title: Yup.string().required('Required'),
  text: Yup.string().required('Required'),
});
const Add = () => {
  const styles = useStyles();
  const { state, actions } = usePost();
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  // console.log('ref -> ', register);
  const [open, setOpen] = useState(false);
  const [snack, setSnack] = useState(false);
  const handleClose = () => {
    setSnack(false);
  };
  const addPost = (data: any) => {
    actions.addPost(data);
    setSnack(true);
    setOpen(false);
  };
  useCallback(() => {
    console.log('106 => ', state);
  }, [snack]);
  return (
    <>
      <Tooltip title='Add' aria-label='add' onClick={() => setOpen(true)}>
        <Fab color='primary' className={styles.fab}>
          <AddOutlined />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={styles.container}>
          <form
            className={styles.form}
            onSubmit={handleSubmit((data) => addPost(data))}
            autoComplete='off'
          >
            <Typography variant='h4' align='center' gutterBottom>
              Add your post
            </Typography>
            <div className={styles.item}>
              <FormLabel>Title</FormLabel>
              <TextField
                margin='dense'
                id='standard-basic'
                name='title'
                onChange={(event) => setValue('title', event.target.value)}
                variant='standard'
                size='small'
                style={{ width: '100%' }}
                helperText={errors.title?.message}
                error={!!errors.title?.message}
              />
            </div>
            <div className={styles.item}>
              <FormLabel>Description</FormLabel>
              <TextField
                id='outlined-multiline-static'
                multiline
                margin='dense'
                name='text'
                onChange={(event) => setValue('text', event.target.value)}
                rows={4}
                variant='outlined'
                size='small'
                style={{ width: '100%' }}
                helperText={errors.text?.message}
                error={!!errors.text?.message}
              />
            </div>
            <div className={styles.item}>
              <FormLabel>Visibility</FormLabel>
              <TextField
                select
                value={'public'}
                // onChange={handleChange}
              >
                <MenuItem key={1} value={'public'}>
                  public
                </MenuItem>
                <MenuItem key={2} value={'private'}>
                  private
                </MenuItem>
                <MenuItem key={3} value={'unlisted'}>
                  unlisted
                </MenuItem>
              </TextField>
            </div>
            <div className={styles.item}>
              <FormLabel id='demo-radio-buttons-group-label'>
                Who can comment?
              </FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value='Everyone'
                  control={<Radio size='small' />}
                  label='Everyone'
                />
                <FormControlLabel
                  value='Friends'
                  control={<Radio size='small' />}
                  label='Friends'
                />
                <FormControlLabel
                  value='Nobody'
                  control={<Radio size='small' />}
                  label='Nobody'
                />
                <FormControlLabel
                  value='custom'
                  disabled
                  control={<Radio size='small' />}
                  label='Custom (Premium)'
                />
              </RadioGroup>
            </div>
            <div className={styles.buttonContainer}>
              <Button
                variant='outlined'
                color='primary'
                type='submit'
                style={{ marginRight: 20 }}
              >
                Create
              </Button>
              <Button
                variant='outlined'
                color='secondary'
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={snack}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Alert
          severity='success'
          style={{ width: '100%' }}
          onClose={handleClose}
        >
          Your post is created!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
