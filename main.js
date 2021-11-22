const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const app = new Vue({
  el: '#example',
  data: {
    password_length: 8,
  },
  methods: {
    // パスワードを取得するためのgetPassword()
    getPassword() {
      //入力フォームに数値が入れられたらpasswordを取得
      if (this.password_length) {
        let password = '';
        for(let i =0; i < this.password_length;  i++) {
          let x = Math.floor(Math.random() * 62);
          password += letters.slice(x, x+1);
        }
        return password;
      }
      return '';
    },
  },
});