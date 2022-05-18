import type { LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import type { VFC } from "react";
import { Layout } from "~/components/Layout";
import type { PostsQuery } from "~/graphql/generated";
import { PostsDocument } from "~/graphql/generated";
import { graphCMSResolver } from "~/graphql/resolver";

export const loader: LoaderFunction = async () => {
  const { data } = await graphCMSResolver(
    PostsDocument.loc?.source.body,
  );
  const { posts } = data;

  return { posts };
};

const Index: VFC = () => {
  const { posts } = useLoaderData() as PostsQuery;

  return (
    <Layout>
      <h1 className="py-5">ホーム</h1>
      <div className="mb-20 grid grid-cols-2 gap-5 text-sm md:grid-cols-3 md:text-base">
        {posts.map((post) => (
          <Link to={`/post/${post.movie}`} key={post.movie}>
            <div className="space-y-2">
              <div>
                <img
                  src={`https://pics.dmm.co.jp/digital/video/${post.movie}/${post.image}.jpg`}
                  alt="商品画像"
                  className="w-full object-cover"
                />
              </div>
              <h2>{post.title}</h2>
              <p>
                {post.publishedAt
                  .slice(0, 10)
                  .replace(
                    /(.+)-(.+)-(.+)/g,
                    "$1年$2月$3日",
                  )}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};
export default Index;
