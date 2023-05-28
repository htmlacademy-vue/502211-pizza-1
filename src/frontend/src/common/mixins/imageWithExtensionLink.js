export default {
  methods: {
    $imageWithExtensionLink(link, extension) {
      const filename = link.split("/").slice(3).join("/").split(".")[0];

      return require(`@/assets/img/${filename}${extension}`);
    },
  },
};
