import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    visit_service: 'Visit Service',
    other: {
      loading: 'Loading...',
      error: 'Error!'
    },
    menu: {
      home: 'Home',
      account: 'Account',
      login: 'Login',
      register: 'Register'
    },
    login: {
      registration: 'Registration',
      firstname: 'First name',
      lastname: 'Last name',
      email: 'E-mail',
      sign_in: 'Sign In',
      username: 'Username',
      password: 'Password',
      btn: 'Sign In',
      registerBtn: 'Register',
      exit: 'Exit'
    },
    user: {
      title: 'User Info',
      username: 'Username',
      role: 'Role',
      firstname: 'First Name',
      lastname: 'Last Name',
      all: 'All Users',
      stats: 'User Statistics',
      noData: 'No Data',
      actions: 'Actions'
    },
    events: {
      all: 'All Events'
    }
  },
  ukr: {
    visit_service: 'Сервіс Відвідувань',
    other: {
      loading: 'Завантаження...',
      error: 'Помилка!'
    },
    menu: {
      home: 'Головна',
      account: 'Обліковий запис',
      login: 'Вхід',
      register: 'Реєстрація'
    },
    login: {
      sign_in: 'Вхід',
      username: 'Логін',
      password: 'Пароль',
      btn: 'Увійти',
      registration: 'Реєстрація',
      firstname: "Ім'я",
      lastname: 'Прізвище',
      email: 'Пошта',
      registerBtn: 'Зареєструватись',
      exit: 'Вихід'
    },
    user: {
      title: 'Панель користувача',
      username: 'Логін',
      role: 'Прівілеї',
      firstname: "Ім'я",
      lastname: 'Прізвище',
      all: 'Усі користувачі',
      stats: 'Статистика Користувача',
      noData: 'Дані відсутні',
      actions: 'Дії'
    },
    events: {
      all: 'Усі заходи'
    }
  }
}

const i18n = new VueI18n({
  locale: 'en',
  messages
})

export default i18n
