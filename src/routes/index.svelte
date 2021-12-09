<script>
  import { onMount } from "svelte";
  let voters = ['john', 'bob', 'tom'];

  // onMount(async () => {
  //   const data = await fetch('./index.json');
  //   const res = await data.json();
  //   console.log(res);
  //   voters = [...res];
  // });

  const updateHandler = async () => {
    const data = await fetch('./index.json');
    const res = await data.json();
    console.log(res);
    voters = [...res];
  }

</script>

<h1>Voter Registry</h1>
<ul>
  {#each voters as voter}
    <li>{voter}</li>
  {/each}
</ul>
<button on:click={updateHandler}>Update</button>


<style>

</style>