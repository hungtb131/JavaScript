
//Bài tập mảng page 1
//1. Cho một mảng số, viết hàm tính trung bình cộng tất cả phần tử trong mảng

let arr = [1,2,3,4,5,6,7,8,9];
let avg = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};
avg(arr);
// 2. Cho một mảng số, viết hàm tìm index của một số trong mảng
let arr = [1,2,3,4,5,6,7,8,9];
let findIndex = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n) return i;
    }
    return -1;
};
findIndex(arr,10);
// 3. Viết hàm sao chép một mảng số
let arr = [1,2,3,4,5,6,7,8,9];
let copyArr = (arr) => arr.map((i) => i);
copyArr(arr);
// 4. Cho một mảng số, viết hàm tìm giá trị lớn nhất trong mảng
let arr = [1,2,3,4,5,6,7,8,9];
function findMax(arr){
    let max = arr[0];
    for (let i =0;i<arr.length;i++){
        if (arr[i] >max){
            max = arr[i];
        }
    }
    return max;
}
findMax(arr);
// 5. Viết hàm đổi chỗ vị trí 2 phần tử trong mảng
let swapElement = (arr, idx1, idx2) => {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
};
swapElement(arr,1,2);
// 6. Cho một mảng số đã được sắp xếp tăng dần, viết hàm tìm số lớn thứ 2 trong mảng
let arr = [1,2,3,32,341,2,4,5,10,3,234,62,3,16,4];
        arr.sort((a,b) => (b-a))
        .filter((value,index,arr) => value <arr[0])
        .filter((value,index,arr) => value < arr[0])[0];
// 7. Viết hàm chuyển đổi một chuỗi thành dạng capitalize. VD “hello world” => “Hello World”
function capitalize(string) {
    let space = string.indexOf(" ");
    let newString = string.charAt(0).toUpperCase() + string.slice(1);
    return newString.replace(string[space + 1], string[space + 1].toUpperCase());
}
capitalize(" hello world");
// 8. Viết hàm tìm số lần xuất hiện lớn nhất của một phần tử trong mảng
let arr = [1,2,1,2,3,4,5,6,4,2,21,3,4,2,1];
let countExist = (arr, n) => {let count = 0;for (let i = 0; i < arr.length; i++)
{if (n == arr[i]) count++;}return count;};
let findMaxExist = (arr) => {
    let max = countExist(arr, arr[0]),
        item = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < countExist(arr, arr[i])) {
            max = countExist(arr, arr[i]);
            item = arr[i];
        }
    }
    return item;
};
findMaxExist(arr);
// 9. Viết hàm cắt chuỗi thành một mảng có độ dài chỉ định. VD “Hello”, 2 => [“He”, “ll”, “o
let cut = (string,abc) => {
    let newArr = [];
    for (let i =0,j=0; i<=string.length;i+=abc,j++){
        newArr[j] = string.slice(i,i + abc);
    }
    return newArr;
}
cut("Hello World",3);
// 10. Viết hàm tách chuỗi thành một mảng các chuỗi con. VD “dog” => [“d”, “do”, “dog”, “og”, “g”]
let str = "dog";
let cutString = (str) => {
    let arrWithSubString = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            arrWithSubString.push(str.slice(i, j+1));
        }
    }
    return arrWithSubString;
}
cutString(str);
// 11. Cho một mảng số, viết hàm loại bỏ số trùng lặp trong mảng. VD [1,2,2,3] => [1,2,3]
arr =[1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4];
function unique(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(unique(arr));
// 12. Viết hàm trả về một mảng lưu dãy số Fibonacci từ 0 -> n. VD 8 => [0, 1, 1, 2, 3, 5, 8, 13]
let fibonacci = (numb) => {
    let firstNumb = 1,
        secondNumb = 0,
        temp;
    while (numb > 0) {
        temp = firstNumb;
        firstNumb = firstNumb + secondNumb;
        secondNumb = temp;
        numb--;
    }
    return secondNumb;
}
let fibonacciNewArray = (n) => {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(fibonacci(i));
    }
    return newArr;
}
fibonacciNewArray(10);
// 13. Viết hàm trả về một mảng các số trùng nhau trong 2 mảng. VD [1,2,3], [2,3,4] => [2,3]
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
let findSame = (arr1, arr2) => {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) != -1 && result.indexOf(arr1[i]) == -1)
            result.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) != -1 && result.indexOf(arr2[i]) == -1)
            result.push(arr2[i]);
    }
    return result;
};
findSame(arr1, arr2);
// 14. Viết hàm trả về một mảng các số không trùng nhau trong 2 mảng. VD [1,2,3], [2,3,4] => [1,4]
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
let findUnique = (arr1, arr2) => {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) == -1) result.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) result.push(arr2[i]);
    }
    return result;
};
findUnique(arr1, arr2);
// 15. Viết hàm loại bỏ các giá trị “false” khỏi mảng. VD [null, 1, 0, NaN, “”] => [1] a
let array = [0, 1, null, 2, "", 3, undefined, 3,,{},,0,, 4,, 4,, 5,, 6,,,,];
let filtered = array.filter(function (element) {
    return element != null;
});
console.log(filtered);
//Bài tập mảng page 2
// 1. Viết hàm sắp xếp một mảng số nguyên
let s = (a, b) => {
    if (a > b) return true;
    else return false;
};
arr = [-1,2,7,9,3,5,6];
arr._sort = function (callback) {
    let swap;
    do {
        swap = false;
        for (let i = 0; i < this.length - 1; i++) {
            if (typeof callback == "function") {
                if (callback(this[i], this[i + 1])) {
                    let temp = this[i];
                    this[i] = this[i + 1];
                    this[i + 1] = temp;
                    swap = true;
                }
            } else {
                // Nếu không có hàm callback, mặc định sắp xếp lớn dần theo string
                if (`${this[i]}` > `${this[i + 1]}`) {
                    let temp = this[i];
                    this[i] = this[i + 1];
                    this[i + 1] = temp;
                    swap = true;
                }
            }
        }
    } while (swap);
    return this;
};
arr._sort(s); // sắp xếp theo number
arr._sort(); // sắp xếp string
// 3. Cho một mảng object user [{name: “Ba”, age: 28}, {name: “Bon”, age: 3}, …] Viết hàm sắp xếp mảng user tăng dần theo age
arr =[{name: "Ba", age: 28}, {name: "Bon", age: 3}];
let sortByAge = (arr) => arr.sort((a, b) => a.age - b.age);
sortByAge(arr)
// 4. Tương tự, viết hàm sắp xếp mảng user theo name.length
arr =[{name: "Ba", age: 28}, {name: "Bon", age: 3}];
let sortByNameLength = (arr) => arr.sort((a, b) => a.name.length - b.name.length);
sortByNameLength(arr);
// 5. Viết hàm sắp xếp mảng user theo name
let people =
    [
        {name: 'Helga Brekke',age: 25},
        {name: 'Christine Hansen',age: 18},
        {name: 'Alfred Roob',age: 17},
        {name: 'Crystal Hermann',age: 27},
        {name: 'Dax Koch',age: 22}
    ];
