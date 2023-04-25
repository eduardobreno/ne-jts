"use client";
import { useEffect } from "react";

import nunito from "../config/font";
interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="en" className={nunito.className}>
      <head>
        <title>ERROR</title>
      </head>
      <div>ERROR</div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Try again</button>
    </html>
  );
}
