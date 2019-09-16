$(document).ready(function () {
    dsnd = new DanhSachNguoiDung;

    function themNguoiDung(){
        console.log("them nguoi dung...");
    }

    getListUser();

    function getListUser(){
        dsnd.layDanhSachNguoiDung().done(function (result) { 
            this.mangNguoiDung = result;
            // cách 1 xử lý bất đồng bộ
            taoBang(result);
        }).fail(function (error) {
            console.log(error);
        });
    }

    $("#btnThemNguoiDung").click(function () {
        $(".modal-title").html("Thêm người dùng");
        var footer = `
        <buttom id="btnThem" class="btn btn-success">Thêm</buttom>
        `;
        $(".modal-footer").html(footer);
    })

    // Them nguoi dung

    $("body").delegate("#btnThem", "click", function () {
        var taiKhoan = $("#TaiKhoan").val();
        var hoTen = $("#HoTen").val();
        var matKhau = $("#MatKhau").val();
        var email = $("#Email").val();
        var soDienThoai = $("#SoDienThoai").val();
        var loaiNguoidung = $("#loaiNguoiDung").val();

        var nd = new NguoiDung(taiKhoan, hoTen, matKhau, email, soDienThoai, loaiNguoidung);
        dsnd.themNguoiDung(nd).done(function (result) {
            getListUser();
        }).fail(function (error) {
            console.log(error);
        })
    })

    function taoBang(mang) {
        var content = "";
    
        mang.map(function(item,index){
            content+=`
        <tr>
            <td>${item.id}</td>
            <td>${item.taiKhoan}</td>
            <td>${item.hoTen}</td>
            <td>${item.matKhau}</td>
            <td>${item.email}</td>
            <td>${item.soDT}</td>
            <td>${item.maLoaiNguoiDung}</td>
            <td>
                <buttom class="btnSua btn btn-info" data-id="${item.id}" data-toggle="modal" data-target="#myModal">Sửa</buttom>
                <buttom class="btnXoa btn btn-danger" data-id="${item.id}">Xóa</buttom>
            </td>
        </tr>
        `;
    
        });
    
        $("#tblDanhSachNguoiDung").html(content);
    }

    //Xoa

    $("body").delegate(".btnXoa", "click", function () {
        var id = $(this).data("id");
        dsnd.xoaNguoiDung(id).done(function (result) {
            getListUser();
        }).fail(function (error) {
            console.log(error);
        });
    })

    //lay thong tin nguoi dung
    $("body").delegate(".btnSua", "click", function () {
        $(".modal-title").html("Sửa người dùng");
        var id = $(this).data("id");
        var footer = `
        <bottom id="btnCapNhat" class="btn btn-success" data-id="${id}">Cập nhật</bottom>
        `;
        $(".modal-footer").html(footer);
        
        dsnd.layThongTinNguoiDung(id).done(function (result) {
            console.log(result);
            $("#TaiKhoan").val(result.taiKhoan);
            $("#HoTen").val(result.matKhau);
            $("#MatKhau").val(result.hoTen);
            $("#Email").val(result.email);
            $("#SoDienThoai").val(result.soDT);
            $(`#loaiNguoiDung option[value=${result.maLoaiNguoiDung}]`).attr('selected', true);
        }).fail(function (error) {
            console.log(error);
        });
    })


    $("body").delegate("#btnCapNhat", "click", function () {
        var id = $(this).data("id");
        var taiKhoan = $("#TaiKhoan").val();
        var hoTen = $("#HoTen").val();
        var matKhau = $("#MatKhau").val();
        var email = $("#Email").val();
        var soDienThoai = $("#SoDienThoai").val();
        var loaiNguoidung = $("#loaiNguoiDung").val();
        var nguoiDung = new NguoiDung(taiKhoan, hoTen, matKhau, email, soDienThoai, loaiNguoidung);
        dsnd.capNhatNguoiDung(id,nguoiDung).done(function (result) {
            getListUser();
        }).fail(function (error) {
            console.log(error);
        });
    })
    
});