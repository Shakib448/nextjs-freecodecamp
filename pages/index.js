import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return <Layout></Layout>;
}

export const getStaticProps = () => {
  return {
    props: {
      data: {
        recipes: [{ title: "Apple Cider" }],
      },
    },
  };
};
