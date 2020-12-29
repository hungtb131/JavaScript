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


// 13. Viết hàm trả về một mảng các số trùng nhau trong 2 mảng. VD [1,2,3], [2,3,4] => [2,3]
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
let findSimilar = (arr1, arr2) => {
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
findSimilar(arr1, arr2);

// 14. Viết hàm trả về một mảng các số không trùng nhau trong 2 mảng. VD [1,2,3], [2,3,4] => [1,4]
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
let findDefference = (arr1, arr2) => {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) == -1) result.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) result.push(arr2[i]);
    }
    return result;
};
findDefference(arr1, arr2);

// 15. Viết hàm loại bỏ các giá trị “false” khỏi mảng. VD [null, 1, 0, NaN, “”] => [1] a

let array = [0, 1, null, 2, "", 3, undefined, 3,,{},,0,, 4,, 4,, 5,, 6,,,,];

let filtered = array.filter(function (element) {
    return element != null;
});
console.log(filtered);


//Tính tuổi theo ngày nhập vào
let dob = prompt("Nhập ngày sinh(theo định dạng yyyy/mm/dd) : ");









