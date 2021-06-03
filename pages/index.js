import Link from "next/link";
import Layout from "../components/Layout";
import { sanityClient, urlFor } from "../lib/sanity";

const recipesQuery = `*[_type == "recipe"]{
  _id,
  name,
  slug,
  mainImage
}`;

export default function Home({ recipes }) {
  console.log(recipes);
  return <Layout></Layout>;
}

export const getStaticProps = async () => {
  const recipes = await sanityClient.fetch(recipesQuery);
  return { props: { recipes }, revalidate: 1 };
};
