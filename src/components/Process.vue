<template>
  <div>
    <section class="process container">
      <header class="section-header">
        <h2 class="heading">Our Process</h2>
      </header>
      <div class="steps">
        <div class="process">
          <div class="img-container">
            <img :src="require('../assets/process-development.png')" alt="process-development">
          </div>
          <div class="text-content">
            <h2 class="heading">
              01.
            </h2>
            <h3 class="heading sub">
              Concept
            </h3>
            <p class="text">
              The most important phase of a project, our architects will guide ideas and translate them into technical solutions. As an interactive process, this phase delivers wireframes, mockups and documents that are going to conduct the rest of the project.
            </p>
          </div>
        </div>
        <div class="process">
          <div class="img-container">
            <img :src="require('../assets/process-testing.png')" alt="process-development">
          </div>
          <div class="text-content">
            <h2 class="heading">
              02.
            </h2>
            <h3 class="heading sub">
              Development
            </h3>
            <p class="text">
              Based on original design, a team is assigned to the project, filling up the required technical positions. We have a multidisciplinary team with experience in many areas from APIs, ETL and Machine Learning, to final user applications for web or mobile purposes.
            </p>
          </div>
        </div>
        <div class="process">
          <div class="img-container">
            <img :src="require('../assets/process-concept.png')" alt="process-development">
          </div>
          <div class="text-content">
            <h2 class="heading">
              03.
            </h2>
            <h3 class="heading sub">
              Testing
            </h3>
            <p class="text">
              During development cycles QA is present to validate if all the requirements were accomplished. Once the final product is done a full regression test is applied, in order to guarantee perfect user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Process'
}
</script>
<style lang="scss" scoped>
  .process{
    color: #000000;
    @media screen and (min-width: 768px){
      text-align: left;
    }
    .section-header{
      .heading{
        font-size: 28px;
      }
    }
    .steps{
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: 20px;
      .process{
        grid-column: span 12;
        @media screen and (min-width: 768px){
          grid-column: span 6
        }
        @media screen and (min-width: 1200px){
          grid-column: span 4;
        }
      }
      .text-content{
        .heading{
          font-size: 28px;
          &:not(.sub){
            font-size: 72px;
            padding-bottom: 5px;
          }
          &.sub{
            padding-bottom: 20px;
          }
        }
        .text{
          font-size: 18px;
          line-height: 26px;
          color: #5a5a5a;
        }
      }
    }
  }
</style>
