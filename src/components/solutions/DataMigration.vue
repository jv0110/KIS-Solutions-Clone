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
          <img :src="require('../../assets/feature-data-analysis.jpg')" alt="Data Migration and Analysis">
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
        Data Migration and Analysis
      </h2>
      <p class="text">
        For reasons like performance, costs or business intelligence are very important during a database redesign process. At this point, it is necessary to take into account the improvement in processing time, the reduction of costs and the union of data that, when together, can generate new information relevant to your future strategies and market positioning.
      </p>
      <p class="text">
        For this process of migration, analysis and consolidation of databases, we work with different strategies such as data sanitization and data remapping through a feed structure, which allows us to concentrate very sparse data. By storing all this information on the same basis, even if they come from different sources, they become part of the same environment, bringing a unique and more strategic view of the company's data.
      </p>
      <p class="text">
        Throughout our years of experience, we have already operated on migration projects in the order of billions of entries, for corporations that have large amounts of data. With this solution, we target companies that are looking for a more modern process, with better performance, lower costs and that allows BI application. In addition, this solution is aimed at companies that undergo system mergers or consolidation of a single tool.
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
