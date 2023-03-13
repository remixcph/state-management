import { Form, useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";

import { Button, Navigation, Page, SubTitle, Title } from "~/components";
import { getUserById, updateTheme } from "~/models/user.server";
import { requireUserId } from "~/session.server";

export async function loader({ request }: LoaderArgs) {
  const userId = await requireUserId(request);

  const user = await getUserById(userId);
  if (!user) throw new Error("User not found");

  return json({ theme: user.theme });
}

export async function action({ request }: LoaderArgs) {
  const userId = await requireUserId(request);

  const user = await getUserById(userId);
  if (!user) throw new Error("User not found");

  const newTheme = user.theme === "dark" ? "light" : "dark";
  await updateTheme({ userId, theme: newTheme });

  return json({});
}

export default function Server() {
  const { theme } = useLoaderData();

  return (
    <Page dark={theme === "dark"}>
      <Title>Server 💿</Title>

      <SubTitle>database</SubTitle>

      <Form method="post">
        <Button type="submit">Toggle theme</Button>
      </Form>

      <Navigation back="/session" forward="/thanks" />
    </Page>
  );
}
