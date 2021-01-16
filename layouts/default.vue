<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      elevation="0"
      color="#F2F2F2"
    >
      <a href="#">
        <v-img src="/logo.svg" max-width="150" />
      </a>
      <v-spacer />
      <a
        v-for="section in sections"
        :key="section.href"
        v-scroll-to="section.href"
        href="#"
        :class="{'d-md-inline': section.isSmHidden, 'd-sm-inline': !section.isSmHidden}"
        class="d-none app-bar-menu ml-6"
      >
        <div class="app-bar-menu-title">
          {{ section.ja }}
        </div>
        <div class="app-bar-menu-sub">
          {{ section.en }}
        </div>
      </a>
      <v-btn
        class="d-inline-block d-md-none ml-4"
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item
          v-for="section in sections"
          :key="section.href"
          v-scroll-to="section.href"
          href="#"
        >
          <span class="font-weight-bold mr-2">
            {{ section.ja }}
          </span>
          <span class="nav-sub">{{ section.en }}</span>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
      class="justify-center"
      color="#f2f2f2"
    >
      <span class="caption">&copy; {{ new Date().getFullYear() }} Sakajiri Music School</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: true,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      sections: [
        {
          ja: 'ご挨拶',
          en: 'Greeting',
          href: '#greeting',
          isSmHidden: true
        },
        {
          ja: '特徴',
          en: 'About',
          href: '#about',
          isSmHidden: false
        },
        {
          ja: 'イベント',
          en: 'Event',
          href: '#event',
          isSmHidden: false
        },
        {
          ja: 'レッスン',
          en: 'Curriculum',
          href: '#curriculum',
          isSmHidden: false
        },
        {
          ja: '講師',
          en: 'Profile',
          href: '#profile',
          isSmHidden: true
        },
        {
          ja: '歩み',
          en: 'History',
          href: '#history',
          isSmHidden: true
        },
        {
          ja: 'アクセス',
          en: 'Access',
          href: '#access',
          isSmHidden: false
        },
        {
          ja: '申込',
          en: 'Contact',
          href: '#contact',
          isSmHidden: false
        }
      ]
    }
  }
}
</script>
<style>
  .app-bar-menu{
    text-decoration: none;
  }
  .app-bar-menu div{
    transition: .2s;
    color: #323232;
    text-align: center;
  }

  .app-bar-menu:hover div{
    transition: .2s;
    color: #F1A0D4;
    text-align: center;
  }

  .app-bar-menu-title{
    font-size: 1.2rem;
  }
  .app-bar-menu-sub{
    font-family: 'Caveat';
    margin-top: -8px;
  }

  .nav-sub {
    font-family: 'Caveat';
  }

  body{
    overflow-x: hidden;
  }

</style>
