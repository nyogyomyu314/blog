import type { VFC } from "react";
import { memo } from "react";

// ここまで
//
//
//
// ここから

export const Footer: VFC = memo(() => {
  const date = new Date();

  return (
    <>
      <script
        id="uh2lww51htl5"
        type="text/javascript"
        src="https://img.ad-nex.com/file/universal_tag/mh2lwucku45a/uh2lww51htl5.js"
      ></script>
      <footer>
        <p className="pb-5 text-center text-xs">
          &copy;{date.getFullYear()} 巨乳エロ無料動画
          ピクルス
        </p>
      </footer>
    </>
  );
});
Footer.displayName = "Footer";
