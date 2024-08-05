<script setup>
import { ref, onMounted } from "vue";
import { fetchAdvice } from "./apis/adviceApi";


const slip = ref({});

const handleRequest = async () => {
  try {
    const res = await fetchAdvice();
    slip.value = res.slip;    
  } catch (error) {
    console.log(error);
  }
}

onMounted(async() => {
  try {
    const res = await fetchAdvice();
    slip.value = res.slip;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <main>
    <header>
      <h1 class="title">Advice #{{ slip.id }}</h1>
    </header>
    <div class="content">
      <p> &quot; {{ slip.advice }} &quot;</p>
    </div>
    <figure></figure>
    <button class="btn-green" @click="handleRequest">
      <img src="./assets/icon-dice.svg" alt="button icon">
    </button>
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.title {
  color: var(--neon-green);
  font-size: 1.5rem;
}

.content {
  text-align: center;
  color: var(--light-cyan);
  padding: 0 1.5rem;
}

figure {
  display: flex;
  align-items: center;
  background: url("./assets/pattern-divider-mobile.svg");
  background-repeat: no-repeat;
  background-position: 50%;
  width: 100%;
  height: 1rem;
}

button {
  display: flex;
  background-color: var(--neon-green);
  color: var(--light-cyan);
  padding: 1rem;
  border-radius: 50%;
  position: absolute;
  place-items: center;
  bottom: -3.5rem;
  cursor: pointer;
}

button:hover {
  box-shadow: 0 1px 20px var(--neon-green),
  0 0px 1px var(--neon-green);
}

@media screen and (min-width: 1024px) {
  figure {
    background: url("./assets/pattern-divider-desktop.svg");
    background-repeat: no-repeat;
    background-position: 50%;
    width: 100%;
  }

  .content {
    padding: 0 4rem;

  }

}

</style>
