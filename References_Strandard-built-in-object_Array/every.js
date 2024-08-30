// Array.prototype.every()

// #Syntax
//  every(callbackFn)
//  every(callbackFn, thisArg)
// #Parameters
// #callbackFn
// -- Một hàm để thực thi cho mỗi phần tử trong mảng. 
// -- Nó sẽ trả về một giá trị đúng để chỉ ra phần tử vượt qua bài kiểm tra, 
// -- và một giá trị sai nếu không. Hàm được gọi với các đối số sau:

// #element  ---Phần tử hiện tại đang được xử lý trong mảng.

// #index --- Chỉ số của phần tử hiện tại đang được xử lý trong mảng.

// #array --- Mảng every()đã được gọi tới.

// #thisArg Không bắt buộc ---Một giá trị để sử dụng this khi thực hiện callbackFn

// #Return value
// true nếu tất cả các phần tử vượt qua bài kiểm tra, nếu không thì false.
// #Description
// Phương thức Every() thực thi một hàm cho từng phần tử mảng. 
// Phương thức Every() trả về true nếu hàm trả về true cho tất cả các phần tử. 
// Phương thức Every() trả về false nếu hàm trả về false cho một phần tử. 
// Phương thức Every() không thực thi hàm cho các phần tử trống. 
// Phương thức Every() không thay đổi mảng ban đầu

// EX1:

// Create an Array
const ages = [32, 33, 16, 40];

// Create a Test Function
function checkAge(age) {
    return age > 18;
}

// Are all ages over 18? => false because 16 < 18
console.log("Is every element over 18? => " + ages.every(checkAge));

//EX2: 
const survey = [
    { name: "Steve", answer: "Yes" },
    { name: "Jessica", answer: "Yes" },
    { name: "Peter", answer: "Yes" },
    { name: "Elaine", answer: "Yes" }
];

let result = survey.every(isSameAnswer);

function isSameAnswer(el, index, arr) {
    if (index === 0) {
        return true;
    } else {
        return (el.answer === arr[index - 1].answer);
    }
}
console.log('Check if every answers in the array is the same: ' + survey.every(isSameAnswer));