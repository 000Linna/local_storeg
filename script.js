// запись  данных в LocalStoreg
// setItem  принимает 2 параметра ключ и значение
localStorage.setItem("key", "text")
// получить данные из локального хранилища-getItem
let str = localStorage.getItem('key')
console.log(str)

localStorage.setItem('key1', 1)
localStorage.setItem('key2', 2)
localStorage.setItem('key3', 3)

let num1 = localStorage.getItem('key1')
let num2 = localStorage.getItem('key2')
let num3 = localStorage.getItem('key3')
let str1 = +num1 + + num2 + +num3
console.log(str1)

// очистка локального ханилища
let btn = document.querySelector('#clear')
clear.addEventListener('click', () => {
    localStorage.clear()
})
// удалиить конкретный ключ
localStorage.removeItem("key2")

// перезапись данных в локал строэдж
localStorage.setItem('num1', 100)



let count = localStorage.getItem('reloadCounter')
// если значения нет (первый заход)то устанавливаем 0
if (count === null) {
    count = 0
} else {
    //  если такой ключ есть то его значение преобпразуенм в число и записываем в переменную
    count = +count

}
// 4. увеличиваем число на еденицу
count = count + 1
if (count > 10) {
    count = 0

}
localStorage.setItem('reloadCounter', count)
// cохраняем нроввый объ=ект в локал сторадж
localStorage.setItem('reloadCounter', count)

// 6. вывод значения на страницу
document.querySelector('#counter').textContent = count

// колличество записейц в локал сторадж
console.log(localStorage.length)
// полученимя ключа по номеру 
console.log(localStorage.key(2))
