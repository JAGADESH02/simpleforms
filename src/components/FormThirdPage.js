import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
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

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

const renderColorSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a color...</option>
      {colors.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const FormThirdPage = props => {
    const { classes } = props;
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <>
    <Paper className={classes.paper}>
    <form onSubmit={handleSubmit}>
        
        
      <div>
        <label>Favorite Color</label>
        <Field name="favoriteColor" component={renderColorSelector} />
      </div>
      <br />
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
      <br />
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" placeholder="Notes" />
        </div>
      </div>
      <br />
      <div>
          
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
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
})(withStyles(styles)(FormThirdPage));
