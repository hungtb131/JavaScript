//1.Viết hàm tạo một số ngẫu nhiên từ 0 đến n .
function randomInteger(b) {
    return Math.floor(Math.random() * (b + 1));
}
//2.Viết hàm chuyển đỏi một số từ hệ cơ số này sang  hẹ cơ số khác
let  convert=(number) =>
{
    if (number < 0)
    {
        number = 0xFFFFFFFF + number + 1;
    }

    return number.toString(16);
}

console.log(convert(255));
function convert(number, base1, base2) {
    return parseInt(number, base1).toString(base2);
}

//3.tạo một  số ngẫu nhiên trong khoảng từ a -> b
let  randomInteger=(a, b) => {
    return Math.floor(Math.random() * (b-a + 1)) + a;
}

//.Viết hàm tạo mã màu hex ngẫu nhiên
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


//.Viết hàm cắt chuỗi từ vị trí đàu tiên tới vị trí chỉ định
let cut = (str, index) => str.substring(0, index + 1);
//.Viết hàm chuyển đổi một tên thành tên viết tắt
let nickname = (String) => {
    String.substring()
}
//.Viết hàm ẩn địa chỉ email
let hidenEmail = (email) => {
    return email.slice(0, 2) + "..." + email.slice(email.indexOf("@"));

}
//.viết hàm thay thế kí tự trong string bằng kí tự ngay sau trong bảng unicode
let replace = (myString) => {
    let result = "";
    for (let i = 0; i < myString.length; i++){
        result
    }

}
//chuyển viết hoa và viết thường
let changeString = (str) => {
    let newStr = "";
    for (let i = 0; i<str.length; i++){
        if (str[i] == str[i].toUpperCase()) {
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;
}
//Khai báo mảng
let foo = [];
console.log(foo.length) // 0
let number = [1, 2, 3];
number[-3] = "chỉ mục âm"
number[9] = 9;
number['string'] = 'String';
console.log(number.length); // 10
console.log(number); // [ 1, 2, 3, empty * 6, 9, '-3': 'so am', string: 'String']



//Viết hàm arr._concat(arr2) gộp các phần tử của mảng arr2 vào arr1




//Viết hàm arr._push(value) thêm giá trị vào cuối mảng.
let arr_push = (value) => {
    return arr[arr]

}
//Viết hàm arr.reverse() đảo ngược mảng
arr = [4, 5, 6, 7, 8,1, 2, 3,9];
let start = 0;
let end = arr.length - 1;
let reverse


//
var a = [33, 103, 3, 726, 200, 984, 198, 764, 9];

function f(number) {
    console.log(number * number);
}
function _forEach(callback) {
    for (let i = 0; i < this.length; i++){
        callback(this[i]);
    }
}
arr._forEach = _forEach();
//
//

// 1. Viết hàm chuyển đổi một chuỗi thành dạng capitalize. VD: “hello world” => “Hello World”
let capitalizeChange = (str) => {
    let result = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] == " ") result += str[i].toUpperCase();
        else result += str[i];
    }
    return result;
};
capitalizeChange("hello world");

// 2. Viết hàm chuyển đổi một chuỗi thành dạng paramaterize. VD “Hello World” => “hello-world”
function paramaterize(string) {
    let newString = "";
    for (let i = 0; i < string.length; i++){
        if (string[i] == string[i].toUpperCase()) {
            newString += string[i].toLowerCase();
        } else newString += string[i];
    }
    let space = newString.indexOf(" ");
    return newString.replace(/\s/g,"-");
}
paramaterize(" Hello World");

// 3. Viết hàm loại bỏ khoảng trắng ở đầu, cuối, và rút gọn khoảng trắng ở giữa các từ trong chuỗi. VD: “Hello world ! ” => “Hello world !”
let deleteSpaccing = (string) => string.replace(/\s+/g, " ");

deleteSpaccing("     Hello    world   !          ");

// 4. Viết hàm đảo ngược chữ thường thành chữ hoa, và ngược lại. VD “aBcD” => “AbCd”
function reverseChar(string) {
    let newString = "";
    for(let i = 0; i < string.length; i++){
        if(string[i] == string[i].toUpperCase()){
            newString += string[i].toLowerCase()
        }else if (string[i] == string[i].toLowerCase()){
            newString += string[i].toUpperCase()
        }else{
            newString += string[i];
        }
    }
    return newString;
}
reverseChar("AbCDEjfgrhgdfgh");

// 5. Viết hàm lặp chuỗi n lần. VD “Hehe”, 3 => “HeheHeheHehe”
function repeatString(string, n) {
    let newString = "";
    for (let i = 0; i < n; i++){
        newString += string;
    }
    return newString;
}
repeatString("Hehe", 3);

// 6. Viết hàm chèn một chuỗi con vào chuỗi tại index chỉ định. VD “ac”, “b”, 1 => “abc”
let insertIndex = (string1, string2, index) => string1.slice(0, index) + string2 + string1.slice(index)

insertIndex("abc", "a", 1);
// 7. Viết hàm rút gọn chuỗi nếu chuỗi dài hơn giá trị chỉ định. VD “abcdef”, 2 => “ab...”;
function compact(string, index) {
    if (string.length > index) {
        return string.replace(string.substring(index, string.length), "...")
    } else return string;
}
compact("abcde", 2);

