"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { en } from "@/locales/en";
import { fr } from "@/locales/fr";

export type Language = "en" | "fr";
export type Dictionary = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Dictionary;
}

const dictionaries: Record<Language, Dictionary> = {
  en,
  fr,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("neema_preferred_language") as Language | null;
    if (saved === "en" || saved === "fr") {
      setLanguageState(saved);
      document.documentElement.lang = saved;
    } else {
      // Check browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("fr")) {
        setLanguageState("fr");
        document.documentElement.lang = "fr";
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("neema_preferred_language", lang);
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "fr" : "en";
    setLanguage(nextLang);
  };

  const t = dictionaries[language] || en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Graceful fallback for components rendered outside provider
    return {
      language: "en" as Language,
      setLanguage: () => {},
      toggleLanguage: () => {},
      t: en,
    };
  }
  return context;
}
