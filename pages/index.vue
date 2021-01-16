<template>
  <v-container style="background-color: #f2f2f2;" fluid class="pa-0">
    <div :style="{height: $vuetify.breakpoint.xs? '300px' :height-64 + 'px'}" class="header-img mb-16">
      <div class="header-img-content d-flex justify-center align-center">
        <div class="text-center">
          <p class="text-center font-weight-bold text-md-h6">
            <span class="d-inline-block">
              千葉県柏市 の
            </span>
            <span class="d-inline-block">
              ピアノ・エレクトーンレッスンなら
            </span>
          </p>

          <img
            v-if="$vuetify.breakpoint.xs"
            width="200"
            src="logo.svg"
          >
          <div
            v-else
            style="width: 600px;"
            class="text-center mb-4"
          >
            <v-img
              src="logo.svg"
            />
          </div>

          <div class="d-flex justify-center align-center">
            <v-btn
              v-scroll-to="'#contact'"
              class="font-weight-bold mr-4"
              color="secondary"
              rounded
              :x-large="!$vuetify.breakpoint.xs"
              href="#"
            >
              無料体験レッスン受付中♪
            </v-btn>
          </div>
          <div class="mt-4">
            <AppScrollDown />
          </div>
        </div>
      </div>
    </div>

    <!-- Facebook News Feed -->
    <v-container class="">
      <div class="d-block d-sm-flex justify-center align-center">
        <div class="mr-4 d-none d-sm-block">
          <v-btn icon href="https://www.facebook.com/sakajirimusic" target="_blank">
            <v-icon color="#1B76F2" size="49">
              mdi-facebook
            </v-icon>
          </v-btn>
        </div>
        <div>
          <div v-for="n in news" :key="n.id" class="d-flex align-sm-center mb-1">
            <div
              class="mr-1 mr-sm-4 caption font-weight-bold"
              :style="{'min-width': $vuetify.breakpoint.xs && '74px'}"
            >
              {{ $vuetify.breakpoint.xs? $moment(n.created_time).format('YYYY/MM/DD') : $moment(n.created_time).format('YYYY年MM月DD日') }}
            </div>
            <a
              :href="`https://www.facebook.com/sakajirimusic/posts/${n.id.split('_')[1]}`"
              target="_blank"
              style="text-decoration: none; color: #323232"
              class="text-caption text-sm-body-1"
            >
              {{ n.message.split('\n')[0] }}
            </a>
          </div>
        </div>
      </div>
    </v-container>

    <!-- 挨拶 -->
    <v-container fluid>
      <section id="greeting" class="section" style="opacity: 0.1 !important;">
        <SectionTitle
          class="mb-4 mb-sm-8 mb-md-12"
          title="Greeting"
          subtitle="講師からのご挨拶"
        />
        <v-row justify="center" align="center">
          <v-col cols="0" sm="2" md="1" class="d-none d-sm-block">
            <img src="/greeting-left.png" alt="" style="width: 100%; max-width: 70px">
          </v-col>
          <v-col cols="12" sm="8" md="8">
            <div class="greeting-div-content text-center body-2 text-sm-body-1">
              <h3 class="mb-8 title font-weight-bold">
                一人ひとりの個性、伸ばします
              </h3>
              <p>
                <span class="d-inline-block">
                  さかじり音楽教室のページをご覧いただき
                </span>
                <span class="d-inline-block">
                  ありがとうございます。
                </span>
              </p>
              <p>
                <span class="d-inline-block">
                  さかじり音楽教室は2018年に
                </span>
                <span class="d-inline-block">
                  設立35周年を迎えた、千葉県柏市にある
                </span>
                <span class="d-inline-block">
                  ピアノ・エレクトーン教室です。
                </span>
              </p>
              <p>
                <span class="d-inline-block">
                  レッスンでは、生徒の皆様それぞれに
                </span>
                <span class="d-inline-block">
                  専用教材をご用意。
                </span>
                <span class="d-inline-block">
                  音楽の基礎から中～上級のテクニックまで、
                </span>
                <span class="d-inline-block">
                  成長に合わせて楽しく学ぶことが出来ます。
                </span>
              </p>
              <p>
                <span class="d-inline-block">
                  楽しい音楽の世界へ、あなたも遊びにきませんか?
                </span>
                <span class="d-inline-block">
                  年齢、経験を問わず、随時、ご入会いただけます。
                </span>
                <span class="d-inline-block">
                  経験の浅い初級者から
                </span>
                <span class="d-inline-block">
                  コンクール出場対象の上級者まで、
                </span>
                <span class="d-inline-block">
                  たのしく丁寧にご指導いたします。
                </span>
              </p>
              <p>
                <span class="d-inline-block">
                  まずは体験レッスンから！
                </span>
                <span class="d-inline-block">
                  お気軽にお問い合わせください♪
                </span>
              </p>
              <p class="my-8">
                ピアノ・エレクトーン講師  <span class="font-weight-bold">坂尻 くにえ</span>
              </p>
            </div>
          </v-col>
          <v-col cols="0" sm="2" md="1" class="d-none d-sm-block">
            <img src="/greeting-right.png" alt="" style="width: 100%; max-width: 70px">
          </v-col>
        </v-row>
      </section>
    </v-container>

    <!-- 教室の特徴 -->
    <v-container>
      <section id="about" class="section">
        <SectionTitle
          class="mb-4 mb-sm-8 mb-md-12"
          title="About"
          subtitle="さかじり音楽教室 3つの特徴"
        />
        <v-row>
          <v-col cols="12" md="4">
            <FeatureCard
              class="mb-4"
              img-url="/feature-1.png"
              title="無理のない個人レッスン"
              :description="[
                '一人ひとりの生徒さんに合わせて、',
                'きめこまかく指導する個人レッスンです。',
                '「グレード試験」や「発表コンサート」などで、',
                '上達の過程を確認できますので、',
                '初めての方（お子様）にも最適です。'
              ]"
            />
          </v-col>
          <v-col cols="12" md="4">
            <FeatureCard
              class="mb-4"
              img-url="/feature-2.png"
              title="お子様から大人まで"
              :description="[
                '小さいお子様から大人の方まで、安心して',
                '楽器を奏でる喜びが学習できる個人レッスンの',
                '教室です。何歳からでも、楽器の経験が',
                'ない方でも、一年中いつでもご入会',
                'いただけます。'
              ]"
            />
          </v-col>
          <v-col cols="12" md="4">
            <FeatureCard
              class="mb-4"
              img-url="/feature-3.png"
              title="ヤマハ検定制度に基づくカリキュラム"
              :description="[
                'レッスンの進め方は、ヤマハ音楽能力検定制度',
                '（グレード試験）に基づいたカリキュラムで',
                'おこなうので、上達の過程が可視化されます。',
                'つねに適切なアドバイスのもと、レッスンを',
                'すすめることができます。'
              ]"
            />
          </v-col>
        </v-row>
      </section>
    </v-container>

    <!-- 発表会のご紹介 -->
    <div>
      <section id="event" class="section">
        <div class="d-none d-sm-block mb-8" style="position: relative; padding-bottom: 56.25%;">
          <iframe
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
            src="https://www.youtube.com/embed/iADEN2flzwE?autoplay=1&loop=1&playlist=iADEN2flzwE&modestbranding=1&mute=1"
            frameborder="0"
            allow="autoplay;encrypted-media;loop"
            allowfullscreen
          />
          <div
            style="width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 1; background-color: rgba(0,0,0,0.5);"
          >
            <div class="d-flex justify-center align-center" style="width: 100%; height: 100%;">
              <div>
                <div class="d-flex justify-center white--text">
                  <div class="d-none d-sm-block font-weight-bold mb-4" style="font-family: 'Caveat'; font-size: 3rem;">
                    Piano × Electone × <span class="primary--text">Fun!</span>
                  </div>
                  <div class="d-block d-sm-none font-weight-bold mb-4" style="font-family: 'Caveat'; font-size: 2rem;">
                    Piano × Electone × <span class="primary--text">Fun!</span>
                  </div>
                </div>
                <div class="text-center white--text">
                  <p>
                    <span class="d-inline-block">
                      さかじり音楽教室は
                    </span>
                    <span class="d-inline-block">
                      ピアノ・エレクトーン教室 ですが、
                    </span>
                    <span class="d-inline-block">
                      ただ楽器が弾けるようになることがゴールではありません。
                    </span>
                  </p>
                  <p>その先にある音楽に触れる楽しさ、喜びを感じてほしいと思っています。</p>
                  <p>
                    <span class="d-inline-block">
                      そこで、当教室では通常の発表会に加えて
                    </span>
                    <span class="d-inline-block">
                      グループで演奏を創り上げる<span class="font-weight-bold marker_primary">アンサンブル</span>、
                    </span>
                  </p>
                  <p>
                    <span class="d-inline-block">
                      そして、カジュアルに音楽を発表・交流する
                    </span>
                    <span class="d-inline-block">
                      <span class="font-weight-bold marker_primary">クリスマスコンサート</span>を実施しています。
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-block d-sm-none mb-8">
          <div class="d-flex justify-center align-center">
            <div class="d-none d-sm-block font-weight-bold mb-4" style="font-family: 'Caveat'; font-size: 3rem; color: #323232">
              Piano × Electone × <span class="primary--text">Fun</span>
            </div>
            <div class="d-block d-sm-none font-weight-bold mb-4" style="font-family: 'Caveat'; font-size: 2rem; color: #323232">
              Piano × Electone × <span class="primary--text">Fun</span>
            </div>
          </div>
          <div class="text-center body-2">
            <p>
              <span class="d-inline-block">
                さかじり音楽教室は
              </span>
              <span class="d-inline-block">
                ピアノ・エレクトーン教室 ですが、
              </span>
              <span class="d-inline-block">
                ただ楽器が弾けるようになることが
              </span>
              <span class="d-inline-block">
                ゴールではありません。
              </span>
            </p>
            <p>
              <span class="d-inline-block">
                その先にある音楽に触れる楽しさ、
              </span>
              <span class="d-inline-block">
                喜びを感じてほしいと思っています。
              </span>
            </p>
            <p>
              <span class="d-inline-block">
                そこで、当教室では通常の発表会に加えて
              </span>
              <span class="d-inline-block">
                グループで演奏を創り上げる<span class="font-weight-bold marker_primary">アンサンブル</span>、
              </span>
            </p>
            <p>
              <span class="d-inline-block">
                そして、カジュアルに音楽を発表・交流する
              </span>
              <span class="d-inline-block">
                <span class="font-weight-bold marker_primary">クリスマスコンサート</span>を実施しています。
              </span>
            </p>
          </div>
          <div style="position: relative; padding-bottom: 56.25%;">
            <iframe
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
              src="https://www.youtube.com/embed/iADEN2flzwE"
              frameborder="0"
              allow="autoplay;encrypted-media"
              allowfullscreen
            />
          </div>
        </div>

        <SectionTitle
          class="mb-4 mb-sm-8 mb-md-12"
          title="Gallery"
          subtitle="イベントの様子をちょい見せします！"
        />
        <v-container>
          <Gallary
            :cols="3"
            :sm="3"
            :md="2"
            :image-urls="eventImageUrls"
            class="mb-12"
          />
          <div class="text-center font-weight-bold mb-2" style="color:#323232">
            ＼YouTubeもあるよ／
          </div>
          <div class="text-center">
            <v-btn
              large
              class="font-weight-bold"
              color="primary"
              href="https://www.youtube.com/channel/UCocuaOyYJ94onLsmC6bOSPQ/featured?pbjreload=102"
            >
              <v-icon left large class="mr-3">
                mdi-youtube
              </v-icon>
              発表会の雰囲気をみてみる
            </v-btn>
          </div>
        </v-container>
      </section>
    </div>

    <!-- レッスン内容のご紹介 -->
    <v-container>
      <section id="curriculum" class="section">
        <SectionTitle
          class="mb-4 mb-sm-8 mb-md-12"
          title="Curriculum"
          subtitle="レッスン内容"
        />
        <Carricurum />
      </section>
    </v-container>

    <!-- 講師について -->
    <v-container>
      <section id="profile" class="section">
        <SectionTitle
          class="mb-4 mb-sm-8 mb-md-12"
          title="Profile"
          subtitle="講師のプロフィール"
        />
        <v-row align="center">
          <v-col cols="12" sm="6">
            <small>ピアノ・エレクトーン講師</small>
            <h3 class="text-h5 font-weight-bold">
              坂尻 くにえ <span class="font-weight-bold" style="font-family: 'Caveat';">Kunie Sakajiri</span>
            </h3>
            <v-divider class="mb-2" />
            <div class="body-2 text-sm-body-1 mb-4">
              <p class="mb-0">
                <span class="d-inline-block">
                  上野学園大学附属中学校、高等学校音楽科を経て
                </span>
                <span class="d-inline-block">
                  同大学音楽学部器楽学科ピアノ科卒業
                </span>
              </p>
              <p class="mb-0">
                ヤマハ銀座店所属 jet(全日本エレクトーン教会)講師
              </p>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img src="teacher.png" style="border-radius: 12px" />
          </v-col>
          <v-col class="d-none d-md-block" md="6">
            <Gallary />
          </v-col>
          <v-col cols="12" md="6">
            <div class="body-2">
              <h4 class="subtitle-1 font-weight-bold">
                主な活動実績
              </h4>
              <ul>
                <li>在学中よりヤマハ指導グレードを取得し、ピアノ・エレクトーン指導にあたる</li>
                <li>読売新聞社主催“読売新人演奏会”や、首席として各種演奏会に出演</li>
                <li>ヤマハエレクトーンフェスティバル池袋地区大会1位、同東京地区大会入賞</li>
                <li>日本青年館ヤマハ講師コンサート「Projection」で取りをつとめ「月刊エレクトーン」にて掲載</li>
                <li class="font-weight-bold">
                  ヤマハ銀座店「永年功労賞」受賞
                </li>
                <li>ドラムやギターのレッスンも取り入れバンドも結成</li>
                <li>「ヤマハアンサンブルコンクール」にてジュニア部門にて入賞</li>
                <li>各ピアノコンクールの指導にも力を入れ、金賞受賞多数</li>
                <li>グレンツェンピアノコンクール全国大会において指導者賞受賞</li>
                <li>「Klavierabend」等のリサイタルに多数出演</li>
                <li>声楽や器楽等の伴奏も務め、ドイツ音楽コンクール、チェコ音楽コンクール入賞</li>
                <li class="font-weight-bold">
                  クラシックに偏らず多くのジャンルでイベント、バンド演奏を行う
                  「歌声喫茶」「歌って元気！」
                </li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" class="d-md-none">
            <Gallary />
          </v-col>
        </v-row>
      </section>
    </v-container>

    <!-- 教室のあゆみ -->
    <v-container>
      <section id="history" class="section">
        <SectionTitle
          class="mb-4 mb-sm-8 mb-md-12"
          title="History"
          subtitle="教室の歩みと実績"
        />
        <v-row no-gutters justify="center">
          <v-col>
            <p class="text-center font-weight-bold mb-3">
              ＼クリックすると切り替わるよ／
            </p>
          </v-col>
          <v-col cols="12" class="d-flex justify-center mb-6 mb-sm-4">
            <v-btn
              class="mr-6 px-sm-12 font-weight-bold"
              :color="historySectionDisplayed==='history'?'primary': 'grey lighten-1'"
              :elevation="historySectionDisplayed==='history'? undefined: '0'"
              @click="() => historySectionDisplayed = 'history'"
            >
              <v-icon class="mr-2">
                mdi-history
              </v-icon>
              教室の歴史
            </v-btn>
            <v-btn
              class="px-sm-12 font-weight-bold"
              :color="historySectionDisplayed==='awards'?'secondary': 'grey lighten-1'"
              :elevation="historySectionDisplayed==='awards'? undefined: '0'"
              @click="() => historySectionDisplayed = 'awards'"
            >
              <v-icon class="mr-2">
                mdi-trophy
              </v-icon>
              教室の実績
            </v-btn>
          </v-col>
          <v-col
            v-if="historySectionDisplayed === 'history'"
            cols="12"
            sm="10"
            md="8"
          >
            <TimeLine
              :timelines="timelines"
            />
          </v-col>
          <v-col
            v-else
            cols="10"
            sm="10"
            lg="9"
          >
            <Awards />
          </v-col>
        </v-row>
      </section>
    </v-container>

    <!-- アクセス -->
    <section id="access" class="section">
      <SectionTitle
        class="mb-4 mb-sm-8 mb-md-12"
        title="Access"
        subtitle="教室の場所"
      />
      <v-container fluid>
        <Map class="mb-8" />
      </v-container>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="8">
            <div class="mb-4" style="padding-left: 16px;">
              <span class="d-inline-block">
                柏駅西口より豊四季台団地循環バスで
              </span>
              <span class="d-inline-block">
                「集会所前」下車
              </span>
              <span class="d-inline-block">
                徒歩5分
              </span>
            </div>
            <v-simple-table dense>
              <template v-slot:default>
                <tbody>
                  <tr>
                    <td>住所</td>
                    <td>
                      <small>〒277-0862</small><br>
                      千葉県柏市篠籠田1036-5
                    </td>
                  </tr>
                  <tr>
                    <td>電話番号</td>
                    <td>
                      04-7149-2933
                    </td>
                  </tr>
                  <tr>
                    <td>e-mail</td>
                    <td>
                      contact@sakajirimusic.com
                    </td>
                  </tr>
                  <tr>
                    <td>後援</td>
                    <td>
                      <a href="https://www.yamahamusic.jp/shop/ginza.html" target="_blank">
                        ヤマハ銀座店
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>指導</td>
                    <td>
                      坂尻くにえ
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- お問い合わせ -->
    <v-container>
      <section id="contact" class="section" style="opacity: 1 !important;">
        <SectionTitle
          class="mb-4 mb-sm-8 mb-md-12"
          title="Contact"
          subtitle="お問い合わせ・無料体験レッスンのお申し込み"
        />
        <div class="text-center">
          <img src="/family.png" style="width: 100%; max-width: 600px">
        </div>
        <v-row justify="center" class="mb-8">
          <v-col cols="12" sm="10" md="8">
            <p class="text-caption text-sm-body-1 mb-0">
              ピアノ・エレクトーンを始めようと考えているなら、まずは無料体験レッスンで教室の雰囲気を感じてください！<br>
              レッスンの方法や指導方針など、みなさまの疑問や不安に、きめこまかくお応えします。
            </p>
          </v-col>
        </v-row>
        <v-row class="mb-8">
          <v-col>
            <p class="text-center font-weight-bold mb-3">
              ＼LINE からもお問い合わせできます／
            </p>
            <div class="d-flex justify-center align-center">
              <img src="https://qr-official.line.me/sid/M/519zskvn.png" class="mr-4" width="120">
              <div>
                <p class="text-caption text-sm-body-1 mb-2" style="max-width: 400px">
                  さかじり音楽教室公式アカウントから<br>
                  チャットでお問い合わせできます
                </p>
                <a href="https://lin.ee/L6hRe5q"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="36" border="0"></a>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9">
            <v-card elevation="0">
              <v-card-text class="py-12">
                <v-form ref="form" class="formrun" action="https://form.run/api/v1/r/n1qq82h6l6j54mp4cnsg7mq7" method="post" @submit="validate">
                  <TextField
                    class="mb-8"
                    label="お名前"
                    :rules="rules.name"
                    placeholder="坂尻 くにえ"
                  />
                  <TextField
                    class="mb-8"
                    label="ふりがな"
                    :rules="rules.furigana"
                    placeholder="さかじり くにえ"
                  />
                  <TextField
                    class="mb-8"
                    label="メールアドレス"
                    :rules="rules.email"
                    placeholder="sakajiri@example.com"
                    type="email"
                  />
                  <TextField
                    class="mb-8"
                    label="電話番号"
                    :rules="rules.phone"
                    placeholder="04-7149-2933"
                  />
                  <div class="d-block d-sm-flex align-center mb-8">
                    <div class="font-weight-bold pt-1" style="width: 160px;">
                      お問い合わせの種類
                    </div>
                    <v-radio-group
                      row
                      hide-details="auto"
                      :rules="rules.type"
                      class="mt-0"
                    >
                      <v-radio
                        label="無料体験レッスン"
                        name="問い合わせ種類"
                        value="taiken"
                        @click="setCommentTemplate"
                      />
                      <v-radio
                        label="レッスン内容"
                        name="問い合わせ種類"
                        value="content"
                      />
                      <v-radio
                        label="その他"
                        name="問い合わせ種類"
                        value="etc"
                      />
                    </v-radio-group>
                  </div>
                  <div class="d-block d-sm-flex">
                    <div class="font-weight-bold pt-4" style="width: 160px;">
                      コメント
                      <v-chip x-small color="grey lighten-3" class="ml-2 grey--text">
                        任意
                      </v-chip>
                    </div>
                    <v-textarea
                      name="コメント"
                      outlined
                      :placeholder="`コメントを記入してください`"
                      rows="8"
                      :value="comment"
                    />
                  </div>
                  <div class="d-flex align-center">
                    <v-spacer />
                    <div v-if="isError" class="error--text mr-3">
                      記入が完了していません！エラー文章をご確認ください
                    </div>
                    <v-btn large color="primary" class="font-weight-bold" type="submit">
                      <v-icon left>
                        mdi-send
                      </v-icon>
                      送信する
                    </v-btn>
                  </div>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </v-container>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import SectionTitle from '../components/SectionTitle'
