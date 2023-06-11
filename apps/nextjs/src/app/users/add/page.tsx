"use client";

import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

import { AddUserDocument } from "@app/graphql/generated/users";

export default function Page() {
  const router = useRouter();

  const [addUser, { data, loading, error }] = useMutation(AddUserDocument);

  const [form, setForm] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });

  async function onSave(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    console.log("save");
    addUser({
      variables: {
        ...form,
      },
    });
    router.replace("/users");
  }

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
              required
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
