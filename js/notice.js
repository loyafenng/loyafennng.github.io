;!(function() {
    // body...
    $(".notice_keep").on("keyup",function(){
        var num = $(this).val();
        var re=/^\d*$/;
        if(!re.test(num)){
            isNaN(parseInt(num))?$(this).val(0):$(this).val(parseInt(num));
        }
        // console.log("aaa");
    })
})();

if(window.Notification) {
    var popNotice = function(){
        console.log(Notification.permission)
        if(Notification.permission =="granted"){
            var notification = new Notification("hi",{
                body:"aaa",
                icon:"../img/logo.jpg"
            });

            Notification.onclick = function(){
                notification.close();
            };
        }
        else{
            
        }
    };
    $(".btn-default").on("click",function(){

    }); 

    $(".btn-success").on("click",function() {
        popNotice();
    });

}
else {
    console.log("浏览器不支持Notification")
}