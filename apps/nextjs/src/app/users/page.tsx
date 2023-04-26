import Link from "next/link";

export default function Page() {
  // useEffect(() => {
  //   throw new Error("oie");
  // }, []);

  return (
    <article>
      <Link href="/users/add" role="button">
        Add new user
      </Link>
    </article>
  );
}
