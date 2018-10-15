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
@Table(name ="t_guanghui_user")
public class User {
	
	@Id
	@Column(name="fid")
	private Long id;
	
	@Column(name="fname")
	private String name;

	@Column(name="fcreatetime")
	private Date createtime;
	
	public User() {
		super();
	}

	public User(long id, String name, Date createtime) {
		super();
		this.id = id;
		this.name = name;
		this.createtime = createtime;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getCreatetime() {
		return createtime;
	}

	public void setCreatetime(Date createtime) {
		this.createtime = createtime;
	}
	
	
}
