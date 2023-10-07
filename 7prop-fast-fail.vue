<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="firstName"
        label="First name"
        :rules="firstNameRules"
      ></v-text-field>
<!--fast-fail 属性は、バリデーションルールの評価中に最初に失敗したルールが見つかった場合、
その時点でバリデーションを停止することを意味します。-->
      <v-text-field
        v-model="lastName"
        label="Last name"
        :rules="lastNameRules"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2">Submit</v-btn>
      <!--type属性には"submit"が指定されており、このボタンがフォームの送信トリガーとなります。-->
    </v-form>
  </v-sheet>
</template>

<script setup>
  import { ref } from 'vue'

  const firstName = ref('')
  const firstNameRules = [
    value => {
      if (value?.length > 3) return true
      return 'First name must be at least 3 characters.'
    },
  ]

  const lastName = ref('123')
  const lastNameRules = [
    value => {
      if (/[^0-9]/.test(value)) return true
      return 'Last name can not contain digits.'
    },
  ]
</script>
<!--firstNameRules と lastNameRules はそれぞれファーストネームとラストネームのバリデーションルールを定義するための関数が格納された配列です。
これらのルールは、フォームのバリデーション時に使用されます。-->
<script>
  export default {
    data: () => ({
      firstName: '',
      firstNameRules: [
        value => {
          if (value?.length > 3) return true

          return 'First name must be at least 3 characters.'
        },
      ],
      lastName: '123',
      lastNameRules: [
        value => {
          if (/[^0-9]/.test(value)) return true

          return 'Last name can not contain digits.'
        },
      ],
    }),
  }
</script>
<!--このコンポーネントは、firstName と lastName のテキスト入力フィールドのバリデーションを行います。
firstName は最低3文字以上でなければならず、lastName は数字を含んではいけません。-->
<!--ユーザーがフォームを送信しようとすると、バリデーションルールが適用され、入力がバリデーションに合格するかどうかが判断されます。
それぞれの入力フィールドに対して異なるバリデーションルールが適用されており、エラーメッセージが表示されます。-->