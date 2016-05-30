$(document).ready(function(){
	//点击提交功能
	var commentSubmit = (function () {
		var m1 = function() {
			var content = $('#comment').val();//获取输入内容
			var p_length = $("p").length;//总评论数
			if (content.length>0 & content.length<=5) {//输入不为空且小于5个字。
				if (content.match(/^\s+$/g)) {//内空不能全为空格
					alert("请输入评论内容");
				}
				else {
					if (p_length==0) {
						$("h1").after("<p>" + "沙发：" + content + "</p>");//判断是否第一条评论
					}
					else{
						$("p:last").after("<p>" + (p_length+1) + "楼：" + content + "</p>");
					}
					$('#comment').val("");//每次提交完后清除文本框内容
				}
			}
			else if (content.length>5) {
				alert("只能输入"+5+"个字以内的评论");
			}
			else {
				alert("请输入评论内容");
			};
		}

    return {m1:m1};
	})();

	$('input').click(commentSubmit.m1);





});