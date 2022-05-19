import type { ActionFunction } from "@remix-run/cloudflare";
import { redirect } from "@remix-run/cloudflare";
import { Form, useTransition } from "@remix-run/react";
import type { VFC } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Breadcrumb } from "~/components/Breadcrumb";
import { Layout } from "~/components/Layout";

// ここまで
//
//
//
// ここから

export const action: ActionFunction = async ({
  request,
}) => {
  const formData = await request.formData();
  const value = Object.fromEntries(formData);
  const { name, email, message } = value;

  const data = {
    service_id: SERVICE_ID,
    template_id: TEMPLATE_ID,
    user_id: USER_ID,
    accessToken: ACCESS_TOKEN,
    template_params: {
      name,
      email,
      message,
    },
  };

  await fetch(
    "https://api.emailjs.com/api/v1.0/email/send",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  ).then(
    (result) => {
      console.log(result.statusText);
    },
    (error) => {
      console.log(error.statusText);
    },
  );

  return redirect("/completionScreen");
};

// ここまで
//
//
//
// ここから

const Contact: VFC = () => {
  const transition = useTransition();
  const busy = transition.submission;

  return (
    <Layout>
      {busy && (
        <div>
          <AiOutlineLoading3Quarters className="fixed inset-0 z-20 m-auto h-10 w-10 animate-spin text-slate-400" />
        </div>
      )}

      <Breadcrumb value="お問い合わせ" />
      <Form method="post" className="mx-auto mb-20 mt-10">
        <div className="mb-10 space-y-5 md:flex md:flex-row md:flex-wrap md:gap-x-3 md:gap-y-5 md:space-y-0">
          <input
            type="text"
            name="name"
            placeholder="名前"
            className="w-full border p-3 md:basis-[calc(50%_-_6px)]"
          />
          <input
            type="email"
            name="email"
            placeholder="メール *"
            required
            className="w-full border p-3 md:basis-[calc(50%_-_6px)]"
          />
          <textarea
            name="message"
            placeholder="お問い合わせ内容"
            className="row-span-2 h-40 w-full border p-3 md:basis-full"
          />
        </div>
        <button
          className="w-full border border-slate-800 py-5 transition-all hover:border-transparent
          hover:bg-main-300 hover:text-white md:w-40"
          type="submit"
        >
          送信
        </button>
      </Form>
    </Layout>
  );
};
export default Contact;
