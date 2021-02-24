<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`/discussions/${params.slug}.json`);
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
  import DiscussionForm  from 'src/components/DiscussionForm.svelte'
</script>

<svelte:head>
  <title>{post.title}</title>
  <meta name="description" content="{post.description}"/>
</svelte:head>


 <h1 class="text-center">{post.title}</h1>

<div class="content card mb-3 p-3"> 
  {@html post.html}
</div>

<div class="content card my-3 p-3">
  <DiscussionForm name={'discussion/' + post.slug}></DiscussionForm>
</div>
