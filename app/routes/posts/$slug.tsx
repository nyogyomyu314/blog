import type { LoaderFunction } from "@remix-run/cloudflare";
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
      id: params.slug,
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

const Post: VFC = () => {
  const { post } = useLoaderData() as PostQuery;

  console.log(post?.dmm);

  return (
    <Layout>
      <div className="mx-auto max-w-[600px] px-[4%] md:min-w-[600px] md:px-0">
        <Breadcrumb value="無料巨乳動画" />
        <div className="flex flex-wrap items-end gap-x-10 gap-y-3 py-5">
          <h2 className="text-2xl">{post?.title}</h2>
          <p className="w-full text-right">
            {post?.createdAt
              .slice(0, 10)
              .replace(/(.+)-(.+)-(.+)/g, "$1年$2月$3日")}
          </p>
        </div>
        <a
          href={`${post?.movie}?promo=38899`}
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            src={`${post?.image}`}
            alt={`${post?.title}`}
            className="mx-auto"
          />
        </a>
        <div className="mb-20 mt-10 space-y-5 md:space-y-10">
          <div className="space-y-2 text-center">
            {post?.dmm && (
              <a
                href={`${post?.dmm}`}
                className="inline-block w-full max-w-[400px] border-2 border-main-300 py-3 text-lg text-main-300"
                target={"_blank"}
                rel="noreferrer"
              >
                この動画を高画質フルで見る
              </a>
            )}
            {post?.mgs && (
              <a
                href={`${post?.mgs}`}
                className="inline-block w-full max-w-[400px] border-2 border-main-300 py-3 text-lg text-main-300"
                target={"_blank"}
                rel="noreferrer"
              >
                この動画を高画質フルで見る
              </a>
            )}
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
      </div>
    </Layout>
  );
};
export default Post;
