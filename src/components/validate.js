const validate = values => {
    const errors = {};
    if (!values.id) {
      errors.id = 'id';
    }
    if (!values.userid) {
      errors.userid = "user id";
    }
    if (!values.title) {
      errors.title = "title";
    }
    if (!values.name) {
      errors.name = 'name';
    }
    if (!values.username) {
      errors.username = "user name";
    }
    if (!values.website) {
      errors.website = "web site";
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.sex) {
      errors.sex = 'Required';
    }
    if (!values.favoriteColor) {
      errors.favoriteColor = 'Required';
    }
    return errors;
  };
  
  export default validate;
  