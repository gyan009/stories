$(document).ready(function(){
alert("test");
	var url="http://onlinewebapi.com/andriod/api.php";
	$("#login").click(function(){
		alert("test");
		var username = $("#email").val();
		var password = $("#passwd").val();
		$.ajax({
			url:url+"?req=login",
			type:"post",
			data:{"username":username,"password":password},
			success:function(data){
				alert(data);
			}

		});
	});
var web = new owa({
    oauthKey: '789ae8eb405f8dadd0053876b84282076ef0f1ebd80c67ff660c8cd0c4b4dc7fc671032af09c776ed78bb70634f72116e9524df3a715caa9f99d2594',
    secretKey: '54102358f137bb6a7bee5553'
});

	
});

