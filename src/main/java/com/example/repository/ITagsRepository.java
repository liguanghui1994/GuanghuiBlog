package com.example.repository;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.Tags;

@Repository
public interface ITagsRepository extends CrudRepository<Tags, Long>{

	@Query(value="select * from t_guanghui_tags where farticleid in ?1", nativeQuery=true)
	List<Tags> findAllByArticleids(Collection<Long> articleids);
}
