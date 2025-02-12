import { Formik, Field, Form, ErrorMessage } from "formik";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});
console.log(FeedbackSchema);

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    const newContact = {
      name: values.name,
      number: values.number,
      id: nanoid(),
    };
    actions.resetForm();
    console.log(values);

    onAddContact(newContact);
  };

  return (
    <div className={s.div}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.formWrapper}>
          <label className={s.label} htmlFor="name">
            Name
          </label>
          <Field type="text" className={s.input} name="name" />
          <ErrorMessage name="name" component="span" className={s.error} />
          <label className={s.label} htmlFor="number">
            Number
          </label>
          <Field type="text" className={s.input} name="number" />
          <ErrorMessage name="number" component="span" className={s.error} />
          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
