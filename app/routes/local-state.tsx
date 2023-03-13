import { useState } from "react";

import { Button, Navigation, Page, SubTitle, Title } from "~/components";

export default function LocalState() {
  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
  };

  return (
    <Page dark={theme === "dark"}>
      <Title>Local state ⚛️</Title>

      <SubTitle>React.useState hook</SubTitle>

      <Button onClick={handleToggleTheme}>Toggle theme</Button>

      <Navigation back="/intro" forward="/search-params" />
    </Page>
  );
}
