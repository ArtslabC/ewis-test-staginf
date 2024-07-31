/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { isValidEmail } from "../../schemas/isEmail";
import toast from "react-hot-toast";

gsap.registerPlugin(ScrollTrigger);

function ContactUsComCon() {
  const [formMessage, setFormMessage] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const sendMessage = async (e) => {
    setErrors({
      email: "",
      subject: "",
      message: "",
    });
    e.preventDefault();

    if (formMessage.email == "") {
      setErrors((prev) => ({
        ...prev,
        email: "Email cannot be empty",
      }));
    }
    if (formMessage.message == "") {
      setErrors((prev) => ({
        ...prev,
        message: "Message cannot be empty",
      }));
    }
    if (formMessage.subject == "") {
      setErrors((prev) => ({
        ...prev,
        subject: "Subject cannot be empty",
      }));
    }

    if (
      formMessage.email == "" ||
      formMessage.subject == "" ||
      formMessage.message == ""
    ) {
      return;
    }
    if (!isValidEmail(formMessage.email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Email is not valid",
      }));
      return;
    }
    console.log("reached");
    try {
      setIsSending(true);
      console.log(formMessage);
      const response = await fetch(
        "http://localhost:5000/api/contact/send-message",
        {
          method: "POST",
          body: JSON.stringify(formMessage),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        toast.success("Message sent successful");
        setFormMessage({
          email: "",
          subject: "",
          message: "",
        });
        setErrors({
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(`Something went wrong! try again later`);
      }
    } catch (error) {
      toast.error(`Something went wrong! try again later`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <div className="bg-contactbg section-padding  flex flex-col justify-center items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 justify-center items-start w-full gap-10 px-5">
          <div className="h-full w-full bg-white rounded-xl p-10 flex flex-col gap-5 items-start shadow-md">
            <h2 className="text-primary font-bold font-Poppins text-3xl leading-tight ">
              Get in touch
            </h2>
            <p className="mb-8  font-Rubik text-left text-gray-500  text-sm">
              We have a dedicated team ready to assist you with your inquiries,
              support needs, or any other requirements you may have. Feel free
              to get in touch with us for all your information technology
              solutions.
            </p>
            <div className="w-full flex flex-row items-center justify-start gap-5">
              <div className="min-w-16 min-h-16 flex flex-col items-center justify-center rounded-xl bg-primarygray ">
                <FaLocationArrow />
              </div>
              <div className="flex flex-col items-start justify-start gap-1">
                <p className="font-Poppins text-left text-primary  text-xl font-bold">
                  Head office
                </p>
                <p className="font-Poppins text-left text-gray-500  text-sm">
                  P.O.Box 325, 2nd Floor, Methodist Central Building, #252 Galle
                  Road, Colombo 03, Sri Lanka.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-start gap-5">
              <div className="w-16 h-16 flex flex-col items-center justify-center rounded-xl bg-primarygray ">
                <FaPhone />
              </div>
              <div className="flex flex-col items-start justify-start gap-1">
                <p className="font-Poppins text-left text-primary  text-xl font-bold">
                  Call us
                </p>
                <p className="font-Poppins text-left text-gray-500  text-sm">
                  +94 11 7 520 520
                  <br />
                  +94 11 2 447 303
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <div className="w-2/4 h-2/4">
                <img
                  src="/assets/contactus/second.jpg"
                  alt=""
                  className="scale-90"
                />
              </div>
            </div>
          </div>
          <div className="w-full bg-white rounded-xl p-10 h-full shadow-md">
            <div className=" w-full">
              <div className=" mx-auto max-w-screen-md w-full flex flex-col gap-5">
                <h2 className="text-primary font-bold font-Poppins text-3xl leading-tight ">
                  Reach out for solutions
                </h2>
                <form
                  onSubmit={sendMessage}
                  className="space-y-5  w-full h-full"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-Rubik text-gray-900 "
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                      placeholder="name@email.com"
                      required
                      value={formMessage.email}
                      onChange={(e) => {
                        setFormMessage((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }));
                      }}
                    />
                    <p className="text-sm text-red-600 h-5">{errors.email}</p>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-Rubik text-gray-900 "
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                      placeholder="Let us know how we can help you"
                      required
                      value={formMessage.subject}
                      onChange={(e) => {
                        setFormMessage((prev) => ({
                          ...prev,
                          subject: e.target.value,
                        }));
                      }}
                    />
                    <p className="text-sm text-red-600 h-5">{errors.subject}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-Rubik text-gray-900 "
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                      placeholder="Leave a comment..."
                      value={formMessage.message}
                      onChange={(e) => {
                        setFormMessage((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }));
                      }}
                    ></textarea>
                    <p className="text-sm text-red-600 h-5">{errors.message}</p>
                  </div>
                  {/* <button type="submit" className="bg-primary text-white py-3 px-6 font-Rubik text-base border-solid border-2 border-primary rounded-lg font-black flex flex-row items-center justify-center gap-5 hover:translate-y-2 hover:bg-black hover:border-black w-full">Send message</button> */}
                  {isSending ? (
                    <button
                      type="submit"
                      disabled={true}
                      className={`w-full group transition-transform  py-1 px-6 font-Rubik text-base border-solid border-2  rounded-lg font-black flex flex-row items-center justify-center gap-5 hover:translate-y-1 
                  bg-primary/50 text-white border-primary
             `}
                    >
                      Sending..
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg ">
                        <ChatBubbleOvalLeftEllipsisIcon
                          className={`h-6 w-6  transition-transform group-hover:translate-x-2 
                  text-white group-hover:text-white
                  
                 `}
                          aria-hidden="true"
                        />
                      </div>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className={`w-full group transition-transform  py-1 px-6 font-Rubik text-base border-solid border-2  rounded-lg font-black flex flex-row items-center justify-center gap-5 hover:translate-y-1 
                           bg-primary text-white border-primary hover:bg-black hover:border-black
                      `}
                    >
                      Send message
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg ">
                        <ChatBubbleOvalLeftEllipsisIcon
                          className={`h-6 w-6  transition-transform group-hover:translate-x-2 
               
                               text-white group-hover:text-white
                           
                          `}
                          aria-hidden="true"
                        />
                      </div>
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsComCon;
