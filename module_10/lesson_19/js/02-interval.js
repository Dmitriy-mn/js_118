
const greet = () => {
  console.log("Hello!");
};

const intervalId = setInterval(greet, 3000);

clearInterval(intervalId);

