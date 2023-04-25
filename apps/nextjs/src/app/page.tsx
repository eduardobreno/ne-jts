import Link from "next/link";

export default function Page() {
  return (
    <article>
      <Link href="/config" role="button">
        Configuration
      </Link>
    </article>
  );
}
