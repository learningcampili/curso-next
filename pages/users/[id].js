import React from 'react';
import { useRouter } from 'next/router';

import Title from '../../components/Title';
import Head from 'next/head';
import Image from 'next/image';

const User = ({ user }) => {
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback) {
    return <div>CARGANDO...</div>;
  }

  return (
    <>
      <Head>
        <title>{`User # ${user.id}`}</title>
        <meta
          name="description"
          content="esta es la descripcion de la pagina"
        />
      </Head>
      <Title>User ID {user.id}</Title>
      <div className="card">
        <h3>User</h3>
        <Image
          src={`/images/${user.id}.jpg`}
          alt="foto"
          width={400}
          height={600}
          objectFit="cover"
          // layout="responsive"
        />
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>

      <style jsx>
        {`
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
        `}
      </style>
    </>
  );
};

export default User;

//******************************************** */
// para crear los params
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  // const paths = [
  //   { params: { id: '1' } },
  //   { params: { id: '2' } },
  // ];

  const paths = users.map((user) => {
    return {
      params: { id: `${user.id}` },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

/************************************************* */
// para generar paginas estaticas
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
};
