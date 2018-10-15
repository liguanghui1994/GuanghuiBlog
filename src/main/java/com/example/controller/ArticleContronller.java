package com.example.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * 第一次进入，加载首页
 * @author guanghui_li
 *
 */

//访问html需要用controller，返回json需要用restcontroller
@RestController
@RequestMapping("/article")
public class ArticleContronller {

	@RequestMapping(value = {"/title"})
	@ResponseBody
	private String Index(@RequestParam Long id) {
		
		return null;
	}

}
