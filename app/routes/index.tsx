import { Link } from "@remix-run/react";
import type { VFC } from "react";
import { Layout } from "~/components/Layout";

const Index: VFC = () => {
  return (
    <Layout>
      <div>home</div>
      <div>
        <Link to={`/dmmList`}>DMM無料動画紹介ページへ</Link>
      </div>
    </Layout>
  );
};
export default Index;
