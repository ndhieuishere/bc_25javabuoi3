// bài 2

document.getElementById("btnChao").onclick = function () {
  // đầu vào : -dom tới các thẻ option để lấy value là các câu chào;
  //           -dom tới thẻ select để lấy value là các thẻ option
  var bO = document.getElementById("bo").value;
  var mE = document.getElementById("me").value;
  var anhTrai = document.getElementById("anhTrai").value;
  var emGai = document.getElementById("emGai").value;
  var nguoiDungMay = document.getElementById("aiDung").value;
  // xử lý: nếu máy ng dùng máy là bố thì lấy tới value của id bố,tương tự với 3 người còn lại
  if (nguoiDungMay == bO) {
    //   đầu ra cho ng dùng máy là bố, tương tự với 3 ng còn lại
    var ketQua = "<div class='alert alert-success'>";
    ketQua += "<p>chào bố đẹp trai</p>";
    ketQua += "</div>";
    document.getElementById("footerChao").innerHTML = ketQua;
  } else if (nguoiDungMay == mE) {
    //   đầu ra nếu là mẹ
    var ketQua = "<div class='alert alert-success'>";
    ketQua += "<p>chào mẹ xinh đẹp</p>";
    ketQua += "</div>";
    document.getElementById("footerChao").innerHTML = ketQua;
  } else if (nguoiDungMay == anhTrai) {
    // đầu ra là anh
    var ketQua = "<div class='alert alert-success'>";
    ketQua += "<p>hello bro</p>";
    ketQua += "</div>";
    document.getElementById("footerChao").innerHTML = ketQua;
  } else {
    //   đầu ra là em
    var ketQua = "<div class='alert alert-success'>";
    ketQua += "<p>hi sis</p>";
    ketQua += "</div>";
    document.getElementById("footerChao").innerHTML = ketQua;
  }
};

// bài 1
document.getElementById("btnSapXep").onclick = function () {
  // đầu vào - input: khai báo 3 biến a b c và 1 biến phụ tạm gọi là temp;
  //     dom tới các thẻ input chứa giá trị;
  var a = document.getElementById("so1").value * 1;
  var b = document.getElementById("so2").value * 1;
  var c = document.getElementById("so3").value * 1;

  // xử lý:
  //  cho a<b, a<c, b<c thì xếp theo a b c, làm tương tự với th khác
  if (a < b) {
    // c? a c? b c?
    if (a < c) {
      // a c? b c?
      if (b < c) {
        // a b c
        //   đầu ra
        console.log(a, b, c);
        var sapXep = "<div class='alert alert-success'>";
        sapXep += "<p>so nho nhat:</p>" + a;
        sapXep += "<p>so thu 2:</p>" + b;
        sapXep += "<p>so lon nhat:</p>" + c;
        sapXep += "</div>";
        document.getElementById("sauKhiSapXep").innerHTML = sapXep;
      } else {
        // a c b
        //   đầu ra
        console.log(a, c, b);
        var sapXep = "<div class='alert alert-success'>";
        sapXep += "<p>so nho nhat:</p>" + a;
        sapXep += "<p>so thu 2:</p>" + c;
        sapXep += "<p>so lon nhat:</p>" + b;
        sapXep += "</div>";
        document.getElementById("sauKhiSapXep").innerHTML = sapXep;
      }
    } else {
      // c a b
      //   đầu ra
      var sapXep = "<div class='alert alert-success'>";
      sapXep += "<p>so nho nhat:</p>" + c;
      sapXep += "<p>so thu 2:</p>" + a;
      sapXep += "<p>so lon nhat:</p>" + b;
      sapXep += "</div>";
      document.getElementById("sauKhiSapXep").innerHTML = sapXep;
    }
  } else {
    // c? b c? a c?
    if (b < c) {
      // b c? a c?
      if (a < c) {
        // b a c
        //   đầu ra
        var sapXep = "<div class='alert alert-success'>";
        sapXep += "<p>so nho nhat:</p>" + b;
        sapXep += "<p>so thu 2:</p>" + a;
        sapXep += "<p>so lon nhat:</p>" + c;
        sapXep += "</div>";
        document.getElementById("sauKhiSapXep").innerHTML = sapXep;
      } else {
        // b c a
        //   đầu ra
        var sapXep = "<div class='alert alert-success'>";
        sapXep += "<p>so nho nhat:</p>" + b;
        sapXep += "<p>so thu 2:</p>" + c;
        sapXep += "<p>so lon nhat:</p>" + a;
        sapXep += "</div>";
        document.getElementById("sauKhiSapXep").innerHTML = sapXep;
      }
    } else {
      // c b a
      //   đầu ra
      var sapXep = "<div class='alert alert-success'>";
      sapXep += "<p>so nho nhat:</p>" + c;
      sapXep += "<p>so thu 2:</p>" + b;
      sapXep += "<p>so lon nhat:</p>" + a;
      sapXep += "</div>";
      document.getElementById("sauKhiSapXep").innerHTML = sapXep;
    }
  }
};
// bài 3
document.getElementById("btnSort").onclick = function () {
  // input - đầu vào:
  // khai báo biến a b c là 3 số nguyên, dom tới 3 thẻ input
  var a = document.getElementById("num1").value * 1;
  var b = document.getElementById("num2").value * 1;
  var c = document.getElementById("num3").value * 1;
  //   xử lý:
  // số chẵn: chia hết cho 2(a%2==0)
  // số lẻ:k chia hết cho 2
  //

  if (a % 2 == 0) {
    //   đầu ra

    var sort = "<div class='alert alert-success'>";
    sort += "<p>a là số chẵn</p>";
    sort += "</div>";
    document.getElementById("afterSort").innerHTML = sort;
  } else {
    //   đầu ra

    var sort = "<div class='alert alert-success'>";
    sort += "<p>a là số lẻ</p>";
    sort += "</div>";
    document.getElementById("afterSort").innerHTML = sort;
  }
  if (b % 2 == 0) {
    console.log("b là số chẵn");
  } else {
    console.log("b là số lẻ");
  }
  if (c % 2 == 0) {
    console.log("c là số chẵn");
  } else {
    console.log("c là số lẻ");
  }
};

