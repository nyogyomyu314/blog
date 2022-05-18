import type {
  LinksFunction,
  MetaFunction,
} from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import tailwind from "~/tailwind/tailwind.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwind },
    {
      rel: "icon",
      href: "/favicon.svg",
      type: "image/svg",
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "巨乳エロ無料動画 ピクルス",
  description:
    "視聴までの手順がわかりやすい無料巨乳エロ動画を日々たくさん更新しています。",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="ja">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
