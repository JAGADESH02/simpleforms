import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import renderField from './renderField';

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;
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

const FormSecondPage = props => {
  const {classes} = props;
  const { handleSubmit, previousPage } = props;
  return (
    
    <>
    <Paper className={classes.paper}>
    <form onSubmit={handleSubmit}>
    <Field
        name="name"
        type="text"
        component={renderField}
        label="Name"
      />
      <br />
      <Field
        name="username"
        type="text"
        component={renderField}
        label="User Name"
      /><br />
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field
        name="mobileno"
        type="text"
        component={renderField}
        label="Mobile No"
      />
      <br />
      <Field
        name="website"
        type="text"
        component={renderField}
        label="WebSite"
      /><br />
      {/* <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />
            {' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />
            {' '}
            Female
          </label>
          <Field name="sex" component={renderError} />
        </div>
      </div> */}
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
    
</Paper>
    </>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(withStyles(styles)(FormSecondPage));
