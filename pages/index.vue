<template>
  <section>
      <Header />
      <div class="container">
        <logo />
        <h1 class="title">
          {{ $t('index.welcome') }}
        </h1>
        <h2 class="subtitle">
          My remarkable Nuxt.js project
        </h2>
      
        
        <nuxt-link :to="localePath('example')">{{ $t('index.welcome') }}</nuxt-link>
        <div class="links">

        
        </div>
      </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Header from '~/components/Navigation/TheHeader'

export default {
  components: {
    Logo,
    Header
  }
}
</script>
