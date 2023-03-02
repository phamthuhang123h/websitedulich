function send(){
    var arr = document.getElementsByTagName('input');
    console.log(arr);
    var name = arr[0].value;
    var phoneNumber = arr[1].value;
    var gmail = arr[2].value;
    var mess = arr[3].value;
    if(name == "" || phoneNumber == "" || gmail == "" || mess == ""){
        alert("Vui lòng điền đầy đủ thông tin");
        return;
    }
    if(!isNaN(name)){
        alert("Vui lòng nhập lại tên");
        return;
    }
    if(phoneNumber.length != 10 || phoneNumber[0] != 0){
        alert("Vui lòng nhập lại số điện thoại");
        return;
    }
}

