$(document).ready(function(){
	//点击提交功能
	var commentSubmit = (function () {
		var m1 = function(maxwords) {
			return function() {
			var content = $('#comment').val();//获取输入内容
			var li_length = $("li").length;//总评论数
			var time = new Date();//当前时间
			var goodBad = function(){//点赞函数
				var count = parseInt($(this).find("span").text());//为什么用$(this).eq(1)不行？
				if (count<99) {//超过99个赞显示为99+
					$(this).find("span").text(++count);
				}
				else {
					count++;
					$(this).find("span").text("99+");
				}
			}
			if (content.length>0 & content.length<=maxwords) {//输入不为空且小于5个字。
				if (content.match(/^\s+$/g)) {//内空不能全为空格
					alert("请输入评论内容1");
				}
				else {
					if (li_length==0) {//判断是否第一条评论
						$("ul.board").append("<li>" + "<p>"+"用户名"+"<span class='time'>"+time.toLocaleString()+"</span>"+"</p>" + "<div>"+"<b>"+"<i>"+"赞"+"</i>"+"<span>"+0+"</span>"+"</b>"+"<b>"+"<i>"+"踩"+"</i>"+"<span>"+0+"</span>"+"</b>"+"</div>"+"<p>"+"沙发："+content+"</p>" + "</li>");//这堆东西怎么简化？
						$("b.count").text(li_length+1);//评论数量统计
						$('b').click(goodBad);
					}
					else{
						$("li:last").after("<li>" + "<p>"+"用户名"+"<span class='time'>"+time.toLocaleString()+"</span>"+"</p>" + "<div>"+"<b>"+"<i>"+"赞"+"</i>"+"<span>"+0+"</span>"+"</b>"+"<b>"+"<i>"+"踩"+"</i>"+"<span>"+0+"</span>"+"</b>"+"</div>"+"<p>"+(li_length+1)+"楼："+content+"</p>" + "</li>");
						$("b.count").text(li_length+1);
						$('b').click(goodBad);
					}
					$('#comment').val("");//每次提交完后清除文本框内容
				}
			}
			else if (content.length>maxwords) {
				alert("只能输入"+maxwords+"个字以内的评论");
			}
			else {
				alert("请输入评论内容2");
			};
		}
	}

    return {m1:m1};
	})();


	$('input').click(commentSubmit.m1(100));






});