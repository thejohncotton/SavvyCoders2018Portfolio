export default function() {
    return `<div class="container header">
<h1>Contact:</h1>
</div>
<div class="container content-area"id="contact-content">
    <!--
The action attribute defines where on the server the form data should be sent
The method attribute specifies the HTTP method (GET or POST)
-->

<form action="//formspree.io/john@johncotton.us" method="POST" class="form">

<input type="text" name="firstname" placeholder="First Name" autofocus required><br>
<input type="text" name="lastname" placeholder="Last Name" required><br>
<input type="email" name="userEmail" placeholder="email@example.com"><br>

<div class="radio-group">What's this message about?<br>
<input type="radio" name="subject" value="professional" ><label for="professional">I'd like to hire you!</label><br>
<input type="radio" name="subject" value="personal" ><label for="personal">Personal message</label><br>
<input type="radio" name="subject" value="other" ><label for="other">Don't know/something else</label><br>
</div>

<label for="marketing">How did you hear about me?</label><br><br>
<select name="marketing">
<optgroup label="Online">
    <option value="social">Social Media (FB, Twitter, LinkedIn)</option>
    <option value="github">Online Portfolio (GitHub)</option>
    <option value="search">Search Engine</option>
    <option value="email">Email</option>
</optgroup>
<optgroup label="In-Person">
    <option value="networking">We met at a networking event</option>
    <option value="referral">Personal referral</option>
    <option value="random">We met somewhere else</option>
</optgroup>
<option value="other">Other</option>
</select><br>

<textarea name="user_message" ></textarea><br>
<input type="submit" id="form-submit">
</form>
</div>`
}