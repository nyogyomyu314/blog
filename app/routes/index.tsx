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
      <div className="mb-20 grid grid-cols-1 gap-y-10 pt-10 text-sm sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:text-base">
        {posts.reverse().map((post) => (
          <Link to={`/post/${post.movie}`} key={post.movie}>
            <div className="space-y-2">
              <div>
                <img
                  src={`https://pics.dmm.co.jp/digital/video/${post.movie}/${post.image}.jpg`}
                  alt={`${post.title}`}
                  className="h-[350px] w-full object-cover sm:h-[250px]"
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