people.sort((a,b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {return -1;}
    if (a.name.toLowerCase() > b.name.toLowerCase()) {return 1;}
    return 0;
});
// 6. Cho một mảng số, và một số n, tìm trong mảng vị trí 2 phần tử có tổng bằng n, kết quả trả về là một mảng lưu vị trí 2 phần tử, hoặc mảng rỗng nếu không tìm thấy
let findElementSum = (arr, n) => {
    let result = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = i+1; j < arr.length; j++){
            if (arr[i] + arr[j] == n) result.push(`${i} ${j}`);
        }
    }
    return result;
}
let arr = [1,2,3,4,5,6,7,8,9];
findElementSum(arr, 3);
// 7. Viết hàm lấy một phần tử ngẫu nhiên trong mảng
let arr = [1,2,3,4,5,6,7,8,9];
let randomItem = (arr) => arr[Math.floor(Math.random() * (arr.length - 1))];
randomItem(arr);
// 8. Viết hàm sắp xếp mảng với vị trí ngẫu nhiên (xáo trộn mảng)
let arr = [1, 2, 3, 4];
let shuffleArray = (arr) => {
    let currentIndex = arr.length,
        temp,
        randomIndex;
    while (0 != currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temp = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temp;
    }
    return arr;
}
shuffleArray(arr);
// 8.Viết hàm sắp xếp mảng với vị trí ngẫu nhiên (xáo trộn mảng)
let arrObj =
    [
        {name: 'Helga Brekke',age: 25,gender: 'f',us: true},
        {name: 'Christine Hansen',age: 18,gender: 'm',us: false},
        {name: 'Alfred Roob',age: 17,gender: 'm',us: false},
        {name: 'Crystal Hermann',age: 27,gender: 'm',us: false},
        {name: 'Dax Koch',age: 22,gender: 'f',us: true}
    ];
