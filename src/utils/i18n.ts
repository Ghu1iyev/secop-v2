// utils/useTranslation.ts
import az from "../locale/az.json";
import en from "../locale/en.json";
import { useLanguage } from "@/context/LanguageProvider";

const translations = {
  az,
  en,
};

type NestedKeyOf<ObjectType extends object> =
  { [Key in keyof ObjectType & string]: ObjectType[Key] extends object
      ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
      : `${Key}`
  }[keyof ObjectType & string];

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: NestedKeyOf<typeof az>): string => {
    const keys = key.split(".");
    let value: Record<string, unknown> | unknown = translations[language];

    for (const k of keys) {
      if (typeof value === "object" && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  return { t };
};
