<template>
  <main>
    <twic-img src="https://assets.twicpics.com/examples/football.jpg" />
    <twic-img
      src="football.jpg"
      ratio="16/9"
      step="100"
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
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 1rem;
  max-width: 1280px;
  margin: auto;
}

.twic-img {
  align-self: start;
}
</style>
