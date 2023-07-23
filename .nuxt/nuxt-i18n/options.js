import locale9ec66352 from '../..\\locales\\en.json'
import locale6202a943 from '../..\\locales\\ro.json'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [{"code":"en","iso":"en-US","file":"en.json"},{"code":"ro","iso":"ro-RO","file":"ro.json"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: "locales",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieAge":365,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  fallbackLocale: "en",
  normalizedLocales: [{"code":"en","iso":"en-US","file":"en.json"},{"code":"ro","iso":"ro-RO","file":"ro.json"}],
  localeCodes: ["en","ro"],
  additionalMessages: [],
}
export const localeFiles = {
  0: "{",
  1: "\"",
  2: "e",
  3: "n",
  4: ".",
  5: "j",
  6: "s",
  7: "o",
  8: "n",
  9: "\"",
  10: ":",
  11: "\"",
  12: ".",
  13: ".",
  14: "\\",
  15: "\\",
  16: "\\",
  17: "\\",
  18: "l",
  19: "o",
  20: "c",
  21: "a",
  22: "l",
  23: "e",
  24: "s",
  25: "\\",
  26: "\\",
  27: "\\",
  28: "\\",
  29: "e",
  30: "n",
  31: ".",
  32: "j",
  33: "s",
  34: "o",
  35: "n",
  36: "\"",
  37: ",",
  38: "\"",
  39: "r",
  40: "o",
  41: ".",
  42: "j",
  43: "s",
  44: "o",
  45: "n",
  46: "\"",
  47: ":",
  48: "\"",
  49: ".",
  50: ".",
  51: "\\",
  52: "\\",
  53: "\\",
  54: "\\",
  55: "l",
  56: "o",
  57: "c",
  58: "a",
  59: "l",
  60: "e",
  61: "s",
  62: "\\",
  63: "\\",
  64: "\\",
  65: "\\",
  66: "r",
  67: "o",
  68: ".",
  69: "j",
  70: "s",
  71: "o",
  72: "n",
  73: "\"",
  74: "}",
}

export const localeMessages = {
  'en.json': () => Promise.resolve(locale9ec66352),
  'ro.json': () => Promise.resolve(locale6202a943),
}
