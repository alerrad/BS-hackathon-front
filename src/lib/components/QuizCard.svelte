<script>
  import { Card, Button, ButtonGroup } from "flowbite-svelte";

  export let quiz_info;
</script>

<div class="mt-4">
  <Card img={quiz_info.cover_image} reverse={true}>
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
        {quiz_info.title}
    </h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight line-clamp-2">
        {quiz_info.description}
    </p>
    <ButtonGroup>
        <Button href = "/quizzes/{quiz_info.id}">Подробнее</Button>
        <Button href = {quiz_info.link}>Пройти квиз</Button>
    </ButtonGroup>
  </Card>
</div>
