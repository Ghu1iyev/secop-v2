"use client";
import Title from "@/components/shared/Title/Title";
import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import ContactInfo from "./contact-info";
import TitleAnimation from "@/components/title-animation";

const ContactUs = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <main className="container">
      <div className="mt-20 lg:w-[990px]">
        <Title
          title="Contact Us"
          fontSize="text-[20px] sm:text-[48px]"
          subtitle="Drop us a message — we’ll get back shortly."
        />
      <p
        className="
      text-[#B0B0B0] text-[20px] font-monda leading-[35px] mt-[40px]"
      >
        Have a project in mind or need expert advice on cybersecurity? Fill out
        the form below and let us know how we can help. Our team will get back
        to you shortly with the information or support you need.
      </p>
      </div>
      <form
        className="my-[80px] lg:w-[675px]"
        onSubmit={form.onSubmit((values) => console.log(values))}
      >
        <TextInput
          size="lg"
          description="Your Name"
          placeholder="Fullname"
          className="mb-[40px] form-input"
          key={form.key("name")}
          {...form.getInputProps("name")}
        />
        <TextInput
          size="lg"
          description="Email address"
          className="mb-[40px] form-input"
          placeholder="example@gmail.com"
          key={form.key("name")}
          {...form.getInputProps("name")}
        />
        <TextInput
          size="lg"
          description="Your number"
          placeholder="+994"
          className="mb-[40px] form-input"
          key={form.key("name")}
          {...form.getInputProps("name")}
        />
        <TextInput
          size="lg"
          className="mb-[40px] form-input"
          description="Add your message"
          placeholder="Write here your message.."
          key={form.key("name")}
          {...form.getInputProps("name")}
        />
        <button className="mt-[50px] border border-[#fff] w-full rounded-[12px] text-center  justify-center flex gap-[16px] text-[20px] font-monda py-[12px] sm:py-[20px] items-center text-[#fff]">
          Send your message <IoMdArrowForward />
        </button>
      </form>
      <TitleAnimation title="OUR CONTACTS" />
      <ContactInfo />
    </main>
  );
};

export default ContactUs;
