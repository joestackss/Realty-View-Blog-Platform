import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#fff",
  "--my-black": "#1a1a1a",
  "--realty-brand": "#3A76DA",
  "--my-red": "#db4437",
  "--my-green": "#0f9d58",
  "--my-yellow": "#f4b400",
};

export const myTheme = buildLegacyTheme({
  // BASE THEME COLORS
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  //   // BRAND COLORS
  "--brand-primary": props["--realty-brand"],

  // DEFAULT BUTTON COLORS
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--realty-brand"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  //   STATE
  "--state-info-color": props["--realty-brand"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  //   NAVBAR
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--realty-brand"],
});
