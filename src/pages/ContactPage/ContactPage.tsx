import { useRef } from "react";
import { useForm } from "react-hook-form";
import Navigation from "../../components/Navigation/Navigation";
import "./ContactPage.css";

import emailjs from "@emailjs/browser";
import Footer from "../../components/Footer/Footer";

type FormData = {
  email: string;
  subject: string;
  message: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = () => {
    if (
      process.env.REACT_APP_SERVICE_ID === undefined ||
      process.env.REACT_APP_TEMPLATE_ID === undefined ||
      process.env.REACT_APP_USER_ID === undefined
    ) {
      throw Error("some of keys are undefined");
    }
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current as HTMLFormElement,
      process.env.REACT_APP_USER_ID
    );

    resetField("email");
    resetField("subject");
    resetField("message");
    resetField("firstName");
    resetField("lastName");
    resetField("phoneNumber");
  };

  return (
    <>
      <Navigation />
      <div className="contactUs">
        <div className="title">
          <h1>Get in Touch</h1>
        </div>
        <div className="box">
          <div className="contact form">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit(sendEmail)} ref={form}>
              <div className="formBox">
                <div className="row50">
                  <div className="inputBox">
                    <span>First Name</span>
                    <input
                      type="text"
                      placeholder="First Name"
                      {...register("firstName", {
                        required: {
                          value: true,
                          message:
                            "You must specify your First Name before moving forward",
                        },
                        pattern: {
                          value: /^[a-zA-Z]+$/,
                          message:
                            "That's not a valid First Name where I come from...",
                        },
                      })}
                    />
                    {errors.firstName && (
                      <p className="errorMessage">
                        {errors.firstName?.message}
                      </p>
                    )}
                  </div>
                  <div className="inputBox">
                    <span>Last Name</span>
                    <input
                      type="text"
                      placeholder="Last Name"
                      {...register("lastName", {
                        required: {
                          value: true,
                          message:
                            "You must specify your Last Name before moving forward",
                        },
                        pattern: {
                          value: /^[a-zA-Z]+$/,
                          message:
                            "That's not a valid Last Name where I come from...",
                        },
                      })}
                    />
                    {errors.lastName && (
                      <p className="errorMessage">{errors.lastName?.message}</p>
                    )}
                  </div>
                </div>

                <div className="row50">
                  <div className="inputBox">
                    <span>Email</span>
                    <input
                      type="text"
                      placeholder="Enter email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Please, enter your email",
                        },
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Please, enter valid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="errorMessage">{errors.email?.message}</p>
                    )}
                  </div>
                  <div className="inputBox">
                    <span>Subject</span>
                    <input
                      type="text"
                      placeholder="Enter your subject"
                      {...register("subject", {
                        required: {
                          value: true,
                          message:
                            "You must specify your subject before moving forward",
                        },
                        pattern: {
                          value: /^[a-zA-Z]+$/,
                          message: "That's not a valid subject",
                        },
                      })}
                    />
                    {errors.subject && (
                      <p className="errorMessage">{errors.subject?.message}</p>
                    )}
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <span>Message</span>
                    <textarea
                      placeholder="Write your message here..."
                      {...register("message", {
                        required: {
                          value: true,
                          message: "The message should not be empty",
                        },
                        maxLength: 280,
                      })}
                    ></textarea>
                    {errors.message && (
                      <p className="errorMessage">{errors.message?.message}</p>
                    )}
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <input type="submit" value="Send" disabled={!isValid} />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="contact info">
            <h2>Contact info</h2>
            <div className="infoBox">
              <div>
                <span>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png"
                    alt="location-icon"
                  />
                </span>
                <p>
                  Cracov <br /> POLAND
                </p>
              </div>
              <div>
                <span>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/646/646094.png"
                    alt="email-icon"
                  />
                </span>
                <a href="mailto:zzosdunk.gmail.com">zzosdunk@gmail.com</a>
              </div>
              <div>
                <span>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/159/159832.png"
                    alt="phone-icon"
                  />
                </span>
                <a href="tel:+48730527186">+48 730 527 186</a>
              </div>
              <ul className="sci">
                <li>
                  <a
                    href="https://www.linkedin.com/in/denys-zosym-498b39141/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                      alt="ld-icon"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/zzosdunk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/174/174848.png"
                      alt="fb-icon"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/zonikmus/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                      alt="ig-icon"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/zzosdunk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png"
                      alt="gh-icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81987.56453503725!2d19.934833868771268!3d50.046744577042666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644c0354e18d1%3A0xb46bb6b576478abf!2zS3Jha8Ozdw!5e0!3m2!1spl!2spl!4v1672189337142!5m2!1spl!2spl"
              title="location"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
