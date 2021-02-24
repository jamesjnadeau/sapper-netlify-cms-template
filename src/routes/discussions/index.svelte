<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`/discussions.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import { slide } from "svelte/transition";
  import { scrollto } from "svelte-scrollto";
  export let posts;
  export let isOpen = true;
  setTimeout(function() {
    if (isOpen) isOpen = true;
  }, 1000);
</script>

<svelte:head>
  <title>Discussions</title>
  <meta
    name="description"
    content="Topics and opinions important to our schools well being, written by
    local minds" />
</svelte:head>

<div class="content">
  <div class="card p-3 my-3">
    <h1>Discussions</h1>
    <p class="text-center">
      Topics and opinions important to our schools well being, written by local
      minds.
    </p>
  </div>
  {#each posts as post}
    <a class="card p-3 my-3" href="discussions/{post.slug}">
      <h5>{post.title}</h5>
    </a>
  {/each}

  <hr />

  <div class="card p-3 my-3">
    <h3>Is something missing?</h3>
    <div class="row">
      <div class="col-sm-8">
        <p>
          What's on your mind?
          <br />
          <br />
          Is there a problem?
        </p>
      </div>
      <div class="col-sm-3">
        <p>Let us Know!</p>
        <a
          class="btn btn-primary"
          use:scrollto={'#discussion-ideas'}
          href="#discussion-ideas">
          Lend Your Voice
        </a>
      </div>
    </div>
    <hr class="my-3" />
    <form
      id="discussion-ideas"
      name="discussion-ideas"
      method="POST"
      netlify
      netlify-honeypot="bot-field"
      transition:slide>
      <input type="hidden" name="form-name" value="discussion-ideas" />
      <p class="d-none">
        <label>
          Don’t fill this out if you're human:
          <input name="bot-field" />
        </label>
      </p>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Your Name:</label>
          <input type="text" name="name" class="form-control" required />
        </div>

        <div class="form-group col-md-6">
          <label>Your Email:</label>
          <input type="email" name="email" class="form-control" required />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Resident Of</label>
          <select name="town" class="custom-select" required>
            <option />
            <option>Bridport</option>
            <option>Cornwall</option>
            <option>Middlebury</option>
            <option>Ripton</option>
            <option>Salisbury</option>
            <option>Shoreham</option>
            <option>Weybridge</option>
          </select>
        </div>

        <div class="form-group col-sm-6">
          <div class="form-check py-4">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="childrenEnrolled"
              name="childrenEnrolled" />
            <label class="form-check-label" for="childrenEnrolled">
              I currently have children enrolled in a ACSD school.
            </label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label>What's Your Opinion?</label>
        <textarea
          name="message"
          class="form-control"
          rows="5"
          maxlength="2000"
          required />
      </div>

      <div class="d-flex align-items-center justify-content-center">
        <div class="col-md-2">
          <button type="submit" class="btn btn-lg btn-primary btn-block">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</div>
