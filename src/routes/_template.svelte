

<script>
    import { pageIn, pageOut } from "./_page_transition";
  import { fly } from 'svelte/transition';
    
</script>


<svelte:head>
	<title>Title</title>
</svelte:head>

<div in:fly={pageIn} out:fly={pageOut}>
	<div class='content'>
		<h1>Hi!</h1>
	</div>
</div>
