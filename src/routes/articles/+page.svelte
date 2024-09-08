<script lang="ts">
    import { Search, Button } from "flowbite-svelte";
    import ArticleCard from "$lib/components/ArticleCard.svelte";
    import Pagination from "$lib/components/Pagination.svelte";
    import type { PageData } from "../$types";

    export let data: PageData;
    console.log(data);
</script>

<section class="max-w-5xl m-auto mt-16">
    <div class="text-center">
        <h1 class=" text-4xl font-bold">Статьи и издания 📰</h1>
        <p class="mt-3">Творческие работы и издания от сообщества библиотеки</p>
    </div>
    <div class="mt-6">
        <Search placeholder = "Название статьи, поста">
            <Button>Поиск</Button>
        </Search>
    </div>
    <ul class="flex flex-wrap justify-around mt-6 list-none">
        {#each data.articles as article}
            <li class="min-w-72 mt-4">
                <ArticleCard article_data = {article}/>
            </li>
        {/each}
    </ul>
    <div class="flex flex-col items-center mt-8">
        <Pagination/>
    </div>
</section>