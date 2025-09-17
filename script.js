// // ПЕРЕМЕННЫЕ И СТРОГИЙ РЕЖИМ
// // 'use strict'
// // a = 10;
// // console.log(a);

// // Нельзя использовать зарезервированные слова, например alert
// // Желательно записывать переменные в формате camelCase 
// // Переменные, записанные в разном регистре - разные переменные

// // I -- var -- старый вариант объявления переменной. Данные переменные видны на протяжении всего кода и для них характерно так называемое "всплытие" (Их можно достать из другого блока кода, к ним можно обратиться до их фактического объявления)
// console.log(camelCase);
// var camelCase = 10;

// // II -- let -- вариант объявления переменной, значение которой может быть изменено в дальнейшем коде
// let PascalCase = 10;
// PascalCase = 12;
// console.log(PascalCase);

// // III -- const -- вариант объявления переменной, значение которой не может быть изменено через прямое присваивание 
// const snake_case = 10;

// // Важно помнить, что прямых констант в JS не существует и значение const также можно изменять, например как показано ниже:
// const constObj = {
//     num: 200,
//     arr: [],
//     obj: {}
// };
// constObj.num = 450;
// console.log(constObj);

// // ТИПЫ ДАННЫХ (ПРИМИТИВЫ И ОБЪЕКТЫ)
// // К примитивам относятся: Числа, Строки, Логические значения, Null, Undefined, Symbol, BigInt
// // Объекты делят на "Обычные объекты" и "Специальные объекты". К последним относят Функции, Массивы, Объект Даты, Регулярные выражения, Ошибки

// // Пример объекта, обращения к его свойству различными способами, а также вызов его метода
// const myObj = {
//     name: 'Dmitriy',
//     age: 20,
//     isStudent: true,
//     knowledge: ['html', 'css', 'js'],
//     sayHello: () => {
//         console.log(`Эхэй, всем привет, меня зовут ${myObj.name}`);
//     }
// };
// console.log(myObj.age);
// console.log(myObj['age']);
// myObj.sayHello();

// // Далее примеры работы со строками:
// const persone = `Alex`;
// // I - Интерполяция строк
// console.log(`hello ${persone}`);
// // II - Конкатенация строк
// console.log(`hi ` + persone);

// // Массив - это частный случай объекта!
// let firstArray = ['apple.jpg', 13, {}, [], true];
// console.log(firstArray[1]);

// // infinity и -infinity
// console.log(`${1/0} и ${-1/0}`);

// // NaN
// console.log('string' * 15);

// // ОПЕРАТОРЫ : - + / * % = == ===

// // унарный плюс
// console.log(4 + +'5');

// // инкримент и декримент
// let incr = 15, decr = 15;
// // постфиксная форма изначально возвращает исходное значение
// console.log(`${incr++}, ${decr--}`); 
// // префиксная форма сразу возвращает новое значение
// console.log(`${++incr}, ${--decr}`);

// // Логические операторы (или, и)
// const isChecked = true, isClose = false;
// console.log(isChecked || isClose);
// console.log(isChecked && isClose);

// // Оператор нулевого слияния (??) — это логический оператор, возвращающий значение правого операнда, если значение левого операнда содержит null или undefined, в противном случае возвращается значение левого операнда
// const justSomeFunctionResult = null ?? "default string";
// const anotherFunctionResult = "undefined" ?? "default string";
// console.log(justSomeFunctionResult);
// console.log(anotherFunctionResult);

// // УСЛОВИЯ
// // if (условие) {действие} else {действие}
// if (4 == 9) {
//     console.log("amazing");
// } else {
//     console.log("imposible")
// }

// // с использованием переменной, ветвления, логических операторов и приблизительного сравнения
// let num = 50;

// if (num <= 0) {
//     console.log("мало");   
// } else if (num > 0 && num <= 49) {
//     console.log("всё ещё мало");
// } else if (num == 50 ) {
//     console.log("бинго");
// } else {
//     console.log("много");
// }

// // тернарный оператор (условие ? верно : неверно)
// (num == 50) ? console.log("точно так") : console.log("не верно");

// // switch-case - конструкция для создания условий, через строгое совпадение
// switch (num) {
//     case 48:
//         console.log("Иванов");
//         break;
//     case 49:
//         console.log("Петров");
//         break;
//     case 50:
//         console.log("Сидоров");
//         break;
//     default:
//         console.log("Пользователь не найден");
//         break;
// }

