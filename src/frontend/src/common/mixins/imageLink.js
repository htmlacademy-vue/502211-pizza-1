export default {
  methods: {
    $imageLink(link) {
      const filename = link.split("/").slice(3).join("/");

      return require("@/assets/img/" + filename);
    },
  },
};
