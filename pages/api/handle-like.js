import { sanityClient } from "../../lib/sanity";

sanityClient.config({
  token:
    "skTTTpMTuN6j02m54FRju6h17OiB0XVD0cyIJlpyoZXHKO1HBmxT7iA87pI7lfsQptJRRoVqXLYit7gJ7WDKEntAhmwjOmSKj7py5y8c0FkmSVKyzbI2VjKn6SvXJ1AZeU6trYJc2u3nzqHxC6uBuY84CRUIt3mZmTAc9UKDUjQvGgMKNOY2",
});
// token: process.env.SANITY_TOKEN,

export default async function likeButtonHandler(req, res) {
  const { _id } = JSON.parse(req.body);
  const data = await sanityClient
    .patch(_id)
    .setIfMissing({ likes: 0 })
    .inc({ likes: 1 })
    .commit()
    .catch((error) => console.log(error));

  res.status(200).json({ likes: data.likes });
}
