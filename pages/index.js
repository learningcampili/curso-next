import Title from '../components/Title';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Aprendiendo Next.js</title>
        <meta
          name="description"
          content="esta es la descripcion de la pagina"
        />
      </Head>
      <Title>Home Page</Title>
      <p>Aprendiendo Nextjs con Webtutoriales</p>

      <a href="https://github.com/vercel/styled-jsx" target="_blank">
        usando styled-jsx
      </a>

      <a href="https://jsonplaceholder.typicode.com/" target="_blank">
        JsonPlaceHolder
      </a>
      <style jsx>
        {`
          p {
            color: darkgray;
          }
          p:hover {
            color: darkred;
          }
        `}
      </style>
    </>
  );
};

export default Home;
