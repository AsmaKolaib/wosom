import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as yup from "yup";

export const contactShema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required "),
});

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (values, helpers) => {
    console.log("Form Submitted", values, helpers);
    const serviceId =  "service_lfh96qj" || process.env.SERVICEID;
    const templateId = "template_12df4an" || process.env.TEMPLATEID;
    const publicKey = "3vIoS7k4JFo1WTPs4" || process.env.PUBLICKEY;

    const templateParam = {
      from_email: values.email,
      to_name: "wosom",
      message: values.message,
    };

    emailjs
      .send(serviceId, templateId, templateParam, publicKey)
      .then((response) => {
        setMessage("The email was sent successfully");
        helpers.resetForm();
      })
      .catch((error) => {
        setError("There was an error, try again");
      });
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        message: "",
      },
      validationSchema: contactShema,
      onSubmit,
    });
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white flex flex-col border rounded-2xl p-4 sm:p-6 lg:p-8"
    >
      <div className="grid gap-4">
        <div>
          <label for="email" className="font-main font-bold  ">
            Email 
          </label>
          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            name="email"
            id="email"
            autocomplete="email"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500  border-2  "
            placeholder="example@gmail.com"
          />
        </div>
        {errors.email && touched.email && (
          <p className=" ml-4 inline-block text-red-600">{errors.email}</p>
        )}
        <div>
          <label for="message" className="font-main font-bold">
            Message
          </label>
          <textarea
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            id="message"
            name="message"
            rows="12"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 hover:bg-opacity-5 border-2  "
            placeholder="Message"
          ></textarea>
        </div>
      </div>

      <div className="mt-4 grid">
        <button
          type="submit"
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-black text-white  hover:bg-opacity-90 "
        >
          Send
        </button>

        {message && (
          <p className="block text-xl mt-4 text-green-600">{message}</p>
        )}
        {error && <p className="block text-xl mt-4 text-red-600">{error}</p>}
      </div>
    </form>
  );
};

export default ContactForm;

