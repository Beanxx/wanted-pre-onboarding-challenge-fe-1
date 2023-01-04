import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href="/auth">auth</Link>
        </li>
        <li>
          <Link href="/todo">todo</Link>
        </li>
      </ul>
    </>
  );
}
