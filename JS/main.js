function handleSapXep() {
    var number1 = +document.getElementById('soThuNhat1').value;
    var number2 = +document.getElementById('soThuHai1').value;
    var number3 = +document.getElementById('soThuBa1').value;
    let res1 = Math.max(number1, number2, number3);
    let res2;
    let res3;
    let arr = [number1, number2, number3];
    const index = arr.indexOf(res1);
    if (index > -1) {
        arr.splice(index, 1);
    }

    number2 = arr[0];
    number3 = arr[1];
    if (number2 >= number3) {
        res2 = number2;
        res3 = number3;

    } else {
        res2 = number3;
        res3 = number2;
    }
    document.getElementById('result1').innerHTML = res1 + ',' + res2 + ',' + res3;

}


function xuat3() {
    var number1 = +document.getElementById('soThuNhat3').value;
    var number2 = +document.getElementById('soThuHai3').value;
    var number3 = +document.getElementById('soThuBa3').value;
    var soChan = 0;
    var soLe = 0;
    if (number1 % 2 === 0) {
        soChan = soChan + 1;
    } else {
        soLe = soLe + 1;
    }
    if (number2 % 2 === 0) {
        soChan = soChan + 1;
    } else {
        soLe = soLe + 1;
    }
    if (number3 % 2 === 0) {
        soChan = soChan + 1;
    } else {
        soLe = soLe + 1;
    }
    document.getElementById('result3').innerHTML = 'Số Chẵn: ' + soChan + ', số lẻ' + soLe;
}

function handleXacNhan() {
    var ketQua = document.getElementById('member').value;
    document.getElementById('result2').innerHTML = 'Chào' + " " + ketQua;
}

function handleClick() {
    var so1 = +document.getElementById('soThuNhat4').value;
    var so2 = +document.getElementById('soThuHai4').value;
    var so3 = +document.getElementById('soThuBa4').value;

    if (so1 === so2 && so2 === so3 && so1 === so3) {
        document.getElementById('result4').innerHTML = 'Đây là tam giác đều';
        return;
    }

    if (so1 === so2 || so2 === so3 || so1 === so3) {
        document.getElementById('result4').innerHTML = 'Đây là tam giác cân';
        return;
    }

    if (so1 >= so2 + so3 || so2 >= so1 + so3 || so3 >= so1 + so2) {
        document.getElementById('result4').innerHTML = 'Đây không phải là tam giác';
        return;
    }

    if (so1 ** 2 === so2 ** 2 + so3 ** 2 || so2 ** 2 === so1 ** 2 + so3 ** 2 || so3 ** 2 === so2 ** 2 + so1 ** 2) {
        document.getElementById('result4').innerHTML = 'Đây là tam giác vuông';
        return;
    }
}