// // ЦИКЛЫ
// // while - пока выполняется условие, быдут выполнятся действия
// while (num < 55) {
//     console.log(num);
//     num++
// }

// // do - действия выполняются в первую очередь и до тех пор, пока выполняется условие
// do {
//     console.log(num);
//     num++
// }
// while (num < 55);

// // for - цикл, которому можно задать определённое количество итераций (повторений) и управлять ими
// for (let index = 0; index < 10; index++) {
//     console.log('hello world');
// }

// // вложенность циклов 
// let res = '';
// const length = 7;

// for (let i = 0; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         if (j == 3) {
//             break
//         }
//         res += '*'
//     }
//     res += '\n'
// }

// console.log(res);

// // res = res + '*' === res += '*' - ещё один полезный оператор в JS

// // ФУНКЦИИ (3 вида создания)

// // I -- function declaration -- объявление функции -- существует до выполнения скрипта и соответственно видна на протяжении всего кода
// const amount = 150, usdCurr = 80, eurCurr = 100;

// console.log(convert(amount, usdCurr));
// console.log(convert(amount, eurCurr));
// // Вызов функции до её объявления возможен в случае с function declaration

// function convert (a, b) {
//     if (0 > 1) {
//         return
//     }
//     return (a * b);
// }

// // Аргументы - это значения переменных, передаваемых в функцию (для примера выше: 150 и 80)
// // Параметры - это переменные, передаваемые в функцию в качестве аргументов (для примера выше: amount и usdCurr)
// // Ключевое слово return возвращает результат выполнения функции и прерывает её дальнейшее исполнение

// // !В СТРОГОМ РЕЖИМЕ НЕЛЬЗЯ ВЫЗВАТЬ ФУНКЦИЮ ИЗ ДРУГОГО БЛОКА КОДА!

// // II -- function expression -- функциональное выражение инициализируется вместе со скриптом и следовательно не может быть вызвано до его объявления
// const user = 'Dmitriy';

// const logMessage = function (u = 'user') {
//     let ourMessage = 'Hello';
//     console.log(`${ourMessage}, ${u}!`);
// }
// logMessage(user);

// // console.log(`Попытка обратиться к внешней переменной: ${user}, и к локальной: ${ourMessage}`);

// // Локальные переменные - это переменные в теле функции (ourMessage, u)
// // Внешние переменные - это переменные за пределами функции (user)
// // Глобальные переменные - это переменные, которые видны во всём коде

// // В примере выше исп. также параметр по умолчанию (u = 'user')

// // III -- анонимное функциональное выражение или стрелочная функция
// const arrowFunc = (params = 'string') => {
//     console.log(params);
// }
// arrowFunc();

// // РЕКУРСИЯ - явление, когда функция вызывает саму себя.

// // Пример без рекурсии (умножаем res на numOne, numTwo раз)
// function calcSum(numOne, numTwo) {
//     let res = 1;

//     for (let i = 0; i < numTwo; i++) {
//         res *= numOne;
//     }
//     return res
// }
// console.log(calcSum(3, 5));

// // Пример c рекурсией 
// function calcSumm(numOne, numTwo) {
//     if (numTwo === 1) {
//         return numOne
//     } else {
//         return numOne * calcSumm(numOne, numTwo - 1);
//     }
// }
// console.log(calcSumm(3, 5));

// // Глубина рекурсии - это количество вложенных вызовов функции

// // CALLBACK - это функция, передаваемая в качестве аргумента другой функции
// function learnLang(lang, callback) {
//     console.log(`Я учу ${lang}`);
//     callback();
// }
// function writeHow() {
//     console.log('Пытаюсь понять лекции');
// }
// learnLang('JS', writeHow);

// // Замыкание - это функция и все доступные ей переменные (функция и её лексическое окружение)
// // Лексическое окружение - это специальный внутренний объект в JS, который создаётся при вызове функции, и который можно представить в формате словаря пар ключ: значение. Данный объект состоит из двух частей: переменных в текущей области видимости и ссылки на родительское лексическое окружение. 
// // (Пример в -- II -- function expression --)
// // Global Lexical Environment:
// // {ссылка: null, переменные: {user: 'Dmitriy', logMessage: function}}
// // Local lexical Environment:
// // {ссылка: Global Lexical Environment, переменные: {ourMessage: 'Hello'}}

