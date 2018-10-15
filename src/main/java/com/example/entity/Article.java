package com.example.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 
 * @author guanghui_li
 */
@Entity
@Table(name ="t_guanghui_article")
public class Article {

	@Id
	@Column(name="fid")
	private Long id;
	
	@Column(name="ftitle")
	private String title;

	@Column(name="fcreatetime")
	private Date createtime;
	
	@Column(name="fcreator")
	private Long creator;
	
	@Column(name="fcategory")
	private String category;
	
	@Column(name="fexcerpt")
	private String excerpt;
	
	@Column(name="fbody")
	private String body;
	
	public Article() {
		super();
	}

	public Article(Long id, String title, Date createtime, Long creator, String category, String excerpt, String body) {
		super();
		this.id = id;
		this.title = title;
		this.createtime = createtime;
		this.creator = creator;
		this.category = category;
		this.excerpt = excerpt;
		this.body = body;
	}

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

	public Date getCreatetime() {
		return createtime;
	}

	public void setCreatetime(Date createtime) {
		this.createtime = createtime;
	}

	public Long getCreator() {
		return creator;
	}

	public void setCreator(Long creator) {
		this.creator = creator;
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

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}
	
}
