/**
 * Pages RouterのgetStaticPropsに相当する
 */
export default async function Page() {
  console.log("force-cache");
  const res = await fetch("http://localhost:3001/api/now");
  const now = await res.json();
  return (
    <>
      <p>time: {now}</p>
    </>
  );
}
