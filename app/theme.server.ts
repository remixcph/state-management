import { createCookie } from "@remix-run/node";

export const themeSession = createCookie("theme", {
  path: "/",
  httpOnly: true,
  sameSite: "lax",
  secure: true,
  secrets: ["THEME_SECRET"],
});
