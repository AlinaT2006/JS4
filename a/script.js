let name = prompt('Введите своё имя')
let born = +prompt('Введите свой год рождения')
let year = +prompt('Введите нынешний год')

function age(name, born, year) {
    let ageHuman = year - born
   return name + ', ' + 'Ваш возраст ' +  ageHuman
}

if (born >= year || !isNaN(name)) {
    alert('Вы еще не родились')
    }else {
        alert('Зайдите в консоль')
        console.log(age(name, born, year));
    }



