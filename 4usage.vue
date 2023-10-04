<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
<!--このフォームはvalidプロパティにバインドされており、フォームがバリデーションに合格するかどうかを示すために使用されます。-->
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
            hide-details
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            hide-details
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            hide-details
            required
          ></v-text-field>
<!--:rulesプロパティは、バリデーションルールを指定します。名前フィールドにはnameRulesが、Eメールフィールドには emailRules が適用されます。
counter:名前フィールドは最大10文字まで入力可能-->
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        value => {
          if (value) return true

          return 'Name is required.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'Name must be less than 10 characters.'
        },
      ],
      email: '',
      emailRules: [
        value => {
          if (value) return true

          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
    }),
  }
</script>
<!--nameRules と emailRules は、各フィールドのバリデーションルールを定義する配列です。
これらのルールは、関数として定義されており、入力値が特定の条件を満たさない場合にエラーメッセージを返します。
たとえば、名前フィールドの最大文字数は10文字でなければならず、空であってはいけません。-->
<!--フォームを作成し、各フィールドのバリデーションを行う基本的な例です。ユーザーがフォームを送信しようとすると、
各フィールドのバリデーションが実行され、フォームが有効な場合のみ送信できるようになります。-->