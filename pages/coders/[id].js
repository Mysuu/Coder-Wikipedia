import React from "react";
import Head from "next/head";
import Link from "next/dist/client/link";
import axios from "axios";

//2 hàm getStaticPaths và getStaticProps gọi trước khi component render ra html
export const getStaticPaths = async () => {
  //hàm này lấy toàn bộ đường dẫn(path) có thể có, nói cho nextjs biết trước
  const res = await axios.get("https://jsonplaceholder.typicode.com/users/");

  const data = await res.data;

  const paths = data.map((coder) => {
    return {
      params: { id: coder.id.toString() },
    };
  });

  return {
    paths,
    fallback: false, //nếu đường dẫn k hợp lẹ cho vào not found
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}` //sử dụng dynamic SSG pages nên phải sử dụng hàm getStaticPaths
  );
  const data = await res.data;

  return {
    props: { coder: data },
  };
};

const Detail = ({ coder }) => {
  return (
    <>
      <Head>
        <title>Coder Wikipedia | {coder.name}</title>
        <meta name="keywords" content="coders" />
      </Head>
      <div>
        <h1>{coder.name}</h1>
        <p>Email: {coder.email}</p>
        <p>Website: {coder.website}</p>
        <p>
          Address: {coder.address.street}, {coder.address.city}
        </p>
        <p>Company: {coder.company.name}</p>
      </div>
      <Link href="/coders">
        <a>
          <button>Back to All Coders</button>
        </a>
      </Link>
    </>
  );
};

export default Detail;
