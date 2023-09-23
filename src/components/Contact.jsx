import LinkArrow from "./LinkArrow";
import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [resultMes, setResultMes] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g2jjpy9",
        "template_km3xi5a",
        form.current,
        "bG-aJq8aVLIw05wsv"
      )
      .then(
        (result) => {
          console.log(result.text);
          setResultMes(
            "Thank you for submitting the form! We'll be in touch soon."
          );
        },
        (error) => {
          console.log(error.text);
          setResultMes(
            "Apologies! Form submission issue. Try again later or contact support."
          );
        }
      );
    setFormSubmitted(true);
  };
  return (
    <>
      <div className="max-w-sm px-4 mx-auto my-14">
        <h1 className="mb-8 text-4xl font-bold text-white ">Contact us</h1>
        {formSubmitted ? (
          <div className="absolute max-w-sm text-lg text-center text-white -translate-x-1/2 -translate-y-1/2 md:text-2xl top-1/2 left-1/2 font-inria">
            {resultMes}
          </div>
        ) : (
          <form ref={form} className="flex flex-col" onSubmit={sendEmail}>
            <label className="mb-1 text-base text-white">Your Name</label>
            <input
              className="w-full px-4 py-2 mb-4 text-lg text-white bg-transparent border border-white border-solid font-inter rounded-2xl"
              type="text"
              id="name"
              name="name"
              required
            />
            <label className="mb-1 text-base text-white">Your e-mail</label>
            <input
              className="w-full px-4 py-2 mb-4 text-lg text-white bg-transparent border border-white border-solid font-inter rounded-2xl"
              type="email"
              id="email"
              name="email"
              required
            />
            <label className="mb-1 text-base text-white">Subject</label>
            <input
              className="w-full px-4 py-2 mb-4 text-lg text-white bg-transparent border border-white border-solid font-inter rounded-2xl"
              type="text"
              id="subject"
              name="subject"
              required
            />
            <label className="mb-1 text-base text-white">Message</label>
            <textarea
              className="w-full h-48 px-4 py-2 mb-4 text-lg text-white bg-black border border-white border-solid font-inter rounded-2xl"
              name="message"
              required
            />
            <div className="flex items-center gap-4 px-4 py-2 mb-4 text-lg text-white uppercase bg-transparent border border-white border-solid w-fit font-inter rounded-2xl">
              <input type="submit" value="SEND" />
              <div className="w-4">
                <LinkArrow />
              </div>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
