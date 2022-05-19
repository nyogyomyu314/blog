import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import { useEffect } from "react";
import tailwind from "~/tailwind/tailwind.css";
import * as gtag from "~/utils/gtags.client";

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

export const loader: LoaderFunction = async () => {
  return json({
    gaTrackingId: GA_TRACKING_ID,
  });
};

export default function App() {
  const { gaTrackingId } = useLoaderData();
  const location = useLocation();

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }
  }, [location, gaTrackingId]);

  return (
    <html lang="ja">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {process.env.NODE_ENV === "development" ||
        !gaTrackingId ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        )}

        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
