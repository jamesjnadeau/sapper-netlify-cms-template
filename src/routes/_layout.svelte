<script>
  import Nav from '../components/Nav.svelte';
  // import { pageIn, pageOut } from "./_page_transition";
  import { fade } from "svelte/transition";

  export let segment;

  let pinState = "pin";
  let y = 0;
  let lastY = 0;
  let lastDirection = "up";

  function changeClass(y) {
    let result = pinState;
    const scrolledPxs = lastY - y;
    const scrollDirection = scrolledPxs < 0 ? "down" : "up";
    const changedDirection = scrollDirection !== lastDirection;
    if (changedDirection && y > 40) {
      result = scrollDirection === "down" ? "unpin" : "pin";
      lastDirection = scrollDirection;
    }
    lastY = y;
    return result;
  }

  $: pinState = changeClass(y);
</script>

<style>
  /* :root {
    --header-height: 80px;
  } */
  header {
    height: var(--header-height);
    position: fixed;
    z-index: 1;
  }
  main {
    min-height: 100vh;
    padding-top: 120px;
  }
  /* .pin {
    top: 0;
  }
  .unpin {
    top: calc(var(--header-height) * -1);
  } */
</style>

<svelte:window bind:scrollY={y}/>

<header>
  {#if pinState == 'pin'}
    <div transition:fade|local>
      <Nav {segment} />
    </div>
  {/if}
</header>
<main>
  <div id="wrap">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</main>