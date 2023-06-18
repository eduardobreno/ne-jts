"use client";

import { useEffect, useState } from "react";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { useParams, useRouter, useSearchParams } from "next/navigation";

import {
  AddUserDocument,
  AddUserMutationVariables,
  GetUserDocument,
  UpdateUserDocument,
  User,
} from "@app/graphql/generated/users";

export default function Page() {
  const router = useRouter();
  const { action } = useParams();
  const searchParams = useSearchParams();

  const isNewUser = action === "add";
  const isEditUser = action === "edit" && searchParams.get("id");

  const [actionUser] = useMutation(
    isNewUser ? AddUserDocument : UpdateUserDocument
  );

  const [getUser, { data }] = useLazyQuery(GetUserDocument, {
    fetchPolicy: "network-only",
  });

  const [form, setForm] = useState<User>({
    id: 0,
    name: "",
    email: "",
  });

  async function onSave(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    actionUser({
      variables: {
        ...form,
      },
    });

    router.replace("/users");
  }

  useEffect(() => {
    if (isEditUser) {
      getUser({ variables: { id: Number(searchParams.get("id")) } }).then(
        (res) => {
          if (res.data?.user) setForm(res.data?.user);
        }
      );
    }
  }, [isEditUser]);

  return (
    <article>
      <form onSubmit={onSave}>
        <div className="grid">
          <label>
            User
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={({ target: { value } }) =>
                setForm({ ...form, name: value })
              }
            />
          </label>
        </div>
        <div className="grid">
          <label>
            E-mail
            <input
              type="text"
              name="email"
              value={form.email}
              required
              disabled={!isNewUser}
              onChange={({ target: { value } }) =>
                setForm({ ...form, email: value })
              }
            />
          </label>
        </div>

        <button>Save</button>
      </form>
    </article>
  );
}
