import Link from "next/link";
import Layout from "../components/Layout";
import { sanityClient, urlFor } from "../lib/sanity";

const recipesQuery = `*[_type == "recipe"]{
  _id,
  name,
  slug,
  mainImage{
    asset->{
      _id, 
      url
    }
  }
}`;

export default function Home({ recipes }) {
  return (
    <div>
      <h1>Welcome to Kap's Kitchen 🍍</h1>

      <ul className="recipes-list">
        {recipes?.length > 0 &&
          recipes.map((recipe) => (
            <li key={recipe._id} className="recipe-card">
              <Link href={`/recipes/${recipe.slug.current}`}>
                <a>
                  <img src={urlFor(recipe.mainImage).url()} alt={recipe.name} />
                  <span>{recipe.name}</span>
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const recipes = await sanityClient.fetch(recipesQuery);
  return { props: { recipes }, revalidate: 1 };
};
