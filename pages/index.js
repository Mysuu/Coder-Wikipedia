import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coder Wikipedia | Home</title>
        <meta name="keywords" content="coders" />
      </Head>
      <div>
        <h1 className={styles.title}>Home pape</h1>
        <p className={styles.text}>Hello world</p>
        <p className={styles.text}>Nextjs</p>
      </div>
      <Link href="/coders">
        <a className="btn">See All Coders</a>
      </Link>
      <style jsx>
        {`
          .btn {
            display: block;
            width: 150px;
            padding: 8px 0;
            margin: 20px auto;
            background: #ffbf49;
            border-radius: 4px;
            color: black;
            text-align: center;
          }
        `}
      </style>
    </>
  );
}
