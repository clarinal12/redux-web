import { GetServerSideProps } from "next";
import { getToken } from "utils/auth";

const Home: React.FC = () => <div>Home Page Updated</div>;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = getToken(ctx);

  if (token) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Home;
