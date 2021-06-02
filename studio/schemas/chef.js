export default {
  name: "chef",
  title: "chef",
  type: "document",
  fields: [
    { name: "name", title: "Chef's name", type: "string" },
    {
      name: "image",
      title: "Image",
      type: "image",
      optional: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ tile: "Normal", value: "normal" }],
        },
      ],
    },
  ],
};
