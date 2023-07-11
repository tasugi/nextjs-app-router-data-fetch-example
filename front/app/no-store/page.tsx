/**
 * Pages RouterのgetServerSidePropsに相当する
 */
export default async function Page() {
  console.log("no-store");
  const res = await fetch("http://localhost:3001/api/now", { cache: "no-store" });
  const now = await res.json();
  return (
    <>
      <p>time: {now}</p>
    </>
  );
}
