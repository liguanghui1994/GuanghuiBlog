/**restful api
 * 请求格式必须这么写
	$.ajax({
		type: "get",
	    url: "url",
	    contentType: 'application/json',
	    data: {},
	    timeout: 3000,
	    success: function(data){
	    	
	    }
	});  
*/

//字符串转为html
function decodeHtml(str){
	var div11 = document.createElement('div');
	div11.innerHTML = str;
	var span = div11.childNodes;
	div11.remove();
	return span;
}

$(document).ready(function(){
	var home_brand = document.querySelector('#lgh');
	var home = document.querySelector('#home');
	var archive = document.querySelector('#archive');
	var category = document.querySelector('#category');
	var tag = document.querySelector('#tag');
	var tool_sharing = document.querySelector('#tool_sharing');
	var open_source = document.querySelector('#open_source');
	var write = document.querySelector('#write');
	var about_me = document.querySelector('#about_me');
	var items = ['#lgh', '#home', '#archive','#category','#tag','#tool_sharing','#open_source','#write','#about_me'];

	//点击改变底色的方法
	function itemClick(e){
 		for (var x of items) {
			if($(x).hasClass("active")){
				$(x).removeClass("active");
			}
 		}
 		if(typeof(e)=="undefined"){
 			$("#home").addClass("active");
 		}else{
 			$("#"+e.target.id).addClass("active");
		}
 	}


 	home_brand.onclick = function(){
  		alert("开发中，敬请期待");
 	}

	home.onclick = function(e){
  		itemClick(e);
  		$(function(){
  			$.ajax({
  		    	type: "get",
  			    url: "/header/home",
  			    contentType: 'application/json',
  			    data: {},
  			    timeout: 3000,
  			    success: function(e){
  			    	if(e.description=="success"){
  			    		$(".left").empty();
  			    		$("#side-content").hide();
  			    		$("#recentposts").empty();
  			    		$("#categories-list").empty();
  			    		$(".tags-cloud").empty();
  			    		var summary = "<h1>Welcome to LgH's Blog!</h1><small>天道酬勤</small><hr>";
  			    		$(".left").append(decodeHtml(summary));
  			    		var data = e.args.article;
  			    		if(typeof(data)=="undefined"){
  			    		}else{
	  			    		var inserthtml;
	  			    		for(var year in data){
	  			    			var articles = data[year];
	  			    			for(var article in articles){
		  			    			inserthtml = '<ul><li><h2><a class="post-link" href="#" onclick=""></a></h2><div class="label"><div class="label-card"><i class="fa fa-calendar"></i><a class="createtime"></a></div><div class="label-card"><i class="fa fa-user"></i><a class="createusername"></a></div><div class="label-card"></div><div class="label-card"><!-- <span class="point">•</span> --><span class="categories"><i class="fa fa-th-list"></i><a class="categoryclass" href="#"></a><!-- <span class="point">•</span> --></span></div><div class="label-card"><!-- <span class="point">•</span> --><span class="pageTag"><i class="fa fa-tags"></i></span></div></div><div class="excerpt"></div><div class="read-all"><a class="readallclass" href="#"><i class="fa fa-newspaper-o"></i>Read All</a></div><hr></li></ul>';
		  			    			$(".left").append(inserthtml);
	  			    			}
	  			    		}
	  			    		$(".left").append('<!-- Pagination links --><div class="pagination"><span class="previous disable"><i class="fa fa-angle-double-left"></i></span><span class="previous disable"><i class="fa fa-angle-left"></i></span><span class="page_number ">1/6</span><a href="#" class="next"><i class="fa fa-angle-right"></i></a><a href="#" class="next"><i class="fa fa-angle-double-right"></i></a></div>');
  			    			
  			    			var titletip = $(".post-link");
  			    			var datetip = $(".createtime");
  			    			var usertip = $(".createusername");
  			    			var categorytip = $(".categoryclass");
  			    			var pagetip = $(".pageTag");
  			    			var excerpttip = $(".excerpt");
  			    			var readlltip = $(".readallclass");
  			    			var x=0;
  			    			for(var year1 in data){
			                    var articles1 = data[year];
			                    for(var article1 of articles1){

    			    				//处理正文
    			    				titletip[x].append(article1.title);
    			    				titletip[x].id=article1.id;
    			    				titletip.attr("onclick","title_click(this)");
    			    				datetip[x].append(article1.createtime);
    			    				usertip[x].append(article1.creatorname);
    			    				categorytip[x].title='Category:'+article1.category;
    			    				categorytip[x].append(article1.category);
    			    				readlltip[x].id=article1.id;
    			    				var tags = article1.tags;
    			    				for(var xx of tags){
    			    					var aa = document.createElement("a");
    			    					aa.title = 'Tag:'+ xx;
    			    					aa.append(xx);
    			    					pagetip[x].append(aa);
    			    				}
    			    				excerpttip[x].innerHTML=article1.excerpt;

    			    				//处理右边的Recent Posts,只显示10篇
    			    				if(x<10){
	      			    				var recentpostshtml = '<li><a href="#" class="recentposts-list-item" id ='+article1.id+'>'+article1.title+'</a></li>';
	      			    				$("#recentposts").append(decodeHtml(recentpostshtml));
    			    				}
    			    				x=x+1;
			                    }	
  			    			}

  			    			var categorys = e.args.categary;
  			    			for(var y in categorys){
  			    				var categoryhtml = '<li><a href="#" class="categories-list-item" cate="'+y+'"><span class="name">'+y+'</span><span class="badge">'+categorys[y]+'</span></a></li>';
  			    				$("#categories-list").append(decodeHtml(categoryhtml));
  			    			}

  			    			var tags = e.args.tags;
  			    			for(var z of tags){
  			    				var taghtml = '<a href="#" class="tags-list-item" style="font-size: 10.5pt; color: #888;">'+z+'</a>';
  			    				$(".tags-cloud").append(decodeHtml(taghtml));
  			    			}
  			    		}
  			    	}
  			    }
  		    }); 
  		});
 	}
	//初次加载页面，主动调一次home的onclick事件
 	home.onclick();

 	//按时间分类
 	archive.onclick = function(e){
 		itemClick(e);
	    $(function(){
	      $.ajax({
	          type: "get",
	          url: "/header/archive",
	          contentType: 'application/json',
	          data: {},
	          timeout: 3000,
	          success: function(e){
	            if(e.description=="success"){
                var main = $(".left");
	              main.empty();
	              $("#side-content").show();
	              $("#content-side").empty();
	              $("#recentposts").empty();
	              $("#categories-list").empty();
	              $(".tags-cloud").empty();
	              var summary = "<h1>Archives</h1>";
	              $(".left").append(decodeHtml(summary));
	              var data = e.args.article;
	              if(typeof(data)=="undefined"){
	              }else{
	                var x=0;
	                var mainhtml='<ul>';
	                for(var year1 in data){
	                	mainhtml = mainhtml + '<h2 id="y'+year1+'">'+year1+'</h2>';
                        var articles1 = data[year1];
                        var num = 0;
                        for(var article1 of articles1){
	                    //处理正文
                        	mainhtml = mainhtml + '<li><time>'+article1.createtime+'</time><a class="post-link" href="#" id="'+article1.id+
		                      '" onclick="title_click(this)">'+article1.title+'<span class="categories"><i class="fa fa-th-list"></i><a href="#" title="Category: '+
		                      article1.category+'">'+article1.category+'</a></span><span class="pageTag"><i class="fa fa-tags"></i>';
	                    
                        	var tags = article1.tags;
		                    for(var xx of tags){
		                      mainhtml = mainhtml + '<a href="#" title="Tag: '+xx+'">'+xx+'</a>&nbsp;';
		                    }
		                    mainhtml = mainhtml + '</span></li>';
		                    //处理右边的Recent Posts,只显示10篇
		                    if(x<10){
		                        var recentpostshtml = '<li><a href="#" class="recentposts-list-item" id ='+article1.id+'>'+article1.title+'</a></li>';
		                        $("#recentposts").append(decodeHtml(recentpostshtml));
		                    }
		                    x=x+1;
		                    num=num+1;
                        }
                        var contenthtml = '<li><a data-scroll href="#y'+year1+'">'+year1+' ('+num+')</a></li>';
                        $("#content-side").append(decodeHtml(contenthtml));
	                }
	                mainhtml = mainhtml + '</ul>';
	                main.append(decodeHtml(mainhtml));
	                var categorys = e.args.categary;
	                for(var y in categorys){
	                  var categoryhtml = '<li><a href="#" class="categories-list-item" cate="'+y+'"><span class="name">'+y+'</span><span class="badge">'+categorys[y]+'</span></a></li>';
	                  $("#categories-list").append(decodeHtml(categoryhtml));
	                }
	
	                var tags = e.args.tags;
	                for(var z of tags){
	                  var taghtml = '<a href="#" class="tags-list-item" style="font-size: 10.5pt; color: #888;">'+z+'</a>';
	                  $(".tags-cloud").append(decodeHtml(taghtml));
	                }
	              }
	            }
	          }
	        }); 
	    });
 	}

 	category.onclick = function(e){
 		itemClick(e);
	    $(function(){
	      $.ajax({
	          type: "get",
	          url: "/header/category",
	          contentType: 'application/json',
	          data: {},
	          timeout: 3000,
	          success: function(e){
	            if(e.description=="success"){
                var main = $(".left");
	              main.empty();
	              $("#side-content").show();
	              $("#content-side").empty();
	              $("#recentposts").empty();
	              $("#categories-list").empty();
	              $(".tags-cloud").empty();
	              var summary = "<h1>Category</h1>";
	              $(".left").append(decodeHtml(summary));
	              var data = e.args.article;
	              if(typeof(data)=="undefined"){
	              }else{
	                var x=0;
	                var mainhtml='<ul>';
	                for(var year1 in data){
	                	mainhtml = mainhtml + '<h2 id="y'+year1+'">'+year1+'</h2>';
                        var articles1 = data[year1];
                        var num = 0;
                        for(var article1 of articles1){
	                    //处理正文
                        	mainhtml = mainhtml + '<li><time>'+article1.createtime+'</time><a class="post-link" href="#" id="'+article1.id+
		                      '" onclick="title_click(this)">'+article1.title+'<span class="categories"><i class="fa fa-th-list"></i><a href="#" title="Category: '+
		                      article1.category+'">'+article1.category+'</a></span><span class="pageTag"><i class="fa fa-tags"></i>';
	                    
                        	var tags = article1.tags;
		                    for(var xx of tags){
		                      mainhtml = mainhtml + '<a href="#" title="Tag: '+xx+'">'+xx+'</a>&nbsp;';
		                    }
		                    mainhtml = mainhtml + '</span></li>';
		                    //处理右边的Recent Posts,只显示10篇
		                    if(x<10){
		                        var recentpostshtml = '<li><a href="#" class="recentposts-list-item" id ='+article1.id+'>'+article1.title+'</a></li>';
		                        $("#recentposts").append(decodeHtml(recentpostshtml));
		                    }
		                    x=x+1;
		                    num=num+1;
                        }
                        var contenthtml = '<li><a data-scroll href="#y'+year1+'">'+year1+' ('+num+')</a></li>';
                        $("#content-side").append(decodeHtml(contenthtml));
	                }
	                mainhtml = mainhtml + '</ul>';
	                main.append(decodeHtml(mainhtml));
	                var categorys = e.args.categary;
	                for(var y in categorys){
	                  var categoryhtml = '<li><a href="#" class="categories-list-item" cate="'+y+'"><span class="name">'+y+'</span><span class="badge">'+categorys[y]+'</span></a></li>';
	                  $("#categories-list").append(decodeHtml(categoryhtml));
	                }
	
	                var tags = e.args.tags;
	                for(var z of tags){
	                  var taghtml = '<a href="#" class="tags-list-item" style="font-size: 10.5pt; color: #888;">'+z+'</a>';
	                  $(".tags-cloud").append(decodeHtml(taghtml));
	                }
	              }
	            }
	          }
	        }); 
	    });
 	}

 	tag.onclick = function(e){
 		itemClick(e);
	    $(function(){
	      $.ajax({
	          type: "get",
	          url: "/header/tags",
	          contentType: 'application/json',
	          data: {},
	          timeout: 3000,
	          success: function(e){
	        	  if(e.description=="success"){
                  var main = $(".left");
	              main.empty();
	              $("#side-content").show();
	              $("#content-side").empty();
	              $("#recentposts").empty();
	              $("#categories-list").empty();
	              $(".tags-cloud").empty();
	              var summary = "<h1>Tags</h1>";
	              $(".left").append(decodeHtml(summary));
	              var data = e.args.article;
	              if(typeof(data)=="undefined"){
	              }else{
	                var x=0;
	                var mainhtml='<ul>';
	                var recentpostshtml = null;
	                for(var year1 in data){
	                	mainhtml = mainhtml + '<h2 id="y'+year1+'">'+year1+'</h2>';
                        var articles1 = data[year1];
                        var num = 0;
                        for(var article1 of articles1){
	                    //处理正文
                        	mainhtml = mainhtml + '<li><time>'+article1.createtime+'</time><a class="post-link" href="#" id="'+article1.id+
		                      '" onclick="title_click(this)">'+article1.title+'<span class="categories"><i class="fa fa-th-list"></i><a href="#" title="Category: '+
		                      article1.category+'">'+article1.category+'</a></span><span class="pageTag"><i class="fa fa-tags"></i>';
	                    
                        	var tags = article1.tags;
		                    for(var xx of tags){
		                      mainhtml = mainhtml + '<a href="#" title="Tag: '+xx+'">'+xx+'</a>&nbsp;';
		                    }
		                    mainhtml = mainhtml + '</span></li>';
		                    //处理右边的Recent Posts,只显示10篇
		                    if(x<10){
		                        var recentpostshtml1 = '<li><a href="#" class="recentposts-list-item" id ='+article1.id+'>'+article1.title+'</a></li>';
		                        if(recentpostshtml==null){
		                        	recentpostshtml = recentpostshtml1;
		                        }
		                        else if(recentpostshtml.search(recentpostshtml1) == -1){
		                        	recentpostshtml = recentpostshtml+recentpostshtml1;
		                        }
		                        
		                    }
		                    x=x+1;
		                    num=num+1;
                        }
                        var contenthtml = '<li><a data-scroll href="#y'+year1+'">'+year1+' ('+num+')</a></li>';
                        $("#content-side").append(decodeHtml(contenthtml));
	                }
	                $("#recentposts").append(decodeHtml(recentpostshtml));
	                
	                mainhtml = mainhtml + '</ul>';
	                main.append(decodeHtml(mainhtml));
	                var categorys = e.args.categary;
	                for(var y in categorys){
	                  var categoryhtml = '<li><a href="#" class="categories-list-item" cate="'+y+'"><span class="name">'+y+'</span><span class="badge">'+categorys[y]+'</span></a></li>';
	                  $("#categories-list").append(decodeHtml(categoryhtml));
	                }
	
	                var tags = e.args.tags;
	                for(var z of tags){
	                  var taghtml = '<a href="#" class="tags-list-item" style="font-size: 10.5pt; color: #888;">'+z+'</a>';
	                  $(".tags-cloud").append(decodeHtml(taghtml));
	                }
	              }
	            }
	          }
	        }); 
	    });
 	}

 	tool_sharing.onclick = function(e){
 		alert("开发中，敬请期待");
 	}

 	open_source.onclick = function(e){
 		alert("开发中，敬请期待");
 	}

  write.onclick = function(e){
    alert("开发中，敬请期待");
  }

 	about_me.onclick = function(e){
 		itemClick(e);
 		$(function(){
  			$.ajax({
  		    	type: "get",
  			    url: '/header/aboutme',
  			    contentType: 'application/json',
  			    data: {},
  			    timeout: 3000,
  			    success: function(data){
  			    	alert("haha");
  			    }
  		    }); 
  		});
 	}
});


