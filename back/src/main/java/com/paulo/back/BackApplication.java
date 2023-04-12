package com.paulo.back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class BackApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(BackApplication.class, args);
	}

}
