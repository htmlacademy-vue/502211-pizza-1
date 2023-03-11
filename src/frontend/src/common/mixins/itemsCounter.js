export default {
  methods: {
    $itemsCounter(items, name) {
      return items[name]?.amount || 0;
    },
  },
};
