<script lang="ts">
    import { Card } from 'flowbite-svelte';

    interface Book_info {
        id: number,
        title: string,
        desc: string,
        cover: string,
        release_date: string,
        origin: string,
        genre: string,
    };

    export let book_info: Book_info;
    export let reverse = false;
</script>
  
<div class="space-y-4">
    <Card img="/media/bookcover.jpg" href="/books/{book_info.id}" horizontal size="md" {reverse}>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book_info.title}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{book_info.desc}</p>
        <div class="mb-3 flex items-center">
            <b>Дата выпуска:&nbsp;</b>
            <p>{book_info.release_date}</p>
        </div>
        <div class="mb-3 flex items-center">
            <b>Жанр:&nbsp;</b>
            <p>{book_info.genre}</p>
        </div>
    </Card>
</div>