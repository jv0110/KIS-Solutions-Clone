<template>
  <section class="partners container">
    <header class="section-header">
      <h2 class="heading">Partners</h2>
    </header>
    <div class="items">
      <div class="item">
        <img :src="require('../assets/logo-estee.png')" alt="Estee">
      </div>
      <div class="item">
        <img :src="require('../assets/logo-rocky.png')" alt="Rocky">
      </div>
      <div class="item">
        <img :src="require('../assets/logo-jujotech.png')" alt="Jujotech">
      </div>
      <div class="item">
        <img :src="require('../assets/logo-pyrl.png')" alt="Pyrl">
      </div>
      <div class="item">
        <img :src="require('../assets/logo-spaces.png')" alt="Spaces">
      </div>
      <div class="item">
        <img :src="require('../assets/logo-staples.png')" alt="Staples">
      </div>
      <div class="item">
        <img :src="require('../assets/logo-wellness.png')" alt="Wellness">
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Partners'
}
</script>
<style lang="scss" scoped>
  .partners{
    padding: 80px 16px 40px 16px;
    color: #000000;
    @media screen and (min-width: 768px){
      text-align: left;
    }
    .section-header{
      .heading{
        font-size: 28px;
        padding-bottom: 20px;
      }
    }
    .items{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      @media screen and (min-width: 768px){
        flex-wrap: initial;
      }
    }
  }
</style>
