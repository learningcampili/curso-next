import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import { useState, useEffect } from 'react';
import Head from 'next/head';

const Post = ({ post }) => {
  // const router = useRouter();
  // const { id } = router.query;

  //const [post, setPost] = useState({});

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const response = await fetch(
  //       `https://jsonplaceholder.typicode.com/posts/${id}`
  //     );
  //     const data = await response.json();
  //     console.log('data', data);
  //     setPost(data);
  //   };
  //   fetchPost();
  // }, []);

  return (
    <Layout>
      <Head>
        <title>{`Post # ${post.id}`}</title>
        <meta
          name="description"
          content="esta es la descripcion de la pagina"
        />
      </Head>
      <Title>Post details</Title>
      <div className="card">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <style jsx>
        {`
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: black;
            text-decoration: none;
            border: 2px solid #eaeaea;
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
    </Layout>
  );
};

export default Post;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id} `
  );
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
};