// // ВРЕМЯ ВЫПОЛНЕНИЯ СКРИПТОВ
// // Для управления временем выполнения скриптов в JS существуют встроенные методы:
// // I -- setTimeout - устанавливает задержку
// const firstTimeOutExample = setTimeout(() => {
//     console.log('3 seconds later');
// }, 3000);

// // clearTimeout
// const someIterator = 10;
// const secondTimeOutExample = setTimeout(() => {
//     console.log('3 seconds later');
// }, 3000);
// if (someIterator > 5) {
//     clearTimeout(secondTimeOutExample)
// }

// // передача функции
// function alarm () {
//     console.log('alarm');
// }
// const thirdTimeOutExample = setTimeout(alarm, 3000);


// // II -- setInterval - устанавливает интервал повторения, а clearInterval(intervalID) его убирает
// // let anotherIterator = 0;
// // const intervalExample = setInterval(() => {
// //     console.log('3 seconds interval');
// //     anotherIterator++
// //     if (anotherIterator > 5) {
// //         clearInterval(intervalExample)
// //     }
// // }, 3000);

// // МЕТОДЫ ПЕРЕБОРА МАССИВОВ (И НЕ ТОЛЬКО)
// // I -- FOR IN -- способ перебора объектов
const secondTestObj = {
    name: 'Дмитрий',
    phoneNumber: '88005553535',
    email: 'mailMyMail@gmail.com',
    knowledge: {js: 85, html: 97, node: 55}
};
// for (const key in secondTestObj) {
//     if (typeof (secondTestObj[key]) === 'object') {
//         for (const i in secondTestObj[key]) {
//             console.log(`Знает ${i} на ${secondTestObj[key][i]}%`);
//         }
//     } else {
//         console.log(secondTestObj[key]);
//     }
// }

// // II -- FOR OF -- способ перебора массивов
// const brokenLinks = ['vk', 'youtube', 'facebook'];
// // for (const value of brokenLinks) {
// //     console.log(`https://${value}.com`)
// // }

// // // В переборах FOR IN и FOR OF, можно использовать ключевые слова break и continue
// // for (const value of brokenLinks) {
// //     if (value == 'facebook') {
// //         continue
// //     }
// //     console.log(`https://${value}.com`)
// // }

// // III -- FOREACH -- способ перебора массивов
// brokenLinks.forEach((item, positionInArray, array) => {
//     console.log(`В массиве ${array}, элемент ${item} занимает ${positionInArray} место`);
// })

// // МЕТОДЫ И СВОЙСТВА СТРОК И ЧИСЕЛ (И НЕ ТОЛЬКО)
// // Методы - это встроенные в JS функции 
// // Свойства - это встроенные в JS значения

// const someString = '  д   ';
// // Метод trim() удаляет пробельные символы с обоих концов строки
// const newStr = someString.trim();

// // Свойство length возвращает длину массива или строки
// console.log(newStr.length);

// // Метод map() создаёт новый массив на основе элементов исходного, где каждый элемент — результат выполнения функции
// function doNewArray (arr) {
//     return brokenLinks.map(item => `https://${item}.com`)
// }
// console.log(doNewArray(brokenLinks));

// // Метод shift() позволяет удалить первый элемент из массива и вернуть его значение
// console.log(brokenLinks.shift());
// console.log(brokenLinks);

// // Метод pop() позволяет удалить последний элемент из массива и вернуть его значение
// console.log(brokenLinks.pop());
// console.log(brokenLinks);

// // Метод split() позволяет разбить строку на массив подстрок на основе заданного разделителя. Разделителем может быть отдельный символ, другая строка или регулярное выражение
// const stingSTR = 'Hello, world';
// const arrFromSTR = stingSTR.split(', ');
// console.log(arrFromSTR);

// // Метод join() используется для объединения всех элементов массива в одну строку. 
// console.log(arrFromSTR.join(', wonderful '));

// // Метод sort() сортирует элементы массива и изменяет порядок элементов в исходном массиве. По умолчанию сортировка выполняется в порядке возрастания: элементы сравниваются как строки, и порядок определяется по кодам символов Unicode
// let fruits = ['яблоко', 'груша', 'банан', 'апельсин'];
// fruits = fruits.sort();
// console.log(fruits); 
// // Пример с сортировкой чисел в порядке возрастания:
// let numbers = [10, 5, 8, 3, 1];
// numbers = numbers.sort((a, b) => b - a);
// console.log(numbers);

