"use client";

import { useQuery } from "@apollo/client";
import Link from "next/link";

import { GetAllUsersDocument } from "@app/graphql/generated/users";

export default function Page() {
  const { data } = useQuery(GetAllUsersDocument, {
    fetchPolicy: "network-only",
  });

  return (
    <article>
      <Link href="/users/add" role="button">
        Add new user
      </Link>
      {data?.allUsers &&
        data.allUsers.map((item) => {
          return (
            <div key={item.id} className="grid highlight">
              <span>{item.name}</span>
              <span>{item.email}</span>
              <Link
                className="small"
                href={`/users/edit?id=${item.id}`}
                role="button"
              >
                edit
              </Link>
            </div>
          );
        })}
    </article>
  );
}
