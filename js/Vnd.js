/** Kiến thức áp dụng:
Áp dụng các kiến thức như bài 1 và 2
Giá USD mặc định 1 USD = 23500
Có thể dùng thêm NumberFormat để số tiền hiển thị đẹp hơn: NumberFormat
VD: new Intl.NumberFormat('vn-VN').format(23500); => 23,500

- Input:
Nhập số tiền USD
- Progressing:
Tính chuyển đổi USD -> VND
- Output:
In ra màn hình kết quả sau khi chuyển đổi với giá trị mặc định 1VND=23500.
*/

function converttovnd() {
    const moneyvnd = 23500; //giá trị mặc định
    const quantityusd = parseFloat(document.getElementById("quantityusd").value);
    //Kiểm tra giá trị nhập vào
    if (isNaN(moneyvnd) || moneyvnd <= 0) {
        alert("Vui lòng nhập số dương hợp lệ!");
        return;
    }

    //Tính số tiền VND
    const totalvnd = moneyvnd * quantityusd;
    //Hiển thị kết quả
    document.getElementById("result-vnd").textContent = totalvnd.toLocaleString("vn-VN") + " VND";
}