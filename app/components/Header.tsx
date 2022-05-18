import { Link } from "@remix-run/react";
import type { VFC } from "react";
import { memo } from "react";

// ここまで
//
//
//
// ここから

const items = [
  { slug: "contact", value: "お問い合わせ" },
  { slug: "about", value: "当サイトについて" },
];

// ここまで
//
//
//
// ここから

export const Header: VFC = memo(() => {
  return (
    <header>
      <div className="mx-auto max-w-[1040px] px-[4%] md:px-5">
        <h1 className="py-5 text-center md:text-left">
          <Link to={"/"}>
            <img
              src="/images/logo.svg"
              alt="巨乳エロ無料動画 ピクルス"
              className="mx-auto inline-block h-full md:mx-0"
            />
          </Link>
        </h1>
      </div>
      <div className="bg-main-300">
        <ul className="mx-auto flex  max-w-[1040px] justify-center gap-5 py-2 px-5 md:justify-start">
          {items.map((item) => (
            <li key={item.slug}>
              <Link className="text-white" to={item.slug}>
                {item.value}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
});
Header.displayName = "Header";
