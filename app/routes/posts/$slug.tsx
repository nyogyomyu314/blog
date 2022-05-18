import type { VFC } from "react";

const Post: VFC = () => {
  return (
    <>
      <div className="relative w-full pt-[75%]">
        <iframe
          title="movie"
          src={`https://www.dmm.co.jp/litevideo/-/part/=/cid=blank/size=1280_720/`}
          scrolling="no"
          frameBorder={0}
          allowFullScreen
          className="absolute top-0 left-0 h-full w-full max-w-[1000px]"
        ></iframe>
      </div>
    </>
  );
};
export default Post;
