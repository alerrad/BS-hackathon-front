<script lang="ts">
    import type { PageData } from '../$types.js';
    import QuizCard from '$lib/components/QuizCard.svelte';
    import Pagination from '$lib/components/Pagination.svelte';

    export let data: PageData;
</script>

<section class="max-w-5xl m-auto mt-12">
    <div class="text-center">
        <h1 class=" text-4xl font-bold">Активности 🕺</h1>
        <p class="mt-3">Примите участие в викторинах и получайте очки 🪙</p>
    </div>
    <div class="flex flex-wrap justify-evenly mt-8">
        <!-- svelte-ignore empty-block -->
        {#each data.quizzes as quiz}
            <QuizCard quiz_info = {quiz}/>
        {/each}
    </div>
    <div class="flex flex-col items-center mt-8">
        <Pagination/>
    </div>
</section>