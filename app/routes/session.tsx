import { Form, useLoaderData } from "@remix-run/react";
import type { ActionArgs, LoaderArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";

import { themeSession } from "~/theme.server";

import { Button, Navigation, Page, SubTitle, Title } from "~/components";

export async function loader({ request }: LoaderArgs) {
  const theme =
    (await themeSession.parse(request.headers.get("Cookie"))) ?? "light";

  const headers = new Headers();
  headers.append("Set-Cookie", await themeSession.serialize(theme));

  return json(
    {
      theme,
    },
    { headers }
  );
}

export async function action({ request }: ActionArgs) {
  const theme =
    (await themeSession.parse(request.headers.get("Cookie"))) ?? "light";

  const newTheme = theme === "light" ? "dark" : "light";

  const headers = new Headers();
  headers.append("Set-Cookie", await themeSession.serialize(newTheme));

  return json({}, { headers });
}

export default function Session() {
  const { theme } = useLoaderData<typeof loader>();

  return (
    <Page dark={theme === "dark"}>
      <Title>session 🍪</Title>

      <SubTitle>cookies</SubTitle>

      <Form method="post">
        <Button type="submit">Toggle theme</Button>
      </Form>

      <Navigation back="/url-params" forward="/server" />
    </Page>
  );
}