let arr = [1,2,3,4,5,6,7,8,9];
function shuffle(arr) {
    let result = [];
    for (let i = arr.length-1; i >= 0; i--) {
        // chọn một số nguyên từ 0 đến i:
        const r = Math.floor(Math.random()*(i+1));
        // chèn arr[i] vào vị trí thứ random-th trong mảng
        for(let j = 0, k = 0; j <= arr.length-1; j++) {
            if(result[j] === undefined) {
                if(k === r) {
                    result[j] = arr[i];
                    break;
                }
                k++;
            }
        }
    }
    return result;
}
shuffle(arr);
shuffle(arrObj);
// 9. Viết hàm biến một một mảng nhiều chiều thành mảng 1 chiều.
let arr = [[1, 2, 3], [2, 3, 4], [4, 5, 6]];
let multiDimensionalToSingleArray = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                result.push(arr[i][j]);
            }
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
multiDimensionalToSingleArray(arr);

/* BÀI TẬP MẢNG PAGE 3 */
// 1. Viết hàm biến đổi các phần tử của mảng số nguyên thành bình phương của chính nó
let arraySquare = (arr) => arr.map((i) => i * i);
arraySquare([1, 2, 3, 4]);
// 2. Viết hàm biến đổi các phần tử của mảng chuỗi thành dạng uppercase()
let uppercaseArray = (arr) => arr.map((i) => i.toUpperCase());
uppercaseArray(['abc', 'def']);
// 3. Viết hàm lọc ra các phần tử có kiểu “number” trong một mảng hỗn hợp
let arr = [1,2,3,{},"","a","b"];
//Obj ???
// let arr =
//     [
//         {name: 'Helga Brekke',age: 25,gender: 'f',us: true},
//         {name: 'Christine Hansen',age: 18,gender: 'm',us: false},
//         {name: 'Alfred Roob',age: 17,gender: 'm',us: false},
//         {name: 'Crystal Hermann',age: 27,gender: 'm',us: false},
//         {name: 'Dax Koch',age: 22,gender: 'f',us: true}
//     ];
let numberFilter = (arr) => arr.filter((i) => typeof i == 'number');
numberFilter(arr);
// 4.Tạo một mảng object với các thông tin name,age, ...
let arr =
    [
        {name: 'Helga Brekke',age: 25,gender: 'f',us: true},
        {name: 'Christine Hansen',age: 18,gender: 'm',us: false},
        {name: 'Alfred Roob',age: 17,gender: 'm',us: false},
        {name: 'Crystal Hermann',age: 27,gender: 'm',us: false},
        {name: 'Dax Koch',age: 22,gender: 'f',us: true}
    ];

// 5. Viết hàm lọc ra các object với age > 20
let filterByAge = (arr) => arr.filter((i) => i.age > 20);
filterByAge(arr);

// 6. Viết hàm chuyển đổi name của object thành dạng capitalize
let capitalizeName = (arr) => arr.map((i) => {
    let split = i.name.split(" ");
    let result = "";
    console.log(split);
    for (let j = 0; j < split.length; j++) {
        if(split[i] != " ") result += split[j][0].toUpperCase() + split[i].slice(1) + " ";
    }
    i.name = result;
    return i;
})
capitalizeName(arr);

// 7. Viết hàm chuyển đổi name của object thành dạng viết tắt. VD “Ba Nguyen” => “Ba N.”
let shorternName = (arr) => arr.map((i) => {
    let index = i.name.indexOf(" "),
        newName = i.name[0].toUpperCase();
    if (index != -1) {
        newName += i.name.slice(1, index + 1) + i.name[index + 1].toUpperCase() + ".";
    } else {
        newName += i.name.slice(1, i.name.length);
    }
    i.name = newName;
    return i;
});
shorternName(arr);
// 8. Viết hàm để chuyển mảng object thành một mảng chỉ chứa name
let onlyNameArray = (arr) => arr.map((i) => i.name);
onlyNameArray(arr);


/* BÀI TẬP DATE TIME */
// 1. Viết hàm kiểm tra xem một giá trị có phải giá trị thời gian hợp lệ hay không

// 2. Viết hàm in ra thứ viết tắt, tương ứng với ngày hiện tại. VD “T2”, “T3”, “CN”
let currentDay = () => {
    let today = new Date();
    let dayOfWeek;
    switch (today.getDay()) {
        case 0:
            dayOfWeek = "CN";
            break;
        case 1:
            dayOfWeek = "T2";
            break;
        case 2:
            dayOfWeek = "T3";
            break;
        case 3:
            dayOfWeek = "T4";
            break;
        case 4:
            dayOfWeek = "T5";
            break;
        case 5:
            dayOfWeek = "T6";
            break;
        case 6:
            dayOfWeek = "T7";
            break;
        default:
            dayOfWeek = "CN";
            break;
    }
    return ` ${dayOfWeek}`;
}
currentDay();
// 3. Viết hàm trả về ngày trước ngày hiện tại n ngày





