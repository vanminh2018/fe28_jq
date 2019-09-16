function DanhSachNguoiDung() {
    
    // Lay thong tin nguoi dung
    this.layDanhSachNguoiDung = function () {
        // thêm vào return để sử dụng .done, .fail ở ngoài
        return $.ajax({
            type: "GET",
            url: "http://5d78df46a8c27100149866a8.mockapi.io/api/NguoiDung",
            // data: "data",
            // dataType: "dataType",
            // success: function (response) {
                
            // }
        })
        // .done(function (result) { 
        //     this.mangNguoiDung = result;
        //     // cách 1 xử lý bất đồng bộ
        //     taoBang(result);
        // }).fail(function (error) {
        //     console.log(error);
        // });
    }

    // Thêm người dùng
    this.themNguoiDung = function (nguoiDung) {
        return $.ajax({
            type: "POST",
            url: "http://5d78df46a8c27100149866a8.mockapi.io/api/NguoiDung",
            data: nguoiDung,
        })
    }

    //Xoa nguoi dung


}

//Xoa nguoi dung ma khong viet trong class DanhSachNguoiDung
DanhSachNguoiDung.prototype.xoaNguoiDung = function (id) {
    return $.ajax({
        type: "DELETE",
        url: "http://5d78df46a8c27100149866a8.mockapi.io/api/NguoiDung/"+id,
    });
}

//Lay thong tin nguoi dung
DanhSachNguoiDung.prototype.layThongTinNguoiDung = function (id) {
    return $.ajax({
        type: "GET",
        url: "http://5d78df46a8c27100149866a8.mockapi.io/api/NguoiDung/"+id,
    });
}

//Cap nhat thong tin nguoi dung
DanhSachNguoiDung.prototype.capNhatNguoiDung = function (id, nguoiDung) {
    return $.ajax({
        type: "PUT",
        url: "http://5d78df46a8c27100149866a8.mockapi.io/api/NguoiDung/"+id,
        data: nguoiDung,
    });
}

// function taoBang(mang) {
//     var content = "";

//     mang.map(function(item,index){
//         content+=`
//     <tr>
//         <td>${index+1}</td>
//         <td>${item.taiKhoan}</td>
//         <td>${item.hoTen}</td>
//         <td>${item.matKhau}</td>
//         <td>${item.email}</td>
//         <td>${item.soDT}</td>
//         <td>${item.maLoaiNguoiDung}</td>
//         <td>
//             <buttom class="btnSua btn btn-info" data-taikhoan="${item.taikhoan}" data-toggle="modal" data-target="#myModal">Sửa</buttom>
//             <buttom class="btnXoa btn btn-danger" data-taikhoan="${item.taikhoan}">Xóa</buttom>
//         </td>
//     </tr>
//     `;

//     });

//     $("#tblDanhSachNguoiDung").html(content);
// }