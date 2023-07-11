import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps<{
  now: string;
}> = async () => {
  const res = await fetch("http://localhost:3001/api/now");
  const now = await res.json();
  return { props: { now }, revalidate: 10 };
};

export default function Page({
  now,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <p>time: {now}</p>
    </>
  );
}
