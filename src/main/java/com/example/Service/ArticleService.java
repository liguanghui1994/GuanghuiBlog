package com.example.Service;

import java.util.Comparator;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Article;
import com.example.repository.IArticleRepository;

@Service
public class ArticleService {

	@Autowired
	private IArticleRepository article;
	
	/**
	 * 查询所有的文章
	 * @return List<Article>
	 */
	public List<Article> getAllArticles(){
		List<Article> articles = (List<Article>) article.findAll();
		articles.sort(new Comparator<Article>() {
			@Override
			public int compare(Article o1, Article o2) {
				Date do1 = o1.getCreatetime();
				Date do2 = o2.getCreatetime();
				return do2.compareTo(do1);
			}
		});
		return articles;
	}
}
