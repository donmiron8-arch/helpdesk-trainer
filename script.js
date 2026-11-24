const questions = [
  { text: 'Какой MCC- код будет при оплате картой Пэй?', category: 'Карты и счета' },
  {
    text: 'Я оформил заказ и сразу же его отменил. Почему деньги до сих пор не вернулись на мою карту?', category: 'Карты и счета'
  },
  { text: 'Какие есть графики платежей по Лайт Сплиту?', category: 'Продукты и обслуживание' },
  { text: 'Почему я не могу войти в ЛК карты Про??', category: 'Личный кабинет' },
  {
    text: 'У меня в истории операций есть какая-то покупка,но я её не совершал! Она не выполнена, но я не знаком с этим сервисом. Помогите!', category: 'Безопасность'
  },
  {
    text: 'Здравствуйте. я случайно выбрал не те категории кэшбека. как мне поменять это?', category: 'Карты и счета'
  },
  {
    text: 'Оформлял ваш этот Сплин и мне написали "со Сплитом пока не получится", это что значит?', category: 'Продукты и обслуживание'
  },
  { text: 'Я открыл у вас карту, но не понял как ее пополнять..', category: 'Карты и счета' },
  { text: 'Сколько длится закрытие Лайт Сплита?', category: 'Продукты и обслуживание' },
  { text: 'Хочу закрыть счет в вашем банке, но не знаю как.', category: 'Карты и счета' },
  { text: 'Возможно ли сейчас изменить лимит Лайт Сплита?', category: 'Продукты и обслуживание' },
  { text: 'Мне пришло СМС-сообщение от вас, оно настоящее?', category: 'Безопасность' },
  { text: 'Как мне проверить баланс на карте??', category: 'Карты и счета' },
  { text: 'Оформил возврат на Маркете, на какую карту придёт возврат?', category: 'Карты и счета' },
  { text: 'Почему баллы Плюса списались сами / ушли в минус???', category: 'Продукты и обслуживание' },
  { text: 'Я оплатил покупку, но мне не начислили кэшбек! Почему?', category: 'Карты и счета' },
  {
    text: 'Мне задержали зарплату. Не смогу полностью платёж заплатить по графику. Можно его как-то разделить, чтобы хоть часть оплатить?', category: 'Продукты и обслуживание'
  },
  { text: 'Почему я не могу перевести деньги с вашей карты??', category: 'Карты и счета' },
  {
    text: 'Я подал заявку / оформил Лайф Сплит. На какую карту мне начислят деньги?', category: 'Продукты и обслуживание'
  },
  { text: 'Как мне забрать / получить карту Про?', category: 'Карты и счета' },
  { text: 'За какие MSS- коды начисляют кэшбэк??', category: 'Карты и счета' },
  {
    text: 'В течение какого времени вернёте деньги на карту, после оформления возврата?', category: 'Карты и счета'
  },
  {
    text: 'На входящую линию поступил звонок: «Здравствуйте, меня зовут Пётр, я из департамента статистики Центрального Банка». Что будем делать?', category: 'Безопасность' 
  },
  {
    text: 'Хочу закрыть счет, но не помню как это сделать. Помогите пожалуйста!', category: 'Карты и счета'
  },
  { text: 'Я потерял карту Про! Что делать? Помогите!', category: 'Карты и счета' },
  { text: 'Почему я не могу войти в ЛК карты Пэй?', category: 'Личный кабинет' },
  { text: 'Сколько проверок происходит при оформление этого Лайф Сплита?', category: 'Продукты и обслуживание' },
  { text: 'Как пользоваться картой Пэй?', category: 'Продукты и обслуживание' },
  {
    text: 'У меня с карты списали деньги за какой-то сплит! Что это такое? Верните мои деньги!', category: 'Продукты и обслуживание'
  },
  {
    text: 'Клиент хочет оставить жалобу на представителя банка, пользователя не уведомили о переносе встречи. Какие наши действия?(сегодня суббота)', category: 'Продукты и обслуживание',
  },
  { text: 'Я хочу привязать к карте Про новый номер! Как мне это сделать?', category: 'Карты и счета' },
  { text: 'Почему с моей карты сняли комиссию за перевод???', category: 'Карты и счета' },
  { text: 'Как мне активировать карту Пэй?', category: 'Карты и счета' },
  { text: 'Когда формируется порядок уплаты платежей по Лайф Сплиту?', category: 'Продукты и обслуживание' },
  {
    text: 'Я заправился бензином, и с меня списали больше чем должны были. Что происходит?', category: 'Карты и счета'
  },
  {
    text: 'Нам поступает звонок от правоохранительных органов. Наши действия?', category: 'Безопасность'
  },
  {
    text: 'Я сделал возврат товара. Когда и на какую карту мне вернут деньги?', category: 'Карты и счета'
  },
  { text: 'Сколько действует беспроцентный период?', category: 'Продукты и обслуживание' },
  { text: 'Помогите! Меня взломали!!!!! Что  делать?', category: 'Безопасность' },
  {
    text: 'Здравствуйте. Я ни как не могу найти реквизиты карты. Как мне их посмотреть?', category: 'Карты и счета'
  },
  { text: 'Передаём ли мы данные по этому продукту в БКИ? Куда ещё передаём?', category: 'Продукты и обслуживание' },
  { text: 'Я потерял карту Пэй! Что делать? Помогите!', category: 'Карты и счета' },
  {
    text: 'Здравствуйте! Нигде не смог найти номер телефона поддержки Такси. Пожалуйста, подскажите мне его.', category: 'Продукты и обслуживание'
  },
  { text: 'Как пользоваться картой Про?', category: 'Продукты и обслуживание' },
  { text: 'Какие условия для оформления Лайт Сплита?', category: 'Продукты и обслуживание' },
  { text: 'Я оплатил покупку. Почему мне не начислии кэшбэк', category: 'Карты и счета' },
  { text: 'Почему у меня заблокировали карту Пэй?', category: 'Карты и счета' },
  {
    text: 'У меня пропала карта / счет в способах оплаты! Как вернуть всё как было??', category: 'Личный кабинет'
  },
  {
    text: 'Я купил sim- карту, и почему- то на ней уже открыт счёт в вашем банке! Я ничего не открывал! Помогите!', category: 'Безопасность'
  },
  { text: 'Я хочу оплатить кредит досрочно! Расскажите подробнее пожалуйста!', category: 'Продукты и обслуживание' },
  { text: 'Как мне активировать карту Про?', category: 'Карты и счета' },
  {
    text: 'Здравствуйте! я работаю водителем, и хочу взять кредит на любые цели. Как мне это сделать?', category: 'Продукты и обслуживание'
  },
  { text: 'Что будет, если я не смогу заплатить вовремя??', category: 'Продукты и обслуживание' },
  { text: 'Какие реквизиты у моей карты Про?', category: 'Карты и счета' },
  { text: 'Я хочу закрыть Супер Сплит! Как мне это сделать?', category: 'Продукты и обслуживание' },
  { text: 'Как мне пополнить карту Про через банкомат? не могу разобраться', category: 'Карты и счета' },
  { text: 'Я закрыл счет, но он мне предлагается для пополнения! Почему?', category: 'Карты и счета' },
  {
    text: 'У меня есть кредит на любые цели для водителей, но я не разобрался как платить!', category: 'Продукты и обслуживание'
  },
];

