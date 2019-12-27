<template>
     <!-- Navbar Start -->
      <nav class="navbar navbar-expand-lg bg-inverse fixed-top scrolling-navbar">
        <div class="container">
          
          <!-- Brand and toggle get grouped for better mobile display -->
          <a href="#" class="navbar-brand">GOPHERCON AFRICA 2020</a>       
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <i class="lni-menu"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto w-100 justify-content-end">
              <li class="nav-item active">
                <a class="nav-link" href="#header-wrap">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#schedules">
                  schedules
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#team">
                  Speakers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#gallery">
                  Gallery
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#pricing">
                  pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#sponsors">
                  Sponsors
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#google-map-area">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- Navbar End -->  
</template>
 
<script>
</script>

<style scoped>
    .logo {
      height: 40px;
      width: auto;
      margin: 10px;
    }

    .menu {
      text-align: end;
      padding-right: 0.5em;
    }

    .hm-gradient {
      background: linear-gradient(40deg, rgba(0,51,199,.3), rgba(209,149,249,.3));
    }

    .navbar {
      background: linear-gradient(40deg, rgba(0,51,199,.3), rgba(209,149,249,.3));
      box-shadow: 0 0 0 0 transparent;
      margin-top: 50px;
    }

    .navbar:not(.top-nav-collapse) {
      background: transparent;
    }

    .row {
      margin: 0;
      padding:0;
    }

    .column {
      margin: 0;
      padding: 0;
    }

    .half-page {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      padding: 0 6rem;
    }

    .heading {
      font-weight: 700;
      color: #5d4267;
    }

    .subheading {
      margin: 2.5rem 0;
      color: #bcb2c0;
      font-size: 1.5rem;
    }

    .btn-lily {
      background: linear-gradient(40deg, rgba(0,51,199,.7), rgba(209,149,249,.7));
    }

    .image {
      width: 100%;
    }

    .paragraph {
      padding: 3rem 1.5em;
    }

    @media screen and (max-width: 770px) {
      .half-page {
        padding:2rem;
      }

      .navbar {
        position: relative;
        margin-top: 5px;
      }
      .navbar:not(.top-nav-collapse) {
          background: linear-gradient(40deg, rgba(0,51,199,.3), rgba(209,149,249,.3));
      }
    }

    @media screen and (max-width: 400px) {
      .half-page {
        padding: 1rem;
      }
    }

    @media screen and (max-width: 320px) {
      .heading {
        font-size: 4em;
      }
    }
  </style>