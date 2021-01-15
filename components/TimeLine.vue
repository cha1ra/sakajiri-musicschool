<template>
  <v-timeline v-if="!$vuetify.breakpoint.xs" dense>
    <v-timeline-item
      v-for="(timeline, i) in [timelines[0]]"
      :key="i"
      :color="timeline.color"
      small
    >
      <div class="py-1">
        <h2 :class="`headline font-weight-light mb-0 ${timeline.color}--text`">
          {{ timeline.year }}年
        </h2>
        <div v-for="(content, index) in timeline.contents" :key="index" class="mb-2 mb-md-0">
          <div
            v-if="!$vuetify.breakpoint.sm"
            class="d-block d-md-inline-block mr-2 caption text-md-body-1"
          >
            <span class="d-inline-block text-right" :style="{'width':$vuetify.breakpoint.xs || $vuetify.breakpoint.sm?'': '1.1rem'}">
              {{ content.date.month }}
            </span>
            <span class="caption text-md-body-2">月</span>
            <span
              v-if="content.date.day !== null"
              class="d-inline-block text-right"
              :style="{'width':$vuetify.breakpoint.xs || $vuetify.breakpoint.sm?'': '1.1rem'}"
            >
              {{ content.date.day }}
            </span>
            <span
              v-if="content.date.day !== null"
              class="caption text-md-body-2"
            >日</span>
          </div>
          <div v-else class="caption" style="margin-bottom: -4px;">
            {{ content.date.month }}月{{ content.date.day !== null? content.date.day + '日': '' }}
          </div>
          <span class="d-block d-sm-inline-block mr-sm-2 font-weight-bold">
            {{ content.text }}
          </span>
          <span class="d-none d-sm-inline-block caption">
            {{ content.place }}
          </span>
        </div>
      </div>
    </v-timeline-item>
    <v-timeline-item
      v-if="!isDisplayAllHistories"
      class=""
      hide-dot
    >
      <div style="writing-mode: vertical-rl;" class="ml-12 text-h5 mb-4 font-weight-light">
        ...
      </div>
      <div class="d-flex">
        <h2 :class="`headline font-weight-light mb-0 mr-4 primary--text`">
          {{ `1986 - ${recentTimelines[0].year - 1}年` }}
        </h2>
        <v-btn color="primary" small @click="()=>{isDisplayAllHistories = !isDisplayAllHistories}">
          <v-icon left>
            mdi-chevron-down
          </v-icon>
          表示する
        </v-btn>
      </div>
      <div style="writing-mode: vertical-rl;" class="ml-12 text-h5 mt-4 font-weight-light">
        ...
      </div>
    </v-timeline-item>
    <v-timeline-item
      v-for="(timeline, i) in recentTimelines"
      :key="i+1"
      :color="timeline.color"
      small
    >
      <div class="py-1">
        <h2 :class="`headline font-weight-light mb-0 ${timeline.color}--text`">
          {{ timeline.year }}年
        </h2>
        <div v-for="(content, index) in timeline.contents" :key="index" class="mb-2 mb-md-0">
          <div
            v-if="!$vuetify.breakpoint.sm"
            class="d-block d-md-inline-block mr-2 caption text-md-body-1"
          >
            <span class="d-inline-block text-right" :style="{'width':$vuetify.breakpoint.xs || $vuetify.breakpoint.sm?'': '1.1rem'}">
              {{ content.date.month }}
            </span>
            <span class="caption text-md-body-2">月</span>
            <span
              v-if="content.date.day !== null"
              class="d-inline-block text-right"
              :style="{'width':$vuetify.breakpoint.xs || $vuetify.breakpoint.sm?'': '1.1rem'}"
            >
              {{ content.date.day }}
            </span>
            <span
              v-if="content.date.day !== null"
              class="caption text-md-body-2"
            >日</span>
          </div>
          <div v-else class="caption" style="margin-bottom: -4px;">
            {{ content.date.month }}月{{ content.date.day !== null? content.date.day + '日': '' }}
          </div>
          <span class="d-block d-sm-inline-block mr-sm-2 font-weight-bold">
            {{ content.text }}
          </span>
          <span class="d-none d-sm-inline-block caption">
            {{ content.place }}
          </span>
        </div>
      </div>
    </v-timeline-item>
    <v-timeline-item
      v-if="isDisplayAllHistories"
      class=""
      hide-dot
    >
      <v-btn color="primary" small @click="()=>{isDisplayAllHistories = !isDisplayAllHistories}">
        <v-icon left>
          mdi-chevron-up
        </v-icon>
        直近5年のみ表示する
      </v-btn>
    </v-timeline-item>
  </v-timeline>
  <div v-else>
    <div
      v-for="(timeline, i) in timelines.slice(0,1)"
      :key="i"
      class="mb-8"
    >
      <div class="mb-0 title primary--text font-weight-light">
        {{ timeline.year }}
      </div>
      <v-divider />
      <div v-for="(content, index) in timeline.contents" :key="index" class="my-2">
        <div class="caption">
          <span class="mr-2">
            {{ content.date.month }}月{{ content.date.day !== null? content.date.day + '日': '' }}
          </span>
          <span>
            {{ content.place }}
          </span>
        </div>
        <div class="body-2 font-weight-bold">
          {{ content.text }}
        </div>
        <div class="caption" />
      </div>
    </div>
    <div
      v-if="!isDisplayAllHistories"
      class="mb-8"
    >
      <div style="writing-mode: vertical-rl;" class="ml-2 text-h5 mb-4 font-weight-light">
        ...
      </div>
      <div class="d-flex">
        <div class="mb-0 title primary--text font-weight-light mr-2">
          {{ `1986 - ${recentTimelines[0].year - 1}年` }}
        </div>
        <v-btn
          class="font-weight-bold"
          color="primary"
          small
          @click="()=>{isDisplayAllHistories = !isDisplayAllHistories}"
        >
          <v-icon left>
            mdi-chevron-down
          </v-icon>
          表示する
        </v-btn>
      </div>
      <div style="writing-mode: vertical-rl;" class="ml-2 text-h5 mt-4 font-weight-light">
        ...
      </div>
    </div>
    <div
      v-for="(timeline, i) in recentTimelines"
      :key="i+1"
      class="mb-8"
    >
      <div class="mb-0 title primary--text font-weight-light">
        {{ timeline.year }}
      </div>
      <v-divider />
      <div v-for="(content, index) in timeline.contents" :key="index" class="my-2">
        <div class="caption">
          <span class="mr-2">
            {{ content.date.month }}月{{ content.date.day !== null? content.date.day + '日': '' }}
          </span>
          <span>
            {{ content.place }}
          </span>
        </div>
        <div class="body-2 font-weight-bold">
          {{ content.text }}
        </div>
        <div class="caption" />
      </div>
    </div>
    <div
      v-if="isDisplayAllHistories"
      class="mb-8"
    >
      <v-btn color="primary" small @click="()=>{isDisplayAllHistories = !isDisplayAllHistories}">
        <v-icon left>
          mdi-chevron-up
        </v-icon>
        直近3年のみ表示する
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    timelines: {
      type: Array,
      default () {
        return [
          {
            year: 1985,
            color: 'primary',
            contents: [
              {
                date: {
                  month: 5,
                  day: null
                },
                text: 'ピアノエレクトーン発表会',
                place: '越谷コミュニティーセンター'
              }
            ]
          }
        ]
      }
    }
  },
  data () {
    return {
      isDisplayAllHistories: false
    }
  },
  computed: {
    recentTimelines () {
      if (this.isDisplayAllHistories) {
        return this.timelines.slice(1, this.timelines.length)
      } else {
        return this.timelines.slice(this.timelines.length - 3, this.timelines.length)
      }
    }
  }
}
</script>
