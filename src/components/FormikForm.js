import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import {
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
  Row,
  Col,
  Button,
} from "reactstrap";

const phoneRegExp = /^5(0[5-7]|[3-5]\d)\d{7}$/gm;

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("Firstname is a required field").min(2),
  lastname: Yup.string().required("Lastname is a required field").min(2),
  phonenumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone Number is a required field"),
  email: Yup.string().required("Email is a required field").email(),
  url: Yup.string().required("Url is a required field").url(),
  company: Yup.string().required("Company is a required field").min(3),
});

const MyCheckBox = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div>
      <Input type="checkbox" {...field} {...props} />
      <Label>{label}</Label>
    </div>
  );
};

const MyTextInput = ({ label, example, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input
        {...field}
        {...props}
        invalid={meta.error}
        valid={meta.error ? false : field.value}
      />
      <FormFeedback
        invalid={meta.error}
        valid={meta.error ? false : field.value}
      >
        {meta.error}
      </FormFeedback>
      {example ? <FormText>{example}</FormText> : null}
    </FormGroup>
  );
};

const MyRadioButton = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <FormGroup check>
      <Label check>
        <Input type="radio" {...field} {...props} /> {label}
      </Label>
    </FormGroup>
  );
};

const FormikForm = () => {
  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        phonenumber: "",
        email: "",
        url: "",
        company: "",
        contactpreference: "AM",
        IsSure: false,
        cookies: [],
      }}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        console.log(data);
        setTimeout(() => {
          console.log("sending form");
          setSubmitting(false);
          resetForm();
          alert("Form successfully submitted And Reseted Form");
        }, 3000);
      }}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        setFieldValue,
        resetForm,
        /* and other goodies */
      }) => (
        <Form>
          <h2>Contact Us</h2>
          <Row>
            <Col md="6">
              <MyTextInput
                name="firstname"
                type="text"
                label="First Name :"
                placeholder="Enter First Name"
              />
            </Col>
            <Col md="6">
              <MyTextInput
                name="lastname"
                type="text"
                label="Last Name :"
                placeholder="Enter Last Name"
              />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <MyTextInput
                name="company"
                type="text"
                label="Company :"
                placeholder="Enter Company"
              />
            </Col>
            <Col md="6">
              <MyTextInput
                name="phonenumber"
                type="text"
                label="Phone Number :"
                placeholder="Enter Phone Number"
                example="Example : XXX1232123"
              />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <MyTextInput
                name="email"
                type="email"
                label="Email Adress :"
                placeholder="Enter Email Adress"
              />
            </Col>
            <Col md="6">
              <MyTextInput
                name="url"
                type="url"
                label="Your Website :"
                placeholder="Enter Website"
                example="Example : https://..."
              />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Col md="12">
                <Label for="contactpreference">
                  When is the best time of day to reach you?
                </Label>
              </Col>
              <Col md="12">
                <MyRadioButton
                  name="contactpreference"
                  value="AM"
                  label="Morning"
                  checked={values.contactpreference === "AM"}
                />
              </Col>
              <Col md="12">
                <MyRadioButton
                  name="contactpreference"
                  value="PM"
                  label="Evening"
                  checked={values.contactpreference === "PM"}
                />
              </Col>
            </Col>
            <Col md="6">
              Cookies you love?
              <hr />
              <Row>
                <Col>
                  <MyCheckBox
                    name="cookies"
                    value="chocolate"
                    label="Chocolate"
                    checked={values.cookies.includes("chocolate")}
                  />
                </Col>
                <Col>
                  <MyCheckBox
                    name="cookies"
                    value="strawberry"
                    label="Strawberry"
                    checked={values.cookies.includes("strawberry")}
                  />
                </Col>
                <Col>
                  <MyCheckBox
                    name="cookies"
                    value="sugar"
                    label="Sugar"
                    checked={values.cookies.includes("sugar")}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Col>
            <label for="newsletter">
              Would you like to recieve our email newsletter?
            </label>
            <MyCheckBox name="IsSure" label={"IsSure ?"} />
          </Col>
          <Button color="success" disabled={isSubmitting} type="submit">
            Submit
          </Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
