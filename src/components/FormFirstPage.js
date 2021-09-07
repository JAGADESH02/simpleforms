import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
const styles = theme => ({
  root: {
    height: "100vh"
  },
  paper:{
      height:"500px",
      width:"500px",
      background:"wheat",
      padding:20,
      textAlign:"left"

  },
  label:{
    fontSize:"15px !important",
    padding:10,
   
  }
 
});

const FormFirstPage = props => {
  const { handleSubmit } = props;
  const {classes} = props;
  return (
    
    <Paper className={classes.paper}>
    <form onSubmit={handleSubmit}>
      <Field
        name="id"
        type="text"
        component={renderField}
        label="ID"
      />
      <br />
      <Field
        name="userid"
        type="text"
        component={renderField}
        label="User ID"
      /><br />
       <Field
        name="title"
        type="text"
        component={renderField}
        label="Title"
      /><br />
       <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" placeholder="Notes" />
        </div>
      <div>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
    </Paper>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(withStyles(styles)(FormFirstPage));
