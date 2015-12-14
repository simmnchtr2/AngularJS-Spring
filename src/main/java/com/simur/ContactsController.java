package com.simur;

import java.util.ArrayList;
import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;


@Controller
@RequestMapping("/contacts")

public class ContactsController{
	
	public static List<ContactInfo> l =  new ArrayList();

	@RequestMapping(value="", method=RequestMethod.POST  )
	@ResponseStatus(value = HttpStatus.OK)
	private void save(@RequestBody ContactInfo contactInfo){
		boolean contactFound = false;
		for(ContactInfo cf : this.l){
			if(cf.getName().equalsIgnoreCase(contactInfo.getName())){
				cf.setDob(contactInfo.getDob()); 
				cf.setEmail(contactInfo.getEmail()); 
				cf.setEmpId(contactInfo.getEmpId()); 
				cf.setLocation(contactInfo.getLocation());
				cf.setName(contactInfo.getName());
				contactFound = true;
				break;
			}
		}
		if(!contactFound){
			this.l.add(contactInfo);
		}
		
	}
	@RequestMapping(value="", method=RequestMethod.GET  )
	@ResponseBody
	private List get(){
		return l;
	}
	
	@RequestMapping(value="/{name}", method=RequestMethod.DELETE  )
	@ResponseBody
	private List delete(@PathVariable String name ){
		for(ContactInfo cf : this.l){
			if(cf.getName().equals(name)){
				this.l.remove(cf);
				break;
			}
		}
		return l;
	}
}
