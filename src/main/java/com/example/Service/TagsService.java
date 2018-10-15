package com.example.Service;

import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Tags;
import com.example.repository.ITagsRepository;

@Service
public class TagsService {

	@Autowired
	private ITagsRepository tagsrepository;
	
	/**
	 * 
	 * @param articleids
	 * @return Map<Long,Set<String>>  文章id作为key，value为标签值的集合
	 */
	public Map<Long,Set<String>> getTagsByArticleIds(Collection<Long> articleids) {
		Map<Long,Set<String>> tagsmap = new HashMap<>();
		for(Long articleid : articleids) {
			tagsmap.put(articleid, new HashSet<>());
		}
		List<Tags> tags = tagsrepository.findAllByArticleids(articleids);
		for(Tags tag : tags) {
			tagsmap.get(tag.getArticleid()).add(tag.getTag());
		}
		return tagsmap;
	}
}
