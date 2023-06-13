import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();
  const [path, setPath] = useState("");

  useEffect(() => {
    const path = router.asPath.replace("/", "");
    setPath(path);
  }, []);

  return (
    <>
      <Head>
        <title>{path} Not Found :) </title>
      </Head>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-2xl font-bold">
          I'm sorry, the page <span className="text-red-500">{path}</span> was
          not found.
        </p>
      </div>
    </>
  );
};
export default NotFound;
