import { shallowMount } from "@vue/test-utils";
import AppLayoutLogo from "@/layouts/AppLayoutLogo";

describe("AppLayoutLogo", () => {
  const mocks = {
    $route: {
      meta: {
        layout: null,
      },
    },
  };

  let wrapper;
  const createComponent = (options) => {
    wrapper = shallowMount(AppLayoutLogo, options);
  };

  afterEach(() => {
    wrapper.destroy();
  });

  it("is rendered", () => {
    createComponent({ mocks });
    expect(wrapper.exists()).toBeTruthy();
  });
});
