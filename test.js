// bai 1: Hãy liệt kê các số chẵn trong mảng 1 chiều các số nguyên thuộc đoạn [x, y] cho trước (x, y là các số nguyên)
let getEvenNumbers = (arr) => {
    // kiểm tra tham số truyền vào
    if (typeof arr !== 'undefined') {
        if (arr && Array.isArray(arr)) {
            let the_evens = arr.filter(number => {
                return number && number > 0 ? number % 2 == 0 : false;
            });// lọc các phần tử là số chẵn
            console.log(`Bài 1: Các số chẵn trong mảng [${arr}] là: ${the_evens}`);
            return the_evens;
        } else {
            console.log('Bài 1: Tham số truyền vào là một Array');
        }
    } else {
        console.log('Bài 1: Vui lòng nhập đầy đủ tham số');
    }    // kiểm tra tham số tuyền vào là một mảng
}
getEvenNumbers([-1,3,4,5]);
// bai 2: Tính tổng các giá trị dương trong mảng 1 chiều các số thực
let getNumberIsPositive = (arr) => {
    if (typeof arr !== 'undefined') {
        if (arr && Array.isArray(arr)) {
            let result = arr.reduce( (previousValue, currentValue) => {
                return currentValue && currentValue > 0 ? previousValue + currentValue : previousValue;           
            }, 0)
            console.log(`Bài 2: Tổng các giá trị dương trong mảng: [${arr}] là: ${result}`);
            return result;
        } else {
            console.log('Bài 2: Tham số truyền vào là một Array các số nguyên');
        }
    } else {
        console.log('Bài 2: Vui lòng nhập đầy đủ tham số');
    }
}
getNumberIsPositive([-2,0,1,2,-3,5,-2,1]); // 9
// bai 3 Đếm số lần xuất hiện của giá trị x trong mảng
let countTheOccurrences = (array, x) => {
    if (typeof array !== 'undefined' && typeof x !== 'undefined') {
        if (Array.isArray(array) && typeof x === 'number') {
            const counts = {};
            for (let num of array) { // lap qua cac gia tri trong mang;
                counts[num] = (counts[num] || 0) + 1; // them gia tri vao obj connts neu xuat hien x;
                // counts = { 0: 1, 5: 1};
            }
            if (counts[x]) { // x = 5 , counts[5] = 1;
                console.log(`Bài 3: Số lần xuất hiện của ${x} trong mảng [${array}] là: ${counts[x]}`); // 1
            } else {
                console.log(`Bài 3: Không có giá trị ${x} trong mảng [${array}]`)
            }
        } else {
            console.log('Bài 3: Tham số thứ nhất là một mảng, và tham số thứ hai là một số');
        }
    } else {
        console.log('Bài 3: vui lòng nhập đầy đủ 2 tham số');
    }
}
countTheOccurrences([0,5], 5);
//Bài 4: Hãy đưa chẵn về đầu, lẻ về cuối, phần tử 0 nằm giữa mảng (tham khảo) 
function duaChanVeDauLeVeCuoiKhongOGiua(arr) {
    if (arr) {
        if (Array.isArray(arr)) {
            let oldArr = [...arr]; // copy mảng
            let arrLength = arr.length;
            /* sắp xếp só lể xuống cuối mảng*/
            for (let i = 0; i < arrLength; i++) {
                for ( let j = i + 1; j < arrLength; j++) {
                    if (arr[i] % 2 != 0 && arr[j] % 2 == 0) {
                        [arr[i], arr[j]] = [arr[j], arr[i]]; //hoán vị
                        break;
                    }
                }
            }
            // console.log(arr);
            /* sắp xếp đổi chỗ sổ 0 ra giữa chăn và lẻ*/
            for (let i = arrLength; i > 0; i--) {
                for (let j = i - 1; j > -1; j--) {
                    if (arr[i] % 2 == 0 && arr[j] == 0) {
                        [arr[i], arr[j]] = [arr[j], arr[i]]; //hoán vị
                        break;
                    }
                }
            }
            // console.log(arr);
            console.log(`Bài 4: Đưa chẵn về đầu, lẻ về cuối, phần tử 0 nằm giữa từ mảng [${oldArr}] thành: [${arr}]`);
        } else {
            console.log('Bài 7: Tham số truyền vào là một Array');
        }
    } else {
        console.log('Bài 4: vui lòng nhập đầy đủ tham số');
    }
}
duaChanVeDauLeVeCuoiKhongOGiua([2,0,1,-2,-4]);
//Bài 5: Cho mảng a, số nguyên M. Tìm 1 mảng con sao cho tổng các phần tử bằng M (tham khảo)
let findSubArraySum = (arr, m) => {
    if (arr && m) {
        if (Array.isArray(arr) && !isNaN(m)) {
            let arrLength = arr.length; // chiều dài mảng
            let count = 0;
            // TÌm các mảng con
            for (let i = 0; i < arrLength; i++) {
                let sum = 0;
                for (let j = i; j < arrLength; j++) {
                    sum += arr[j];
                    // kiểm tra mảng con có tổng bằng m
                    if (sum == m) {
                        count++;
                    }
                }
            }
            console.log(`Bài 5: Số mảng con trong mảng [${arr}] có tổng bằng ${m} là: ${count}`);
            return count;
            
        } else {
            console.log('Bài 5: Tham số thứ nhất là một mảng, và tham số thứ hai là một số');
        }
    } else {
        console.log('Bài 5: vui lòng nhập đầy đủ tham số');
    }
}
findSubArraySum([10, 2, -2, -20, 10 ], -10);
//Bài 6: Tính diện tích, chu vi và tọa độ trọng tâm của tam giác và xuất ra kết quả
function tinhDienTichChuViToaDoTrongTamTamGiac(a,b,c) {
    let x1 = a[0];
    let y1 = a[1];
    let x2 = b[0];
    let y2 = b[1];
    let x3 = c[0];
    let y3 = c[1];
    // chu vi
    (function tinhChuVi() {
        let abEdge = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)); // tính AB
        let acEdge = Math.sqrt(Math.pow((x3 - x1), 2) + Math.pow((y3 - y1), 2)); // AC;
        let bcEdge = Math.sqrt(Math.pow((x3 - x2), 2) + Math.pow((y3 - y2), 2)); // BC;
        let perimeter = abEdge + acEdge + bcEdge;
        console.log(`Bài 6: Chu vi của tam giác ${perimeter}`);
        return perimeter;
    })(x1,y1,x2,y2,x3,y3);
    // dien tich
    (function tinhDienTich() {
        let acreage = 1/2 * Math.abs(((x2 - x1)*(y3-y1)) - ((x3-x1)*(y2-y1)));
        console.log(`Bài 6: Diện tích của tam giác ${acreage.toFixed(2)}`);
        return acreage;
    })(x1,y1,x2,y2,x3,y3);
    //toa do trong tam
    (function tinhToaDoTrongTam(x1,y1,x2,y2,x3,y3) {
        let x = (x1 + x2 + x3) / 3; // tính x
        let y = (y1 + y2 + y3) / 3; // tính y
        console.log(`Bài 6: Tọa độ trọng tâm của tam giác: G: (${x.toFixed(2)}, ${y.toFixed(2)}) `);
        return {x,y};
    })(x1,y1,x2,y2,x3,y3);
}
tinhDienTichChuViToaDoTrongTamTamGiac([1,2],[-3,1],[2,-5]);
//bai 7: Xóa tất cả các phần tử trùng nhau trong mảng
let removeDuplicates = (arr) => {
    if (typeof arr !== 'undefined') {
        if (Array.isArray(arr)) {
            newArr = arr.filter( (value, index, array) => array.indexOf(value) === index);
            console.log(`Bài 7:	Xóa tất cả các phần tử trùng nhau trong mảng [${arr}]: Mảng mới sau khi xóa: ${newArr}`); // [-5, 5, 6, 3]
        } else {
            console.log('Bài 7: Tham số truyền vào là một Array');
        }
    } else {
        console.log('Bài 7: vui lòng nhập đầy đủ tham số');
    }
}
removeDuplicates([4,4,5]);
//bai 8 
let invertEvenElements = (arr) => {                                                          
    if (arr) {
        if (Array.isArray(arr)) {
            const oldArr = new Array(...arr); // copy giá trị mảng sang biến mới (new Array và Spread Operator)
            //console.log(arr.length)
            for (var i = 0; i < arr.length; i++) { // lap lấy phần tử đầu tiên i
                for (var j = i + 1; j < arr.length; j++) { // lấy phần tử thứ j liền kề với i
                    if (arr[j] % 2 == 0 && arr[i] % 2 == 0) {
                        [arr[i], arr[j]] = [arr[j], arr[i]]; // hoán vị sử dụng destructuring assignment
                    }
                }
            }
            console.log(`Bài 8:	Đảo ngược thứ tự các số chẵn trong mảng [${oldArr}] thành [${arr}] `)
        } else {
            console.log('Bài 8: Tham số truyền vào là một Array');
        }
    } else {
        console.log('Bài 8: Vui lòng nhập đầy đủ tham số');
    }
}
invertEvenElements([2,4,6]);
//bai 10: Tính trung bình cộng các số dương trong mảng 1 chiều các số thực
let countAvgOfPositiveNumbers = (arr) => {
    if (arr) {
        if (Array.isArray(arr)) {
            var tempArr = []; // mang chua cac phan tu lon hon 0
            var result;
            let sum_positive_number = arr.reduce((previousValue, currentValue) => {
                if (currentValue && currentValue > 0) {
                    tempArr.push(currentValue);
                    return previousValue + currentValue;
                } else {
                    return previousValue;
                }
            }, 0);// tong cac phan tu > 0;
            let lengthTempArr = tempArr.length; // lay chieu dai mang chua cac phan tu > 0
            if (lengthTempArr > 0) {
                result = lengthTempArr > 0 ? sum_positive_number / lengthTempArr : 'Không có giá trị lớn hơn 0';
            }
            console.log(`Bài 10: Trung bình cộng các số dương trong mảng [${arr}] là : ${result}`);
            return result;
        } else {
            console.log('Bài 10: Tham số truyền vào là một Array');
        }
    } else {
        console.log('Bài 10: Vui lòng nhập đầy đủ tham số');
    }
}
countAvgOfPositiveNumbers([-1,3,2,1]); // output = 2;
//Bài 11: Cho 2 mảng a, b. Đếm số lượng giá trị chỉ xuất hiện 1 trong 2 mảng
function countSingleNumber(a,b) {
    //ham dem
    function count(a,b) {
        var count = 0;
        var flat; // gắn cờ
        // đếm phần tử a trong b;
        for (let i = 0; i < a.length; i++) {
            flat = 1;
            for (let j = 0; j < b.length; j++) {
                if (a[i] === b[j]) {
                   flat = 0;
                   break;
                }
            }
            if (flat === 1) {
                count++;
            }
        }
        //đếm phần tử b trong a;
        for (let i = 0; i < b.length; i++) {
            flat = 1;
            for (let j = 0; j < a.length; j++) {
                if (b[i] === a[j]) {
                   flat = 0;
                   break; 
                }
            }
            if (flat === 1) {
                count++;
            }
        }
        return count;
    }
    if ((typeof a !== 'undefined' && typeof b !== 'undefined')) {
        if (Array.isArray(a) && Array.isArray(b)) {
            let result = count(a,b);
            console.log(`Bài 11: Đếm số lượng giá trị chỉ xuất hiện 1 trong 2 mảng [${a}] và [${b}] là: ${result} phần tử`);
        } else {
            console.log('Bài 11: Tham số thứ nhất và tham số thứ hai phải là một mảng');
        }
    } else {
        console.log('Bài 11: Vui lòng nhập đầy đủ 2 tham số');
    }
}     
countSingleNumber([1,2,3], [2,3,4]) // 1,4
//bai 12: Cho 2 mảng tăng. Hãy trộn thành 1 mảng giảm dần
let mergeDescendingArray = (a,b) => {
    if (typeof a !== 'undefined' && typeof b !== 'undefined') {
        if (Array.isArray(a) && Array.isArray(b)) {
            let result = a.concat(b); // gop 2 mang thanh mot
            result.sort(); // sap xep mang theo thu tu tang dan
            result.reverse(); // dao nguoc thu tu cac phan tu trong mang
            //console.log(result);
            console.log(`Bài 12: Trộn 2 mảng [${a}] và [${b}] tăng thành 1 giảm : [${result}]`);
            return result;
        } else {
            console.log('Bài 12: Tham số thứ nhất và tham số thứ hai phải là một mảng');
        }
    } else {
        console.log('Bài 12: vui lòng nhập đầy đủ 2 tham số');
    }
}
mergeDescendingArray([1,2,3], [4,5]); // a = [1,2,3], b = [4,5] => result = [5,4,3,2,1]