// // ВЗАИМОДЕЙСТВИЕ СО СТРАНИЦЕЙ
// // DOM (Document Object Model) — объектная модель документа. Это представление HTML-документа в виде разветвлённой структуры или дерева (DOM-дерева). Каждый узел в DOM — это объект, который может иметь определённые свойства и методы.

// // querySelector() -- #id, .class, TAG
// const menuList = document.querySelector('#navMenu');
// console.log(menuList);

// // querySelectorAll() -- формирует псевдомассив DOM-элементов
// const menuItems = document.querySelectorAll('.menuItem');
// menuItems.forEach((item) => {
//     console.log(item);
// });

// // .getElementById('id') - получение элемента по ID
// // .getElementByTagName('DIV') - получение элемента по ТЕГУ
// // .getElementByClassName('class') - получение элемента по КЛАССУ

// // window - это основной корневой объект JavaScript, он же глобальный объект в браузере, и его также можно рассматривать как корневой объект объектной модели документа
// // screen - это небольшой информационный объект о физических размерах экрана
// // document является основным объектом потенциально видимой объектной модели документа

// // Управление стилями через JS
// navMenu.style.backgroundColor = 'red';
// menuItems[0].style.cssText = 'background-color: green; height: 40px';

// // СОБЫТИЯ, ИХ ОБРАБОТЧИКИ, ДЕЛЕГИРОВАНИЕ СОБЫТИЙ

// // События в JavaScript — это действия, которые происходят в браузере, которые код может перехватить и обработать. События могут быть инициированы пользователем, например, при нажатии кнопки или вводе текста в форму, или вызваны системой, например, при загрузке страницы или изменении размера окна браузера

// // Обработчик события — это функция, которая запускается при срабатывании определённого события.
// // Способы назначения обработчика событий:
// // I -- атрибуты onclick="", oninput="" и др.

// // II -- использование свойства DOM (не подлежит удалению)
// const btnForEvent = document.querySelector('#btnForEvent');

// // btnForEvent.ondblclick = () => console.log('dblclick');

// // III -- addEventListener предполагает следующий синтаксис: 
// // переменная.addEventListener('название события', function(объект события) {алгоритм действий при срабатывании события})
// btnForEvent.style.width = '250px';
// btnForEvent.style.height = '70px';

// // btnForEvent.addEventListener('click', () => {
// //     console.log('click');
// // })

// // removeEventListener и использование function expression
// // let enterCounter = 0;
// // const onMouseEnter = function () {
// //     console.log('mouseenter');
// //     enterCounter++
// //     if (enterCounter > 5) {
// //         btnForEvent.removeEventListener('mouseenter', onMouseEnter);
// //     }
// // }
// // btnForEvent.addEventListener('mouseenter', onMouseEnter);

// // Event — объект события в JavaScript, который описывает произошедшее на странице событие

// // btnForEvent.addEventListener('click', (event) => {
// //     console.log(event);
// // })

// // Объект Event имеет множество свойств, но для работы чаще всего используются .target и .type

// btnForEvent.addEventListener('click', (e) => {
//     console.log(e.target);
// })

// // Всплытие событий - это когда обработчик срабатывает сначала на вложенном элементе, а потом поднимается выше по иерархии элементов DOM

// // Отмена стандартного поведения браузера
// // Стандартное поведение браузера - это выделение текста, переход по адресу ссылки, перезагрузка страницы при отправке формы и др.
// // Для того, чтобы отменить стандартное поведение браузера, существует метод объекта события .preventDefault()

// const linkGPT = document.getElementById('linkGPT');

// linkGPT.addEventListener('click',(e)=> {
//     e.preventDefault();
//     console.log(this.innerText);
// })

// // ДЕЛЕГИРОВАНИЕ СОБЫТИЙ (нужно при динамическом добавлении элементов)
// console.log(menuItems)

// setTimeout(() => {
//     const dinamicLI = document.createElement('li');
//     dinamicLI.innerHTML = 'new listItem';
//     menuList.appendChild(dinamicLI);
// }, 5000)

// // menuItems.forEach(item => {
// //     item.addEventListener('click', (e) => {
// //         console.log(e.target.innerText)
// //     })
// // })
// // 
// menuList.addEventListener('click', (e) => {
//     if (e.target && e.target.tagName == 'LI') {
//         console.log(e.target.innerText)
//     }
// })

