<template>
   <div id="app">
      <notifications group="error" />
      <notifications group="success" />
      <notifications group="foo" />
      <router-view></router-view>
   </div>
</template>

<script>
export default {
  name: 'app',
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

i .animatedButton{
    margin: auto; 
    position: absolute; 
    top: 0;  
    bottom: 0; 
    left: 0; 
    right: 0; 
}
ul li.emtpy-form-field{
    color: maroon;
    font-weight: 500;
    font-size: 1.2em
}
.errorMesagebox{
}
</style>
