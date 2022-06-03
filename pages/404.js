import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>That page cannot be found :</h2>
      <p>
        Going back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
        is 5 seconds...
      </p>
    </div>
  );
};

export default NotFound;
