<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent>
      <v-text-field
        v-model="firstName"
        :rules="rules"
        label="First name"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
<!--v-form要素は、フォームを表します。@submit.preventディレクティブは、フォームが送信されたときにページがリロードされないようにします-->
<!--v-btn要素は、フォームを送信するためのボタンを表します。type="submit" 属性は、このボタンがフォームを送信するトリガーとして機能することを示します。-->
  </v-sheet>
</template>

<script setup>
  import { ref } from 'vue'

  const firstName = ref('')
//firstnameをリアクティブなデータで宣言し、初期値を空文字列に設定している-->

  const rules = [
    value => {
      if (value) return true
      return 'You must enter a first name.'
    },
  ]
</script>

<script>
  export default {
    data: () => ({
      firstName: '',
      rules: [
        value => {
          if (value) return true

          return 'You must enter a first name.'
        },
      ],
    }),
  }
</script>
<!--ユーザーがフォームを送信しようとすると、バリデーションルールに従ってエラーメッセージが表示され、
名前が入力されていない場合に "You must enter a first name." というエラーメッセージが表示されます。-->