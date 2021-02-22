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
          <img :src="require('../../assets/feature-robot.jpg')" alt="Customer Support Automation">
        </div>
      </router-link>
    </section>
    <div class="description">
      <h2 class="heading">
        Web Services Development
      </h2>
      <p class="text">
        For quality customer service, it must be agile, fast and effective. Some tools that work in this direction, such as chatbots, integrated call center systems and SACs, when used efficiently and on a unified platform, optimize the company's communication with its various audiences.
      </p>
      <p class="text">
        Based on the technology offered by our products, it is possible to reduce the performance of people in service processes, which allows teams to dedicate their efforts to cases of greater complexity, reducing time and costs in support areas. In one of our customers, for example, our chatbot solution reduced the first human service by more than 70%. In another case, the call center tool made it possible to unify about ten different systems, including orders, billing, returns, FAQs and wholesale purchases.
      </p>
      <p class="text">
        This is a suitable solution for retail companies, B2C or those that demand a lot of resources in their service areas.
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
