<template>
  <img src="http://www.baidu.com/d.png" />
</template>

<script>
export function getTimestamp() {
  return Promise.resolve(Date.now());
}
export default {};
</script>
