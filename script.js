//Задание 1

/*let arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++) {
console.log(arr[i]);
}*/

//Задание 2

/*let arrNums = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
arrNums.sort(function(a,b){
    return a - b;
})
for(i = -10; i < arrNums.length; i++ ){
    if(arrNums[i] < -3){
        console.log(arrNums[i]);
    }
    
}

console.log(arrNums);*/



//Задание 3

/*let arr2 = [];
sum = 0;
for(let i = 23; i <= 57; i++ ){
    arr2.push(i);
}
for(i = 0; i < arr2.length; i++){
    sum += arr2[i];
}
        
console.log(arr2);
console.log(sum);


let arr2 = [];
i = 22;
while (i < 57){
i++;
arr2.push(i);

}
console.log(arr2);*/




//Задание 4
/*let arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
    let num = String(arr[i]);
    let char = num[0];
    if (char == 1 || char == 2 || char == 5) {
      console.log(num);
    }
}*/

//Задание 5


/*let arr = ['пн', 'вт', 'ср', 'чт', 'пт','сб', 'вс'];
 
for (let i = 0; i < arr.length; i++) {
    if (i > 4) {
        document.write(`<b>` + arr[i] + '</b>' + ' ');
    } else {
        document.write(arr[i] + ' ');
    }

}*/


//Задание 6


/*let arr = [3, 'вт', 5, 11, 0,'сб', 55];

arr.push(`Orange`);

lastItem = arr[arr.length - 1];

console.log(arr);
console.log(lastItem);*/



 //Задание 7


/*let arr = []; // создаем массив
    
for(let i=0; i < 100; i++) {
        
    arr[i] = prompt('Введите любое значение'); // Заполняем массив
    if(arr[i] === '') { // если  пустая строка
           
        break;  
    }
       
}

for (i = 0; i < arr.length; i++) { 
    console.log(arr[i]);
    }
    arr.sort(function(a,b){
    return a - b;
})
    
console.log(arr);*/

//Задание 8

//Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке), используя цикл while и метод reverse.

  /*let arr = [12, false, `Текст`, 4, 2, -5, 0];
    arr.reverse();
    console.log(arr);*/

   /* let arr = [12, false, `Текст`, 4, 2, -5, 0];
    
    i = 0;
    while (i < arr.length){
    i++;

    }
    console.log(arr);

// Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].*/

let arr = [5, 9, 21, , , 9, 78, , , , 6],
sum_ = 0,
i = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] == ` `){
        sum_ = sum_++;

    }else{arr[i] != ` `
        continue
    }
    
    }

console.log(arr[i]);