const sidebar = document.getElementById('sidebar');
const navMain = document.getElementById('main');

const lavelEase = document.getElementById('level-easy');
const lavelHard = document.getElementById('level-hard');
const resetDif = document.getElementById('hub-reset-difficulty');
const resetResult = document.getElementById('hub-reset-result');
const about = document.getElementById("hub-about");
const hubQuestions = document.getElementById('hub-questions');

const mainItem = document.getElementById('hub-main');
const buttonFinish = document.getElementById('finish');

const questionBox = document.getElementById('question-box');
const timerDisplay = document.getElementById('timer');
const inputText = document.getElementById('answer-input');

const screens = document.querySelectorAll('[data-screen]');              
const btnNav = document.querySelectorAll('[data-target]');
const theme = document.querySelectorAll('.difficulty-option');
const filtered = (arr, queryTheme) => {                              
  return arr.filter(item => item.category.includes(queryTheme));
}
                                                                       
const handleThemeClick = (e) => {                                       
  if(e.target.id === 'level-easy' || e.target.id === 'level-hard') {
        return;
      }                                                         
      e.preventDefault();
      const queryTheme = e.target.textContent.trim();
      filtered(questions, queryTheme);
};

theme.forEach((item) => {
    item.addEventListener('click', (handleThemeClick));
  }); 

  const showScreen = (screenName) => {                    
  screens.forEach((screen) => {
  if(screen.dataset.screen === screenName) {
    screen.classList.remove('hidden');
  }
  else {
    screen.classList.add('hidden');
  }
  });
  window.scrollTo(0, 0);
};

const handleScreenClick = (e) => {
  e.preventDefault();
  const targetScreen = e.currentTarget.dataset.target;
  if(!targetScreen) return;
  showScreen(targetScreen);
  console.log('Клик сработал!', e.currentTarget.dataset.target);
}

btnNav.forEach((button) => {
  button.addEventListener('click', (handleScreenClick));
})       

let copy = [...questions];

const randomQuestion = (count) => {
  if (copy.length === 0) {
    copy = [...questions];
  }
  let result = [];
  for (let i = 0; i < count && copy.length > 0; i++) {
    let random = Math.floor(Math.random() * copy.length);
    result.push(copy[random]);
    copy.splice(random, 1);
  }
  return result;
};

const buttonGo = document.getElementById('go');

buttonGo.addEventListener('click', () => {
  let randText = randomQuestion(1)[0];
  if (!randText) return;
  questionBox.classList.add('fade-out');

  setTimeout(() => {
    questionBox.textContent = randText.text;

    questionBox.classList.remove('fade-out');
  }, 200);
});

const cards = document.querySelectorAll('.card-body');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });
});

const container = document.getElementById('hub-difficulty');

document.addEventListener('DOMContentLoaded', () => {
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('hub-label') || e.target.id === 'level-easy') {
      e.preventDefault();
      e.target.classList.toggle('active');
    }
  });
});


