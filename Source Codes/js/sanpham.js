function TaoDoiTuongItemGioHang(hinhAnh, ten, gia, soLuong){
    var gioHang = new Object();

    gioHang.hinhAnh = hinhAnh;
    gioHang.ten = ten;
    gioHang.gia = gia;
    gioHang.soLuong = soLuong;

    gioHang.toJson = function(){
        var json = JSON.stringify(this);
        return json;
    }
 
    gioHang.fromJSON = function(){
        var doiTuongDayDu = new Object();
        var doiTuong = JSON.parse(json);
        var doiTuongDayDu = TaoDoiTuongSanPham(doiTuong.hinhAnh, doiTuong.ten, doiTuong.gia, doiTuong.soLuong);
        return doiTuongDayDu;
    }

    gioHang.fromJSON = function(json){
        var doiTuongDayDu = new Object();
        var doiTuong = JSON.parse(json);
        var doiTuongDayDu = TaoDoiTuongSanPham(doiTuong.hinhAnh, doiTuong.ten, doiTuong.gia, doiTuong.soLuong);
        return doiTuongDayDu;
    }
    
    return gioHang;
}


//_________
