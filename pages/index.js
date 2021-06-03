import Link from "next/link";
import Layout from "../components/Layout";
import { sanityClient, urlFor } from "../lib/sanity";

const recipesQuery = `*[_type == "recipe"]`;

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
