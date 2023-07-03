import { shallowMount } from "@vue/test-utils";
import AppDrag from "@/common/components/AppDrag";

describe("AppDrag ", () => {
  const slots = { default: "content" };
  const propsData = {
    transferData: {
      id: 1,
      name: "Ананас",
      image: "/public/img/filling/ananas.svg",
      price: 25,
      value: "ananas",
      count: 0,
    },
    isDraggable: true,
  };

  let wrapper;
  const createComponent = (options) => {
    wrapper = shallowMount(AppDrag, options);
  };

  afterEach(() => {
    wrapper.destroy();
  });

  it("is rendered", () => {
    createComponent({ slots, propsData });
    expect(wrapper.exists()).toBeTruthy();
  });

  it("renders out the slot content", () => {
    createComponent({ slots, propsData });
    expect(wrapper.html()).toContain(slots.default);
  });
});
