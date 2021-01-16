<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-row no-gutters align="center">
        <v-col cols="12" md="8" class="pr-2">
          <p class="text-h6 font-weight-bold text-center text-sm-left">
            1レッスン
            <span class="marker_primary">
              <span class="text-h4 font-weight-bold">
                40
              </span>
              分
            </span>
            の個人指導
          </p>
          <p class="text-body-2">
            レッスンでは、ピアノ、エレクトーン独奏だけではなく、ソルフェージュ(音楽理論、メロディ聴奏、和音聴奏、聴唱)、アンサンブル演奏などを、生徒さんの進度に合わせてバランスよく併用した指導を行います。
          </p>
          <p class="text-body-2">
            特にソルフェージュは、音楽を勉強する上で欠かせません。無限の可能性を持ったお子様だからこそ、より多くの情報を吸収していただくことが大切です。このような幅広い音楽教育を実現するため、当教室では40分レッスンを採用しています。
          </p>
        </v-col>
        <v-col cols="12" md="4">
          <v-img
            src="/school.jpg"
            style="border-radius: 8px"
          />
        </v-col>
      </v-row>

      <p class="text-subtitle-1 text-sm-h6 mb-0 mb-sm-2 mt-12 mt-sm-8 text-center font-weight-bold">
        ＼年齢や目的にあわせたレッスンをします／
      </p>
    </v-col>
    <v-col
      v-for="(item, index) in carricurums"
      :key="item.imgPrefix"
      cols="12"
      sm="10"
      md="8"
      class="mb-12"
    >
      <div class="d-flex justify-space-between align-center">
        <v-img
          :src="`/carricurum/${item.imgPrefix}-w.svg`"
          :max-height="120+index*10"
          style="width: 100px;"
          contain
        />
        <div class="px-1 px-sm-4 px-md-12">
          <p class="text-h6 font-weight-bold text-center mb-0 mb-sm-4">
            {{ item.target }}
          </p>
          <p class="mb-0 text-caption text-md-body-1">
            {{ item.description }}
          </p>
        </div>
        <v-img
          :src="`/carricurum/${item.imgPrefix}-m.svg`"
          :max-height="120+index*10"
          style="width: 100px;"
          contain
        />
      </div>
    </v-col>
    <v-col cols="12">
      <v-card elevation="0" class="mb-8">
        <v-card-title class="text-subtitle-2 text-sm-h6 font-weight-bold primary white--text">
          エレクトーン & ピアノ 併用レッスンも可能！
        </v-card-title>
        <v-card-text>
          <p />
          <p>
            エレクトーンは、「メロディー」「リズム」「ハーモニー」の３要素が身に付くと同時に、トータルな音楽を構成する力が養える楽器です。<br>
            jet（全日本エレクトーン指導者協会）の教材により、音楽の基礎から中～上級のテクニックまで、お子様の成長に合わせて、楽しく学ぶことができます。
          </p>
          <v-dialog
            v-model="dialog"
            width="500"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                class="px-0"
                small
                text
                v-bind="attrs"
                v-on="on"
              >
                <v-icon small left>
                  mdi-help-circle
                </v-icon>
                jet とは？
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="headline primary white--text font-weight-bold">
                jetとは？
              </v-card-title>

              <v-card-text class="mt-3">
                <p>
                  ｊｅｔは、教室を自主・主宰し、地域に密着したエレクトーン指導に携わっている自宅教師のための全国組織で、ＹＡＭＡＨＡとｊｅｔ支部を置く特約楽器店がサポートしています。
                </p>
                <p>
                  現在、所定の入会オーディションで選ばれた６千数百名の会員が、エレクトーンを中心とした、より現代的で魅力あふれる鍵盤楽器指導のありかたを、ともに考え、発展させる活動を展開しています。
                </p>
              </v-card-text>

              <v-divider />

              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="primary"
                  text
                  @click="dialog = false"
                >
                  閉じる
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-text>
      </v-card>
      <v-card elevation="0">
        <v-card-title class="text-subtitle-2 text-sm-h6 font-weight-bold secondary white--text">
          障害補償(保険) サービスが適用されます
        </v-card-title>
        <v-card-text>
          <p />
          生徒さんには障害補償（保険）サービスが適用されます。
          レッスンの行き帰り、万一の際には保険料無料で補償が受けられます。
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data () {
    return {
      dialog: false,
      carricurums: [
        {
          imgPrefix: 'kin',
          target: '幼稚園児',
          description: '音楽は”心”で聴くといわれます。この年齢のお子様は、音楽などの刺激によって、集中力、反応力、自動性を高めます。ぜひお子様に、音とふれあうチャンスを与えてください。'
        },
        {
          imgPrefix: 'el',
          target: '小学生',
          description: '一人で音符をみて弾けたらいいね。音符はかならず読めるようになります。いろいろな曲にチャレンジしましょう。\n'
        },
        {
          imgPrefix: 'hi',
          target: '中学生・高校生',
          description: '経験者は引き続きレベルアップを目指しましょう。ヒット曲やアニメソングなど、希望をどんどん取り入れたレッスンだから、勉強の息抜きにも‥‥。'
        },
        {
          imgPrefix: 'ad',
          target: '社会人',
          description: '楽器はまったく初めてという方も、ドレミからゆっくりレッスンします。映画音楽、演歌など、お好きな曲が弾けるようになります。'
        }
      ]
    }
  }
}
</script>
