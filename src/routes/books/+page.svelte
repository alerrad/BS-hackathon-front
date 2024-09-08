<script lang="ts">
    import { Search, Button } from "flowbite-svelte";
    import BookCard from "$lib/components/BookCard.svelte";
    import Pagination from "$lib/components/Pagination.svelte";

    let search_input: string = "";
    export let data;

    $: filtered = data.books.filter(book => book.title.includes(search_input) || search_input.includes(book.genre));
</script>

<section class = "max-w-5xl m-auto mt-16">
    <div class="text-center">
        <h1 class=" text-4xl font-bold">Архив книг 📚</h1>
        <p class="mt-3">Исследуйте нашу богатую библиотеку</p>
    </div>

    <div class="mt-6">
        <Search placeholder = "Название книги, авторы, жанры" bind:value="{search_input}">
            <Button>Поиск</Button>
        </Search>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {#each filtered as book}
            <BookCard book_info = {book}/>
        {/each}
    </div>

    <div class="flex flex-col items-center mt-8">
        <Pagination/>
    </div>
</section>