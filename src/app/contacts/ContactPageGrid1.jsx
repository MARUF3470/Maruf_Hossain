"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsMailbox, BsTelephone } from "react-icons/bs";
import { PiMapPinLine } from "react-icons/pi";
import { motion } from "framer-motion";
import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
const ContactPageGrid1 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const handleEmailSubmit = (data) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        data,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then((res) => {
        if (res.status) {
          reset();
          toast.success("Message has been sent to the authority");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="grid lg:grid-cols-3 gap-3 my-20">
      <div className="mb-20 lg:mb-0">
        <h5
          data-aos="fade-up-right"
          data-aos-duration="1000"
          className="font-medium text-white uppercase"
        >
          Contact Info
        </h5>
        <div className="flex flex-col gap-16 mt-10">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="flex gap-6"
          >
            <a
              href="mailto:smmaruf25@gmail.com"
              className="bg-gradient-to-r from-base-300 to-base-200 p-5 rounded-lg"
            >
              <BsMailbox className="text-3xl text-white" />
            </a>
            <div>
              <h4 className="text-stone-700 text-sm font-medium">MAIL ME</h4>
              <p className="text-slate-200 text-sm font-medium">
                smmaruf25@gmail.com
              </p>
              <p className="text-slate-200 text-sm font-medium">
                maruf15-3470@diu.edu.bd
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="flex gap-4"
          >
            <div className="bg-gradient-to-r from-base-300 to-base-200 p-5 rounded-lg">
              <BsTelephone className="text-3xl text-white" />
            </div>
            <div>
              <h4 className="text-stone-700 text-sm font-medium">CONTACT US</h4>
              <p className="text-slate-200 text-sm font-medium">
                +88 01786580192
              </p>
              <p className="text-slate-200 text-sm font-medium">
                +88 01872129989
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="flex gap-6"
          >
            <div className="bg-gradient-to-r from-base-300 to-base-200 p-5 rounded-lg">
              <PiMapPinLine className="text-3xl text-white" />
            </div>
            <div>
              <h4 className="text-stone-700 text-sm font-medium">LOCATION</h4>
              <p className="text-slate-200 text-sm font-medium">
                Dhaka, Bangladesh
              </p>
              <p className="text-slate-200 text-sm font-medium">
                Gazipur, Tongi
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1
            data-aos="fade-up-right"
            data-aos-duration="1000"
            className="font-medium mb-4 mt-10"
          >
            SOCIAL INFO
          </h1>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="flex gap-3"
          >
            <motion.a
              href="https://www.linkedin.com/in/s-m-maruf-hossain/"
              whileTap={{ scale: 0.9 }}
              className="rounded-full text-4xl bg-gradient-to-r from-base-300 to-base-200 p-5 hover:bg-gradient-to-r hover:from-slate-300 hover:to-slate-500 hover:text-black duration-300 "
            >
              <SlSocialLinkedin />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/maruf_347534/"
              whileTap={{ scale: 0.9 }}
              className="rounded-full text-4xl bg-gradient-to-r from-base-300 to-base-200 p-5 hover:bg-gradient-to-r hover:from-slate-300 hover:to-slate-500 hover:text-black duration-300 "
            >
              <SlSocialInstagram />
            </motion.a>
            <motion.a
              href="https://twitter.com/Maruf_3470"
              whileTap={{ scale: 0.9 }}
              className="rounded-full text-4xl bg-gradient-to-r from-base-300 to-base-200 p-5 hover:bg-gradient-to-r hover:from-slate-300 hover:to-slate-500 hover:text-black duration-300 "
            >
              <FaXTwitter />
            </motion.a>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in-left"
        data-aos-duration="1000"
        className="col-span-2 bg-gradient-to-r from-base-300 to-base-200 p-10 rounded-3xl"
      >
        <h1 className="text-2xl lg:text-5xl text-white mb-10 ">
          {`Let's work `}
          <span className="text-blue-700">together.</span>
        </h1>
        <form
          onSubmit={handleSubmit(handleEmailSubmit)}
          className="flex flex-col gap-3"
        >
          <input
            type="text"
            placeholder="Name *"
            {...register("name", {
              required: "Please Provide Your Name",
            })}
            className="text-sm py-7 input w-full bg-gradient-to-r from-base-200 to-base-100"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          <input
            type="email"
            placeholder="Email *"
            {...register("email", {
              required: "Please Provide Your Email",
            })}
            className="text-sm py-7 input w-full bg-gradient-to-r from-base-200 to-base-100"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <input
            type="text"
            placeholder="Your Subject *"
            {...register("subject", {
              required: "Please Provide Your Subject",
            })}
            className="text-sm py-7 input w-full bg-gradient-to-r from-base-200 to-base-100"
          />
          {errors.subject && (
            <p className="text-red-500">{errors.subject.message}</p>
          )}
          <textarea
            className="text-sm py-7 textarea w-full h-40 bg-gradient-to-r from-base-200 to-base-100"
            placeholder="Your Message *"
            {...register("message", {
              required: "Please Provide Your Message",
            })}
          ></textarea>
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
          <input
            type="submit"
            className="w-full py-3 btn"
            value="Send Message"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactPageGrid1;
