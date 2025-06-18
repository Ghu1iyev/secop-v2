"use client";
import React from "react";
import { PostApi } from "@/lib/axios";
import { toast } from "react-toastify";
import { useForm } from "@mantine/form";
import { IMaskInput } from "react-imask";
import ContactInfo from "./contact-info";
import { useTranslation } from "@/utils/i18n";
import { Input, TextInput } from "@mantine/core";
import { IoMdArrowForward } from "react-icons/io";
import { useHeaders } from "@/hooks/useHeadersApi";
import Title from "@/components/shared/Title/Title";
import { useMutation } from "@tanstack/react-query";
import TitleAnimation from "@/components/title-animation";

interface ContactValues {
  name: string;
  phone: string;
  message: string;
  email: string;
}

const ContactUs = () => {
  const { t } = useTranslation();

  const { data } = useHeaders();
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
          ? t("contact.errors.email")
          : /^\S+@\S+$/.test(value)
          ? null
          : t("contact.errors.emailInvalid"),
      name: (value) => (value.trim() === "" ? t("contact.errors.name") : null),
      phone: (value) =>
        value.trim() === "" ? t("contact.errors.phone") : null,
      message: (value) =>
        value.trim() === "" ? t("contact.errors.message") : null,
    },
  });

  const mutation = useMutation({
    mutationKey: ["contact"],
    mutationFn: async (res: ContactValues) => {
      return await PostApi("/contact/", res);
    },
    onSuccess: () => {
      toast.success(t("contact.success"));
      form.reset();
    },
  });
  const handleSubmit = (values: ContactValues) => {
    mutation.mutate(values);
  };
  return (
    <main className="container">
      <div className="mt-20 lg:w-[990px]">
        <Title
          title={t("title.contact")}
          fontSize="text-[20px] md:text-[48px]"
          subtitle={data?.results?.[0]?.contact_title}
        />
        <p
          className="
      text-[#B0B0B0] text-[20px] font-monda leading-[35px] mt-[40px]"
        >
          {t("contact.title")}
        </p>
      </div>
      <form
        className="my-[80px] lg:w-[675px]"
        onSubmit={form.onSubmit(handleSubmit)}
      >
        <TextInput
          size="lg"
          description={t("contact.name")}
          placeholder={t("contact.namePlaceholder")}
          className="mb-[40px] form-input"
          key={form.key("name")}
          {...form.getInputProps("name")}
        />
        <TextInput
          size="lg"
          description={t("contact.email")}
          className="mb-[40px] form-input"
          placeholder={t("contact.emailPlaceholder")}
          key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <Input.Wrapper
          className="mb-[40px] contact-phone-input"
          description={t("contact.phone")}
          error={form.errors.phone}
        >
          <Input
            size="lg"
            component={IMaskInput}
            mask="+994 (55) 000-00-00"
            placeholder="+994"
            key={form.key("phone")}
            {...form.getInputProps("phone")}
          />
        </Input.Wrapper>
        <TextInput
          size="lg"
          className="mb-[40px] form-input"
          description={t("contact.message")}
          placeholder={t("contact.messagePlaceholder")}
          key={form.key("message")}
          {...form.getInputProps("message")}
        />
        <button className="mt-[50px] border-solid border border-[#fff] w-full rounded-[12px] text-center  justify-center flex gap-[16px] text-[20px] font-monda py-[12px] sm:py-[20px] items-center text-[#fff]">
          {t("contact.button")} <IoMdArrowForward />
        </button>
      </form>
      <TitleAnimation title={t("contact.ourContacts")} />
      <ContactInfo />
    </main>
  );
};

export default ContactUs;
