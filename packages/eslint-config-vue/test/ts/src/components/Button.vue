<template>
  <div>
    <div a="1" b="2" c="3" d="4" def="" />
    <button type="type">{children}</button>
    <icon />
  </div>
</template>

<script lang="ts">
import Icon, { getTimestamp } from "./Icon";
import delay from "../utils/delay";

console.log({ delay, getTimestamp });
console.log(BigInt);

const d = ""; // eslint-disable-line
export default {
  components: { Icon },
  /* eslint-disable vue/require-default-prop */
  props: {
    type: String,
    children: { type: String, default: "Click Me" },
  },
  created() {
    import("./Icon").then(comp => console.log({ comp }));
  },
};
</script>

<style>
button {
  border: 1px solid #164598;
}
</style>
