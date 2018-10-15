package com.example.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 
 * @author guanghui_li
 */
@Entity
@Table(name ="t_guanghui_tags")
public class Tags {

	@Id
	@Column(name="fid")
	private Long id;
	
	@Column(name="farticleid")
	private Long articleid;

	@Column(name="ftag")
	private String tag;
	
	public Tags() {
		super();
	}

	public Tags(Long id, Long articleid, String tag) {
		super();
		this.id = id;
		this.articleid = articleid;
		this.tag = tag;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getArticleid() {
		return articleid;
	}

	public void setArticleid(Long articleid) {
		this.articleid = articleid;
	}

	public String getTag() {
		return tag;
	}

	public void setTag(String tag) {
		this.tag = tag;
	}
	
}
