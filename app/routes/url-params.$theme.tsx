import { Link, useParams } from "@remix-run/react";

import { Button, Navigation, Page, SubTitle, Title } from "~/components";

export default function UrlParams() {
  const { theme } = useParams();

  return (
    <Page dark={theme === "dark"}>
      <Title>url params</Title>

      <SubTitle>dynamic segments</SubTitle>

      <Link to={`/url-params/${theme === "dark" ? "light" : "dark"}`}>
        <Button>Toggle theme</Button>
      </Link>

      <Navigation back="/search-params" forward="/storage" />
    </Page>
  );
}
