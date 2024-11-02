/**Kiến thức áp dụng:

Áp dụng các kiến thức như các bài trước
Diện tích: dài x rộng
Chu vi: (dài + rộng) x 2

-input:
nhập chiều dài, chiều rồng
-progressing:
tính diện tích và chu vi dựa theo chiều dài & rộng đã nhập
-output:
in ra màn hình kết quả chu vi và diện tích
*/

function TinhDTCV() {
    //Lấy giá trị từ thẻ input
    let chieudai = parseFloat(document.getElementById("chieudai").value);
    let chieurong = parseFloat(document.getElementById("chieurong").value);

    //kiểm tra giá trị nhập vào
    if (isNaN(chieudai) || isNaN(chieurong) || chieudai <= 0 || chieurong <= 0) {
        alert("Vui lòng nhập các số dương hợp lệ cho chiều dài và chiều rộng.");
        return;
    }

    // Tính chu vi và diện tích
    let chuvi = (chieudai + chieurong) * 2;
    let dientich = chieudai * chieurong;

    // Hiển thị kết quả
    document.getElementById("result-dtcv").textContent =
        `Chu vi: ${chuvi.toLocaleString("vn-VN")} ; Diện tích: ${dientich.toLocaleString("vn-VN")}`;
}