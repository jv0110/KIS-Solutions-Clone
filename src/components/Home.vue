<template>
  <div class="wrapper">
    <router-view name="navigation"></router-view>
    <router-view name="banner"></router-view>
    <router-view name="solutions"></router-view>
    <router-view name="process"></router-view>
    <router-view name="partners"></router-view>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
