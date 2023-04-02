<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row v-for="card in cards" :key="card.id">
        <v-col cols="12">
          <v-card class="mx-auto">
            <v-card-text>
              <p class="text-h6 text--primary">
                {{ card.title }}
              </p>
              <div v-if="card.isCampusOnly == true">
                <v-chip color="red" text-color="white">
                  <v-icon left>mdi-lock</v-icon>
                  学内専用ページ
                </v-chip>
              </div>
              <div class="text--primary">
                {{ card.text }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn class="mx-auto" variant="outlined" :href="card.link" target="_blank">
                詳細を見る
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

// v-forで回すデータ

const cards = ref([
  {
    id: 1,
    title: '在学生の方へ',
    isCampusOnly: false,
    text: '金工大の公式お知らせページ。学生ポータルには書いてないが、ここに書いてあるとかが稀にある。',
    link: 'https://www.kanazawa-it.ac.jp/gakusei/index.html'
  },
  {
    id: 2,
    title: '学生ポータル',
    isCampusOnly: true,
    text: 'ほぼ毎日のように使う。お知らせはこまめにチェックしておこう。',
    link: 'https://navi.mars.kanazawa-it.ac.jp/portal/student/'
  },
  {
    id: 3,
    title: 'ライブラリセンター',
    isCampusOnly: false,
    text: '開館情報や、書籍の検索ができる。教科書販売とかのお知らせもあるので、学期が変わるときに見とくとよい。',
    link: 'https://www.kanazawa-it.ac.jp/kitlc/'
  },
  {
    id: 4,
    title: '情報処理サービスセンター',
    isCampusOnly: true,
    text: 'パソコン周りやネットワークトラブル、ソフトウェアのインストールなどはここ。調べりゃ大抵載ってる。',
    link: 'http://uranus.mars.kanazawa-it.ac.jp/dpc/'
  },
  {
    id: 5,
    title: '課外活動一覧',
    isCampusOnly: false,
    text: '夢考房や、オナーズプロジェクトなど、金工大の課外活動をまとめている。興味があるなら見てみよう。',
    link: 'https://www.kanazawa-it.ac.jp/nyusi/honor/index.html'
  },
  {
    id: 6,
    title: 'KIT Eagle \'s Fun',
    isCampusOnly: false,
    text: '学生向けサービスをしている会社のサイト。旅行や保険、本の注文や学食のメニューのチェックなどができる。',
    link: 'https://www.kit-group-apartment.jp/'
  },
  {
    id: 7,
    title: '金工大周辺地図',
    isCampusOnly: false,
    text: 'お手製マップですが、よければ。追加・編集したい方はホームのお問い合わせからどうぞ。',
    link: 'https://www.google.com/maps/d/viewer?mid=1kccbRkv4Y-4MI0OQ5vmAPo23L4PGvsht&ll=36.53082975247226%2C136.6296847887069&z=16'
  },
])

</script>
