import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    visit_service: 'Visit Service',
    main: {
      title: 'Welcome to VService',
      paragraph1:
        'This service was created in order to make visiting easier and more flexible!',
      paragraph2: 'You can eather become a visitor or the event host.'
    },
    other: {
      loading: 'Loading...',
      error: 'Error!'
    },
    menu: {
      home: 'Home',
      account: 'Account',
      login: 'Login',
      register: 'Register',
      events: 'Events',
      managerEvents: 'My Events'
    },
    manager: {
      eventsTitle: 'Events Management'
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
      actions: 'Actions',
      subEvents: 'Subscribed Events'
    },
    events: {
      all: 'All Events',
      type: 'Type',
      title: 'Title',
      place: 'Place',
      date: 'Date',
      subscribe: 'Subscribe',
      unsubscribe: 'Unsubscribe',
      info: 'Event Info',
      subscribed: 'Subscribers'
    }
  },
  ukr: {
    visit_service: 'Сервіс Відвідувань',
    main: {
      title: 'Ласкаво просимо до Сервісу Відвідувань',
      paragraph1:
        'Цей сервіс був створений для того, щоб зробити процес запису та відвідування заходів більш простим та гнучким!',
      paragraph2:
        'Ви можете стати звичайним користувачем або ж придбати акаунт менеджера заходів.'
    },
    other: {
      loading: 'Завантаження...',
      error: 'Помилка!'
    },
    menu: {
      home: 'Головна',
      account: 'Обліковий запис',
      login: 'Вхід',
      register: 'Реєстрація',
      events: 'Заходи',
      managerEvents: 'Мої заходи'
    },
    manager: {
      eventsTitle: 'Керування заходами'
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
      actions: 'Дії',
      subEvents: 'Підписки на заходи'
    },
    events: {
      all: 'Усі заходи',
      type: 'Тип',
      title: 'Назва',
      place: 'Місце',
      date: 'Дата',
      subscribe: 'Записатися',
      unsubscribe: 'Відписатися',
      info: 'Інформація про Захід',
      subscribed: 'Підписалось'
    }
  }
}

const i18n = new VueI18n({
  locale: 'en',
  messages
})

export default i18n
