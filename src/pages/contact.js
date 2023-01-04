function Contact() {
  return (
    <div className="contact">
      <form class="container">
        <div class="contact-body">
          <div class="contact-left"></div>
          <div class="contact-right">
            <h2>Contact Us</h2>
            <input
              type="text"
              class="inputf"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              class="inputf"
              placeholder="Your Email"
              required
            />
            <input
              type="text"
              class="inputf"
              placeholder="(XXX)-XXX-XXXX"
              required
            />
            <textarea
              class="inputf area"
              placeholder="Your Message"
              required
            ></textarea>
            <button class="send">Send Your Owl</button>
          </div>
        </div>
      </form>
      <footer class="footer-distributed">
        <div class="footer-right">
          <a
            href="https://www.facebook.com"
            aria-label="Facebook"
            class="fa fa-facebook"
          >
            {" "}
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            class="fa fa-twitter"
          >
            {" "}
          </a>
          <a
            href="https://www.instagram.com"
            aria-label="Instagram"
            class="fa fa-instagram"
          >
            {" "}
          </a>
          <a
            href="https://www.snapchat.com"
            aria-label="Snapchat"
            class="fa fa-snapchat-ghost"
          >
            {" "}
          </a>
        </div>
        <div class="footer-left">
          <p class="footer-links">
            <a class="link-1" href="index.html">
              Home
            </a>
            <a href="products.html">Products</a>
            <a href="contact.html">Contact Us</a>
          </p>
          <p>Waxing Wandlight &copy; 2022</p>
        </div>
      </footer>
    </div>
  );
}
export default Contact;
