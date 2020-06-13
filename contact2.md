---
layout: layout
---

# Contact us

The following form is using FormSubmit.co.

<form action="https://formsubmit.co/testttt.net" method="post">
  <p>
    <label>Name:
      <input type="text" name="name">
    </label>    
  </p>
  <p>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">    
  </p>
  <p>
    <label for="content">Content:</label>
    <textarea name="content" id="content"></textarea>
  </p>
  <input type="submit" value="Send Form">
</form>

The following form is using Netlify form.

<form data-netlify="true" action="/thanks" method="post">
  <p>
    <label>Name:
      <input type="text" name="name">
    </label>    
  </p>
  <p>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">    
  </p>
  <p>
    <label for="content">Content:</label>
    <textarea name="content" id="content"></textarea>
  </p>
  <input type="submit" value="Send Form">
</form>
