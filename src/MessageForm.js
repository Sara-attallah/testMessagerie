import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const CURRENT_USER = "me";

const styles = theme => ({
  root: {
    position: "fixed",
    bottom: "0px",
    width: "100%"
  },
  form: {
    padding: "20px"
  }
});

class MessageForm extends Component {
  static defaultProps = {
    sendNewMessage: undefined
  };

  static propTypes = {
    sendNewMessage: PropTypes.func,
    classes: PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.state = {
      user: CURRENT_USER,
      text: "",
      isPrivate: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleCheckbox() {
    console.log(this.state.isPrivate);
    this.setState({
      isPrivate: !this.state.isPrivate
    });
    console.log(this.state.isPrivate);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.sendNewMessage(this.state);
    this.setState({
      text: "",
      isPrivate: false
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper>
              <form className={classes.form} onSubmit={this.handleSubmit}>
                <TextField
                  fullWidth
                  multiline
                  rowsMax="10"
                  name="new message"
                  onChange={this.handleChange}
                  value={this.state.text}
                  label="Nouveau message"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      value="isPrivate"
                      onChange={this.handleCheckbox}
                    />
                  }
                  label="Message Privé"
                />
                <Button type="submit" color="primary" variant="contained">
                  OK
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(MessageForm);
