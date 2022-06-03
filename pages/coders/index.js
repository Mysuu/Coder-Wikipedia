import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Coder.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { coders: data },
  };
};

const AllCoders = ({ coders }) => {
  return (
    <>
      <Head>
        <title>Coder Wikipedia | All Coders</title>
        <meta name="keywords" content="coders" />
      </Head>
      <div>
        <h1>All Coders</h1>
        {coders.map((coder) => (
          <Link href={"/coders/" + coder.id} key={coder.id}>
            <a className={styles.single}>
              <h3>{coder.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllCoders;
