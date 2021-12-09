<script context="module">
  export const load = async ({fetch}) => {
    console.log('module fired')
    const res = await fetch('./index.json');
    const data = await res.json();
    console.log(data);
    return {
      props: {data}
    }
  }
</script>

<script>
  export let data;
  let voters = ['john', 'bob', 'tom'];
  voters = data.map(x => x.first_name);

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