// 4. Viết hàm trả về số ngày trong tháng bất kỳ, năm và tháng là tham số truyền vào

// 5. Viết hàm tính số giây hiện tại trong ngày

// 6. Viết hàm tính số ngày còn lại đến tết dương lịch năm sau
function numDayToNewYears() {
    let today = new Date();
    let newYear = new Date(today.getFullYear() + 1, 0, 1);
    let offset = newYear.getTime() - today.getTime();
    let numDayToNewYears = offset / 1000 / 60 / 60 / 24;
}
numDayToNewYears();
// 7. Viết hàm kiểm tra một ngày có phải cuối tuần không
let day = "2020-12-25";
let weekend = (day) => {
    let date = new Date(day);
    if (date.getDay() == 0 || date.getDay() == 6) return true;
    else return false;
}
weekend(day); // output ==true
weekend("2020-02-24"); //output ==false

// 8. Viết hàm trả về số quý tương ứng với giá trị ngày tháng truyền vào (quý 1 -> 4)
let quarterOfToday = (day) => {
    let today = new Date(),
        quarter;
    switch (today.getMonth()) {
        case 0:
            quarter = "1";
            break;
        case 0:
            quarter = "1";
            break;
        case 0:
            quarter = "1";
            break;
        case 0:
            quarter = "2";
            break;
        case 0:
            quarter = "2";
            break;
        case 0:
            quarter = "2";
            break;
        case 0:
            quarter = "3";
            break;
        case 0:
            quarter = "3";
            break;
        case 0:
            quarter = "3";
            break;
        case 0:
            quarter = "4";
            break;
        case 0:
            quarter = "4";
            break;
        case 0:
            quarter = "4";
            break;
        default:
            quarter ="4";
            break;


    }
    return `  ${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()} thuộc quý ${quarter}`;
}
quarterOfToday();


// 11. Viết hàm trả về chuỗi ngày tháng hiện tại có dạng "10:01:30 CN 20/01/2020"
let reformatToday = () => {
    let today = new Date(),
        dayOfWeek;
    switch (today.getDay()) {
        case 0:
            dayOfWeek = "CN";
            break;
        case 1:
            dayOfWeek = "T2";
            break;
        case 2:
            dayOfWeek = "T3";
            break;
        case 3:
            dayOfWeek = "T4";
            break;
        case 4:
            dayOfWeek = "T5";
            break;
        case 5:
            dayOfWeek = "T6";
            break;
        case 6:
            dayOfWeek = "T7";
            break;
        default:
            dayOfWeek = "CN";
            break;
    }
    return ` ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} ${dayOfWeek} ${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;
}
reformatToday();
//12.Viết hàm trả về thời gian chênh lệnh giữa 2 quốc gia, giá trị trả về dạng “01h 10m 30s” (giữa 2 múi giờ khác nhau)


// 13. Viết hàm trả về ngày sau ngày hiện tại n ngày
let randomDay = (n) => {
    let today = new Date(),
        day = new Date();
    day.setDate(new Date().getDate() + n);
    return day;
}
randomDay(12);

// 14. Viết hàm trả về số giờ chênh lệch giữa 2 ngày
let firstDay = "2020-02-28",
    secondDay = "2021-02-28";
let differenceDay = (firstDay, secondDay) => {
    firstDay = new Date(firstDay);
    secondDay = new Date(secondDay);
    let difference = Math.abs(firstDay.getTime() - secondDay.getTime());
    return parseInt(difference/(1000*3600));
}
differenceDay(firstDay, secondDay); //8784 ngày.

// 15. Viết hàm trả về ngày đầu tuần
let getFirstDayOfWeek = () => {
    let today = new Date(),
        monday = new Date();
    switch (today.getDay()) {
        case 0:
            monday.setDate(today.getDate() - 6);//CN
            break;
        case 1:
            monday.setDate(today.getDate());//T2
            break;
        case 2:
            monday.setDate(today.getDate() - 1);//T3
            break;
        case 3:
            monday.setDate(today.getDate() - 2);//T4
            break;
        case 4:
            monday.setDate(today.getDate() - 3);//T5
            break;
        case 5:
            monday.setDate(today.getDate() - 4);//T6
            break;
        case 6:
            monday.setDate(today.getDate() - 5);//T7
            break;
        default:
            monday.setDate(today.getDate());//mặc định trả về thứ 2
            break;
    }
    return monday;
}
getFirstDayOfWeek();







