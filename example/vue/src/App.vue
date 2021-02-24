<template>
  <main>
    <twic-img src="/football.jpg" step="100" />
    <twic-img
      src="/football.jpg"
      ratio="16/9"
      step="100"
      focus="auto"
      placeholder="meancolor"
    />
    <twic-img
      src="/football.jpg"
      step="100"
      focus="auto"
      width="500"
      height="800"
      placeholder="none"
    />
  </main>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  background-color: #342d4e;
}

main {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
}

.twic-img {
  align-self: start;
}
</style>
