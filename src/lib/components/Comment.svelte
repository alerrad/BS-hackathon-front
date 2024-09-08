<script>
  import { RatingComment } from "flowbite-svelte";
  let comment = {
    id: "1",
    user: {
      name: "Jese Leos",
      img: {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwmG52pVI5JZfn04j9gdtsd8pAGbqjjLswg&s",
        alt: "Jese Leos",
      },
      joined: "Joined on August 2014",
    },
    total: 5,
    rating: 5,
    heading: "",
    address: "the UK",
    datetime: "2022-03-25",
  };
</script>

<RatingComment {comment}>
  <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
    This is my third Invicta Pro Diver. They are just fantastic value for money.
    This one arrived yesterday and the first thing I did was set the time,
    popped on an identical strap from another Invicta and went in the shower
    with it to test the waterproofing.... No problems.
  </p>
</RatingComment>
