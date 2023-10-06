<template>
  <v-sheet width="300" class="mx-auto">
    <v-form disabled>
      <v-text-field
        v-model="firstName"
        label="First name"
      ></v-text-field>
      <v-text-field
        v-model="lastName"
        label="Last name"
      ></v-text-field>
    </v-form>
<!--v-form要素は、フォームを表します。disabled属性が設定されているため、フォーム内のすべての入力フィールドが無効になっています。
v-modelを使用して firstName と lastName 変数にバインドされていますがフォーム全体が無効のためユーザーからの入力は受け付けない-->
  </v-sheet>
</template>

<script setup>
  import { ref } from 'vue'

  const firstName = ref('')
  const lastName = ref('')
</script>
<!--import { ref } from 'vue' は、Vue 3の ref 関数をインポートしています。これは、リアクティブなデータを作成するために使用します。-->
<script>
  export default {
    data: () => ({
      firstName: '',
      lastName: '',
    }),
  }
</script>
<!--このコードの主要なポイントは、v-form 要素に disabled 属性が設定され、フォーム全体が無効になっていることです。
入力フィールドに入力できず、送信はできない-->