import type { VFC } from "react";
import { memo } from "react";

// ここまで
//
//
//
// ここから

export const Footer: VFC = memo(() => {
  const date = new Date();
  console.log(date);

  return (
    <footer>
      <p className="pb-5 text-center text-xs">
        &copy;{date.getFullYear()} 巨乳エロ無料動画 ピクルス
      </p>
    </footer>
  );
});
Footer.displayName = "Footer";
