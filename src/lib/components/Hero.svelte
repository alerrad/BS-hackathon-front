<script>
  import { Carousel } from "flowbite-svelte";
  const images = [
    {
      alt: "Cosmic timetraveler",
      src: "https://images.unsplash.com/photo-1697791173189-d56b15df4f33?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
    },
    {
      alt: "Cristina Gottardi",
      src: "https://images.unsplash.com/photo-1505664063603-28e48ca204eb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "cristina-gottardi-CSpjU6hYo_0-unsplash.com",
    },
    {
      alt: "Johannes Plenio",
      src: "https://images.unsplash.com/photo-1447968954315-3f0c44f7313c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "johannes-plenio-RwHv7LgeC7s-unsplash.com",
    },
  ];
</script>

<div class="max-w-screen h-96 relative">
  <Carousel {images} let:Controls>
    <h1 class="absolute top-1/3 left-1/2 -translate-x-2/4 font-bold text-4xl text-white">Карагандинская областная универсальная научная библиотека им. Н.В. Гоголя.</h1>
    <Controls />
  </Carousel>
</div>