// 8. Viết hàm đếm số lần xuất hiện của chuỗi con trong chuỗi. VD “abca”, “a” => 2
let count =(string1, string2) => string1.split(string2).length - 1;count("abca", "a");

// 9. Viết hàm cắt chuỗi theo số từ chỉ định. VD “My name is Ba”, 2 => “My name”
function cuttingString(string, n) {
    let newString = "";
    for (let i = 0; i < n; i++){
        newString += string.split(" ")[i] + " ";
    }
    return newString
}
cuttingString("Hello World I'm JavaScript", 2);

// 10. Viết hàm tạo chuỗi GUID ngẫu nhiên với độ dài 32 ký tự. VD “sfjh2ih4(U#%(kljo423oiir*(#%UIOJ”
function NewStringGuid(){
    let newStringGuid = "";
    for (let i = 0; i < 32; i++){
        newStringGuid += Math.floor(Math.random() * 0xF).toString(0xF);
    }
    return newStringGuid;
}
NewStringGuid();

// 11. Viết hàm thay thế các ký tự trong chuỗi thành ký tự liền sau trong bảng mã Unicode. VD: “ad” => “be”
function unicodeReplace(s) {
    let result = "";
    for (let i = 0; i < s.length; i++){
        result += String.fromCodePoint(s.charCodeAt(i) +1);
    }
    return result;
}
unicodeReplace("aBcDde");




// Viết hàm arr._concat(arr2) nối 2 mảng
arr._concat = function (arr2) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result[result.length] = this[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        result[result.length] = arr2[i];
    }
    return result;
};

// Viết hàm arr._push(value) thêm giá trị vào cuối mảng
arr._push = function (value) {
    let result = this;
    result[result.length] = value;
    return result;
};
// arr._pop() xóa phần tử cuối mảng, đồng thời trả về giá trị của các phần tử bị xóa
arr._pop = function () {
    let result = this[this.length - 1];
    this.length--;
    return result;
};
// arr._indexOf() tìm và trả về index của phần tử, nếu ko có trả về -1
arr._indexOf = function (value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == value) {
            return i;
        }
    }
    return -1;
};
// arr._reverse() đảo ngược mảng
arr._reverse = function () {

    for(let i=0, j = this.length - 1; i < j; i++, j--) {
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
};
//arr.sort() method.
//1.bubble sort
//khai báo hàm
function bubbleSort(arr){
    // độ dài mảng
    let len = arr.length;
    //loop
    for (let i = len-1; i>=0; i--){
        //inner loop
        for(let j = 1; j<=i; j++){
            //đặt điều kiện so sánh phần tủ trong mảng
            if(arr[j-1]>arr[j]){
                //đổi chõ
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
//filter(); - trả lại 1 mảng,không làm thay đổi mảng gọi nó
//khai báo mảng
let people =
    [
        {name: 'Helga Brekke',age: 25,gender: 'f',us: true},
        {name: 'Christine Hansen',age: 18,gender: 'm',us: false},
        {name: 'Alfred Roob',age: 17,gender: 'm',us: false},
        {name: 'Crystal Hermann',age: 27,gender: 'm',us: false},
        {name: 'Dax Koch',age: 22,gender: 'f',us: true}
    ];
let _filter = [];
//sử dụng vòng lặp duyệt mảng với 1 điều kiện nhất định
for (let i =0; i < people.length; i++){
    if (people[i].age >=18){
        _filter.push(people[i]);
    }
}
console.table(_filter);
// ----
arr = [{
    name: "nguyen",
    age: 20
},
    {
        name: "dung",
        age: 40
    }
]
let xetDk = (tuoi) => {
    if (tuoi.age > 29) return true;
    else return false;
}
arr._filter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result[result.length] = this[i];
        }
    }
    return result;
}
arr._filter(xetDk);



//some() kiểm tra xem mảng có ít nhất một phần tử thỏa mãn hàm truyền vào
// // trả về boolean
// let array = [1, 2, 3, 4, 5];
//
// // checks whether an element is even
// let even = (element) => element % 2 === 0;
//
// console.log(array.some(even));
// // expected output: true
//reduce()
let arr =
    [
        {name: 'Helga Brekke',age: 25,gender: 'f',us: true},
        {name: 'Christine Hansen',age: 18,gender: 'm',us: false},
        {name: 'Alfred Roob',age: 17,gender: 'm',us: false},
        {name: 'Crystal Hermann',age: 27,gender: 'm',us: false},
        {name: 'Dax Koch',age: 22,gender: 'f',us: true}
    ];
arr._reduce = function (callback,initial){
    let accu = initial;
    for(let i =0;i<arr.length;i++){
        accu = callback(accu,this[i]);
    }
return accu;
}
arr._reduce((sum, i ) => (sum +=i.name), 0);




//map
arr._map = function (callback){
    newArr = [];
    for (;;);
};
// tìm vị trí trong mảng của  1 phần tử
let arr = [1,2,3,4,5];
arr._indexOf = function (value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == value) {
            return i;
        }
    }
    return -1;
};
arr._indexOf(2);
//tìm phần tử lớn nhất trong mảng
let arr = [1,2,3,4,5];
arr._max = function (max){
    for (let i =0;i < this.length;i++){
        if (this[i] > max){
            return i;
        }
    }
}
arr._max()


