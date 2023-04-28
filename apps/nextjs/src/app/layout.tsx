"use client";

import { ApolloProvider } from "@apollo/client";

import client from "../config/apolloClient";
import nunito from "../config/font";
import "../styles/theme.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nunito.className} data-theme="light">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  );
}
