<template>
  <section class="solutions container">
    <header class="section-header">
      <h2 class="heading"> Solutions </h2>
    </header>
    <router-link :to="`/solutions${solution.path}`" class="solution" v-for="(solution, index) in solutions" :key="index" tag="div">
      <div class="img-container">
        <img :src="`${solution.img}`" :alt="`${solution.title}`">
      </div>
      <div class="text-content">
        <h2 class="heading">
          {{ solution.title }}
        </h2>
        <p class="text">
          {{ solution.info }}
        </p>
      </div>
    </router-link>
  </section>
</template>
<script>
export default {
  name: 'Solutions',
  data () {
    return {
      solutions: [
        {
          img: require('../assets/feature-web.jpg'),
          title: 'Web Services Development',
          info: 'With intelligent and logical solutions, we resolve issues that go beyond the basics, translating a business idea into something more technical, without any loss in the process.',
          path: '/web-services-development'
        },
        {
          img: require('../assets/feature-data-analysis.jpg'),
          title: 'Data Migration and Analysis',
          info: 'In the migration, analysis and consolidation of databases, we work with strategies such as data sanitization and data remapping through a feed structure.',
          path: '/data-migration-and-analysis'
        },
        {
          img: require('../assets/feature-iot.jpg'),
          title: 'End-to-end Solutions',
          info: 'Our teams are multidisciplinary and work on end-to-end solutions as a way to ensure that all stages of an operational chain can be carried out efficiently and successfully.',
          path: '/end-to-end-solutions'
        },
        {
          img: require('../assets/feature-robot.jpg'),
          title: 'Customer Support Automation',
          info: 'Our customer service technologies and chatbots streamline processes and allow teams to dedicate their efforts to more complex cases, reducing time and costs in support areas.',
          path: '/customer-support-automation'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .solutions{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 20px;
    padding: 80px 16px;
    .section-header{
      grid-column: span 12;
      text-align: left;
      .heading{
        color: #000000;
        font-size: 28px;
      }
    }
    .solution{
      grid-column: span 12;
      text-align: left;
      color: #000000;
      transition: 0.2s ease-in-out;
      cursor: pointer;
      &:hover{
        position: relative;
        transform: translateY(-10px);
        img{
          opacity: 0.9;
        }
      }
      @media screen and (min-width: 768px){
        grid-column: span 6;
      }
      @media screen and (min-width: 1200px){
        grid-column: span 3;
      }
      img{
        height: 180px;
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
      .text-content{
        text-align: center;
        @media screen and (min-width: 768px){
          text-align: left;
        }
        .heading{
          font-size: 32px;
          padding-top: 10px;
          padding-bottom: 20px;
        }
        .text{
          font-size: 18px;
          color: #5a5a5a;
          line-height: 24px;
        }
      }
    }
  }
</style>
