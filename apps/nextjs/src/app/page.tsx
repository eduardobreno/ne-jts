import Link from "next/link";

export default function Page() {
  return (
    <article>
      <Link href="/users" role="button">
        Users
      </Link>
    </article>
  );
}
