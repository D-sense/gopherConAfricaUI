<template>
  <div>
    <Header> </Header>

    <div class="container content col-lg-9 col-md-5 col-sm-5 col-xs-12">
        <h2>Carbon Neutrality</h2>

        <p class="outter_section">
            To support the United Nations global goals in line with the reduction of carbon emission and greenhouse gases, 
            the GopherconAfrican team would do our best to ensure we reduce our carbon footprint on the environment 
            and we’d buy carbon offsets to compensate what’s left -mostly on international and local travels- 
        </p>

        <p class="outter_section">
           As we strive to make our conference attendees feel good we also want to make our environment and indeed the globe feels go too! 
        </p>

        <p class="outter_section">
             Our carbon calculator would be useful and the results published at the end of the conference. We’d know our carbon credit value and our offset - we might even reserve some for the next host city.
        </p>

         <p class="outter_section">
             Send an email to  <span class="email">gopherconafrica@nectarhub.io</span> to learn more.
        </p>

    </div>
    </div>    
</template>

<script>
import Header from '../components/Header.vue'

import { mapGetters } from 'vuex';

export default {
  name: 'CarbonNeutrality',
  components: {
      Header,
  }
}
</script>

<style scoped>

.content{
     margin-top: 150px;
     margin-bottom: 100px;
     padding: 50px;
     -webkit-box-shadow: 3px 3px 5px 6px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
     -moz-box-shadow:    3px 3px 5px 6px #ccc;  /* Firefox 3.5 - 3.6 */
     box-shadow:         3px 3px 5px 6px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
}
.header{
    color:red !important;
    background-color: black !important;
}

.head{
    font-size: 22px;
    margin-top: 30px;
}

.section{
    padding: 5px;
    font-size: large !important;
    margin-left: 20px; 
    line-height: 30px;
}

.outter_section{
    font-size: large !important;
    margin-top: 10px;
    word-wrap: break-word;
}

span.email{
   color: blue;
}
</style>
