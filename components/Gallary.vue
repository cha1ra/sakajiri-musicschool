<template>
  <v-row>
    <template>
      <div class="text-center">
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <v-card>
            <v-img
              :src="imageUrls[currentIndex]"
              :lazy-src="imageUrls[currentIndex]"
              class="align-center"
              eager
            >
              <div style="width: 100%;" class="d-flex">
                <div
                  v-if="currentIndex>0"
                  class="left-btn"
                  @click="()=>{currentIndex--}"
                >
                  <v-icon dark>
                    mdi-chevron-left
                  </v-icon>
                </div>
                <v-spacer />

                <div
                  v-if="currentIndex<imageUrls.length-1"
                  class="right-btn"
                  @click="()=>{currentIndex++}"
                >
                  <v-icon dark>
                    mdi-chevron-right
                  </v-icon>
                </div>
              </div>
            </v-img>
          </v-card>
        </v-dialog>
      </div>
    </template>
    <v-col
      v-for="(url, index) in imageUrls"
      :key="index"
      class="pa-1"
      :cols="cols"
      :sm="sm"
      :md="md"
    >
      <v-img
        :src="url"
        aspect-ratio="1"
        class="grey lighten-2 gallary-img"
        @click="openModal(index)"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            />
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    cols: {
      type: Number,
      default: 4
    },
    sm: {
      type: Number,
      default: 3
    },
    md: {
      type: Number,
      default: 4
    },
    imageUrls: {
      type: Array,
      default () {
        return [
          'gallary-1.png',
          'gallary-2.png',
          'gallary-3.jpg',
          'gallary-4.jpg',
          'gallary-5.jpg',
          'gallary-6.jpg'
        ]
      }
    }
  },
  data () {
    return {
      dialog: false,
      currentIndex: 0
    }
  },
  methods: {
    openModal (index) {
      this.currentIndex = index
      this.dialog = true
    }
  }
}
</script>
<style scoped>
  .left-btn{
    transition: .3s;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    padding: 12px 4px 12px 0px;
    background-color: #343434;
  }
  .left-btn:hover{
    transition: .3s;
    background-color: #aaa;
  }

  .right-btn{
    transition: .3s;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    padding: 12px 0px 12px 4px;
    background-color: #343434;
  }
  .right-btn:hover{
    transition: .3s;
    background-color: #aaa;
  }

  .gallary-img:hover{
    cursor: pointer;
  }
</style>
