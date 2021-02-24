<script>
  export let name;

  import { scrollto } from "svelte-scrollto";
  import { slide } from "svelte/transition";
  import { onMount } from "svelte";

  let MyComponent;
</script>

<!-- 
<h3>What's your opinion?</h3>
<div class="row">
  <div class="col-sm-8">
    <p>Are we wrong?
      <br>
      Do you have something to add?
    </p>
  </div>
  <div class="col-sm-3">
    <p>Let us Know!</p>
    <a
      class="btn btn-primary"
      use:scrollto={'#'+name.replace('/', '-')}
      href="#{name.replace('/', '-')}">
      Lend Your Voice
    </a>
  </div>
</div>


<hr class="my-3" />
<p>We want to have a civil, fact-based discussion. Use the form below and we'll post it as soon as we can.</p>
<form 
  {name}
  id={name.replace('/', '-')}
  method="POST"
  netlify
  netlify-honeypot="bot-field"
  transition:slide>
  <input type="hidden" name="form-name" value={name} />
  <p class="d-none">
    <label>
      Don’t fill this out if you're human:
      <input name="bot-field" />
    </label>
  </p>
  <p>
    <small>
      We want this information to confirm you are a real person. We will not
      give your information to anyone.
    </small>
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

  
  <div class="form-row">
    <div class="form-group col-sm-4">
      <div class="form-check py-4">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="isAnonymous"
          name="isAnonymous" />
        <label class="form-check-label" for="isAnonymous">
          Post my opinion to this page as anonymous.
        </label>
      </div>
    </div>

    <div class="form-group col-sm-4">
      <div class="form-check py-4">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="showName"
          name="showName" />
        <label class="form-check-label" for="showName">
          Post my name with this opinion.
        </label>
      </div>
    </div>

    <div class="form-group col-sm-4">
      <div class="form-check py-4">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="wantsNewsletter"
          name="wantsNewsletter" />
        <label class="form-check-label" for="isAnonymous">
          Add me to the email newsletter.
        </label>
      </div>
    </div>
  </div> 

  <div class="d-flex align-items-center justify-content-center">
    <div class="col-md-2">
      <button type="submit" class="btn btn-lg btn-primary btn-block">
        Submit
      </button>
    </div>
  </div>

</form> -->

