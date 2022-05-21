import type { LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import type { VFC } from "react";
import { Layout } from "~/components/Layout";
import type { DmmsQuery } from "~/graphql/generated";
import { DmmsDocument } from "~/graphql/generated";
import { graphCMSResolver } from "~/graphql/resolver";

export const loader: LoaderFunction = async () => {
  const { data } = await graphCMSResolver(
    DmmsDocument.loc?.source.body,
  );
  const { dmms } = data;
  dmms.reverse();

  return { dmms };
};

const Dmms: VFC = () => {
  const { dmms } = useLoaderData() as DmmsQuery;

  return (
    <Layout>
      <div className="mx-auto mb-20 grid max-w-[1040px] grid-cols-1 gap-y-10 px-[4%] pt-10 text-sm sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:px-5 md:text-base">
        {dmms.map((dmm) => (
          <Link to={`/dmm/${dmm.movie}`} key={dmm.movie}>
            <div className="space-y-2">
              <div>
                <img
                  src={`https://pics.dmm.co.jp/digital/video/${dmm.movie}/${dmm.image}.jpg`}
                  alt={`${dmm.title}`}
                  className="h-[350px] w-full object-cover sm:h-[250px]"
                />
              </div>
              <h2>{dmm.title}</h2>
              <p>
                {dmm.createdAt
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
export default Dmms;
