<template>
  <div class="banner">
    <div class="container">
      <div class="text-content">
        <h1 class="heading">Keep it Simple</h1>
        <h2 class="heading sub">
          Bringing ideas to life through code and<br> Design<br>
        </h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Banner'
}
</script>
<style lang="scss" scoped>
  .banner{
    background-image: url('../assets/pc-screen.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left top;
    padding: 150px 0 150px 0;
    .container{
      max-width: 1200px;
    }
    .text-content{
      text-align: left;
      color: #FFFFFF;
      .heading{
        &:not(.sub){
          font-size: 92px;
        }
        &.sub{
          font-size: 42px;
          padding-top: 20px;
        }
      }
    }
  }
</style>
