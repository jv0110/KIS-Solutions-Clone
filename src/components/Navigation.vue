<template>
  <nav class="navigation">
    <div class="container">
      <div class="img-container">
        <h1 class="logo">
          <router-link to="/">Logo here</router-link>
        </h1>
      </div>
      <ul class="nav">
        <li class="nav-item" v-for="(item, index) in navItems" :key="index">
          <router-link :to="`/${item.param}`">{{ item.name }}</router-link>
        </li>
        <li class="nav-item square">
          <router-link to="/" active-class="active">EN</router-link>
        </li>
        <li class="nav-item square">
          <router-link to="/br" active-class="active">BR</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navigation',
  data () {
    return {
      navItems: [
        {
          name: 'Solutions',
          param: 'solutions'
        },
        {
          name: 'Company',
          param: 'company'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .navigation{
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 32px;
    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
      @media screen and (min-width: 576px){
        flex-direction: row;
      }
    }
    .img-container{
      flex-grow: 1;
      text-align: left;
    }
    .nav{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .nav-item{
        font-weight: 700;
        font-size: 18px;
        &:not(.square){
          padding: 0 12px;
        }
        &.square{
          font-size: 14px;
          a{
            padding: 6px;
            border: 3px solid #FFFFFF;
          }
          .active{
            color: #000000;
            display: block;
            background-color: #FFFFFF;
          }
        }
      }
      a{
        color: #FFFFFF;
      }
    }
  }
</style>
