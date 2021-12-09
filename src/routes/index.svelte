<script>
  let voters = [];

  const updateHandler = async () => {
    const data = await fetch('./index.json');
    const res = await data.json();
    console.log(res);
    voters = [...res];
  }

</script>

<section>
  <h1 class="title">Voter Registry</h1>
  <button on:click={updateHandler}>Load from Database</button>
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
</section>




<style>
  body{
    text-align: center;
  }

  section{
    width: 80%;
    margin-right: auto;
    margin-left: auto;
  }

  li {
    margin: 20px 0;
  }

  li div {
    margin: 10px 0;
  }

  .title {
    color:dimgray;
  }
</style>