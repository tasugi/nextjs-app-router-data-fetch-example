/**
 * 有効期限が異なる複数のキャッシュを持つページ
 */
export default async function Page() {
  const nowForceCache = await forceCache();
  const nowNoStore = await noStore();
  const nowRevalidate = await revalidate();
  return (
    <>
      <p>force-cache: {nowForceCache}</p>
      <p>no-store: {nowNoStore}</p>
      <p>revalidate: {nowRevalidate}</p>
    </>
  );
}

const forceCache = async () => {
  const res = await fetch("http://localhost:3001/api/now?key=1");
  const now = await res.json();
  return now;
}

const noStore = async () => {
  const res = await fetch("http://localhost:3001/api/now?key=2", { cache: "no-store" });
  const now = await res.json();
  return now;
}

const revalidate = async () => {
  const res = await fetch("http://localhost:3001/api/now?key=3", { next: { revalidate: 10 } });
  const now = await res.json();
  return now;
}
