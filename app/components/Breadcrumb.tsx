import { Link } from "@remix-run/react";
import type { VFC } from "react";
import { memo } from "react";
import { IoIosArrowForward } from "react-icons/io";

// ここまで
//
//
//
// ここから

type PROPS = {
  value: string;
};

// ここまで
//
//
//
// ここから

export const Breadcrumb: VFC<PROPS> = memo(({ value }) => {
  return (
    <div className="flex items-center gap-1 pt-5">
      <div>
        <Link
          to={`/`}
          className="inline-block hover:underline"
        >
          ホーム
        </Link>
      </div>
      <IoIosArrowForward className="text-lg" />
      <p>{value}</p>
    </div>
  );
});
Breadcrumb.displayName = "Breadcrumb";
