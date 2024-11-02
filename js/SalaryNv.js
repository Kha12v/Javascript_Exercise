//Đề bài:
/**Tính tiền lương nhân viên:
 * Công thức: Lương = Lương 1 ngày * số ngày làm
 * Kiến thức áp dụng:
 * Tìm tới thẻ và lấy giá trị
Tạo hàm cơ bản
Gắn sự kiện click cho button
Thay đổi nội dung cho thẻ
Xử lý load trang với button của form
 */

/**Mô hình 3 khối
Input:
- Nhập lương 1 ngày.
- Nhập số ngày làm.
Progressing:
- Tính lương: Lương = Lương 1 ngày * số ngày làm
Output:
- Kết quả lương của bạn và in ra màn hình
*/

function TinhLuong() {
    let salaryOneDay = parseFloat(document.getElementById("salaryOneDay").value);
    let Daywork = parseFloat(document.getElementById("Daywork").value);

    // Kiểm tra giá trị hợp lệ
    if (isNaN(salaryOneDay) || isNaN(Daywork)) {
        alert("Vui lòng nhập số hợp lệ!");
    } else if (salaryOneDay < 0 || Daywork < 0) {
        alert("Vui lòng nhập số dương!"); //Điều kiện kiểm tra số dương
    } else if (salaryOneDay > 999999 || Daywork > 999999) {
        alert("Vui lòng nhập trong khoảng từ 0 ~ 999999!"); //Điều kiện kiểm tra nhập trong khoảng từ 0 ~ 999999!
    } else {
        let salaryNV = salaryOneDay * Daywork; //Tinh lương nhân viên
        let formatsalary = salaryNV.toLocaleString("vn-VN"); //Format theo kiểu VN
        document.getElementById("result").textContent = formatsalary + " VND";
        document.getElementById("result-container").classList.remove("hidden");//hiển thị kết quả lên màn hình sau khi remove hidden.
    }
}
