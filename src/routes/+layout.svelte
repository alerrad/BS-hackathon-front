<script lang="ts">
  import "../app.css";
  import { theme } from "$lib/stores/writables";

  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";

  $theme; // preload
</script>

<svelte:head>
  <title>Карагандинская ОУНБ</title>
</svelte:head>

<div class="min-h-screen" data-theme={$theme}>
  <Navbar/>

  <div class="min-h-screen">
    <slot>
      <h1>Nothing to show here...</h1>
    </slot>
  </div>

  <div class="max-w-7xl m-auto mt-20">
    <Footer/>
  </div>
</div>
