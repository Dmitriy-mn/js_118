// --------------------- Деструктуризація об'єктів

// const user = { 
// 	name: "Jacob", 
// 	age: 32 
// };

// const { name, age } = user;
// console.log(name); // Jacob
// console.log(age); // 32









// --------------------------- Деструктуризація неіснуючих властивостей

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };

// // Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги
// const {
//   title,
//   author,
//   coverImage = "https://via.placeholder.com/640/480"
// } = book;

// console.log(title); // "The Last Kingdom"
// console.log(author); // "Bernard Cornwell"
// console.log(coverImage); // "https://via.placeholder.com/640/480"





// ------------------------------ Перейменування змінної

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author: bookAuthor, isPublic, rating: bookRating } = book;
// console.log(title); // "The Last Kingdom"
// console.log(bookAuthor); // "Bernard Cornwell"
// console.log(isPublic); // true
// console.log(bookRating); // 8.38






// ------------------------------ Значення за замовчуванням


// const book = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title,
//   coverImage: bookCoverImage = "https://via.placeholder.com/640/480",
// } = book;

// console.log(title); // "The Last Kingdom"
// console.log(bookCoverImage); // "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg"







// ------------------------------ Деструктуризація в циклах

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }







// ------------------------------ Деструктуризація параметрів

// function printUserInfo({ name, age, hobby }) {
//   console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }

// printUserInfo({ 
// 	name: "Alice", 
// 	age: 25, 
// 	hobby: "dancing" 
// }); // Name: Alice, Age: 25, Hobby: dancing







// ------------------------------ Глибока деструктуризація

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views, likes },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(views); // 4827
// console.log(likes); // 1308






// ------------------------------ Деструктуризація масивів

// const color = [200, 255, 100];
// const [ red, green, blue ] = color;

// console.log(`rgb(${red}, ${green}, ${blue})`); // “rgb(200, 255, 100)"






// ------------------------------ Часткова деструктуризація

// const color = [200, 255, 100];

// const [ red, ...otherColors ] = color;

// console.log(red); // 200
// console.log(otherColors); // [255, 100]

