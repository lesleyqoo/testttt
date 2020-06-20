---
layout: layout.html
---

# Contact us

## via FormSubmit.co

<form name="contact" method="POST" action="https://formsubmit.co/lesleyqoo036@gmail.com" enctype="multipart/form-data">
  <p>
    <label>
      Your Name: 
      <input type="text" name="name" />
    </label>   
  </p>
  <p>
    <label>
      Your Email: 
      <input type="email" name="email" />
    </label>
  </p>
  <p>
    <label>
      Message: 
      <textarea name="message"></textarea>
    </label>
  </p>
  <p>
    <label>
      Attachment:
      <input type="file" name="attachment">
    </label>
  </p>
  <p>
    <input type="hidden" name="_next" value="https://naughty-johnson-6fc73d.netlify.app/thanks">
    <input type="submit" value="Send">
  </p>
</form>

## via Netlify Form

<form name="contact" method="POST" data-netlify="true" enctype="multipart/form-data">
  <p>
    <label>
      Your Name: 
      <input type="text" name="name" />
    </label>   
  </p>
  <p>
    <label>
      Your Email: 
      <input type="email" name="email" />
    </label>
  </p>
  <p>
    <label>
      Message: 
      <textarea name="message"></textarea>
    </label>
  </p>
  <p>
    <label>
      Attachment:
      <input type="file" name="attachment" multiple>
    </label>
  </p>
  <p>
    <input type="submit" value="Send">
  </p>
</form>
