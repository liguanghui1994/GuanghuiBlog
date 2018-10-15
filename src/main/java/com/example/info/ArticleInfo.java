package com.example.info;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Set;

public class ArticleInfo {

	private Long id;

	private String title;

	private String createtime;

	private String creatorname;

	private String category;

	private String excerpt;
	
	private Set<String> tags;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCreatetime() {
		return createtime;
	}

	public void setCreatetime(Date createtime) {
		SimpleDateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd");
		this.createtime = dateformat.format(createtime);
	}

	public String getCreatorname() {
		return creatorname;
	}

	public void setCreatorname(String creatorname) {
		this.creatorname = creatorname;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getExcerpt() {
		return excerpt;
	}

	public void setExcerpt(String excerpt) {
		this.excerpt = excerpt;
	}

	public Set<String> getTags() {
		return tags;
	}

	public void setTags(Set<String> tags) {
		this.tags = tags;
	}

}
