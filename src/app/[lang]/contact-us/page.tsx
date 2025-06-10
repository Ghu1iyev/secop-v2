"use client";
import Title from "@/components/shared/Title/Title";
import { Input, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import ContactInfo from "./contact-info";
import TitleAnimation from "@/components/title-animation";
import { useMutation } from "@tanstack/react-query";
import { PostApi } from "@/lib/axios";
import { toast } from "react-toastify";
import { IMaskInput } from "react-imask";

interface ContactValues {
  name: string;
  phone: string;
  message: string;
  email: string;
}

const ContactUs = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },

    validate: {
      email: (value) =>
        value.trim() === ""
          ? "Email adresi boş ola bilməz"
          : /^\S+@\S+$/.test(value)
          ? null
          : "Email adresini düzgün daxil edin",
      name: (value) => (value.trim() === "" ? "Ad boş ola bilməz" : null),
      phone: (value) =>
        value.trim() === ""
          ? "Telefon nömrəsi boş ola bilməz"
          : !/^\+?[0-9]{7,15}$/.test(value)
          ? "Telefon nömrəsi düzgün daxil edilməyib"
          : null,
      message: (value) => (value.trim() === "" ? "Mesaj boş ola bilməz" : null),
    },
  });

  const mutation = useMutation({
    mutationKey: ["contact"],
    mutationFn: async (res: ContactValues) => {
      return await PostApi("/contact/", res);
    },
    onSuccess: () => {
      toast.success("Mesaj göndərildi");
    },
  });
  const handleSubmit = (values: ContactValues) => {
    mutation.mutate(values);
  };
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
          Have a project in mind or need expert advice on cybersecurity? Fill
          out the form below and let us know how we can help. Our team will get
          back to you shortly with the information or support you need.
        </p>
      </div>
      <form
        className="my-[80px] lg:w-[675px]"
        onSubmit={form.onSubmit(handleSubmit)}
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
          key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <Input.Wrapper
          className="mb-[40px] contact-phone-input"
          description="Your number"
          error={form.errors.phone}
        >
          <Input
            size="lg"
            component={IMaskInput}
            mask="+994 (55) 000-00-00"
            placeholder="Your phone"
            key={form.key("phone")}
            {...form.getInputProps("phone")}
          />
        </Input.Wrapper>
        <TextInput
          size="lg"
          className="mb-[40px] form-input"
          description="Add your message"
          placeholder="Write here your message.."
          key={form.key("message")}
          {...form.getInputProps("message")}
        />
        <button className="mt-[50px] border-solid border border-[#fff] w-full rounded-[12px] text-center  justify-center flex gap-[16px] text-[20px] font-monda py-[12px] sm:py-[20px] items-center text-[#fff]">
          Send your message <IoMdArrowForward />
        </button>
      </form>
      <TitleAnimation title="OUR CONTACTS" />
      <ContactInfo />
    </main>
  );
};

export default ContactUs;