import FeatureCard from '../components/FeatureCard'
import Map from '../components/Map'
import TimeLine from '../components/TimeLine'
import TextField from '../components/TextField'
import Gallary from '../components/Gallary'
import Awards from '../components/Awards'
import Carricurum from '../components/Carricurum'
import AppScrollDown from '../components/AppScrollDown'

export default {
  components: {
    SectionTitle,
    FeatureCard,
    Map,
    TimeLine,
    TextField,
    Gallary,
    Awards,
    Carricurum,
    AppScrollDown
  },
  async asyncData ({ $axios }) {
    const res = await $axios.$get('https://graph.facebook.com/sakajirimusic/posts?access_token=EAAFy65OsuigBACTkPIAAIXMgOxVpUZCmPrfvIPkIZAaF4uUzZCCZBCcQIPhL5IIsOaZB4vkoZA7qMVwjrDCKmqeYf97QSWxSKygqiLXLocOtz4Vqp4Vvq9uZAtZCBTQZAiXWZBHgHhC4aeWBMxrQhF1ZCjKoCRdaN2YfmZBr0ed0YwI3UAZDZD&locale=ja_JP&fields=id,message,created_time')
    const messageData = res.data.filter((d) => {
      return d.message
    })
    const news = messageData.length > 3 ? messageData.slice(0, 3) : messageData
    return { news }
  },
  data () {
    return {
      height: 0,
      news: [],
      profiles: [
        '上野学園大学附属中学校、高等学校音楽科を経て、同大学音楽学部器楽学科ピアノ科卒業',
        '読売新聞社主催“読売新人演奏会”や、首席として各種演奏会に出演',
        '在学中よりヤマハ指導グレードを取得し、ピアノ・エレクトーン指導にあたる',
        'ヤマハエレクトーンフェスティバル池袋地区大会1位、同東京地区大会入賞',
        '日本青年館ヤマハ講師コンサート「Projection」で取りをつとめ「月刊エレクトーン」にて掲載',
        '現在、ヤマハ銀座店に所属し、jet講師として幅広い年齢層の指導にあたる'
      ],
      eventImageUrls: [
        'event-1.jpg',
        'event-2.jpg',
        'event-3.jpg',
        'event-4.jpg',
        'event-5.jpg',
        'event-6.jpg',
        'event-7.jpg',
        'event-8.jpg',
        'event-9.jpg',
        'event-10.jpg',
        'event-11.jpg',
        'event-12.jpg'
      ],
      timelines: [
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
        },
        {
          year: 1986,
          color: 'primary',
          contents: [
            {
              date: {
                month: 4,
                day: null
              },
              text: 'ピアノエレクトーン発表会',
              place: '三郷市文化会館'
            }
          ]
        },
        {
          year: 1987,
          color: 'primary',
          contents: [
            {
              date: {
                month: 4,
                day: null
              },
              text: 'ピアノエレクトーン発表会',
              place: '三郷市文化会館'
            }
          ]
        },
        {
          year: 1988,
          color: 'primary',
          contents: [
            {
              date: {
                month: 4,
                day: null
              },
              text: 'ピアノエレクトーン発表会',
              place: '吉川中央公民館'
            },
            {
              date: {
                month: 5,
                day: null
              },
              text: 'YAMAHA ELECTONE FESTIVAL \'88 池袋店銀座ブロック アンサンブル部門',
              place: ''
            }
          ]
        },
        {
          year: 1989,
          color: 'primary',
          contents: [
            {
              date: {
                month: 4,
                day: null
              },
              text: 'ピアノエレクトーン合同発表会',
              place: '吉川中央公民館'
            },
            {
              date: {
                month: 4,
                day: null
              },
              text: 'カーリス ピアノ発表会(ゲスト出演)',
              place: 'ベガ・ホール'
            },
            {
              date: {
                month: 5,
                day: null
              },
              text: 'ジョイフル・コンサート',
              place: '越谷コミュニティーセンター'
            },
            {
              date: {
                month: 6,
                day: null
              },
              text: 'YAMAHA ELECTONE FESTIVAL \'89 池袋店銀座ブロック ソロ部門',
              place: ''
            },
            {
              date: {
                month: 7,
                day: null
              },
              text: 'YAMAHA　ELECTONE FESTIVAL \'89 池袋店本選 ソロ部門',
              place: ''
            },
            {
              date: {
                month: 10,
                day: null
              },
              text: 'PROJECTION',
              place: '日本青年館'
            },
            {
              date: {
                month: 11,
                day: null
              },
              text: 'Melody in Autumn \'89',
              place: 'ホテルセンチュリーハイアット'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'クリスマスコンサート',
              place: '坂尻音楽教室'
            }
          ]
        },
        {
          year: 1990,
          color: 'primary',
          contents: [
            {
              date: {
                month: 4,
                day: null
              },
              text: 'ピアノエレクトーン合同発表会',
              place: '吉川中央公民館'
            },
            {
              date: {
                month: 4,
                day: null
              },
              text: 'ジョイフル・コンサート',
              place: '三郷市文化会館'
            },
            {
              date: {
                month: 11,
                day: null
              },
              text: 'フロアコンサート',
              place: '渋谷ハーモニーパーク'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'クリスマスコンサート',
              place: '坂尻音楽教室'
            }
          ]
        },
        {
          year: 1991,
          color: 'primary',
          contents: [
            {
              date: {
                month: 4,
                day: null
              },
              text: 'エレクトーン・ピアノ・バイオリン発表会',
              place: '吉川中央公民館'
            },
            {
              date: {
                month: 4,
                day: null
              },
              text: 'ジョイフル・コンサート',
              place: '三郷市文化会館'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'クリスマスコンサート',
              place: '坂尻音楽教室'
            }
          ]
        },
        {
          year: 1992,
          color: 'primary',
          contents: [
            {
              date: {
                month: 4,
                day: null
              },
              text: 'ジョイフル・コンサート',
              place: '吉川中央公民館'
            },
            {
              date: {
                month: 4,
                day: null
              },
              text: 'エレクトーン・ピアノ・バイオリン発表会',
              place: '吉川中央公民館'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'クリスマスコンサート',
              place: '坂尻音楽教室'
            }
          ]
        },
        {
          year: 1993,
          color: 'primary',
          contents: [
            {
              date: {
                month: 5,
                day: null
              },
              text: 'ジョイフル・コンサート',
              place: '越谷中央市民会館'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'クリスマスコンサート',
              place: '坂尻音楽教室'
            }
          ]
        },
        {
          year: 1994,
          color: 'primary',
          contents: [
            {
              date: {
                month: 4,
                day: null
              },
              text: 'エレガントエレクトーン',
              place: '銀座ライオンブラッスリー'
            },
            {
              date: {
                month: 11,
                day: null
              },
              text: 'ジョイフル・コンサート',
              place: '柏市民文化会館'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'クリスマスコンサート(ゲスト出演)',
              place: 'ステラ・スタジオ'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: '恵声会定期演奏会',
              place: '石橋メモリアルホール'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'クリスマスコンサート',
              place: '坂尻音楽教室'
            }
          ]
        },
        {
          year: 1995,
          color: 'primary',
          contents: [
            {
              date: {
                month: 11,
                day: null
              },
              text: 'The Electone jet concert',
              place: '日本青年館'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'クリスマスコンサート',
              place: '坂尻音楽教室'
            }
          ]
        },
        {
          year: 1996,
          color: 'primary',
          contents: [
            {
              date: {
                month: 5,
                day: null
              },
              text: 'ジョイフル・コンサート',
              place: '森のホール21'
            },
            {
              date: {
                month: 9,
                day: null
              },
              text: 'クレッシェンドコンサート',
              place: '銀座ヤマハホール'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'クリスマスコンサート',
              place: '坂尻音楽教室'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'ちびっこクリスマスコンサート',
              place: '内幸町ホール'
            }
          ]
        },
        {
          year: 1997,
          color: 'primary',
          contents: [
            {
              date: {
                month: 10,
                day: null
              },
              text: 'ジョイフル・コンサート',
              place: '柏市民文化会館'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'ちびっこクリスマスコンサート',
              place: '内幸町ホール'
            }
          ]
        },
        {
          year: 1998,
          color: 'primary',
          contents: [
            {
              date: {
                month: 1,
                day: null
              },
              text: 'Solo Concert (ゲスト出演)',
              place: 'ミスタホール'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'クリスマスコンサート',
              place: '坂尻音楽教室'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'ちびっこクリスマスコンサート',
              place: '内幸町ホール'
            }
          ]
        },
        {
          year: 1999,
          color: 'primary',
          contents: [
            {
              date: {
                month: 4,
                day: null
              },
              text: 'ジョイフル・コンサート',
              place: '柏市民文化会館'
            },
            {
              date: {
                month: 9,
                day: null
              },
              text: 'きらめくピアノコンサート',
              place: '銀座ヤマハホール'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'クリスマスコンサート',
              place: '坂尻音楽教室'
            }
          ]
        },
        {
          year: 2000,
          color: 'primary',
          contents: [
            {
              date: {
                month: 10,
                day: null
              },
              text: 'ジョイフル・コンサート',
              place: '柏市民文化会館'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'クリスマスコンサート',
              place: '坂尻音楽教室'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'CRISTMAS CONCERT (ゲスト出演)',
              place: 'ミスタホール'
            }
          ]
        },
        {
          year: 2001,
          color: 'primary',
          contents: [
            {
              date: {
                month: 7,
                day: null
              },
              text: 'KLAVIERABEND',
              place: 'アイリスホール'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'クリスマスコンサート',
              place: '坂尻音楽教室'
            }
          ]
        },
        {
          year: 2002,
          color: 'primary',
          contents: [
            {
              date: {
                month: 3,
                day: null
              },
              text: 'ジョイフル・コンサート',
              place: 'さわやかちば県民プラザ'
            },
            {
              date: {
                month: 4,
                day: null
              },
              text: 'KLAVIERABEND',
              place: 'アイリスホール'
            },
            {
              date: {
                month: 5,
                day: null
              },
              text: 'JUNIOR ELECTONE CONCOURS 2002',
              place: 'ヤクルトホール'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'クリスマスコンサート',
              place: '坂尻音楽教室'
            }
          ]
        },
        {
          year: 2003,
          color: 'primary',
          contents: [
            {
              date: {
                month: 3,
                day: null
              },
              text: 'ジョイフル・コンサート',
              place: 'さわやかちば県民プラザ'
            },
            {
              date: {
                month: 7,
                day: null
              },
              text: 'KLAVIERABEND',
              place: 'アイリスホール'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'チェコ音楽コンクール',
              place: 'チェコ共和国大使館'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'クリスマスコンサート',
              place: '坂尻音楽教室'
            }
          ]
        },
        {
          year: 2004,
          color: 'primary',
          contents: [
            {
              date: {
                month: 2,
                day: null
              },
              text: '第7回 グレード合格おめでとうコンサート',
              place: 'ヤマハ銀座店サロン'
            },
            {
              date: {
                month: 6,
                day: null
              },
              text: 'ジョイフル・コンサート',
              place: 'さわやかちば県民プラザ'
            },
            {
              date: {
                month: 7,
                day: null
              },
              text: 'KLAVIERABEND',
              place: 'アイリスホール'
            },
            {
              date: {
                month: 10,
                day: null
              },
              text: 'さわやかコンサート',
              place: 'くるみ館'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'クリスマスコンサート',
              place: '坂尻音楽教室'
            }
          ]
        },
        {
          year: 2005,
          color: 'primary',
          contents: [
            {
              date: {
                month: 7,
                day: null
              },
              text: 'KLAVIERABEND',
              place: 'アイリスホール'
            },
            {
              date: {
                month: 9,
                day: null
              },
              text: '第7回 グレード合格おめでとうコンサート',
              place: 'ヤマハ銀座店サロン'
            },
            {
              date: {
                month: 10,
                day: null
              },
              text: 'ジョイフル・コンサート',
              place: 'さわやかちば県民プラザ'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'クリスマスコンサート',
              place: '坂尻音楽教室'
            }
          ]
        },
        {
          year: 2006,
          color: 'primary',
          contents: [
            {
              date: {
                month: 2,
                day: null
              },
              text: 'ジョイフル・コンサート STAGEAで行こう！',
              place: '銀座ヤマハホール'
            },
            {
              date: {
                month: 4,
                day: null
              },
              text: '第8回 グレード合格おめでとうコンサート',
              place: 'ヤマハ銀座店サロン'
            },
            {
              date: {
                month: 7,
                day: null
              },
              text: 'KLAVIERABEND',
              place: 'すみだトリフォニー'
            },
            {
              date: {
                month: 11,
                day: null
              },
              text: '第8回 グレード合格おめでとうコンサート',
              place: 'ヤマハ銀座店サロン'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'クリスマスコンサート',
              place: '坂尻音楽教室'
            }
          ]
        },
        {
          year: 2007,
          color: 'primary',
          contents: [
            {
              date: {
                month: 4,
                day: null
              },
              text: 'ジョイフル・コンサート',
              place: 'さわやかちば県民プラザ'
            },
            {
              date: {
                month: 7,
                day: null
              },
              text: 'ELECTONE STAGE 2007 ジョイフルライブ・イン銀座',
              place: 'ヤクルトホール'
            },
            {
              date: {
                month: 7,
                day: null
              },
              text: 'KLAVIERABEND',
              place: 'すみだトリフォニー'
            },
            {
              date: {
                month: 10,
                day: null
              },
              text: 'ふれあいコンサート(ゲスト出演)',
              place: '柏市立柏第五中学校'
            },
            {
              date: {
                month: 12,
                day: null
              },
              text: 'クリスマスアンサンブルコンサート',
              place: 'キッチン・パタータ'
            }
          ]
        },
        {
          year: 2008,
          color: 'primary',
          contents: [
            {
              date: {
                month: 4,
                day: 29
              },
              text: 'グレード合格おめでとうコンサート',
              place: 'ヤマハ銀座店サロン'
            },
            {
              date: {
                month: 7,
                day: 18
              },
              text: 'KLAVIERABEND',
              place: 'すみだトリフォニー'
            },
            {
              date: {
                month: 8,
                day: 31
              },
              text: 'ジョイフル・コンサート',
              place: 'さわやかちば県民プラザ'
            },
            {
              date: {
                month: 12,
                day: 23
              },
              text: 'クリスマスアンサンブルコンサート',
              place: 'キッチン・パタータ'
            }
          ]
        },
        {
          year: 2009,
          color: 'primary',
          contents: [
            {
              date: {
                month: 4,
                day: 29
              },
              text: 'グレード合格おめでとうコンサート',
              place: 'ヤマハ銀座店サロン'
            },
            {
              date: {
                month: 7,
                day: 16
              },
              text: 'KLAVIERABEND',
              place: 'すみだトリフォニー'
            },
            {
              date: {
                month: 8,
                day: 30
              },
              text: 'ヤマハ　大人のピアノパーティ',
              place: 'ヤマハ銀座店サロン'
            },
            {
              date: {
                month: 11,
                day: 24
              },
              text: 'アフタヌーン・コンサート',
              place: '東葛飾高等学校'
            },
            {
              date: {
                month: 12,
                day: 19
              },
              text: 'クリスマス・コンサート(ゲスト出演)',
              place: 'キッチン・パタータ'
            },
            {
              date: {
                month: 12,
                day: 20
              },
              text: 'クリスマス・アンサンブルコンサート',
              place: 'キッチン・パタータ'
            }
          ]
        },
        {
          year: 2010,
          color: 'primary',
          contents: [
            {
              date: {
                month: 3,
                day: 22
              },
              text: 'ヤマハ　スターライトコンサート',
              place: '内幸町ホール'
            },
            {
              date: {
                month: 5,
                day: 3
              },
              text: 'ジョイフル・コンサート',
              place: 'さわやかちば県民プラザ'
            },
            {
              date: {
                month: 7,
                day: 16
              },
              text: 'KLAVIERABEND',
              place: 'すみだトリフォニー'
            },
            {
              date: {
                month: 8,
                day: 21
              },
              text: 'ヤマハ　大人のピアノパーティ',
              place: 'ヤマハ銀座店サロン'
            },
            {
              date: {
                month: 12,
                date: 19
              },
              text: 'クリスマス・アンサンブルコンサート',
              place: 'キッチン・パタータ'
            },
            {
              date: {
                month: 12,
                day: 24
              },
              text: 'クリスマス・コンサート(ゲスト出演)',
              place: 'キッチン・パタータ'
            }
          ]
        },
        {
          year: 2011,
          color: 'primary',
          contents: [
            {
              date: {
                month: 4,
                day: 17
              },
              text: 'グレード合格おめでとうコンサート',
              place: 'ヤマハ銀座店サロン'
            },
            {
              date: {
                month: 7,
                day: 23
              },
              text: 'OASIS MUSIC WEEK 成田国際空港ロビーコンサート',
              place: '成田国際空港'
            },
            {
              date: {
                month: 8,
                day: 7
              },
              text: 'ヤマハ　エンジョイピアノコンサート',
              place: 'ヤマハ銀座店サロン'
            },
            {
              date: {
                month: 12,
                day: 11
              },
              text: 'ジョイフル・コンサート',
              place: 'さわやかちば県民プラザ'
            },
            {
              date: {
                month: 12,
                day: 23
              },
              text: 'クリスマス・コンサート(ゲスト出演)',
              place: '大田区民会館'
            }
          ]
        },
        {
          year: 2012,
          color: 'primary',
          contents: [
            {
              date: {
                month: 4,
                day: 15
              },
              text: 'グレード合格おめでとうコンサート',
              place: 'ヤマハ銀座店サロン'
            },
            {
              date: {
                month: 11,
                day: 18
              },
              text: 'ヤマハ大人のピアノパーティ',
              place: 'ヤマハ銀座スタジオ'
            },
            {
              date: {
                month: 12,
                day: 16
              },
              text: 'クリスマス・コンサート',
              place: 'カフェ・パタータ'
            }
          ]
        },
        {
          year: 2013,
          color: 'primary',
          contents: [
            {
              date: {
                month: 4,
                day: 21
              },
              text: 'グレード合格おめでとうコンサート',
              place: 'ヤマハ銀座店サロン'
            },
            {
              date: {
                month: 6,
                day: 16
              },
              text: 'ヤマハジュニアエレクトーンフェスティバル2013',
              place: 'ヤマハ銀座スタジオ'
            },
            {
              date: {
                month: 7,
                day: 21
              },
              text: 'ジョイフル・コンサート',
              place: 'さわやかちば県民プラザ'
            },
            {
              date: {
                month: 9,
                day: 29
              },
              text: 'グレード合格おめでとうコンサート',
              place: 'ヤマハ銀座スタジオ'
            },
            {
              date: {
                month: 12,
                day: 15
              },
              text: 'クリスマス・コンサート',
              place: 'カフェ・パタータ'
            },
            {
              date: {
                month: 12,
                day: 15
              },
              text: 'ウィンター・コンサート2013',
              place: 'カフェ・パタータ'
            }
          ]
        },
        {
          year: 2014,
          color: 'primary',
          contents: [
            {
              date: {
                month: 3,
                day: 16
              },
              text: 'Soring Concert',
              place: 'マロニエホール'
            },
            {
              date: {
                month: 4,
                day: 20
              },
              text: 'グレード合格おめでとうコンサート',
              place: 'ヤマハ銀座店スタジオ'
            },
            {
              date: {
                month: 7,
                day: 27
              },
              text: 'Ginza Enjoy Piano Concert',
              place: 'ヤマハ銀座店サロン'
            },
            {
              date: {
                month: 9,
                day: 12
              },
              text: 'グレード合格おめでとうコンサート',
              place: 'ヤマハ銀座店スタジオ'
            },
            {
              date: {
                month: 10,
                day: 19
              },
              text: '第50回記念コンサート',
              place: '日暮里サニーホール'
            },
            {
              date: {
                month: 12,
                day: 14
              },
              text: 'クリスマス・コンサート',
              place: 'カフェ・パタータ'
            },
            {
              date: {
                month: 12,
                day: 14
              },
              text: 'ぶりらんて3rdコンサート',
              place: 'カフェ・パタータ'
            },
            {
              date: {
                month: 12,
                day: 21
              },
              text: 'ダイアナクリスマスコンサート',
              place: 'カフェ・パタータ'
            }
          ]
        },
        {
          year: 2015,
          color: 'primary',
          contents: [
            {
              date: {
                month: 4,
                day: 5
              },
              text: '韓暁娟ピアノコンサート',
              place: '森のホール21'
            },
            {
              date: {
                month: 4,
                day: 29
              },
              text: 'グレード合格おめでとうコンサート',
              place: 'ヤマハ銀座店スタジオ'
            },
            {
              date: {
                month: 5,
                day: 6
              },
              text: '若松音楽教室発表会ゲスト出演',
              place: '大田文化の森ホール'
            },
            {
              date: {
                month: 5,
                day: 17
              },
              text: 'ジョイフル・コンサート',
              place: 'さわやかちば県民プラザ'
            },
            {
              date: {
                month: 12,
                day: 13
              },
              text: 'クリスマス・コンサート',
              place: 'カフェ・パタータ'
            },
            {
              date: {
                month: 12,
                day: 13
              },
              text: 'ぶりらんて4thコンサート',
              place: 'カフェ・パタータ'
            }
          ]
        },
        {
          year: 2016,
          color: 'primary',
          contents: [
            {
              date: {
                month: 2,
                day: 28
              },
              text: '心包まれる早春のひととき',
              place: 'ザ・プリンスパークタワー東京'
            },
            {
              date: {
                month: 8,
                day: 28
              },
              text: 'ジョイフル・コンサート',
              place: 'さわやかちば県民プラザ'
            },
            {
              date: {
                month: 12,
                day: 23
              },
              text: 'クリスマス・コンサート',
              place: 'カフェ・パタータ'
            },
            {
              date: {
                month: 12,
                day: 23
              },
              text: 'ぶりらんて5thコンサート',
              place: 'カフェ・パタータ'
            }
          ]
        }
      ],
      rules: {
        name: [
          v => !!v || 'お名前を入力してください'
        ],
        furigana: [
          v => !!v || 'ふりがなを入力してください'
        ],
        email: [
          v => !!v || 'メールアドレスを入力してください',
          v => /.+@.+\..+/.test(v) || '正しいメールアドレスを入力してください'
        ],
        phone: [
          v => !!v || '電話番号を入力してください'
        ],
        type: [
          v => !!v || 'お問い合わせ種類を選択してください'
        ]
      },
      comment: '',
      isError: false,
      historySectionDisplayed: 'history'
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()

    const sectionIds = [
      '#greeting',
      '#about',
      '#event',
      '#curriculum',
      '#profile',
      '#history',
      '#access'
    ]
    for (const sectionId of sectionIds) {
      const scene1 = this.$scrollmagic
        .scene({
          triggerElement: sectionId, // トリガーにする要素ID
          triggerHook: 0.5, // トリガーの位置
          offset: 0, // 開始するスクロールの位置
          duration: 300, // 終了するスクロールの位置
          reverse: false // 反対方向からのスクロールを制御
        })
        // ↓実行されるアニメーションと、対象の要素IDを指定
        .setTween(sectionId, {
          css: {
            opacity: '1' // 透明だったクラスを不透明にして表示
          }
        })
        // ↓triggerのヘルプ表示
        // .addIndicators({ name: 'OK' })

      // controllerに追加
      this.$scrollmagic.addScene(scene1)
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.height = window.innerHeight
    },
    validate () {
      if (!this.$refs.form.validate()) {
        this.isError = true
        event.preventDefault()
      }
    },
    setCommentTemplate () {
      this.comment = '体験レッスンをご希望の方へ\n' +
        '体験者の情報とご希望時間をお聞かせください \n\n' +
        '■体験者情報\n' +
        '体験者氏名: \n' +
        '年齢: \n' +
        '性別: \n' +
        '音楽経験: \n' +
        '\n' +
        '■レッスンのご希望曜日及び時間\n' +
        '第一希望:  曜日  時頃\n' +
        '第二希望:  曜日  時頃 \n' +
        '第三希望:  曜日  時頃'
    }
  }
}
</script>
<style>
  .header-img{
    background-image: url("/top-1.jpg");
    background-size: cover;
    background-position: center;
  }

  .header-img-content {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
  }

  .section {
    opacity: 0;
    margin-bottom: 80px;
  }

  .marker_primary {
    background: linear-gradient(transparent 60%, #f2a0d5 60%);
  }

  /* sm */
  @media (min-width: 576px) {
    .section {
      margin-bottom: 120px;
    }
  }

</style>
