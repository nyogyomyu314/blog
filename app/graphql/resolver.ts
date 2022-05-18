export const graphCMSResolver = async (
  schema: any,
  argument?: any,
) => {
  const { data }: { data: any } = await fetch(
    GRAPHCMS_ENDPOINT,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: schema,
        variables: argument,
      }),
    },
  ).then((res) => res.json());

  return { data };
};
