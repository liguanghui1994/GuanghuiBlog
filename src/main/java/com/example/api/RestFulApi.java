package com.example.api;

public class RestFulApi {
	private Object args;
	private String description;
	private Integer errorcode;
	public RestFulApi(final Object args, final String description, final Integer errorcode) {
		this.description = description;
		this.errorcode = errorcode;
		this.args = args;
	}
	
	public RestFulApi(final Object args){
		this.description = "success";
		this.errorcode = 100;
		this.args = args;
	}
	
	public RestFulApi(){
		this.description = "success";
		this.errorcode = 100;
	}
	
	public Object getArgs() {
		return args;
	}
	public void setArgs(Object args) {
		this.args = args;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Integer getErrorcode() {
		return errorcode;
	}
	public void setErrorcode(Integer errorcode) {
		this.errorcode = errorcode;
	}
}

