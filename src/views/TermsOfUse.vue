<template>
 <div class=" container col-lg-5 col-md-5 col-sm-5 col-xs-12">
    <div class="kt-portlet p-5 mt-5">
        <div class="kt-portlet__body kt-portlet__body--fit">
            <div class="kt-grid__item kt-grid__item--fluid kt-wizard-v3__wrapper">
               <div class="right menu container">
                <div>
                    <h2>Success!</h2>
                    <h4>
                        Your account has been created successfully. 
                    </h4>
                </div>
                <a href="/login" class="kt-font-bold mt-2 text-left">
                        <h5> Login page </h5>
                    </a>
              </div>     
            </div>
        </div>
    </div>
 </div>   
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TermOfUse',
}
</script>

<style>

</style>
