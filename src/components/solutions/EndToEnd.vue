<template>
  <div class="container">
    <section class="solutions">
      <router-link to="/solutions/web-services-development" class="solution" tag="div">
        <div class="img-container">
          <img :src="require('../../assets/feature-web.jpg')" alt="Web services development" class="filter">
        </div>
        <div class="text-content">
          <p class="text">
            Web Services<br>
            Development
          </p>
        </div>
      </router-link>
      <router-link to="/solutions/data-migration-and-analysis" class="solution" tag="div">
        <div class="img-container">
          <img :src="require('../../assets/feature-data-analysis.jpg')" alt="Data Migration and Analysis" class="filter">
        </div>
        <div class="text-content">
          <p class="text">
            Data Migration and Analysis
          </p>
        </div>
      </router-link>
      <router-link to="/solutions/end-to-end-solutions" class="solution" tag="div">
        <div class="img-container">
          <img :src="require('../../assets/feature-iot.jpg')" alt="End-to-end Solutions">
        </div>
      </router-link>
      <router-link to="/solutions/customer-support-automation" class="solution" tag="div">
        <div class="img-container">
          <img :src="require('../../assets/feature-robot.jpg')" alt="Customer Support Automation" class="filter">
        </div>
        <div class="text-content">
          <p class="text">
            Customer Support Automation
          </p>
        </div>
      </router-link>
    </section>
    <div class="description">
      <h2 class="heading">
        End-to-end Solutions with API, client and IoT
      </h2>
      <p class="text">
        We work on end-to-end solutions as a way to ensure that all steps within an operational chain can be carried out efficiently and that the activity is successful. All this so that the end user can enjoy a quality product or service, with quick responses and smooth operation. With a multidisciplinary team focused on solving real problems, we work to make a complete delivery, from end to end.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Solutions'
}
</script>
<style lang="scss" scoped>
  .solutions{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 20px;
    padding: 80px 0;
    .section-header{
      grid-column: span 12;
      text-align: left;
      .heading{
        color: #000000;
        font-size: 28px;
      }
    }
    .solution{
      position: relative;
      display: block;
      grid-column: span 12;
      text-align: left;
      color: #000000;
      transition: 0.2s ease-in-out;
      cursor: pointer;
      border-radius: 10px;
      overflow: hidden;
      &:hover{
        position: relative;
        transform: translateY(-10px);
        img.filter{
          filter: grayscale(0);
        }
      }
      @media screen and (min-width: 768px){
        grid-column: span 6;
      }
      @media screen and (min-width: 992px){
        grid-column: span 3;
      }
      img{
        height: 180px;
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
        &.filter{
          filter: grayscale(100%);
        }
      }
      .text-content{
        background-color: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        .text{
          font-size: 20px;
          color: #FFFFFF;
          line-height: 24px;
          padding: 0 40px;
        }
      }
    }
  }
  .description{
    text-align: left;
    .heading{
      color: #000000;
      font-size: 32px;
      padding-bottom: 20px;
    }
    .text{
      padding-bottom: 20px;
      font-size: 18px;
      line-height: 24px;
    }
  }
</style>
