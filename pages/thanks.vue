<template>
  <v-container
    style="background-color: #f2f2f2;"
    :style="{'height': height-64-20 + 'px'}"
    fluid
    class="pa-0"
  >
    <v-row justify="center" align="center" style="height:70%">
      <v-col cols="12" sm="10" md="8" class="d-block d-sm-flex text-center text-sm-left justify-center align-center">
        <img src="/thanks.png" alt="" width="150" class="ml-12 ml-sm-0 mr-4">
        <div>
          <p class="title font-weight-bold">
            お問い合わせ完了
          </p>
          <p>
            お問い合わせいただきありがとうございます♪<br>
            内容を確認して改めてご連絡いたします。
          </p>
          <v-btn small elevation="0" color="primary" href="/">
            トップページに戻る
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      height: 400
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  methods: {
    handleResize () {
      this.height = window.innerHeight
    }
  }
}
</script>
