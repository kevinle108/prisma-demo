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
  <table>
    <tr>
      <th>Voter ID</th>
      <th>Last Name</th>
      <th>First Name</th>
      <th>DOB</th>
      <th>Voter Status</th>
      <th>Is Active?</th>
    </tr>
    {#each voters as voter}
      <tr>
        <td>{voter.id}</td>
        <td>{voter.last_name}</td>
        <td>{voter.first_name}</td>
        <td>{((new Date(voter.dob)).toDateString()).slice(4)}</td>
        <td>{voter.reg_status}</td>
        <td>{voter.is_active}</td>
      </tr>
    {/each}    
  </table>

</section>




<style>
  table {
    width: 1000px;
    padding: 15px;
  }
  th {
    background-color: slategrey;
    color: black
  }
  td {
    margin: 10px 10px;
  }
  table, th, td {
  border: 1px solid white;
  }

  button {
    padding: 5px;
    width: 285px;
  }

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
    display: inline-block;
    width: 80px;
  }

  .grey {
    color:dimgray;
  }

  .dbContent {
    color: white;
  }

  .title {
    font-weight: bold;
    color:steelblue;
  }
</style>