<script>
  let voters = [];
  
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
    <li>
      <div>Voter ID: {voter.id}</div>
      <div>Name: {voter.first_name} {voter.last_name}</div>
      <div>DOB: {(new Date(voter.dob)).toDateString()}</div>
      <div>Status: {voter.reg_status}</div>
      <div>Is Active?: {voter.is_active}</div>
    </li>
  {/each}
</ul>
<button on:click={updateHandler}>Load from Database</button>


<style>
  li {
    margin: 20px 0;
  }
</style>