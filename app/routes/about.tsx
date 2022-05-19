import { Link } from "@remix-run/react";
import type { VFC } from "react";
import { Layout } from "~/components/Layout";

// ここまで
//
//
//
// ここから

const items = [
  {
    title: "巨乳エロ無料動画 ピクルスとは？",
    text: "巨乳エロ無料動画 ピクルス（当サイト）では18歳未満の方の閲覧を固く禁じております。当サイトは無料視聴が可能である動画共有サイトにアップロードされているアダルト動画の中から巨乳に特化した動画を厳選して紹介し、巨乳マニアのユーザー様がストレスなくお好みの動画にたどり着けるようにと作成しました。",
    text2: "是非、ごゆっくりとお楽しみください。",
  },
  {
    title: "免責事項",
    text: "巨乳エロ無料動画 ピクルス（当サイト）では18歳未満の方の閲覧を固く禁じております。当サイトは無料視聴が可能である動画共有サイトにアップロードされているアダルト動画の中から巨乳に特化した動画を厳選して紹介し、巨乳マニアのユーザー様がストレスなくお好みの動画にたどり着けるようにと作成しました。",
    text2:
      "当サイトに転載している動画等の著作権は各権利所有者に帰属し、当サイト及びリンク先のサイトを利用したことにより発生したいかなる損害及びトラブルに関して管理人は一切の責任と義務を負いません。",
  },
  {
    title: "広告掲載について",
    text: "当ブログでは掲載する広告を随時受け付けております。",
    text2:
      "掲載する広告形態は特に限定しておらず、PC/スマートフォンともに受け付けておりますので、企業様はお気軽にフォームよりお問い合わせください。",
  },
];

// ここまで
//
//
//
// ここから

const About: VFC = () => {
  return (
    <Layout>
      <div className="mb-20 max-w-[600px] pt-10">
        {items.map((item, index) => (
          <div key={index} className="mb-16">
            <h2 className="mb-5 text-3xl">{item.title}</h2>
            <div className="space-y-5">
              <p>{item.text}</p>
              <p>{item.text2}</p>
            </div>
          </div>
        ))}
        <div>
          <Link to={`/contact`} className="text-main-300">
            お問合せはこちらから
          </Link>
        </div>
      </div>
    </Layout>
  );
};
export default About;
