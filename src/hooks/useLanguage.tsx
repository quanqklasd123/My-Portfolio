import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";

export type Language = "en" | "vi";

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const LANGUAGE_SELECTED_STORAGE_KEY = "portfolio-language-selected";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const hasSelectedLanguage =
    window.localStorage.getItem(LANGUAGE_SELECTED_STORAGE_KEY) === "true";

  if (!hasSelectedLanguage) {
    return "en";
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (storedLanguage === "en" || storedLanguage === "vi") {
    return storedLanguage;
  }

  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(LANGUAGE_SELECTED_STORAGE_KEY, "true");
  };

  const toggleLanguage = () => {
    setLanguageState((current) => {
      const nextLanguage = current === "en" ? "vi" : "en";
      window.localStorage.setItem(LANGUAGE_SELECTED_STORAGE_KEY, "true");
      return nextLanguage;
    });
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
      document.title =
        language === "vi"
          ? "Trần Văn Quân | Website Developer"
          : "Tran Van Quan | Website Developer";
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
