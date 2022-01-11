import React from 'react';
import Navbar from './Navbar';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Head desde layout</title>
        <meta
          name="description"
          content="esta es la descripcion de la pagina"
        />
      </Head>
      <Navbar />

      <main>{children}</main>

      {/* Css Scopped */}
      <style jsx>
        {`
          div {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      </style>

      {/* Css Global */}
      <style jsx global>
        {`
          html,
          body {
            margin: 0;
            padding: 0;
          }
          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