// // КОНТЕКСТ ВЫЗОВА: ключевое слово THIS, его методы и сценарии поведения

// // Разница между контекстом и лексическим окружением заключается в том, что контекст — это абстрактное окружение, в котором выполняется код, а лексическое окружение — конкретная структура, которая используется движком для хранения переменных, объявленных в определённой области видимости.

// // Ключевое слово this — это ссылка на объект (класс, функцию и т.п) в контексте которого выполняется текущая функция. Значение this будет различным, в зависимости от того где именно мы обращаемся к контексту.

// // Глобальный контекст
// // Создавая глобальные переменные, т.е. переменные, которые видны во всём коде, мы создаём их в глобальном контексте. Значение this будет различным, в зависимости от того, в какой среде интерпритируется код:
// // I -- В браузере глобальным контекстом будет объект Window.
// // II -- В Node глобальным контекстом будет объект Exports текущего модуля.

// // exports.default = {
// //     product: 'pen',
// //     price: 25
// // }

// // console.log(this);

// // Контекст внутри функций
// // Внутри таких конструкций как function expression и function declaration, значение this динамическое. Поведение this в контексте функции будет отличаться в зависимости от того, используется строгий режим или нет:

// 'use strict'
// function logThis() {
//     console.log(this);
// }
// logThis();

// // Значение this вновь будет различным, в зависимости от того, в какой среде интерпритируется код:
// // I -- В браузере мы снова получим объект Window.
// // II -- В Node контекст будет ссылаться на объект Global - глобальное пространство имён (хранит глобально-доступные переменные, функции и объекты) (Как Window в браузере, только для Node.js).

// // Контекст функции как метода в объекте
// // В данном примере метод создан не стрелочной функцией, поэтому контекстом метода будет его объект.
// const someProduct = {
//     product: 'pen',
//     price: 25,
//     logThis() {
//         console.log(this);
//     }
// }
// someProduct.logThis();
// // Посредством this, мы можем обращаться к новосозданному свойству объекта и решать таким образом различные задачи
// const anotherProduct = {
//     product: 'notebook',
//     price: 75,
//     logThisPrice(discountPercent = 0) {
//         console.log(this.price - discountPercent / 100 * this.price);
//     }
// }
// anotherProduct.logThisPrice(20);

// // МЕТОДЫ CALL(), BIND(), APPLY()
// // I -- call() - это метод, который как и метод apply(), устанавливает контекст при вызове новой функции.
// function sayName() {
//     console.log(this);
//     console.log(this.name);
// }
// const userForSayNameFunc = {
//     name: 'John'
// }
// sayName.call(userForSayNameFunc);

// // II -- apply()
// // Разница между call() и apply() состоит в их синтаксической конструкции:
// // call(object, arg, arg, arg, ...)
// // apply(object, [arg, arg, arg, ...])

// // III -- bind() - это метод, который устанавливает контекст без вызова функции.
// function count(num) {
//     return this * num
// }
// const double = count.bind(2)
// console.log(double(3));
// console.log(double(4));

// // Функции конструкторы - это функции, необходимые при создании множества однотипных объектов, например карточек товаров.
// function User (name, age) {
//     this.name = name,
//     this.age = age,
//     this.sayHello = function () {
//         console.log(`Hello ${this.name}`);
//     }
// }
// const Ivan = new User ('Ivan', 22);
// const Mary = new User ('Mary', 21);

// console.log(Ivan);
// Mary.sayHello()

// // Контекст и стрелочные функции
// // Стрелочные функции не имеют своего контекста и наследуют контекст родителя. В обработчиках событий, при использовании function declaration, контекстом будет элемент, на котором сработало событие.

// // КЛАССЫ (ES6)
// // Классы в Java Script - это обёртка функций конструкторов, своего рода "синтаксический сахар". 
// class Rectangle {
//     constructor(height, width) {
//         this.height = height,
//         this.width = width
//     }
//     calcArea() {
//         return this.height * this.width
//     }
// }
// const square = new Rectangle(10, 10);

// console.log(square);
// // console.log(square.calcArea());

