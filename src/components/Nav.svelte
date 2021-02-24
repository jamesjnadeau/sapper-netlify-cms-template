<script>
  export let segment;

  import { slide } from "svelte/transition";

  let windowWidth;
  let isOpen = false;
  let minWidth = 992;
  let _wasMaximazed = true;

  // process on change
  $: if (windowWidth >= minWidth && !isOpen) {
    isOpen = true;
    _wasMaximazed = true;
  } else if (windowWidth < minWidth && _wasMaximazed) {
    isOpen = false;
    _wasMaximazed = false;
  }

  function toggleOpen() {
    isOpen = !isOpen;
  }
  export const items = [
    {
      segment: "discussions",
      path: "/discussions/",
      name: "Discussions"
    },
    {
      segment: "reviews",
      path: "/reviews/",
      name: "Reviews"
    },
    {
      segment: "about",
      path: "about",
      name: "About"
    }
  ];
</script>

<svelte:window bind:innerWidth={windowWidth} />

<nav class="navbar navbar-expand-lg fixed-top" id="header">
  <div class="container p-2">
    <a class="brand navbar-brand handwritten" href="/">
      <img src="/logo.png" class="" alt="edible reviews logo">
    </a>
    <button
      on:click={toggleOpen}
      class="navbar-toggler"
      type="button"
      aria-controls="navbarSupportedContent"
      aria-expanded={isOpen}
      aria-label="Toggle navigation">
      Menu
    </button>
    {#if isOpen}
      <div class="navbar-collapse" id="navbarSupportedContent" transition:slide|local>
        <ul
          class="navbar-nav d-flex align-items-center justify-content-around
          w-100 handwritten">
          {#each items as item}
            <a
              class="nav-item p-3"
              href={item.path}
              class:active={segment === item.segment}>
              {item.name}
            </a>
          {/each}
        </ul>
      </div>
    {/if}
  </div>
</nav>
