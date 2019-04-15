<template>
  <section>
      <Header />
      <div class="container">
        <logo />
        <h1 class="title">
          {{ $t('example.welcome') }}
        </h1>
        
      
        
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
  },
  nuxtI18n: {
    paths: {
      // add your multilanguage seo friendly urls here
      en: '/example-route',
      tr: '/ornek-route'
    }
  }
}
</script>