<script lang="ts">
    import { Button, ButtonGroup, Rating } from 'flowbite-svelte';

    export let data;
</script>

<section class="max-w-3xl m-auto mt-16">
    <div class="flex flex-wrap justify-between">
        <img src="/media/bookcover.jpg" alt="bookcover" class="w-80">
        <div class="w-96" id="info">
            <h1 class="text-4xl mb-3">{data.title}</h1>
            <p class="mb-3">{data.desc}</p>
            <div class="mb-3 flex items-center">
                <b>Дата выпуска:&nbsp;</b>
                <p>{data.release_date}</p>
            </div>
            <div class="mb-3 flex items-center">
                <b>Жанр:&nbsp;</b>
                <p>{data.genre}</p>
            </div>
            <div class="mb-3 flex items-center">
                <b>Статус:&nbsp;</b>
                <p>{data.origin}</p>
            </div>
            <div class="mb-3 flex items-center">
                <b>В наличии:&nbsp;</b>
                <p>Да</p>
            </div>
            <div class="mb-3">
                <Rating size={32} rating = {Math.floor(Math.random() * 5) + 1}/>
            </div>
            <ButtonGroup>
                <Button>Оценить книгу</Button>
                <Button href="/testbook.pdf" download="somebook">Скачать книгу</Button>
            </ButtonGroup>
        </div>
    </div>
</section>