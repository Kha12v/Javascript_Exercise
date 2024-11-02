/**Đề bài: Tính giá trị trung bình
 * Kiến thức áp dụng:
 * Tìm tới thẻ và lấy giá trị
Tạo hàm cơ bản
Gắn sự kiện click cho button
Thay đổi nội dung cho thẻ
Xử lý load trang với button của form
Xử lý ép kiểu dữ liệu
 */

/**Mô hình 3 khối:
 * Input:
 * - Nhập số thứ 1
 * - Nhập số thứ 2
 * - Nhập số thứ 3
 * - Nhập số thứ 4
 * - Nhập số thứ 5
 * Progressing:
 * - Tính giá trị trung bình của 5 số sau khi nhập.
 * Output:
 * - Hiển thị giá trị trung bình của 5 số.
 */

//Tạo hàm cơ bản
function TinhTrungBinh() {
    // Tìm tới thẻ và lấy giá trị:
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let number3 = parseFloat(document.getElementById("number3").value);
    let number4 = parseFloat(document.getElementById("number4").value);
    let number5 = parseFloat(document.getElementById("number5").value);

    // Tính giá trị trung bình
    let avg = (number1 + number2 + number3 + number4 + number5) / 5;

    // Hiển thị kết quả trung bình trong phần tử với id là "result-avg"
    document.getElementById("result-avg").textContent = avg.toFixed(1); // Giới hạn 2 số thập phân
    document.getElementById("result-container-avg").classList.remove("hidden");
}
