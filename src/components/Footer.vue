<template>
  <!-- Footer starts-->
  <mdb-footer class="footer font-small pt-0">
    <mdb-container >
      <mdb-row >
        <mdb-col md="12">
          <div class="mb-3 flex-center">
            <a class="fb-ic"><i class="fab fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <a class="tw-ic"><i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
          </div>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-2">
      <mdb-container fluid>
        &copy; 2019 Copyright: <a href="/"> ReportsPool.com  </a> | built by <a href="https://twitter.com/Delameh"> Adeshina</a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer ends-->
</template>

<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'FooterPage',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>

<style scoped>
.footer{
    margin-top: 150px !important;
    background-color: #2bbbad !important;
}
</style>