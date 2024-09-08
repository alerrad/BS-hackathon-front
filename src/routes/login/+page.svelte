<script>
  import { enhance } from "$app/forms";
  import { Input, Button, Label } from "flowbite-svelte";
  import { FacebookSolid, TwitterSolid, WhatsappSolid } from 'flowbite-svelte-icons';
</script>

<div class="mt-24">
    <form class="max-w-sm mx-auto" method="post" use:enhance>
        <div class="mt-5">
            <Label for="username" class = "mb-2">Никнейм</Label>
            <Input type="text" id="username" placeholder="reader123" name="username" required/>
        </div>
        <div class="mt-5">
            <Label for="password" class = "mb-2">Пароль</Label>
            <Input type="password" id="password" placeholder="Пароль" name="password" required/>
        </div>
        <div class="flex m-auto mt-5 justify-between w-36">
            <FacebookSolid class = "w-8 h-8"/>
            <TwitterSolid class = "w-8 h-8"/>
            <WhatsappSolid class = "w-8 h-8"/>
          </div>
        <div class="flex flex-col items-center mt-10">
            <Button type="submit">Войти</Button>
        </div>
    </form>
    <span class="max-w-sm mx-auto">
        <p class="text-center mt-10">Нет аккаунта? <a href="/register" class="underline">Зарегистрироваться</a></p>
    </span>
</div>