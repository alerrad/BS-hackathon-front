<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte';
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="/media/logo.png"
      class="mr-3 h-9"
      alt="Logo"
    />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      ОУНБ
    </span>
  </NavBrand>
  <NavUl {hidden}>
    <NavLi href="/" active={true}>Главная</NavLi>
    <NavLi href="/books">Архив</NavLi>
    <NavLi href="/quizzes">Активности</NavLi>
    <NavLi href="/articles">Сообщество</NavLi>
  </NavUl>
  <a href="/login">
    <Button>Аккаунт</Button>
  </a>
  <NavHamburger on:click={toggle} />
</Navbar>