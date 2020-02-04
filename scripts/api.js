function postData(data){
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: success,
        dataType: dataType
      });
}
function getData(){
    $.ajax({
        url: url,
        data: data,
        success: success,
        dataType: dataType
      });
}
function deleteData(data){
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: success,
        dataType: dataType
      });
}
function putData(data){
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: success,
        dataType: dataType
      });
}
