import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import renderField from "./renderField";
import moment from "moment";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import Typography from "@material-ui/core/Typography";

const renderTypeSelector = ({ input, label }) => (
  <div>
    <div>
      <Typography style={{ marginTop: "-0.5em" }}>
        <label>{label}</label>
      </Typography>
    </div>
    <select {...input} style={{ width: "190px", height: "20px" }}>
      <option value="">Select </option>

      <option value="text">Text</option>
      <option value="number">Number</option>
      <option value="Select">Select</option>
    </select>
  </div>
);

const styles = (theme) => ({
  root: {
    maxWidth: "100%",
    background: "#c5c4c4",
  },
  title: {
    color: "white",
    textAlign: "left",
    fontWeight: "bold",
  },
  textField: {
    color: "black",
  },

  rootTextDialog: {
    "& .MuiTextField-root": {
      width: "50%",
    },
    "& .MuiInputLabel-animated": {
      color: "black",
    },

    "& .MuiInput-underline:before": {
      borderBottom: "1px solid grey",
    },
    "& .MuiInputLabel-formControl": {
      color: "black",
    },
    "& .MuiInput-root": {
      color: "black",
      background: "white",
    },
  },

  button: {
    background: "#1a2b69",
    color: "white",
  },

 
});

class EthicForm extends React.Component {
  date_string = moment().format("YYYY-MM-DD"); //date format yyyy-mm-dd
  constructor(props) {
    super(props);
    this.state = {
      installed_date: "",
      value: "",
    };
  }
  // radio button value change
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleChangeCreate = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleFromDate = (event, name) => {
    this.setState({ [name]: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
        <CardContent>
          <form className={classes.rootTextDialog}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3} sm={12}>
                <Field
                  name="id"
                  type="text"
                  component={renderField}
                  label="Ref.NO"
                />
              </Grid>
              <Grid item xs={12} md={3} sm={12}>
                <Field
                  name={"Select"}
                  type="text"
                  component={renderTypeSelector}
                  label={"Select"}
                />
              </Grid>
              <Grid item xs={12} md={3} sm={12}>
                <TextField
                  id="date"
                  label="Raised From"
                  type="date"
                  defaultValue=""
                  className={classes.rootTextDialog}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3} sm={12}>
                <TextField
                  id="date"
                  label="Raised To"
                  type="date"
                  defaultValue=""
                  className={classes.rootTextDialog}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3} sm={12}>
                <Field
                  name={"Select"}
                  type="text"
                  component={renderTypeSelector}
                  label={"Status"}
                />
              </Grid>
              <Grid item xs={12} md={3} sm={12}>
                <Field
                  name={"Select"}
                  type="text"
                  component={renderTypeSelector}
                  label={"Sub Status"}
                />
              </Grid>
              <Grid item xs={12} md={3} sm={12}>
                <Field
                  name={"Select"}
                  type="text"
                  component={renderTypeSelector}
                  label={"Geography"}
                />
              </Grid>
              <Grid item xs={12} md={3} sm={12}>
                <Field
                  name={"Select"}
                  type="text"
                  component={renderTypeSelector}
                  label={"Branch"}
                />
              </Grid>
              <Grid item xs={12} md={3} sm={12}>
                <Field
                  name={"Select"}
                  type="text"
                  component={renderTypeSelector}
                  label={"depute DC"}
                />
              </Grid>
            </Grid>
            <div style={{ textAlign: "center", marginTop: "2em" }}>
              <span style={{ marginLeft: "20px" }}>
                <Button
                  type="button"
                  variant="contained"
                  size="small"
                  className={classes.button}
                >
                  Submit
                </Button>
              </span>
              <span style={{ marginLeft: "10px" }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="small"
                  className={classes.button}
                >
                  Reset
                </Button>
              </span>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  }
}

EthicForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
EthicForm = reduxForm({
  form: "Configuration",
})(EthicForm);

export default withStyles(styles, { withTheme: true })(EthicForm);

