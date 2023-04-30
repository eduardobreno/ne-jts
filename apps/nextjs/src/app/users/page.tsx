"use client";

import { useQuery } from "@apollo/client";
import Link from "next/link";
import { QUERY_ALL_USERS } from "../../query/users";

export default function Page() {
  const { data } = useQuery(QUERY_ALL_USERS, { fetchPolicy: "network-only" });

  return (
    <article>
      <Link href="/users/add" role="button">
        Add new user
      </Link>
      {data?.allUsers.map((item) => {
        return <p>{item.email}</p>;
      })}
    </article>
  );
}
