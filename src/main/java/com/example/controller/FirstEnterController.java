package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 第一次进入，加载首页
 * @author guanghui_li
 *
 */

//访问html需要用controller，返回json需要用restcontroller
@Controller
@RequestMapping("/")
public class FirstEnterController {

	@RequestMapping(value = {"/"})
	private String Index() {
		return "/home";
	}

	@RequestMapping(value = {"/admin"})
	private String WriteArticle() {
		return "/write";
	}
	
}
