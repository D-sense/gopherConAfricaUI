<template>
  <div>
    <Header> </Header>

    <div class="container content col-lg-9 col-md-5 col-sm-5 col-xs-12">
        <h2>Commitment to Diversity, Equity, Inclusion & Belonging.</h2>

        <p class="outter_section">
            The GopherconAfrica2020 organizing committee recognizes its responsibility to 
            uphold values of diversity, inclusion, equity and belonging. GopherconAfrica believes in the 
            power of individual uniqueness and respects, celebrate and uphold our similarities to accommodate 
            our differences. We value and celebrate diverse perspectives and strives to provide a collaborative, 
            welcoming, and productive conference environment for all. 
        </p>

        <p class="head">
            Please note that Our diversity commitment would be enforced both online and offline.
        </p>

        <p class="head">
            The following resources can be requested at event registration, both in-person and online:
        </p>
        <div class="section">
            <li>
                Accommodations will be made for common dietary restrictions for official conference events where food is served. This includes accommodations for vegan, vegetarian, gluten-free, and dairy-free. We will also do our best to accommodate other restrictions on a case-by-case basis.
            </li>
            
            <li>
                Preferred seating at conference sessions due to conditions including, but not limited to:
                <div class="list-object"> 
                    <li> Mobility limitations</li>
                    <li> Visual and/or hearing impairments</li>
                </div>
            </li>
            
            <li>
                Sign-language / Live captioning
            </li>

                <li>
                Childcare 
                </li>

                <li>
                    Organizers will strive to meet other needs raised by participants on a case-by-case basis.
                </li>
        </div>

            <p class="head">
            Additional resources available at the conference:
            </p>
            <div class="section">
            <li> Pronoun stickers for name badges </li>

            <li> Lactation space </li>
            
            <li> Quiet area</li>
                
            <li> Gender-neutral restrooms </li>

            <li> Presentation preparation area </li>
            
            <li> First aid at the registration desk</li>
            </div>

            <p class="head">
            Financial aid opportunities
            </p>
            <div class="section">
            <li> Diversity Scholarships</li>
            </div>   

        <p class="outter_section">
            During the conference, please contact the event staff if in need of additional resources. Event staff can be identified by t-shirts/staff badges onsite and an organizer can be found at the event registration counter at any time.
        </p>

        <p class="outter_section">
            You can also contact the GopherconAfrica2020  Diversity, Equity, Inclusion and Belonging Team before, during, 
            or after the event at <span class="email"> alimieyitayo@nectarhub.io</span> or <span class="email">gopherconafrica@nectarhub.io</span>
        </p>
                
                

    </div>
    </div>    
</template>

<script>
import Header from '../components/Header.vue'

import { mapGetters } from 'vuex';

export default {
  name: 'DiversityStatement',
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

.list-object{
    margin-left: 25px;
}
</style>
