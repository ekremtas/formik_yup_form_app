import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("Firstname is a required field"),
  lastname: Yup.string().required("Lastname is a required field"),
  phonenumber: Yup.number().required("Phonenumber is a required field"),
  email: Yup.string().required("Email is a required field"),
  url: Yup.string().required("Url is a required field"),
  company: Yup.string().required("Company is a required field"),
});

const FormikForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          phonenumber: "",
          email: "",
          url: "",
          company: "",
          contactpreference: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
            <div className="row">
              <div className="col-md-6">
                <FormGroup>
                  <Label for="first">First Name</Label>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Enter Firstname"
                    id="firstname"
                    name="firstname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstname}
                    invalid={errors.firstname}
                    valid={errors.firstname ? false : values.firstname}
                  />
                  {errors.firstname && (
                    <FormFeedback invalid>{errors.firstname}</FormFeedback>
                  )}
                </FormGroup>
              </div>
              <div className="col-md-6">
                <FormGroup>
                  <Label for="last">Last Name</Label>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Enter lastname"
                    id="lastname"
                    name="lastname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastname}
                    invalid={errors.lastname}
                    valid={errors.lastname ? false : values.lastname}
                  />
                  {errors.lastname && (
                    <FormFeedback invalid>{errors.lastname}</FormFeedback>
                  )}
                </FormGroup>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <FormGroup>
                  <Label for="company">Company</Label>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Enter Company"
                    id="company"
                    name="company"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.company}
                    invalid={errors.company}
                    valid={errors.company ? false : values.company}
                  />
                  {errors.company && (
                    <FormFeedback invalid>{errors.company}</FormFeedback>
                  )}
                </FormGroup>
              </div>
              <div className="col-md-6">
                <FormGroup>
                  <Label for="phone">Phone Number</Label>
                  <Input
                    type="number"
                    className="form-control"
                    id="phonenumber"
                    placeholder="Enter Phone"
                    name="phonenumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phonenumber}
                    invalid={errors.phonenumber}
                    valid={errors.phonenumber ? false : values.phonenumber}
                  />
                  {errors.phonenumber && (
                    <FormFeedback invalid>{errors.phonenumber}</FormFeedback>
                  )}
                </FormGroup>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <FormGroup>
                  <Label for="email">Email address</Label>
                  <Input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    invalid={errors.email}
                    valid={errors.email ? false : values.email}
                  />
                  {errors.email && (
                    <FormFeedback invalid>{errors.email}</FormFeedback>
                  )}
                </FormGroup>
              </div>

              <div className="col-md-6">
                <FormGroup>
                  <Label for="url">
                    Your Website <small>Please include http://</small>
                  </Label>
                  <Input
                    type="url"
                    className="form-control"
                    id="url"
                    placeholder="Enter Url"
                    name="url"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.url}
                    invalid={errors.url}
                    valid={errors.url ? false : values.url}
                  />
                  {errors.url && (
                    <FormFeedback invalid>{errors.url}</FormFeedback>
                  )}
                </FormGroup>
              </div>
            </div>
            <Label for="contactpreference">
              When is the best time of day to reach you?
            </Label>
            <div className="radio">
              <Label>
                <input
                  type="radio"
                  name="contactpreference"
                  id="contactpreference"
                  value="am"
                  checked={values.contactpreference === "am"}
                  onChange={() => setFieldValue("contactpreference", "am")}
                  invalid={errors.contactpreference}
                    valid={errors.contactpreference ? false : values.contactpreference}
                  />
                  {errors.contactpreference && (
                    <FormFeedback invalid>{errors.contactpreference}</FormFeedback>
                  )}

                Morning
              </Label>
            </div>
            <div>
              <Label>
                <input
                  type="radio"
                  name="contactpreference"
                  id="contactpreference"
                  value="pm"
                  checked={values.contactpreference === "pm"}
                  onChange={() => setFieldValue("contactpreference", "pm")}
                />
                Evening
              </Label>
            </div>
            {/* <div className="radio">
              <label>
                <input
                  type="radio"
                  name="contact-preference"
                  id="contact-preference"
                  value="am"
                  checked
                >
                  Morning/>
                </input>
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="contact-preference"
                  id="contact-preference"
                  value="pm"
                  checked
                >
                  Evening />
                </input>
              </label>
            </div> */}

            <label for="newsletter">
              Would you like to recieve our email newsletter?
            </label>
            <div className="checkbox">
              <label>
                <input type="checkbox" value="Sure!" id="newsletter" /> Sure!
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
