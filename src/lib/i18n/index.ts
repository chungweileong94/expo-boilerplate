import "intl-pluralrules";

import * as Localization from "expo-localization";
import i18n, { type TOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import { type Translations, en } from "./locales/en";
import { ms } from "./locales/ms";
import { zh } from "./locales/zh";

const resources = { en, zh, ms };

const fallbackLocale = "en-US";

const systemLocales = Localization.getLocales();

function pickSupportedLocale() {
  return systemLocales.find((locale) => {
    const primaryTag = locale.languageTag.split("-")[0] ?? "en";
    return Object.keys(resources).includes(primaryTag);
  });
}

const locale = pickSupportedLocale();

/**
 * Initializes the i18n library
 */
export async function initI18n() {
  i18n.use(initReactI18next);

  await i18n.init({
    resources,
    lng: locale?.languageTag ?? fallbackLocale,
    fallbackLng: fallbackLocale,
    interpolation: {
      escapeValue: false,
    },
  });

  return i18n;
}

// via: https://stackoverflow.com/a/65333050
type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `${TKey}`,
    true
  >;
}[keyof TObj & (string | number)];

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `${TKey}`,
    false
  >;
}[keyof TObj & (string | number)];

type RecursiveKeyOfHandleValue<
  TValue,
  Text extends string,
  IsFirstLevel extends boolean,
  // biome-ignore lint/suspicious/noExplicitAny: We need it
> = TValue extends any[]
  ? Text
  : TValue extends object
    ? IsFirstLevel extends true
      ? Text | `${Text}:${RecursiveKeyOfInner<TValue>}`
      : Text | `${Text}.${RecursiveKeyOfInner<TValue>}`
    : Text;

type TransactionKeyPath = RecursiveKeyOf<Translations>;

/**
 * Translates text
 */
export function t(key: TransactionKeyPath, options?: TOptions): string {
  if (i18n.isInitialized) {
    return i18n.t(key, options);
  }
  return key;
}
