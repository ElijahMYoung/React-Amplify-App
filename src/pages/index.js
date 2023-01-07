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
    </div>
  );
}

export default Home;
