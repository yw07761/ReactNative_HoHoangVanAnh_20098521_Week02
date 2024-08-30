// Array.prototype.filter()

// #Syntax
// filter(callbackFn)
// filter(callbackFn, thisArg)
// #Parameters
// #callbackFn
// -- Một hàm để thực thi cho mỗi phần tử trong mảng. 
// -- Nó sẽ trả về một giá trị đúng để chỉ ra phần tử vượt qua bài kiểm tra, 
// -- và một giá trị sai nếu không. Hàm được gọi với các đối số sau:

// #element  ---Phần tử hiện tại đang được xử lý trong mảng.

// #index --- Chỉ số của phần tử hiện tại đang được xử lý trong mảng.

// #array --- Mảng filter()đã được gọi tới.

// #thisArg Không bắt buộc ---Một giá trị để sử dụng this khi thực hiện callbackFn

// #Return value
// Một bản sao của mảng đã cho chỉ chứa các phần tử vượt qua bài kiểm tra. 
// Nếu không có phần tử nào vượt qua bài kiểm tra, một mảng trống sẽ được trả về.
// #Description
// Phương thức filter() tạo một mảng mới chứa đầy các phần tử vượt qua bài kiểm tra do hàm cung cấp. 
// Phương thức filter() không thực thi hàm cho các phần tử trống. 
// Phương thức filter() không thay đổi mảng ban đầu.

// EX1: Trả về một mảng gồm tất cả các giá trị trong age[] từ 18 trở lên:
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
    return age >= 18;
}
console.log('ages= [' + ages + ']');
console.log('result= [' + ages.filter(checkAdult) + ']');

//EX2: Searching in array
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log('Searching "ap" in array: ' + filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log('Searching "an" in array: ' + filterItems(fruits, "an")); // ['banana', 'mango', 'orange']