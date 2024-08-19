"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import phoneIcon from "../assets/phone.png";
import mailIcon from "../assets/mail.png";

const Contact = () => {
  const [state, handleSubmit] = useForm("mwpebggz");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  const onSubmit = (e) => {
    e.preventDefault();

    // Check if any required field is empty
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      toast.error("Please fill out all fields before submitting.");
      return;
    }

    handleSubmit(e);
  };

  return (
    <div
      className="max-w-[1000px] mx-auto flex flex-col items-center justify-center lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-x-8"
      id="contact"
    >
      <div className="flex justify-center items-baseline">
        <ul className="space-y-4">
          <li className="flex justify-center items-center">
            <Image
              src={phoneIcon}
              alt="phone"
              className="h-[110px] w-auto mr-6"
            />
            <p className="text-xl">+212 66666666</p>
          </li>
          <li className="flex justify-center items-center">
            <Image
              src={mailIcon}
              alt="mail"
              className="h-[110px] w-auto mr-6"
            />
            <p className="text-xl">test@test.com</p>
          </li>
        </ul>
      </div>

      <div className="bg-white/10 p-6 rounded-xl max-w-[550px]">
        <h2 className="text-5xl font-bold text-orange-400 mb-4">
          Let&apos;s connect
        </h2>
        <p className="text-white/70 mb-6">
          Send me a message and let&apos;s schedule a call.
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="First Name"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Last Name"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <input
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Phone"
              type="tel"
              name="phone" // Add phone input name
              value={formData.phone} // Bind phone value to state
              onChange={handleInputChange}
            />
            <input
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <textarea
            className="bg-black/70 rounded-xl w-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Your Message"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
