import { useEffect, useState } from "react";

import { Button, Navigation, Page, SubTitle, Title } from "~/components";

export default function Storage() {
  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const storageTheme = window.localStorage.getItem("theme");

    storageTheme && setTheme(storageTheme);
  }, []);

  return (
    <Page dark={theme === "dark"}>
      <Title>Local storage 🗄️</Title>

      <SubTitle>window.localStorage</SubTitle>

      <Button onClick={handleToggleTheme}>Toggle theme</Button>

      <Navigation back="/url-params" forward="/session" />
    </Page>
  );
}
