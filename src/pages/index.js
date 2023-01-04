import "../components/slider/slider.css";
import "../components/slider/sliderrepeater.js";
import "../components/slider/sliderManual.js";

function Home() {
  return (
    <div className="Home">
      <section class="slider">
        <div class="slides">
          <div class="slide active">
            <img src="Images/Slider0.jpg" alt="a wand on a book" />
          </div>
          <div class="slide">
            <img src="Images/Slider1.jpg" alt="a wand on a book" />
          </div>
          <div class="slide">
            <img src="Images/Slider2.jpg" alt="a wand on a book" />
          </div>
          <div class="slide">
            <img src="Images/Slider3.jpg" alt="a wand on a book" />
          </div>
          <div class="slide">
            <img src="Images/Slider4.jpg" alt="a wand on a book" />
          </div>
          <div class="slide-manual">
            <div class="btn active"></div>
            <div class="btn"></div>
            <div class="btn"></div>
            <div class="btn"></div>
            <div class="btn"></div>
          </div>
        </div>
      </section>
      <div class="paragraph-container">
        <p>
          Waxing Wandlight consists of the world's greatest wand makers. We put
          time and care into each of our works, guaranteeing our customers
          unique and powerful wands.
        </p>
      </div>
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
            <a href="products.html"> Products</a>
            <a href="contact.html"> Contact Us</a>
          </p>
          <p>Waxing Wandlight &copy; 2022</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
