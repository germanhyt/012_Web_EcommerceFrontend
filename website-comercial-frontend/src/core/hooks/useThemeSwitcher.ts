import { useEffect, useState, SetStateAction, Dispatch } from "react";

type ThemeSetter = Dispatch<SetStateAction<string>>;

type ThemeSwitcher = {
  activeTheme: string;
  setTheme: ThemeSetter;
};

const useThemeSwitcher = (): ThemeSwitcher => {
  const [theme, setTheme] = useState<string>(localStorage.theme || 'light'); // Asegúrate de proporcionar un valor por defecto si no hay tema en localStorage
  const activeTheme: string = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(activeTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [activeTheme, theme]);

  const setThemeHandler = (value: SetStateAction<string>) => {
    if (typeof value === 'string') {
      setTheme(value);
    } else {
      setTheme(value);
    }
  };

  return { activeTheme, setTheme: setThemeHandler };
};

export default useThemeSwitcher;
