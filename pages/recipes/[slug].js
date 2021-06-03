import {
  sanityClient,
  urlFor,
  usePreviewSubscription,
  PortableText,
} from "../../lib/sanity";

const recipeQuery = `*[_type == "recipe" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    mainImage,
    ingredient[]{
      _key,
      unit,
      wholeNumber,
      fraction,
      ingredient->{
        name
      }
    },
    instructions,
    likes
  }`;

const OneRecipe = () => {
  return (
    <div>
      <h1>This is slug</h1>
    </div>
  );
};

export default OneRecipe;

export const getStaticPaths = async () => {
  const paths = await sanityClient.fetch(
    `*[_type == "recipe" && defined(slug.current)]{
          "params": {
            "slug": slug.current
          }
        }`
  );

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const recipe = await sanityClient.fetch(recipeQuery, { slug });
  return { props: { data: { recipe }, preview: true } };
};
