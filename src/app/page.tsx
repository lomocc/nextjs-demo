import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <br />
      <Link href="/success">Success</Link>
      <br />
      <br />
      <br />
      <Link href="/error">Error</Link>
    </div>
  );
}
