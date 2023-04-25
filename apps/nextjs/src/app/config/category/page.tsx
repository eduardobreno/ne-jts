import Link from "next/link";

async function fetchCategoryByType(): Promise<{ description: string }[]> {
  return [{ description: "123" }];
}

export default async function Page() {
  const items = await fetchCategoryByType();

  return (
    <article>
      <Link href={`/config/category/add`} role="button">
        Adicionar
      </Link>
      {items.map((item) => {
        return <p key={item.description}>{item.description}</p>;
      })}
    </article>
  );
}
