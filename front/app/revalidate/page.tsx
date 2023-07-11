/**
 * Pages RouterのIncrementalStaticRegeneration(ISR)に相当する
 */
export default async function Page() {
  const res = await fetch("http://localhost:3001/api/now", { next: { revalidate: 10 } });
  const now = await res.json();
  return (
    <>
      <p>time: {now}</p>
    </>
  );
}
