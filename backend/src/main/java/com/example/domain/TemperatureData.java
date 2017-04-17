package com.example.domain;

import lombok.Data;

import java.time.LocalDateTime;

/**
 * Created by Bohdan on 17.04.2017
 */
@Data
public class TemperatureData {
    private String counter;
    private double value;
    private LocalDateTime dateTime;
}
