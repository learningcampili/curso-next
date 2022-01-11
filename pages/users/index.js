import Link from 'next/link';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import Head from 'next/head';
const Users = ({ users }) => {
  console.log(users);
  return (
    <Layout>
      <Head>
        <title>Users</title>
        <meta
          name="description"
          content="esta es la descripcion de la pagina"
        />
      </Head>
      <Title>Users Page</Title>
      <div className="grid">
        {users.map((user) => {
          return (
            <Link href={'/users/[id]'} as={`/users/${user.id}`} key={user.id}>
              <a className="card">
                <h3>User</h3>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
              </a>
            </Link>
          );
        })}
      </div>
      <style jsx>
        {`
          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 800px;
            margin-top: 3rem;
          }
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
    </Layout>
  );
};

export default Users;

// esto genera paginas estaticas
export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return {
    props: {
      users,
    },
  };
};
