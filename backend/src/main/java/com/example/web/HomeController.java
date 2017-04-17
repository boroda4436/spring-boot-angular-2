package com.example.web;

import com.example.domain.TemperatureData;
import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.time.LocalDateTime;

/**
 * Created by Bohdan on 11.04.2017
 */
@RestController
public class HomeController {

    @RequestMapping(value = "/temperature", method = RequestMethod.GET)
    public TemperatureData getTemperature(HttpServletResponse response){

        response.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
        TemperatureData data = new TemperatureData();
        data.setCounter("First counter");
        data.setDateTime(LocalDateTime.now());
        data.setValue(23.5);
        return data;
    }
}
