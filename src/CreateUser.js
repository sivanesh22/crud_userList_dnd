import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { InputText } from "./formFeilds/InputText";

class CreateUser extends Component {
  constructor(props) {
    // console.log("constru");
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    // console.log("mount");
  };

  render() {
    // console.log("render");
    //name,gender(elect),email(valid),phone(10),city,pincode
    const { handleSubmit } = this.props;
    const renderField = ({
      input,
      label,
      type,
      meta: { touched, error, warning }
    }) => (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} />
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
      </div>
    );
    // const required = (value) =>
    //   value || typeof value === "number" ? undefined : "Required";
    // const maxLength = (max) => (value) =>
    //   value && value.length > max
    //     ? `Must be ${max} characters or less`
    //     : undefined;
    // const maxLength15 = maxLength(15);
    // const minLength = (min) => (value) =>
    //   value && value.length < min
    //     ? `Must be ${min} characters or more`
    //     : undefined;
    // const minLength2 = minLength(2);
    // const number = (value) =>
    //   value && isNaN(Number(value)) ? "Must be a number" : undefined;
    // const minValue = (min) => (value) =>
    //   value && value < min ? `Must be at least ${min}` : undefined;
    // const minValue13 = minValue(13);
    // const email = (value) =>
    //   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    //     ? "Invalid email address"
    //     : undefined;
    // const tooYoung = (value) =>
    //   value && value < 13
    //     ? "You do not meet the minimum age requirement!"
    //     : undefined;
    // const aol = (value) =>
    //   value && /.+@aol\.com/.test(value)
    //     ? "Really? You still use AOL for your email?"
    //     : undefined;
    // const alphaNumeric = (value) =>
    //   value && /[^a-zA-Z0-9 ]/i.test(value)
    //     ? "Only alphanumeric characters"
    //     : undefined;
    // const phoneNumber = (value) =>
    //   value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    //     ? "Invalid phone number, must be 10 digits"
    //     : undefined;

    return (
      <form onSubmit={handleSubmit}>
        <Field
          label="Country"
          name="country"
          component={InputText}
          type="text"
        />
        {/* <div>
          <label htmlFor="Name">Name</label>
          <Field
            name="name"
            placeholder={name}
            component={InputText}
            type="text"
          />
        </div> */}
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <Field
          name="phone"
          type="number"
          component={renderField}
          label="Phone number"
          // validate={[required, phoneNumber]}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = (state, props) => {
  // console.log(state.userListReducer.userList[0].name, "uuu");
  return {
    name: state.userListReducer.userList[0].name
  };
};

export default connect(mapStateToProps)(
  reduxForm({ form: "createUser", enableReinitialize: true })(CreateUser)
);
