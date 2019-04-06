<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">Nuxt i18n Boilerplate</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="localePath('index')">{{ $t('index.route') }}</b-nav-item>
        <b-nav-item :to="localePath('example')">{{ $t('example.route') }}</b-nav-item>
      </b-navbar-nav>
        
      <b-navbar-nav class="ml-auto">
        <div class="d-flex align-items-center">
          <p class="mb-0 language-desc">Language:</p>
        <b-nav-item-dropdown :text="this.$i18n.locale" right class="language-select">
            <b-dropdown-item v-for="locale in $i18n.locales"
                v-if="locale.code !== $i18n.locale" 
                :key="locale.code"
                :to="switchLocalePath(locale.code)">{{ locale.name }}</b-dropdown-item>
        </b-nav-item-dropdown>
       </div>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<style scoped>
    .language-select {
        text-transform: uppercase;
    }
    .language-desc {
        color: #fff;
    }
</style>
