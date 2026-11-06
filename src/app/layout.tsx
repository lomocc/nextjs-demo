import Link from 'next/link';
import { ReactNode } from 'react';

export default function Page({ children }: { children?: ReactNode }) {
  return (
    <div>
      <h1>Home</h1>
      <br />
      <Link href="/success">Success</Link>
      <br />
      <br />
      <br />
      <Link href="/error">Error</Link>
      <br />
      <br />
      <br />
      <Link href="/error-fixed">Error Fixed</Link>
      <main>{children}</main>
    </div>
  );
}
