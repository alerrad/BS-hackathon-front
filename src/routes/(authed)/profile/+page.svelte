<script lang="ts">
    import { Avatar, Button, ButtonGroup } from "flowbite-svelte";

    export let data;
</script>

<section class="max-w-5xl m-auto mt-12">
    <div class=" max-w-md m-auto flex flex-wrap justify-between">
        <Avatar size="xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwmG52pVI5JZfn04j9gdtsd8pAGbqjjLswg&s" />
        <div class="mt-3">
            <h1 class="text-3xl font-medium">{data.username}</h1>
            <div class="mt-3 flex">
                <p class="font-medium">Статус билета:&nbsp;</p>
                <p class="text-green-600">Активный</p>
            </div>
            <form action="/logout" method="post">
                <ButtonGroup divClass = "mt-3">
                    <Button href="/profile/edit">Редактировать профиль</Button>
                    <Button type="submit">Выйти</Button>
                </ButtonGroup>
            </form>
        </div>
    </div>
</section>