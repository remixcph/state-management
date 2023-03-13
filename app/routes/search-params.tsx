import { Form, useSearchParams } from "@remix-run/react";

import {
  Button,
  Navigation,
  Page,
  SubSubTitle,
  SubTitle,
  Title,
} from "~/components";

export default function SearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const theme = searchParams.get("theme") || "light";

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setSearchParams({ theme: newTheme });
  };

  return (
    <Page dark={theme === "dark"}>
      <Title>Search params 🔎</Title>

      <SubTitle>Remix.useSearchParams</SubTitle>

      <Button onClick={handleToggleTheme}>Toggle theme</Button>

      <Form method="get" className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <SubSubTitle>
            <label htmlFor="dark">Dark</label>
          </SubSubTitle>
          <input
            type="radio"
            id="dark"
            name="theme"
            value="dark"
            defaultChecked={theme === "dark"}
          />
        </div>

        <div className="flex items-center gap-4">
          <SubSubTitle>
            <label htmlFor="light">Light</label>
          </SubSubTitle>
          <input
            type="radio"
            id="light"
            name="theme"
            value="light"
            defaultChecked={theme === "light"}
          />
        </div>

        <Button type="submit">Update</Button>
      </Form>

      <Navigation back="/local-state" forward="/url-params" />
    </Page>
  );
}

// http://localhost:3000/search-params?theme=dark
