/**
 * Tính tổng 3 chữ số
 - input:
 nhập 3 chữ số
 - progressing:
 chuyển đổi chữ thành số và cộng lại
 - Ouput:
 in ra màn hình kết quả tổng 3 chữ số sau khi nhập
 */

// Hàm tính tổng ba chữ số
function TinhTong3So() {
    // Lấy giá trị từ ô input, ép kiểu dữ liệu thành chuỗi để xử lý từng chữ số
    let inputNumber = document.getElementById("threenumber").value;

    // Kiểm tra xem người dùng có nhập đúng ba chữ số không
    if (inputNumber.length === 3) {
        // Ép kiểu từng chữ số và tính tổng
        // Sử dụng parseInt để chuyển từng chữ số thành số nguyên và cộng chúng.
        let sum = parseInt(inputNumber[0]) + parseInt(inputNumber[1]) + parseInt(inputNumber[2]);

        // Hiển thị kết quả trong thẻ <span id="result-tt">
        document.getElementById("result-tt").innerText = sum;
    } else {
        // Thông báo lỗi nếu không phải là ba chữ số
        document.getElementById("result-tt").innerText = "Vui lòng nhập đúng 3 chữ số";
    }
}
