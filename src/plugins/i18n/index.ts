const app = import.meta.env.VITE_APP_NAME || 'my-app'
const language = navigator.language ?? import.meta.env.VITE_LANGUAGE

const langKey = `${app}.language`

export const getLocale = () => {
  return localStorage.getItem(langKey)
}

export const setLocale = (value: string) => {
  localStorage.setItem(langKey, value)
}

const savedLanguage = getLocale()

const locale = savedLanguage ?? language

setLocale(locale)

export const i18nOptions = {
  locale,
}
