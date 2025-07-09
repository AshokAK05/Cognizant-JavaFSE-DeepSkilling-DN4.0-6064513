package com.cognizant.spring_learn;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        LOGGER.info("START");
        displayCountry();
        LOGGER.info("END");
    }

    public static void displayCountry() {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

        Country us = context.getBean("countryUS", Country.class);
        Country de = context.getBean("countryDE", Country.class);
        Country in = context.getBean("countryIN", Country.class);
        Country jp = context.getBean("countryJP", Country.class);

        LOGGER.info("Country : {}", us.toString());
        LOGGER.info("Country : {}", de.toString());
        LOGGER.info("Country : {}", in.toString());
        LOGGER.info("Country : {}", jp.toString());
    }

}
