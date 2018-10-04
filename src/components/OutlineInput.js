import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200
  },
  input: {
    color: "white"
  }
});

const OutlineInput = (props) => {
  const { classes, text, onChange, onKeyPress } = props;

  return (
    <div className={classes.root}>
      <TextField
        id="outlined-full-width"
        label="Enter Message"
        style={{ 
          margin: 8,
          flex: 1
        }}
        placeholder="Enter a message"
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          className: classes.input
        }}
        value={text}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}

OutlineInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlineInput);