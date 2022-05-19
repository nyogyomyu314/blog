import { Link } from "@remix-run/react";
import type { VFC } from "react";
import { Layout } from "~/components/Layout";

// ここまで
//
//
//
// ここから

const CompletionScreen: VFC = () => {
  return (
    <Layout>
      <div className="flex h-[calc(100vh_-_152px)] flex-col justify-center space-y-10 pb-[36px] text-center md:h-[calc(100vh_-_145px)]">
        <h1 className="text-xl sm:text-2xl">
          お問い合わせ内容を送信しました
        </h1>
        <Link to={`/`} className="text-main-300">
          ホームへ戻る
        </Link>
      </div>
    </Layout>
  );
};
export default CompletionScreen;
