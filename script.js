let questions = [
  { text: "Какой MCC- код будет при оплате картой Пэй?" },
  {
    text: "Я оформил заказ и сразу же его отменил. Почему деньги до сих пор не вернулись на мою карту?",
  },
  { text: "Какие есть графики платежей по Лайт Сплиту?" },
  { text: "Почему я не могу войти в ЛК карты Про??" },
  {
    text: "У меня в истории операций есть какая-то покупка,но я её не совершал! Она не выполнена, но я не знаком с этим сервисом. Помогите!",
  },
  {
    text: "Здравствуйте. я случайно выбрал не те категории кэшбека. как мне поменять это?",
  },
  {
    text: 'Оформлял ваш этот Сплин и мне написали "со Сплитом пока не получится", это что значит?',
  },
  { text: "Я открыл у вас карту, но не понял как ее пополнять.." },
  { text: "Сколько длится закрытие Лайт Сплита?" },
  { text: "Хочу закрыть счет в вашем банке, но не знаю как." },
  { text: "Возможно ли сейчас изменить лимит Лайт Сплита?" },
  { text: "Мне пришло СМС-сообщение от вас, оно настоящее?" },
  { text: "Как мне проверить баланс на карте??" },
  { text: "Оформил возврат на Маркете, на какую карту придёт возврат?" },
  { text: "Почему баллы Плюса списались сами / ушли в минус???" },
  { text: "Я оплатил покупку, но мне не начислили кэшбек! Почему?" },
  {
    text: "Мне задержали зарплату. Не смогу полностью платёж заплатить по графику. Можно его как-то разделить, чтобы хоть часть оплатить?",
  },
  { text: "Почему я не могу перевести деньги с вашей карты??" },
  {
    text: "Я подал заявку / оформил Лайф Сплит. На какую карту мне начислят деньги?",
  },
  { text: "Как мне забрать / получить карту Про?" },
  { text: "За какие MSS- коды начисляют кэшбэк??" },
  {
    text: "В течение какого времени вернёте деньги на карту, после оформления возврата?",
  },
  {
    text: "На входящую линию поступил звонок: «Здравствуйте, меня зовут Пётр, я из департамента статистики Центрального Банка». Что будем делать?",
  },
  {
    text: "Хочу закрыть счет, но не поуму как это сделать. Помогите пожалуйста!",
  },
  { text: "Я потерял карту Про! Что делать? Помогите!" },
  { text: "Почему я не могу войти в ЛК карты Пэй?" },
  { text: "Сколько проверок происходит при оформление этого Лайф Сплита?" },
  { text: "Как пользоваться картой Пэй?" },
  {
    text: "У меня с карты списали деньги за какой-то сплит! Что это такое? Верните мои деньги!",
  },
  {
    text: "Клиент хочет оставить жалобу на представителя банка, пользователя не уведомили о переносе встречи. Какие наши действия?(сегодня суббота)",
  },
  { text: "Я хочу привязать к карте Про новый номер! Как мне это сделать?" },
  { text: "Почему с моей карты сняли комиссию за перевод???" },
  { text: "Как мне активировать карту Пэй?" },
  { text: "Когда формируется порядок уплаты платежей по Лайф Сплиту?" },
  {
    text: "Я заправился бензином, и с меня списали больше чем должны были. Что происходит?",
  },
  {
    text: "Нам поступает звонок от правоохранительных органов. Наши действия?",
  },
  {
    text: "Я сделал возврат товара. Когда и на какую карту мне вернут деньги?",
  },
  { text: "Сколько действует беспроцентный период?" },
  { text: "Помогите! Меня взломали!!!!! Что  делать?" },
  {
    text: "Здравствуйте. Я ни как не могу найти реквизиты карты. Как мне их посмотреть?",
  },
  { text: "Передаём ли мы данные по этому продукту в БКИ? Куда ещё передаём?" },
  { text: "Я потерял карту Пэй! Что делать? Помогите!" },
  {
    text: "Здравствуйте! Нигде не смог найти номер телефона поддержки Такси. Пожалуйста, подскажите мне его.",
  },
  { text: "Как пользоваться картой Про?" },
  { text: "Какие условия для оформления Лайт Сплита?" },
  { text: "Я оплатил покупку. Почему мне не начислии кэшбэк" },
  { text: "Почему у меня заблокировали карту Пэй?" },
  {
    text: "У меня пропала карта / счет в способах оплаты! Как вернуть всё как было??",
  },
  {
    text: "Я купил sim- карту, и почему- то на ней уже открыт счёт в вашем банке! Я ничего не открывал! Помогите!",
  },
  { text: "Я хочу оплатить кредит досрочно! Расскажите подробнее пожалуйста!" },
  { text: "Как мне активировать карту Про?" },
  {
    text: "Здравствуйте! я работаю водителем, и хочу взять кредит на любые цели. Как мне это сделать?",
  },
  { text: "Что будет, если я не смогу заплатить вовремя??" },
  { text: "Какие реквизиты у моей карты Про?" },
  { text: "Я хочу закрыть Супер Сплит! Как мне это сделать?" },
  { text: "Как мне пополнить карту Про через банкомат? не могу разобраться" },
  { text: "Я закрыл счет, но он мне предлагается для пополнения! Почему?" },
  {
    text: "У меня есть кредит на любые цели для водителей, но я не разобрался как платить!",
  },
];

const sidebar = document.getElementById("sidebar");
const navMain = document.getElementById("main");
const lavelEase = document.getElementById("level-ease");
const lavelHard = document.getElementById("level-hard");
const resetDif = document.getElementById("hub-reset-difficulty");
const resetResult = document.getElementById("hub-reset-result");
const about = document.getElementById("hub-about");
const hubQuestions = document.getElementById("hub-questions");

const mainItem = document.getElementById("hub-main");
const buttonFinish = document.getElementById("finish");

const questionBox = document.getElementById("question-box");
const timerDisplay = document.getElementById("timer");
const inputText = document.getElementById("answer-input");

const screenTraining = document.getElementById("screen-training");
const screenStart = document.getElementById("screen-start");

const toggleScreens = () => {
  screenStart.classList.add("hidden");
  screenTraining.classList.remove("hidden");
  window.scrollTo(0, 0);

  setTimeout(() => {
    screenStart.style.display = "none";
  }, 400);
};

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

const buttonGo = document.getElementById("go");

buttonGo.addEventListener("click", () => {
  let randText = randomQuestion(1)[0];
  if (!randText) return;
  questionBox.classList.add("fade-out");

  setTimeout(() => {
    questionBox.textContent = randText.text;

    questionBox.classList.remove("fade-out");
  }, 200);
});

const cards = document.querySelectorAll(".card-body");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });
});

const container = document.getElementById("hub-difficulty");

document.addEventListener("DOMContentLoaded", () => {
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("hub-label")) {
      e.target.classList.toggle("active");
    }
  });
});

const buttonStart = document.getElementById("start");

buttonStart.addEventListener("click", toggleScreens);

mainItem.addEventListener("click", toggleScreens);
