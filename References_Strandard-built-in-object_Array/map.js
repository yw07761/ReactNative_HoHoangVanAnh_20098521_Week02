// JavaScript Demo: Array.map()
// CÚ PHÁP
//  map(callbackFn)
//  map(callbackFn, thisArg)
//  array.map(function(currentValue, index, arr), thisValue)

// CÁC THAM SỐ
// #callbackFn -- Một hàm để thực thi cho mỗi phần tử trong mảng. 
//Giá trị trả về của nó được thêm vào như một phần tử duy nhất trong mảng mới. 
//Hàm được gọi với các đối số sau:

// # element --- Phần tử hiện tại đang được xử lý trong mảng.

// # index --- Chỉ số của phần tử hiện tại đang được xử lý trong mảng.

// # array --- Mảng map()đã được gọi tới.

// # thisArg (Không bắt buộc) -- Một giá trị để sử dụng this khi thực hiện callbackFn.

// Giá trị trả về ==> Một MẢNG MỚI với mỗi phần tử là kết quả của hàm gọi lại.

// LƯU Ý

// map()tạo một mảng mới bằng cách gọi một hàm cho mỗi phần tử của mảng.

// map()không thực hiện chức năng cho các phần tử rỗng.

// map()không thay đổi mảng ban đầu.


// EX1: Ánh xạ một mảng số thành một mảng căn bậc hai
const numbers = [1, 4, 9];
// Pass a function to map
const roots = numbers.map((num) => Math.sqrt(num));

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]
console.log('roots = [' + roots + ']');
console.log('numbers = [' + numbers + ']');

//EX2: Sử dụng map để lấy tên đầy đủ của từng người:
const persons = [
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kaylee", lastname: "Frye" },
    { firstname: "Jayne", lastname: "Cobb" }
];

persons.map(getFullName);

function getFullName(item) {
    return [item.firstname, item.lastname].join(" ");
}
console.log('FullName = [' + persons.map(getFullName) + ']');