package com.example.Service;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.User;
import com.example.repository.IUserRepository;

@Service
public class UserService {

	@Autowired
	private IUserRepository userrepository;
	
	/**
	 * 获取用户id和名称的对应关系
	 * @param userids
	 * @return Map<Long,String>  id ==> name
	 */
	public Map<Long,String> getUserByIds(Collection<Long> userids) {
		List<User> users = (List<User>) userrepository.findAllById(userids);
		Map<Long,String> usermap = new HashMap<>();
		for(User user : users) {
			usermap.put(user.getId(), user.getName());
		}
		return usermap;
	}
}
