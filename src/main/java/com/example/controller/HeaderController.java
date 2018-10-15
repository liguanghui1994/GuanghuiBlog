package com.example.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Service.ArticleService;
import com.example.Service.TagsService;
import com.example.Service.UserService;
import com.example.api.RestFulApi;
import com.example.entity.Article;
import com.example.info.ArticleInfo;


@RestController
@RequestMapping(value= {"/header"})
public class HeaderController {

	@Autowired
	private ArticleService articleservice;
	@Autowired
	private UserService userservice;
	@Autowired
	private TagsService tagsservice;
	
	@RequestMapping(value= {"/home"})
	@ResponseBody
	private RestFulApi homeAction() {
		return queryAllArticles("createtime",true);
	}
	
	@RequestMapping(value= {"/archive"})
	@ResponseBody
	private RestFulApi archivesAction() {
		return queryAllArticles("createtime",false);
	}
	
	@RequestMapping(value= {"/category"})
	@ResponseBody
	private RestFulApi categoryAction() {
		return queryAllArticles("category",false);
	}
	
	@RequestMapping(value= {"/tags"})
	@ResponseBody
	private RestFulApi tagsAction() {
		return queryAllArticles("tags",false);
	}
	
	private RestFulApi queryAllArticles(String groupbywhat, boolean needExcerpt) {
		//获取所有的文章
		List<Article> articles = articleservice.getAllArticles();
		
		Set<Long> creatorids = new HashSet<>();//创建人id
		Set<Long> articleids = new HashSet<>();//文章id
		Map<String,Integer> categarymap = new HashMap<>();//每个分类的文章数量

		for(Article article : articles) {
			creatorids.add(article.getCreator());
			articleids.add(article.getId());
			Integer categarynums = categarymap.get(article.getCategory());
			if(categarynums==null) {
				categarymap.put(article.getCategory(), 1);
			}else {
				categarymap.put(article.getCategory(), categarynums+1);
			}
		}
		
		Map<Long,Set<String>> tagsmap = tagsservice.getTagsByArticleIds(articleids);		
		Map<Long, String> usermap = userservice.getUserByIds(creatorids);
		
		Map<String,List<ArticleInfo>> articledatamap = new HashMap<>();
		//对文章进行分类
		for(Article article : articles) {
			
			ArticleInfo articleinfo = new ArticleInfo();
			articleinfo.setId(article.getId());
			articleinfo.setTitle(article.getTitle());
			articleinfo.setCreatetime(article.getCreatetime());
			articleinfo.setCreatorname(usermap.get(article.getCreator()));
			articleinfo.setCategory(article.getCategory());
			articleinfo.setTags(tagsmap.get(article.getId()));
			if(needExcerpt)
				articleinfo.setExcerpt(article.getExcerpt());
			switch (groupbywhat) {
			case "createtime"://以创建时间进行分类
				String year = articleinfo.getCreatetime().split("-")[0];
				if(articledatamap.get(year)==null) {
					List<ArticleInfo> articledata = new ArrayList<>();
					articledata.add(articleinfo);
					articledatamap.put(year, articledata);
				}else {
					articledatamap.get(year).add(articleinfo);
				}
				break;
			case "category"://以cateaory进行分类
				String category = article.getCategory();
				if(articledatamap.get(category)==null) {
					List<ArticleInfo> articledata = new ArrayList<>();
					articledata.add(articleinfo);
					articledatamap.put(category, articledata);
				}else {
					articledatamap.get(category).add(articleinfo);
				}
				break;
			case "tags"://以tags进行分类
				Set<String> tags = tagsmap.get(article.getId());
				for(String ss :tags) {
					if(articledatamap.get(ss)==null) {
						List<ArticleInfo> articledata = new ArrayList<>();
						articledata.add(articleinfo);
						articledatamap.put(ss, articledata);
					}else {
						articledatamap.get(ss).add(articleinfo);
					}
				}
				break;
			default:
				break;
			}	
				
		}
		
		Set<String> alltags = new HashSet<>();//所有的标签
		for(Entry<Long, Set<String>> set :tagsmap.entrySet()) {
			alltags.addAll(set.getValue());
		}
		
		Map<String,Object> args = new HashMap<>();
		args.put("article", articledatamap);
		args.put("categary", categarymap);
		args.put("tags", alltags);
		RestFulApi result = new RestFulApi(args);
		return result;
	}
}
