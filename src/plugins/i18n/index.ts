import { createI18n } from 'vue-i18n'

const datetimeFormats = {
  'en': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    },
    long: {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true
    }
  },
  'sk': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    },
    long: {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false
    }
  }
}

export const i18nOptions = {
  locale: 'sk',
  fallbackLocale: 'en',
  datetimeFormats,
}

const i18n = createI18n(i18nOptions);

export default i18n