<template>
 <div> 

  <section>
    <mdb-row class="form-light row d-flex justify-content-center">
      <mdb-col md="4">
        <mdb-card>
          <div class="text-center">
              <a href="/"> <img class="logo" src="https://mdbootstrap.com/img/logo/mdb-transparent.png" alt="mdb logo"></a>
          </div>
          <mdb-card-body class="mx-10">
            <div class="text-center">
              <h3 class="green-text mb-9"><strong>Login</strong></h3>
            </div>

            <div class="row kt-heading kt-heading--sm kt-heading--thin m-0">
              <p v-if="errors.length" class="errorMesagebox">
                  <b>Please correct the following error(s):</b>
                      <ul>
                          <li v-for="error in errors" v-bind:key="error" class="emtpy-form-field">
                          {{error}}
                          </li>
                      </ul>
                  </p>
            </div>

            <form class="kt-form p-0"
                id="app"
                @submit="handleLogin"
                action="https://vuejs.org/"
                method="post"
                novalidate="true"
            >
               <mdb-input label="Your email" type="text" v-model="form['email']" />
               <mdb-input label="Your password" type="password" v-model="form['password']"/>
            </form>   
           
            <mdb-row class="d-flex align-items-center mb-4">
              <mdb-col md="6" class="text-center">
                <button type="button" class="btn btn-green btn-block btn-rounded z-depth-1"
                @click="handleLogin" 
                :disabled="state.isButtonSending" 
                >
                  Login
                  <i class="animatedButton"> 
                      <font-awesome-icon :icon="['fas', 'spinner']" pulse v-show="state.isButtonSending" /> 
                  </i>
                </button>
              </mdb-col>
              <mdb-col md="6">
                <p class="signup-link font-small grey-text d-flex justify-content-end">Don't have an account? <a href="/signup" class="blue-text ml-1"> Sign up</a></p>
              </mdb-col>
            </mdb-row>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </section>

  <Footer> </Footer>
 </div> 
</template>


<script>
  import {mapActions} from 'vuex';
  import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbInput } from 'mdbvue';
  import Footer from '../components/Footer.vue'

  export default {
    name: 'Login',
    components: {
      Footer,
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardBody,
      mdbInput,
    },
    data(){
        return {
            errors: [],
            form: {
                email: "",
                password: ""
            },
            state: {
                isButtonSending: false
            }
        }
    },
    methods: {
        ...mapActions(['login', 'logout']),
        handleLogin(e){
            e.preventDefault();
            
            this.errors = [];

            if(!this.form['email']) {
                this.errors.push('Email is required.');
            }
            if(!this.form['password']) {
                this.errors.push('Password is required.');
            }

            if (this.errors.length <= 0) {
                this.state.isButtonSending = true;
                this.login(this.form).then(() => {
                    this.state.isButtonSending = false
                }).catch(() => {
                    this.state.isButtonSending = false
                });
            }
        }
    }
  }
</script>

<style scoped>
  .logo{
    padding: 30px;
    width:150px;
    height:100px;
  }

  section {
    margin-top: 150px;
  }
  .form-light .font-small {
    font-size: 0.8rem; 
    }

  .form-light [type="radio"] + label,
  .form-light [type="checkbox"] + label {
    -size: 0.8rem; }

  .form-light [type="checkbox"] + label:before {
    top: 2px;
    width: 15px;
    height: 15px; }

  .form-light input[type="checkbox"] + label:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 17px;
    height: 17px;
    z-index: 0;
    border-radius: 1px;
    margin-top: 2px;
    -webkit-transition: 0.2s;
    transition: 0.2s; }

  .form-light input[type="checkbox"]:checked + label:before {
    top: -4px;
    left: -3px;
    width: 12px;
    height: 22px;
    border-style: solid;
    border-width: 2px;
    border-color: transparent #EB3573 #EB3573 transparent;
    -webkit-transform: rotate(40deg);
    -ms-transform: rotate(40deg);
    transform: rotate(40deg);
    -webkit-backface-visibility: hidden;
    -webkit-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    transform-origin: 100% 100%; }

  .form-light .footer {
    border-bottom-left-radius: .3rem;
    border-bottom-right-radius: .3rem; 
  }

  @media screen and (max-width: 620px) {
      .signup-link {
        margin-top: 3em;
      }
    }
</style>