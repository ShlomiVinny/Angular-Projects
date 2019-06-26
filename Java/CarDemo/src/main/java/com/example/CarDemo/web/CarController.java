package com.example.CarDemo.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.CarDemo.da.CarRepository;
import com.example.CarDemo.domain.Car;

@RestController
public class CarController {
	@Autowired
    private CarRepository carRepository;

	@RequestMapping("/cars")
    public Iterable<Car> getCars() {
		return carRepository.findAll();
    } 
}