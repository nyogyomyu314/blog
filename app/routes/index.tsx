import type { LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import type { VFC } from "react";
import { Layout } from "~/components/Layout";
import type { PostsQuery } from "~/graphql/generated";
import { PostsDocument } from "~/graphql/generated";
import { graphCMSResolver } from "~/graphql/resolver";

// ここまで
//
//
//
// ここから

export const loader: LoaderFunction = async () => {
  const { data } = await graphCMSResolver(
    PostsDocument.loc?.source.body,
  );
  const { posts } = data;
  posts.reverse();

  return { posts };
};

// ここまで
//
//
//
// ここから

const Index: VFC = () => {
  const { posts } = useLoaderData() as PostsQuery;

  return (
    <Layout>
      <div className="mx-auto mb-20 grid max-w-[1040px] grid-cols-1 gap-y-10 px-[4%] pt-10 text-sm sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:px-5 md:text-base">
        {posts.map((post) => (
          <Link to={`posts/${post.id}`} key={post.id}>
            <div className="space-y-2 hover:opacity-70">
              <div>
                <img
                  src={`${post.image}`}
                  alt={`${post.title}`}
                  className="h-[350px] w-full object-cover sm:h-[250px]"
                />
              </div>
              <h2 className="overflow-hidden text-ellipsis line-clamp-3 hover:line-clamp-none">
                {post.title}
              </h2>
              <p>
                {post.createdAt
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
      <div className="text-center">
        <Link to={`/dmmList`}>DMM無料動画紹介ページへ</Link>
      </div>
    </Layout>
  );
};
export default Index;
