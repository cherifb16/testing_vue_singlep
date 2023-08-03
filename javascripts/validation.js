const app = new Vue({
    el: '#app',
    data: {
      errorMessage: 'Email does not match',
      formData: {
        name: '',
        email: '',
        emailConfirm: '',
        content: '',
        region: '',
      },
      regions: [
        { name: 'Tohoku (northernmost six prefectures of Honshu)', value: 'tohoku' },
        { name: 'Kantou (eastern half of Japan, including Tokyo)', value: 'kantou' },
        { name: 'Kansai (south-western half of Japan, including Osaka)', value: 'kansai' }
      ]
    },
  })