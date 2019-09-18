<template>
  <img src="http://www.baidu.com/d.png" />
</template>

<script lang="ts">
export function getTimestamp(): Promise<number> {
  return Promise.resolve(Date.now());
}
export default {};
</script>
