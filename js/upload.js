function upload() {
    mydata = document.getElementById("file").files[0];
    formData = new FormData();
    formData.append("file", mydata);
    $.ajax({
        // contentType:"multipart/form-data",
        url:"http://120.132.224.67:10024/file/upload",
        type:"POST",
        data:formData,
        dataType:"text",
        processData: false, // 告诉jQuery不要去处理发送的数据
        contentType: false, // 告诉jQuery不要去设置Content-Type请求头
        success: function(result){
            alert(result);
        }
    });
}