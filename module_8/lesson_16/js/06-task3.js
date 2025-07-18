/**
 * Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
 * так щоб вона приймала об'єкт з параметрами будинку,
 * включаючи довжини сторін будинку.
 * Функція повинна розрахувати та повернути периметр будинку.
 */

function calculateHousePerimeter({ sideC, sideD, sideB, sideA }) {
    const perimeter = sideA + sideB + sideC + sideD;
    return perimeter;
  }

const house = {
    sideA: 10,
    sideB: 15,
    sideC: 10,
    sideD: 15
}


const perimeter = calculateHousePerimeter(house);
console.log(`Периметр будинку: ${perimeter}`);


