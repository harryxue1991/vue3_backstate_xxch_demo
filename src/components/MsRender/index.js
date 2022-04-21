import { h } from "vue";

const MsRender = (props, { slots, attrs }) => {
  return props.render(h, props.scope);
};

export default MsRender;
