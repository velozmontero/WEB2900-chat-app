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
    flexBasis: 200,
  },
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
          flex: 1, 
          borderColor: '#FFF',
          color: '#FFF',
        }}
        placeholder="Enter a message"
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
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