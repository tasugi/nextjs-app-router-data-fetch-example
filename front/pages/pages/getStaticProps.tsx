import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps: GetStaticProps<{
  now: string;
}> = async () => {
  console.log("getStaticProps");
  const res = await fetch("http://localhost:3001/api/now");
  const now = await res.json();
  return { props: { now } };
};

export default function Page({
  now,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <p>time: {now}</p>
    </>
  );
}
