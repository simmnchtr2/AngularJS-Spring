package com.simur;

public class ContactInfo {
	
	 	private String name;
	    private String empId;
	    private String location;
	    private String dob;
	    private String email;
	    
	    ContactInfo(){};
	
	public ContactInfo (String aEmployeeId, String aName, String Location, String aDOB, String EmailId)
	{
		empId = aEmployeeId;
		name = aName;
		location = Location;
		dob = aDOB;
		email = EmailId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmpId() {
		return empId;
	}

	public void setEmpId(String empId) {
		this.empId = empId;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
};


