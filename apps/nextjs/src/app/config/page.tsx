import Link from "next/link";

export default function Page() {
  // useEffect(() => {
  //   throw new Error("oie");
  // }, []);

  return (
    <article>
      <ul>
        <li>
          Categoria
          <ul>
            <li>
              <Link href="/config/category" role="button">
                Adicionar
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </article>
  );
}
