---
layout: layout
---

# Contact us

The following form is using FormSubmit.co.
<style>
  #workemail {display: none;}
</style>

<form action="https://formsubmit.co/mak@makzan.net" method="post">
  <p>
    <label>Name:
      <input type="text" name="name">
    </label>    
  </p>
  <p>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">    
    <input type="email" id="workemail" name="_honey">
  </p>
  <p>
    <label for="content">Content:</label>
    <textarea name="content" id="content"></textarea>
  </p>
  
  <input type="hidden" name="_next" value="https://demo-20200516.netlify.app/thanks">
  <input type="hidden" name="_captcha" value="false">
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
