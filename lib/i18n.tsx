'use client'

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { LANGUAGE_COOKIE_NAME, translations, type Language, type TranslationContent } from '@/lib/translations'

type LanguageContextValue = {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationContent
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

function syncLanguageCookie(language: Language) {
  document.cookie = `${LANGUAGE_COOKIE_NAME}=${language}; path=/; max-age=31536000; samesite=lax`
  document.documentElement.lang = language === 'id' ? 'id' : 'en'
}

export function LanguageProvider({
  children,
  initialLanguage = 'id',
}: {
  children: ReactNode
  initialLanguage?: Language
}) {
  const [language, setLanguage] = useState<Language>(initialLanguage)

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_COOKIE_NAME)

    if (savedLanguage === 'id' || savedLanguage === 'en') {
      setLanguage((current) => (savedLanguage === current ? current : savedLanguage))
      return
    }

    window.localStorage.setItem(LANGUAGE_COOKIE_NAME, initialLanguage)
    syncLanguageCookie(initialLanguage)
  }, [initialLanguage])

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_COOKIE_NAME, language)
    syncLanguageCookie(language)
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }

  return context
}