// bài 4
document.getElementById("btnTriangle").onclick = function () {
  // đầu vào - input :
  // khai báo 3 biến a b c là 3 cạnh của tam giác, dom tới 3 thẻ input lấy value
  var a = document.getElementById("canh1").value * 1;
  var b = document.getElementById("canh2").value * 1;
  var c = document.getElementById("canh3").value * 1;
  //   xử lý:
  //    áp dụng từng công thức để xđ đó là tam giác gì...
  //   sau đó xđ đó có phải tam giác k
  //  và cuối cùng là kp tam giác
  // tam giác vuông
  if (
    a * a + b * b == c * c ||
    a * c + c * c == b * b ||
    b * b + c * c == a * c
  ) {
    //   đầu ra
    var tamGiac = "<div class='alert alert-success'>";
    tamGiac += "<p>đây là tam giác vuông nha</p>";
    tamGiac += "</div>";
    document.getElementById("Triangle").innerHTML = tamGiac;
  } // tam giác đều
  else if (a == b && b == c) {
    //   đầu ra
    var tamGiac = "<div class='alert alert-success'>";
    tamGiac += "<p>đây là tam giác đều nha</p>";
    tamGiac += "</div>";
    document.getElementById("Triangle").innerHTML = tamGiac;
    // tam giác cân
  } else if (a == b || a == c || b == c) {
    //   đầu ra
    var tamGiac = "<div class='alert alert-success'>";
    tamGiac += "<p>đây là tam giác cân nha</p>";
    tamGiac += "</div>";
    document.getElementById("Triangle").innerHTML = tamGiac;
  }
  //  tam giác bth
  else if (a + b > c && b + c > a && a + c > b) {
    //   đầu ra
    var tamGiac = "<div class='alert alert-success'>";
    tamGiac += "<p>đây là tam giác thường nha</p>";
    tamGiac += "</div>";
    document.getElementById("Triangle").innerHTML = tamGiac;
    // không phải tam giác
  } else {
    //   đầu ra
    var tamGiac = "<div class='alert alert-success'>";
    tamGiac += "<p>not a tam giác</p>";
    tamGiac += "</div>";
    document.getElementById("Triangle").innerHTML = tamGiac;
  }
};