// // Наследование классов 
// // Наследование осуществляется с помощью ключевого слова extends, которое указывает на родительский класс
// class ColoredRectangleWithText extends Rectangle {
//     constructor(height, width, text, color) {
//         // в super() передаются наследуемые параметры (эта директива всегда пишется вначале конструктора)
//         super(height, width),
//         this.text = text,
//         this.color = color
//     }
// }
// const coloredSquare = new ColoredRectangleWithText(20, 20, 'this is square', 'white');
// console.log(coloredSquare);
// console.log(coloredSquare.calcArea());

// // Деструктуризация на практике (в параметрах)
// class ProductCardItem {
//     constructor(object) {
//         this.image = object.src,
//         this.title = object.title,
//         this.description = object.description,
//         this.price = object.price
//     }
// }
// const iPhoneCardItem = new ProductCardItem({
//     src:'iPhone.jpg', 
//     title:'IPHONE', 
//     description:'This stuff really expensive', 
//     price:'120000'
// });

// console.log(iPhoneCardItem);
// console.log(iPhoneCardItem.logThisPrice(10)); 

// JSON (JavaScript Object Notation) — текстовый формат обмена данными, основанный на синтаксисе JavaScript, но не привязанный к нему.
// Формат JSON используется в различных областях:
// 1 - Обмен данными через API — веб-приложения используют JSON для отправки запросов и получения ответов. Например, при работе с REST API данные в запросе или ответе часто передаются в формате JSON. 
// 2 - Хранение конфигурационных данных в приложениях. 
// 3 - Динамические обновления на сайте — например, при добавлении товара в корзину или изменении его количества данные могут отправить на сервер и обратно в формате JSON без необходимости перезагружать всю страницу. 

// Объект JSON и его методы:
// I -- JSON.stringify(имя объекта) - позволяет преобразовать объект JS в формат JSON
// II -- JSON.parse(имя объекта) - позволяет преобразовать объект JSON в объект JS

// Синтаксис:
// {"key": "option"}

// Структура для глубокого копирования объекта:
const cloneObj = JSON.parse(JSON.stringify(secondTestObj));
console.log(cloneObj);

// AJAX (Asynchronous JavaScript and XML) — веб-технология, которая позволяет обновлять данные на веб-странице без перезагрузки её целиком. Дословно переводится как «асинхронный JavaScript и XML»

// Для общения с сервером необходимо использовать http-запросы, с помощью которых можно запрашивать данные, постить данные, сообщять об изменении данных и т.п.

// Способы общения с сервером:
// I -- XMLHttpRequest - это встроенный объект, который использовался для AJAX до появления более современного и гибкого метода

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    // Метод .open() - собирает настройки для будущего запроса и принимает следующие аргументы:
    // .open('метод запроса', 'адрес сервера', 'значение асинхронности - true или false', 'логин', 'пароль')
    request.open('GET', 'json/current.json');

    // Метод .setRequestHeader() - даёт серверу понять, с какими данными тому придётся работать и принимает данный метод следующие аргументы:
    // .setRequestHeader('заголовок, в примере - тип контента', 'содержимое заголовка - название типа контента')
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    // Метод .send() - отправляет запрос (в случае GET-запроса - без аргументов, в случае POST-запроса - добавляем тело запроса)
    request.send();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            // переводим объект JSON в объект JS
            const data = JSON.parse(request.response);
            // помещаем в inputUsd результат 'конвертации'
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(3)
        } else {
            inputUsd.value = 'ошибка';
        }
    });
})

// Свойства объекта XMLHttpRequest:
// 1 -- .status - содержит статус запроса (например 404)
// 2 -- .statusText - содержит текстовое описание статуса запроса (например not found)
// 3 -- .response - содержит ответ от сервера, заданный на backend части проекта
// 4 -- .readyState - содержит текущее состояние экземпляра объекта XMLHttpRequest и может включать следующие свойства:
// - 0 - UNSET - экземпляр был создан
// - 1 - OPENED - метод .open() был вызван
// - 2 - HEADERS_RECEIVED - метод .send() был вызван
// - 3 - LOADING - процесс загрузки
// - 4 - DONE - запрос завершён

// События:
// 'readystatechange' - сигнализирует о статусе готовности запроса в данный момент;
// 'load' - сигнализирует о полной готовности запроса, но не об успешном его ваполнении;

// SPREAD, REST
const funcLog = function (a, b, ...rest) {
    console.log(a,b);
    rest.forEach(item => {
        console.log(item);
    })
}
funcLog('a','b','c','d','g')

const newElement = document.createElement('LI');
const newTextNode = document.createTextNode('some text');
