export default function Contact() {
return (
<section className="contact-section">
<h2>Contact Me</h2>
<p>
If you have an application you are interested in developing, a feature that you need built, or a project that needs coding,
I’d love to help with it!
</p>
<form className="contact-form">
<input type="text" placeholder="Your Name" required />
<input type="email" placeholder="Your Email" required />
<textarea placeholder="Write your message here..." required></textarea>
<button className="btn-contact" type="submit">Get in Touch</button>
</form>
</section>
);
}