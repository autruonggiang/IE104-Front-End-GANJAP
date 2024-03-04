var keyLocalStorageItemGioHang = 'danhSachItemGioHang';

function layDanhSachItemGioHang(){
    var danhSachItemGioHang = new Array();
    var jsonDanhSachItemGioHang = localStorage.getItem(keyLocalStorageItemGioHang);

    if (jsonDanhSachItemGioHang!=null)
        danhSachItemGioHang = JSON.parse(jsonDanhSachItemGioHang);
    return danhSachItemGioHang;
}


/////////


function layGioHangTuLocalStorage(){
    var danhSachItemGioHang = new Array;
    var jsonGioHang= localStorage.getItem('danhSachItemGioHang');

    if (jsonGioHang!=null)
    danhSachItemGioHang = JSON.parse(jsonGioHang);

    return danhSachItemGioHang;
}

function themSanPhamVaoGioHang(hinhAnh, ten, gia, soLuong, gioHang) {
    var gioHangSauKhiDuocThem = gioHang;
    var itemGioHang = TaoDoiTuongItemGioHang(hinhAnh, ten, gia, 1);

    console.log(gioHang);
    gioHangSauKhiDuocThem.push(itemGioHang);

    return gioHangSauKhiDuocThem;
}

function luuGioHangVaoLocalStorage(gioHang){
    var jsonGioHang = JSON.stringify(gioHang);

    localStorage.setItem('gioHang', jsonGioHang);
}

function luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang)
{
    var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);
    localStorage.setItem(keyLocalStorageItemGioHang, jsonDanhSachItemGioHang);

}

function xoaSanPhamKhoiLocalStorage(tenSanPham) {
    // Lấy danh sách sản phẩm
    var danhSachItemGioHang = layDanhSachItemGioHang();

    // Tìm và xóa sản phẩm có tên cần xóa
    var index = -1;
    for (var i = 0; i < danhSachItemGioHang.length; i++) {
        if (danhSachItemGioHang[i].ten === tenSanPham) {
            index = i;
            break;
        }
    }

    // Nếu tìm thấy sản phẩm, xóa nó khỏi danh sách
    if (index !== -1) {
        danhSachItemGioHang.splice(index, 1);

        // Lưu danh sách mới vào Local Storage
        luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang);

        // Hiển thị thông báo hoặc thực hiện các công việc khác cần thiết
        console.log(`Đã xóa sản phẩm "${tenSanPham}" khỏi giỏ hàng.`);
    } else {
        console.log(`Không tìm thấy sản phẩm "${tenSanPham}" trong giỏ hàng.`);
    }
}

console.log;