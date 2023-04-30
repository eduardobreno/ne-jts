"use client";

import { useQuery } from "@apollo/client";
import Link from "next/link";
import { GetAllUsersDocument, GetAllUsersQuery } from "../../graphql/users.generated";

export default function Page() {
  const { data } = useQuery<GetAllUsersQuery>(GetAllUsersDocument, {
    fetchPolicy: "network-only",
  });

  return (
    <article>
      <Link href="/users/add" role="button">
        Add new user
      </Link>
      {data?.allUsers &&
        data.allUsers.map((item) => {
          return <p key={item.name}>{item.email}</p>;
        })}
    </article>
  );
}
