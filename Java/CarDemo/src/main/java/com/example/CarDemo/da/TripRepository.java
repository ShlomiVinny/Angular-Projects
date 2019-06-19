package com.example.CarDemo.da;

import org.springframework.data.repository.CrudRepository;

import com.example.CarDemo.domain.Trip;

public interface TripRepository extends CrudRepository<Trip, Long> {

}
