<script>
    import Hero from "$lib/components/Hero.svelte";
    import NewsCard from "$lib/components/NewsCard.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
</script>

<Hero>
</Hero>

<div class="max-w-5xl m-auto">
    <h1 class="text-center text-2xl font-bold">Новости</h1>
    <div class="flex items-center flex-wrap-reverse justify-around">
        <div class="mt-5">
            <NewsCard/>
        </div>
        <div class="mt-5">
            <NewsCard/>
        </div>
        <div class="mt-5">
            <NewsCard/>
        </div>
    </div>
    <div class="mt-10">
        <Timeline/>
    </div>
</div>

