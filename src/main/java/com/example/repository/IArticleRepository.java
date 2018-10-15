package com.example.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.Article;

@Repository
public interface IArticleRepository extends CrudRepository<Article, Long>{

	
}
