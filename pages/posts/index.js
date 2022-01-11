import Layout from '../../components/Layout';
import Title from '../../components/Title';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Posts = ({ posts }) => {
  //**************************************** */
  //Client-side -rendering
  //*************************************** */

  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  //     const data = await res.json();
  //     setPosts(data);
  //   };
  //   fetchPosts();
  // }, []);

  return (
    <Layout>
      <Head>
        <title>Posts</title>
        <meta
          name="description"
          content="esta es la descripcion de la pagina"
        />
      </Head>
      <Title>Posts Page</Title>
      <div className="grid">
        {posts.map((post) => {
          return (
            <Link href={`/posts/[id]`} as={`/posts/${post.id}`} key={post.id}>
              <a className="card">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </a>
            </Link>
          );
        })}
      </div>
      <style jsx>
        {`
          .grid {
            display: flex;
            flex-wrap: wrap;
            max-width: 800px;
            margin-top: 2rem;
          }
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
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

export default Posts;

// esto es para server-side-rendering
// el componente debe recibir por props los posts

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};