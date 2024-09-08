<script lang="ts">
    import { Avatar, Button } from "flowbite-svelte";
    import ArticleCard from "$lib/components/ArticleCard.svelte";

    export let data;
    const user_articles = data.user_articles.filter(article => article.author_username === data.username);
</script>

<section class="max-w-5xl m-auto mt-12">
    <div class="max-w-md m-auto flex flex-wrap justify-between">
        <Avatar size="xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwmG52pVI5JZfn04j9gdtsd8pAGbqjjLswg&s" />
        <div class="mt-3">
            <h1 class="text-3xl font-medium">{data.username}</h1>
            <div class="mt-3 flex">
                <p class="font-medium">Статус билета:&nbsp;</p>
                <p class="text-green-600">Активный</p>
            </div>
            <Button class = "mt-3" color="blue">Подарить книгу</Button>
        </div>
    </div>
    <div class="mt-20">
        <h1 class="text-2xl text-center font-medium text-gray-700">Издания от {data.username}</h1>
        <ul class="flex flex-wrap justify-around mt-6 list-none">
            {#each user_articles as article}
                <li class="min-w-72 mt-4">
                    <ArticleCard article_data = {article}/>
                </li>
            {/each}
        </ul>
    </div>
</section>