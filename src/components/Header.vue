<template>
     <!-- Navbar Start -->
      <mdb-navbar class="header" style="margin-top: 60px" color="primary" position="top" dark href="#" transparent scrolling>
      <mdb-container>
      <mdbNavbarBrand><a href="/" class="logo">GOPHERCON AFRICA</a></mdbNavbarBrand>  
        

        <mdb-navbar-toggler style="max-width: 1140px">
          
          <mdb-navbar-nav right>
            <div class="dropdown">
              <a class="btn btn-dark-green dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="code-of-conduct">Code of Conduct</a>
                <a class="dropdown-item" href="diversity-statement">Diversity Statement</a>
                <a class="dropdown-item" href="carbon-neutrality">Carbon Neutrality</a>
                <a class="dropdown-item" href="data-privacy">Data Privacy</a>
                <a class="dropdown-item" href="community">Community</a>
                <a class="dropdown-item" href="updates">Updates</a>
              </div>
            </div>
            <mdb-nav-item href="#schedules" waves-fixed>Schedules</mdb-nav-item>
            <mdb-nav-item href="#team" waves-fixed>Speakers</mdb-nav-item>
            <mdb-nav-item href="#sponsors"  waves-fixed>Partners</mdb-nav-item>
            <mdb-nav-item href="#contact-text" waves-fixed>Contact</mdb-nav-item>
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
        
      </mdb-container>
    </mdb-navbar>
      <!-- Navbar End -->  
</template>
 
<script>
import {
    mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle,
     mdbContainer, mdbRow, mdbCol, ViewWrapper, mdbMask, mdbBtn, mdbIcon, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand  } from 'mdbvue';
  export default {
    name: 'VideoBackgroundPage',
    components: {
      mdbContainer,    
      mdbNavbar,
      mdbNavItem,
      mdbNavbarNav,
      mdbNavbarToggler,
      mdbNavbarBrand
    }
}
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

    .logo{
  font-family:"Bangers, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
  font-weight: 1000;
  font-size: 1.5em;
  color: #FF4D79;
  height: 0px;
      width: auto;
      padding-right: 5px;
  font-family: 'Share Tech Mono', monospace;

}
.header{
      margin-top: 0px !important;
      margin-bottom:100px !important;
    }
    /* .logo {
      height: 20px;
      width: auto;
      margin: 10px;
      font-family: 'Share Tech Mono', monospace;

    } */
    .golang_img{
      height: 200px;
      width: 200px;
    }
    #information-bar{
      margin-top: 65px;
    }
    #about{
      margin-top: 65px;
    }
    .banner-btn{
      height: 100px;
    }

    .about-p{
      margin-bottom: 30px;
    }
    .dropdown-menu{
      margin-top: 50px !important;
    }
    
  </style>