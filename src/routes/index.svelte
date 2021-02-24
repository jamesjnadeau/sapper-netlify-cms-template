<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`/index.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
  export let post;

  // redirect to netlify cms
  import { onMount } from "svelte";
  const netlifyIdentity = require("netlify-identity-widget");

  onMount(() => {
    if (netlifyIdentity) {
      netlifyIdentity.init();
      netlifyIdentity.on("init", user => {
        if (!user) {
          netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  });

</script>

<svelte:head>
  <title>We are ACSD</title>
   <meta name="description" content="A place to discuss facts and future of education with other community members of the Addison Central School District.">
</svelte:head>

<div class='content'>
	{@html post.html}
</div>
