<script lang="ts">
    import { Rating } from 'flowbite-svelte';
    import Comment from '$lib/components/Comment.svelte';

    let comments = [1];
    export let data;
</script>

<section class="max-w-4xl m-auto mt-16">
    <div class="" id="info">
        <h1 class="text-4xl mb-6">{data.title}</h1>
        <p class="mb-3">{data.content} Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisci minus facere! Velit id, omnis soluta animi reiciendis incidunt ut dicta sunt quis consequatur nulla. Nesciunt officiis facere neque tempore?</p>
        <div class="mb-3 flex items-center">
            <b>Дата выпуска:&nbsp;</b>
            <p>{data.date}</p>
        </div>
        <div class="mb-3 flex items-center">
            <b>Автор:&nbsp;</b>
            <a href="/{data.author_username}">{data.author_username}</a>
        </div>
        <div class="mb-3">
            <Rating size={32} rating = {data.average_rating}/>
        </div>
        <div class="mt-4">
            <h2 class="text-2xl font-semibold">1 Комментариев</h2>
            <hr>
            <div class="mt-8">
                {#each comments as comment}
                    <Comment/>
                {/each}
            </div>
        </div>
    </div>
</section>