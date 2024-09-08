<script lang="ts">
  import { Card, Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";

  type Article_data = {
    id: number,
    title: string,
    content: string,
    date: string,
    author: number,
    average_rating: number,
  }

  export let article_data: Article_data;
</script>

<Card>
  <h5
    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
  >
    {article_data.title}
  </h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
    {article_data.content}
  </p>
  <div class="mb-3 flex">
    <b>Дата:&nbsp;</b>
    <p>{article_data.date}</p>
  </div>
  <div class="mb-3 flex">
    <b>Рейтинг:&nbsp;</b>
    <p>{article_data.average_rating}</p>
  </div>
  <Button class="w-fit" href="/articles/{article_data.id}">
    Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
  </Button>
</Card>
