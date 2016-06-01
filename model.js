$(document).ready(function(){
	var COMMENT = {
		submit: function(inputObj, cb) {
			var max = parseInt(inputObj.attr('max') || 100);
			var content = (inputObj.val() || '').trim();
			if (content.length === 0) {
				return cb(new Error('评论内容不能为空'));
			}
			if (content.length > max) {
				return cb(new Error('只能输入' + max + '个字以内的评论'));
			}
			// 模拟提交数据
			setTimeout(function() {
				cb(null, content);
			}, 100);
		},
		append: function(commentList,  boardHead, content) {
			var time = new Date();
			var count = commentList.children('li').length;
			var html = '<li>' + 
				'<p>用户名' + 
					'<span class="time">' + time.toLocaleString() + '</span>' +
				'</p>' +
				'<div>' + 
					'<b><i>赞</i><span>0</span></b>' +
					'<b><i>踩</i><span>0</span></b>' +
				'</div>' +
				'<p>' + (count === 0 ? '沙发：' : count + '楼：') + content + '</p>' +
			'</li>';
			commentList.append(html);
			boardHead.find('.count').text(count + 1);
		}
	};

	// 评论列表
	var commentListContainer = $('.board');
	$('input').click(function() {
		var commentInput = $('#comment');
		COMMENT.submit(commentInput, function(err, content) {
			if (err) {
				alert(err.message);
			} else {
				COMMENT.append(commentListContainer, $('.boardHead'), content);
				commentInput.val('');
			}
		});
	});

	commentListContainer.on('click', 'li b', function() {
		var obj = $(this).children('span');
		obj.text(parseInt(obj.text()) + 1);
	});


});