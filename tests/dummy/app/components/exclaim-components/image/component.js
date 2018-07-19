import Component from "@ember/component";

export const NAME = "image";
export const DESCRIPTION = "Some image";
export const SHORTHAND_PROPERTY = "content";
export const PROPERTIES = [
  {
    name: "content",
    description:
      "A value or array of values that will be concatenated together and displayed"
  }
];

export default Component.extend({
  tagName: "div"
});
