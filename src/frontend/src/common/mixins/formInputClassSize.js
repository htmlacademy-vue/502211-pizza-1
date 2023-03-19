export default {
  methods: {
    $formInputClassSize(additionalSizeClass, size) {
      return size.length !== 0 ? `${additionalSizeClass}--${size}` : "";
    },
  },
};
