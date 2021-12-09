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
  <h1 class="grey">Voter Registry</h1>
  <button on:click={updateHandler}>Load from Database</button>
  <ul>
    {#each voters as voter}
      <li>
        <div>
          <span class="grey field">Voter ID: </span><span class="dbContent">{voter.id}</span>
        </div>
        <div>
          <span class="grey field">Name: </span><span class="dbContent">{voter.first_name} {voter.last_name}</span>
        </div>
        <div>
          <span class="grey field">DOB: </span><span class="dbContent">{((new Date(voter.dob)).toDateString()).slice(4)}</span>
        </div>
        <div>
          <span class="grey field">Status: </span><span class="dbContent">{voter.reg_status}</span>
        </div>
        <div>
          <span class="grey field">Is Active?: </span><span class="dbContent">{voter.is_active}</span>
        </div>                    
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

  .field {
    min-width: 100px;
  }

  .grey {
    color:dimgray;
  }

  .dbContent {
    color: white;
  }
</style>