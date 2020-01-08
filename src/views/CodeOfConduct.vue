<template>
  <div>
    <Header> </Header>

    <div class="container content col-lg-9 col-md-5 col-sm-5 col-xs-12">
        <h2>GopherConAfrica 2020 Code of Conduct.</h2>

        <img class="img-fluid" src="../assets/img/gophers.png" />
        
        <p class="outter_section">
            The organizers of GopherconAfrica - Lagos 2020 are dedicated to providing 
            a harassment-free conference experience for everyone regardless of age, gender, 
            sexual orientation, disability, physical appearance, race, ethnicity, community, 
            stack, technologies or religion (or lack thereof).
        </p>
        <p class="outter_section">
            All participants (including attendees, speakers, partners and volunteers) 
            at GopherconAfrica - Lagos 2020 are required to agree to the following code of conduct.
        </p>

        <p class="outter_section">
           The code of conduct applies to all conference activities including talks, panels, workshops, and social events. 
           It extends to conference-specific exchanges on social media, for instance, posts tagged with the identifier of 
           the conference (e.g. #gopherconafrica2020 on Twitter), replies to such posts and replies to the official social 
           media account (e.g. <span class="email">@gopherconafrica</span> on Twitter) or all other accounts 
        </p>

         <p class="outter_section">
           Organizers will enforce this code throughout and expect cooperation in ensuring a safe environment for all.
        </p>

        <h4>
            Expected Behavior
        </h4>

        <p class="head">
           All conference participants agree to:
        </p>
        <div class="section">
            <li>
                Be considerate in language and actions, and respect the boundaries of fellow participants.
            </li>
            
            <li>
                Refrain from demeaning, discriminatory, or harassing behaviour and language. 
                Please refer to Unacceptable Behavior for more details.
            </li>
            
            <li>
                Alert a member of the staff or organizing team, identifiable by t-shirt & badge (further description pending), if you notice someone in distress, or observe violations of this code of conduct, even if they seem inconsequential. Please refer to the section titled, 
                ‘’What To Do If You Witness or Are Subject To Unacceptable Behavior’’ for more details.
            </li>
        </div>

        <h3>
            Unacceptable Behavior
        </h3>
         <p class="head">
           Behaviour that is unacceptable includes, but is not limited to:
        </p>
        <div class="section">
            <li> Stalking </li>

            <li> Deliberate intimidation </li>
            
            <li> Unwanted photography or recording</li>
                
            <li> Sustained or willful disruption of talks or other events </li>

            <li> Use of sexual or discriminatory imagery, comments, or jokes  </li>
            
            <li> Offensive comments related to age, gender, sexual orientation, disability, race or religion</li>

            <li> Inappropriate physical contact, which can include grabbing, or massaging or hugging without consent.</li>

            <li> Unwelcome sexual attention, which can include inappropriate questions of a sexual nature, asking for sexual favours or repeatedly asking for dates or contact information.</li>
        </div>

        <p class="outter_section">
           If you are asked to stop harassing behaviour you should stop immediately. Even if your behaviour was meant to be friendly or a joke, it was clearly not taken that way and for the 
           comfort of all conference attendees, you should stop.
        </p>

        <p class="outter_section">
           Attendees who behave in a manner deemed inappropriate are subject 
           to actions listed under Procedure for Code of Conduct Violations.
        </p>
        
        <h3>
            Additional Requirements for Conference Contributions
        </h3>

        <p class="outter_section">
           Presentation slides and posters should not contain offensive or sexualised material. 
           If this material is impossible to avoid given the topic (for example using contents 
           from offensive an or controversial sites or documents) the existence of this material 
           should be noted in the abstract and, in the case of oral contributions, at the start of the talk or session.
        </p>
        

        <h3>
            Additional Requirements for partners
        </h3>
        <p class="outter_section">
           partners should not use sexualized images, activities, or other material. 
           Booth staff (including volunteers) should not use sexualised clothing/uniforms/costumes 
           or otherwise create a sexualised environment. In case of violations, 
           sanctions may be applied without return of partnership contribution.
        </p>

        
    </div>
   </div>    
</template>

<script>
import Header from '../components/Header.vue'

import { mapGetters } from 'vuex';

export default {
  name: 'CodeOfConduct',
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
