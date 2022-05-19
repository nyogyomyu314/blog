import type {
  LoaderFunction,
  MetaFunction,
} from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import type { VFC } from "react";
import { Breadcrumb } from "~/components/Breadcrumb";
import { Layout } from "~/components/Layout";
import type { PostQuery } from "~/graphql/generated";
import { PostDocument } from "~/graphql/generated";
import { graphCMSResolver } from "~/graphql/resolver";

// ここまで
//
//
//
// ここから

export const loader: LoaderFunction = async ({
  params,
}) => {
  const { data } = await graphCMSResolver(
    PostDocument.loc?.source.body,
    {
      movie: params.slug,
    },
  );
  const { post } = data;

  return { post };
};

// ここまで
//
//
//
// ここから

export const meta: MetaFunction = ({ data }) => {
  return {
    title: data.post?.title,
    description: data.post?.description,
  };
};

// ここまで
//
//
//
// ここから

const Post: VFC = () => {
  const { post } = useLoaderData() as PostQuery;

  return (
    <Layout>
      <Breadcrumb value="FANZA 無料動画" />
      <div className="flex max-w-[600px] flex-wrap items-end gap-x-10 gap-y-3 py-5 md:min-w-[600px]">
        <h2 className="text-2xl">{post?.title}</h2>
        <p className="w-full text-right">
          {post?.publishedAt
            .slice(0, 10)
            .replace(/(.+)-(.+)-(.+)/g, "$1年$2月$3日")}
        </p>
      </div>
      <div className="relative w-full pt-[75%]">
        <iframe
          title="movie"
          src={`https://www.dmm.co.jp/litevideo/-/part/=/cid=${post?.movie}/size=600_500/`}
          scrolling="no"
          frameBorder={0}
          allowFullScreen
          className="absolute top-0 left-0 h-full w-full"
        ></iframe>
      </div>
      <p className="pt-5 pb-10">{post?.description}</p>
      <div className="mb-20 space-y-5 md:space-y-10">
        <div className="text-center">
          <a
            href={`https://www.dmm.co.jp/digital/videoa/-/detail/=/cid=${post?.movie}/`}
            className="inline-block w-full max-w-[400px] border-2 border-main-300 px-5 py-3 text-lg text-main-300"
          >
            この動画をフルで見る
          </a>
        </div>
        <div className="text-center">
          <a
            href="https://movie.eroterest.net/?word=%E5%B7%A8%E4%B9%B3"
            className="inline-block w-full max-w-[400px] border-2 border-main-300 px-5 py-3 text-lg text-main-300"
          >
            その他の巨乳動画を探す
          </a>
        </div>
      </div>
    </Layout>
  );
};
export default Post;
