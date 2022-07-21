<h1 align="center">Tetris game</h1>
<h2 align="center">Игра тетрис с регистрацией и личным кабинетом</h2>
<p align="center">
  <img style="height: 500px;" src="https://user-images.githubusercontent.com/73533889/180195352-388254da-4802-4681-adf2-49f8775a327d.png">
</p>
<h2 align="center"><a href="https://game-tetris-react.herokuapp.com/" target="_blank">:arrow_right: Ссылка на сайт 	:eyes: </a></h2>
<h2>Описание</h2>
Сайт реализован c использованием библиотеки React.js. Пользователь может зарегистрироваться и получить доступ к игре, достижения игрока будут сохранены и отображены на личной странице.
<h2>О проекте</h2>

Игроку необходимо пройти регистрацию: ввести имя, e-mail и пароль не менее 6 символов. 
<p>Чтобы начать игру, необходимо нажать на кнопку "START GAME".</p>  
<p>Для управления элементами используются клавиши стрелок на клавиатуре: </p>  

- :arrow_up: - перевернет элемент по часовой стрелке
- :arrow_down: - переместит элемент на одну клетку вниз
- :arrow_left: - переместит элемент на одну клетку влево
- :arrow_right: - переместит элемент на одну клетку вправо

**Правила:**
<p>Каждая заполненная строка дает очки игроку:</p>

- 40 - одна заполненная строка
- 100 - две заполненные строки
- 300 - три заполненные строки
- 1200 - четыре заполненные строки

Когда игрок очистил 10 строк, то уровень повышается и скорость элементов увеличивается.

<h2>Содержание сайта</h2>

### Авторизация

<p align="center" >
  <img src="https://user-images.githubusercontent.com/73533889/180196722-9c0fa5a6-aa9b-4901-bd99-5cf3d107358a.png">
</p>

На странице авторизации пользователь может пройти регистрацию и войти в систему. При введении некорректных данных будет появляться сообщение об ошибке. Пользователю присваивается токен, который сохраняется в локальном хранилище браузера на 24 часа. 

### Хедер

<p align="center">
  <img src="https://user-images.githubusercontent.com/73533889/180197184-ff2d8015-c245-4274-97a5-10617bc682df.png">
</p>

Хедер содержит навигацию на страницу с игрой. Страницу пользователя с именем пользователя и кнопку выхода из системы.

### Страница с игрой

<p align="center">
  <img src="https://user-images.githubusercontent.com/73533889/180197540-22b3cc02-133d-433a-a3e7-e95e8e7d5c88.png">
</p>

На странице с игрой находится сцена с игровым дисплеем справа. При нажатии на кнопку "START GAME" запустится игра.

### Дисплей

<p align="center">
  <img src="https://user-images.githubusercontent.com/73533889/180198165-42ce6e1c-e105-42bb-8746-e241d23aa1a2.png">
</p>

На дисплее отображается количество набранных очков, очищенных строк и уровень сложности игры.

### Статистика

<p align="center">
  <img src="https://user-images.githubusercontent.com/73533889/180208519-05293f0f-6f8c-4345-89c3-7abdc1e5a8ee.png">
</p>

Когда игра закончилась и набрано больше, чем 0 очков, то появляется модальное окно с результатом. При закрытии окна, результат отправляется на сервер и отображается на личной странице пользователя.

### Личный кабинет

<p align="center">
  <img src="https://user-images.githubusercontent.com/73533889/180209239-4069ca11-7ba5-4489-bd95-82882ac60e8d.png">
</p>

На странице пользователя отображается имя, e-mail и сохраненная личная статистика по результатам игры пользователя.

### Инструменты
Для реализации сайта я использовала такие технологии как:

- React.js
- TypeScript
- Node.js
- Express
- MongoDB
- JavaScript
- Heroku
- HTML
- CSS(SCSS)

Проект разделен на **frontend** и **backend** части. 
**Frontend** реализован с использованием библиотеки React.js на основании среды Create React App с Type Script. 
**Backend** написан на Node.js и работает с базой данных, размещенной на MongoDB.
<p><a href="https://game-tetris-react.herokuapp.com/" target="_blank">Итоговый результат</a> размещен на хостинге Heroku.</p>

### Установка
Установка зависимостей для проекта
```
npm install
```
Запуск сайта для разработки
```
npm run dev
```
Запуск сайта из папки build
```
npm run client:build
npm run server:start
```
