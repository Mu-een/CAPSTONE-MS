<template>
  <NavBarC/>
  <!-- landing page -->
  <div class="landingPage">
    <div class="container-fluid d-flex justify-content-center align-items-center" style="height: 50vh;">
    <div class="row">
      <h1 class="display-1 text-center">CHAMP OF CHAMPS BOXING</h1>
    </div>
  </div>
  </div>
  <br>

  <!-- about -->
<section class="about">
  <h2 class="text-center display-2">ABOUT US</h2>
  <div class="aboutUs">
    <p>Welcome to <strong>CHAMP OF CHAMPS BOXING</strong>, where fame meets fury! 
      We are the premier destination for thrilling entertainment featuring your favourite celebrities stepping into the ring 
      for intense boxing matches.</p>
    <p>Our events are designed to showcase the physical prowess of our celebrity fighters while 
      providing an immersive experience for our audience. From the ring setup to the lighting and sound,
      we ensure that every detail is carefully crafted to create an unforgettable event.</p>
    <p>We believe in promoting sportsmanship, integrity, and respect within our events and beyond.
      Our training programs and coaching services help our celebrity fighters prepare for their bouts and achieve their full potential.</p>
    <p>We are committed to delivering exceptional quality production for each of our events. Our team works tirelessly to ensure that every 
      aspect of the event is executed flawlessly, creating a seamless and professional experience for our audience.</p>
    <p>Thank you for visiting our website and supporting our mission to provide exciting entertainment through the world of celebrity boxing.
       We look forward to seeing you at our next event!</p>
  </div>
</section>

<!-- promoted events carousel-->
<h2 class="text-center display-2">PROMOTED FIGHTS</h2>
<p class="text-center" style="font-size: 20px;">Check out some of our main events!</p>
  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.postimg.cc/15GzJgyZ/elba-VSjohnson.jpg" class="d-block" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/rFXm1GXJ/majors-VSjordan.jpg" class="d-block" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev text-dark" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <i class="bi bi-caret-left-fill"></i>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next text-dark" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <i class="bi bi-caret-right-fill"></i>
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div><br>

<!-- contact us -->
<h2 class="text-center display-2">CONTACT US</h2>
<p class="text-center" style="font-size: 20px;">We value your feedback and would love to hear from you.</p>

<div class="container-fluid">
        <form action="https://formspree.io/f/xjvdvznl" method="POST" role="form" class="w-75 m-5 mx-auto text-center form" style="font-size: 20px;">
            <div class="mb-3 row">
                <div class="col-md-6 form-group">
                    <label for="fname" class="form-label fname">First Name</label>
                    <input type="text" name="name" class="form-control" placeholder="Type your name here .." required="required" data-error="First Name is needed">
                    <div class="help-block with-errors"></div>
                </div>
                <div class="col-md-6 form-group">
                    <label for="lname" class="form-label lname">Last Name</label>
                    <input type="text" name="lastName" class="form-control" placeholder="Type your last name here .." required="required" data-error="Last is needed">
                    <div class="help-block with-errors"></div>
                </div>
         </div>
         <div class="mb-3">
           <label for="message" class="form-label msgBox">Message</label>
           <textarea class="form-control" rows="3" placeholder="Type your message here .." required="required"></textarea>
         </div>
         <div>
            <button type="submit button" class="btn btn-lg">Send</button>
         </div>
        </form>
</div>
<FooterC/>
</template>

<script>
import NavBarC from '@/components/NavBarC.vue';
import FooterC from '@/components/FooterC.vue';
export default {
  name: 'HomeView',
  components: {
    NavBarC,
    FooterC
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

.landingPage {
  background-image: url(https://i.postimg.cc/43BG9sfV/pexels-david-guerrero-2691309-1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  position:relative;
  min-height: 120vh;
}

img {
  height: 700px;
  display: block;
  background-size: cover;
  margin: auto;
  border-radius: 20px;
}

h1 {
  animation-duration: 3s;
  animation-fill-mode: both;
  animation-name: changeColor;
  animation-iteration-count: infinite;
}

@keyframes changeColor {
  0% {
    color: #DCF763;
  }
  50% {
    color: black;
  }
  100% {
    color: #DCF763;
  }
}
.aboutUs {
  font-size: 20px;
  word-wrap: break-word;
  padding: 70px;
}

h2 {
  text-shadow: 2px -2px 2px black;
}
h1 , h2 {
  font-family: 'DM Serif Display', serif;
}
</style>