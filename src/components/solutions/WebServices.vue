<template>
  <div class="container">
    <section class="solutions">
      <router-link to="/solutions/web-services-development" class="solution" tag="div">
        <div class="img-container">
          <img :src="require('../../assets/feature-web.jpg')" alt="Web services development">
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
          <img :src="require('../../assets/feature-iot.jpg')" alt="End-to-end Solutions" class="filter">
        </div>
        <div class="text-content">
          <p class="text">
            End-to-end Solutions
          </p>
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
        Web Services Development
      </h2>
      <p class="text">
        Creating or improving products and processes, within a corporation, requires complex ideas and actions that are often difficult to resolve. For situations like these, we bring smart and logical solutions that solve issues that go beyond the basics. Our commitment, in this sense, is to translate a business idea into something more technical, without any loss to the business itself, improving performance and reducing costs.
      </p>
      <p class="text">
        Among our proposals are to simplify, optimize and automate more complex processes and routines within a company, while still offering the necessary support to users of the tool, whether internal or external.
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
