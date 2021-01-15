<template>
  <div>
    <div v-for="award in awards" :key="award.year">
      <div class="font-weight-bold caption secondary--text">
        {{ award.year }}年
      </div>
      <div class="ml-2">
        <div
          v-for="(content, index) in award.contents"
          :key="index"
          class="d-block d-sm-flex justify-space-between"
        >
          <!-- xs, sm -->
          <div class="d-block d-md-none caption">
            {{ content.text }}
          </div>
          <div class="font-weight-bold caption d-block d-md-none align-center" style="width: 200px;">
            <v-icon color="black" x-small class="mr-1">
              mdi-trophy
            </v-icon>
            {{ content.result }}
          </div>
          <!-- md -->
          <div class="d-none d-md-block">
            {{ content.text }}
          </div>
          <div class="font-weight-bold d-none d-md-flex align-center" style="width: 280px;">
            <v-icon color="black" small class="mr-2">
              mdi-trophy
            </v-icon>
            {{ content.result }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      awards: [
        {
          year: 1997,
          contents: [
            {
              text: 'ピアノアンサンブルフェスティバル審査員',
              result: '奨励賞'
            }
          ]
        },
        {
          year: 1999,
          contents: [
            {
              text: 'ピアノコンクールミリオン本選',
              result: '奨励賞'
            }
          ]
        },
        {
          year: 2000,
          contents: [
            {
              text: '第12回ピアノコンチェルトフェスティバル全国大会',
              result: '審査員特別賞'
            },
            {
              text: '第9回千葉音楽コンクール本選Ａ部門',
              result: '優秀賞(1,2年生の部 1位)'
            }
          ]
        },
        {
          year: 2001,
          contents: [
            {
              text: 'フォルテックスプリングジュエリーコンチェルトコンサート',
              result: 'ゲスト出演'
            },
            {
              text: '第13回ピアノコンチェルトフェスティバル',
              result: '東日本代表 全国大会出演'
            },
            {
              text: 'ヤングアーチストピアノコンクールＢグループ',
              result: '奨励賞'
            },
            {
              text: 'ヤングアーチストピアノコンクール',
              result: '受賞者コンサート出演'
            },
            {
              text: '第11回グレンツェンピアノコンクール東京地区大会',
              result: '金賞(3,4年生の部 1位)'
            },
            {
              text: '第11回グレンツェンピアノコンクール関東地区本選',
              result: '銅賞(3,4年生の部 3位)'
            },
            {
              text: '日本クラシック音楽コンクール地区本選',
              result: '奨励賞(銅賞)'
            },
            {
              text: '日本クラシック音楽コンクール全国大会',
              result: '入選'
            }
          ]
        },
        {
          year: 2002,
          contents: [
            {
              text: '第11回グレンツェンピアノコンクール 西日本大会',
              result: '優秀賞'
            },
            {
              text: '第14回ピアノコンチェルトフェスティバル 東日本代表',
              result: '全国大会出演'
            },
            {
              text: 'ヤマハエレクトーンフェスティバルヤマハミュージック西東京池袋店大会',
              result: '銀賞'
            },
            {
              text: '第4回ギロックCD制作オーディション本選会',
              result: '入選'
            },
            {
              text: '第12回グレンツェンピアノコンクール東京地区大会',
              result: '銀賞(3,4年生の部 2位）'
            },
            {
              text: 'RMSファンタスティックピアノコンクール',
              result: '敢闘賞'
            },
            {
              text: '第12回グレンツェンピアノコンクール関東地区本選',
              result: '金賞(3,4年生の部 1位)'
            }
          ]
        },
        {
          year: 2003,
          contents: [
            {
              text: '第15回ピアノコンチェルトフェスティバル',
              result: '東関東地区代表 全国大会出演'
            },
            {
              text: '第5回ギロックCD制作オーディション本選会',
              result: '入選'
            },
            {
              text: '第13回グレンツェンピアノコンクール東京地区大会',
              result: '金賞(5,6年生の部 1位)'
            },
            {
              text: '第13回グレンツェンピアノコンクール関東地区本選',
              result: '金賞(5,6年生の部 1位)'
            },
            {
              text: '第20回ピアノオーディション 関東地区',
              result: '奨励賞'
            }
          ]
        },
        {
          year: 2004,
          contents: [
            {
              text: '第16回ピアノコンチェルトフィスティバル',
              result: '関東地区代表 全国大会出演'
            },
            {
              text: '第13回千葉音楽コンクール本選C部門',
              result: '出場'
            },
            {
              text: '第14回グレンツェンピアノコンクール関東地区本選',
              result: '金賞(5,6年生の部 1位)'
            },
            {
              text: '第18回ピアノコンクールミリオン本選',
              result: '優良賞'
            }
          ]
        },
        {
          year: 2005,
          contents: [
            {
              text: '第15回グレンツェンピアノコンクール千葉地区大会',
              result: '金賞(中年生の部 1位)'
            }
          ]
        },
        {
          year: 2006,
          contents: [
            {
              text: '第15回グレンツェンピアノコンクール関東地区本選',
              result: '銀賞(中年生の部 2位)'
            },
            {
              text: '第13回千葉音楽コンクール本選D部門',
              result: '中学生の部 2位'
            },
            {
              text: 'ヤマハアンサンブルコンクール',
              result: 'ジュニア部門 入賞'
            }
          ]
        },
        {
          year: 2007,
          contents: [
            {
              text: '第16回グレンツェンピアノコンクール関東地区本選',
              result: '金賞(中年生の部 1位)'
            },
            {
              text: '第1回横浜国際音楽コンクール ピアノ部門 中学生の部',
              result: '特別賞'
            },
            {
              text: 'アマチュアクラシックフェスティバル2007 ピアノ部門',
              result: '金賞'
            },
            {
              text: '第21回ピアノコンクールミリオン本選',
              result: '奨励賞'
            },
            {
              text: '第7回全日本彩明ムジカコンコルソ ピアノ部門',
              result: '読売賞'
            }
          ]
        },
        {
          year: 2008,
          contents: [
            {
              text: '第17回グレンツェンピアノコンクール関東大会',
              result: '優秀賞(中年生の部)'
            },
            {
              text: '第18回グレンツェンピアノコンクール東京地区大会',
              result: '優秀賞(高校生の部)'
            },
            {
              text: '第18回グレンツェンピアノコンクール関東大会',
              result: '優秀賞(高校生の部)'
            }
          ]
        },
        {
          year: 2009,
          contents: [
            {
              text: '第1回グレンツェンピアノコンクール全国大会',
              result: 'ファイナリスト(高校生の部)'
            },
            {
              text: '第19回グレンツェンピアノコンクール栃木地区大会',
              result: '銅賞(高校生の部)'
            }
          ]
        },
        {
          year: 2010,
          contents: [
            {
              text: '第2回グレンツェンピアノコンクール全国大会',
              result: 'ファイナリスト(高校生の部)'
            }
          ]
        }
      ]
    }
  }
}
</script>
