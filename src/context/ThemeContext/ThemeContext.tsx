import React, { useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type Theme = 'light' | 'dark';

type ContextProps = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const ThemeContext = React.createContext<Partial<ContextProps>>({
  theme: 'dark',
});

function ThemeContextProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
