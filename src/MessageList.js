import React, { Component } from "react";
import PropTypes from "prop-types";
import { Paper, Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    marginTop: "20px",
    padding: `0 ${theme.spacing.unit * 3}px`
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing.unit}px`,
    padding: theme.spacing.unit * 3
  },
  user: {
    fontSize: 12,
    paddingBottom: theme.spacing.unit / 2
  }
});

class MessageList extends Component {
  static defaultProps = {
    messages: []
  };

  static propTypes = {
    messages: PropTypes.array,
    classes: PropTypes.object.isRequired
  };

  render() {
    const { classes, messages } = this.props;

    return (
      <div className={classes.root}>
        {messages.map(mess => {
          return (
            <Grid
              key={mess.id}
              container
              direction="row"
              justify={mess.user === "me" ? "flex-end" : "flex-start"}
              alignItems="center"
            >
              <Paper className={classes.paper}>
                <Typography className={classes.user} color="secondary">
                  {mess.user}
                </Typography>

                <div>
                  <Typography color={mess.isPrivate ? "secondary" : "default"}>
                    {mess.text}
                  </Typography>
                </div>
              </Paper>
            </Grid>
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles)(MessageList);
