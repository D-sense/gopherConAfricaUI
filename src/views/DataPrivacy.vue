<template>
  <div>
    <Header> </Header>

    <div class="container content col-lg-9 col-md-5 col-sm-5 col-xs-12">
        <h2>How We Use Your Data</h2>

        <p class="outter_section">
            This document sets out the privacy policy of all the personal data exchanged between <i>gophercon2020</i> and 
            <i>You</i> when <i>You</i> purchase a <i>Ticket</i>, register for any session or subscribe to the <i>Newsletter</i>.
        </p>

        <h2>Personal Data</h2>
        <p class="outter_section">
            <i>You</i> hereby give <i>Your</i> consent for <i>nectarhub.io</i> to collect, process and use <i>Your</i> personal data for the purposes of 
            processing the purchase of Your <i>Ticket</i>, the registration for any event or Conference or subscription to the <i>Newsletter</i> 
            and for any other use to which You have consented on behalf of <i>gopherconafrica2020</i>.
        </p>
        <p class="outter_section">
            You acknowledge and accept that Your data will be used for commercial purposes in accordance 
            with these terms and conditions and will be retained and stored for this purpose as long as 
            Participants and future Participants will need information about sessions at gopherconAfrica2020.
        </p>
        <p class="outter_section">
            In accordance with the General Data Protection Regulation (EU) 2016/679, 
            You have a permanent right to access, modify, amend, and delete your data. 
            In order to exercise this right, please contact the Organizer at <span class="email">gopherconafrica@nectarhub.io</span>
        </p>



         <h2>Newsletter</h2>
         <p class="outter_section">
            You can unsubscribe from the newsletter by checking and clicking on the footer of the current email and clicking on the unsubscribe link.
        </p>

        <p class="outter_section">
            Participants are subscribed to gopherconafrica2020 Newsletter. 
            The Newsletter content holds information that are essential to guarantee Participants safe and enjoyable Conferences.
            Participants can subscribe and unsubscribe to the newsletter anytime.
        </p>

        <h2>Badges</h2>
        <h5>What happens when my badge scanned is scanned?</h5>
         <p class="outter_section">
             You have a QR code on your attendee badge. The partners' staff can scan your badge 
             to keep your contact details and re-contact you. By allowing them to scan your badge, 
             you consent to the processing of your personal data for the purposes mentioned below. 
             Remember that the scan of your badge is optional!
        </p>

        <h5>Why?</h5>
        <div class="section">
            <li> To allow them to contact you after the conference: </li>
            <div class="list-object">
                <li> for example, to resume a conversation you had started, or to give you more 
                    information about a service for which you have expressed interest</li>
                <li> as part of a recruitment process</li>
            </div>
            <li> To participate in a raffle organized by one of our partners</li>
        </div>
        
        <h5>What data is transmitted to the partner with the scan of my badge?</h5>
        <div class="section">
            <li> Your contact details: your first name, last name, email address, job, company</li>
            <li> The name of the person who scanned your badge and any notes they may have taken during your interview</li>
        </div>

        <h5>For whom?</h5>
        <p class="outter_section">
            Only the staff of our partners can scan your badge! And each partner will only receive 
            the details of the attendees who were scanned by their staff during the conference. 
            Then the partner becomes the data controller. 
            We will not forward your data to any other company!
        </p>

        <h5>Do we keep a record of which partner scanned you?</h5>
        <p class="outter_section">
            No, we delete the scans after sending them to each partner.
        </p>

        <h6>How can I exercise my rights of access, opposition and deletion of my data?</h6>
        <p class="outter_section">
           When the partner communicates with you by email, you may exercise your rights directly with 
           its staff and in particular, 
           inform them of your wish to no longer receive communications from them or that they delete all your data.
        </p>

        <h2>Contact us</h2>
        <p class="outter_section">
           You contact the Organizer at <span class="email">gopherconafrica@nectarhub.io</span>
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
.list-object{
    margin-left: 25px;
}

h2, h3 , h4 , h5 {
    margin-top: 30px;
}
h4 , h5 {
    font-size: 25px;
}
</style>
