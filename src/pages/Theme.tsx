import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1)
    },
    input: {
      display: 'none'
    },
    fab: {
      margin: theme.spacing(1)
    },
    extendedIcon: {
      marginRight: theme.spacing(1)
    }
  })
);

function ThemePage(props) {
  const classes = useStyles(props);

  return (
    <div className="theme">
      <Link to="/">Home</Link> |&nbsp;
      <Link to="/theme">Theme</Link> |&nbsp;
      <Link to="/about">About</Link>
      <hr />
      <Button variant="contained" type="button" color="primary">
        Hello, World
      </Button>
      <hr />
      <Button variant="contained" className={classes.button}>
        Default
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button
        variant="contained"
        color="secondary"
        disabled
        className={classes.button}
      >
        Disabled
      </Button>
      <Button
        variant="contained"
        href="#contained-buttons"
        className={classes.button}
      >
        Link
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
      </label>
      <hr />
      <Button className={classes.button}>Default</Button>
      <Button color="primary" className={classes.button}>
        Primary
      </Button>
      <Button color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button disabled className={classes.button}>
        Disabled
      </Button>
      <Button href="#text-buttons" className={classes.button}>
        Link
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="text-button-file"
        multiple
        type="file"
      />
      <label htmlFor="text-button-file">
        <Button component="span" className={classes.button}>
          Upload
        </Button>
      </label>
      <hr />
      <Button variant="outlined" className={classes.button}>
        Default
      </Button>
      <Button variant="outlined" color="primary" className={classes.button}>
        Primary
      </Button>
      <Button variant="outlined" color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button variant="outlined" disabled className={classes.button}>
        Disabled
      </Button>
      <Button
        variant="outlined"
        href="#outlined-buttons"
        className={classes.button}
      >
        Link
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="outlined-button-file"
        multiple
        type="file"
      />
      <label htmlFor="outlined-button-file">
        <Button variant="outlined" component="span" className={classes.button}>
          Upload
        </Button>
      </label>
      <Button variant="outlined" color="inherit" className={classes.button}>
        Inherit
      </Button>
      <hr />
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit" className={classes.fab}>
        <EditIcon />
      </Fab>
      <Fab variant="extended" aria-label="delete" className={classes.fab}>
        <NavigationIcon className={classes.extendedIcon} />
        Extended
      </Fab>
      <Fab disabled aria-label="delete" className={classes.fab}>
        <DeleteIcon />
      </Fab>
    </div>
  );
}

export default ThemePage;
