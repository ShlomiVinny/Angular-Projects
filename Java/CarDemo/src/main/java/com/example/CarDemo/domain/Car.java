package com.example.CarDemo.domain;


import java.util.Set;

import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Car {
    
    private long id;
    
    private Set<Trip> trips;
    
    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(name = "car_in_trip", joinColumns = @JoinColumn(name = "car_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "trip_id", referencedColumnName = "trip_id"))
    public Set<Trip> getTrips() {
	return trips;
	}

	public void setTrips(Set<Trip> trips) {
		this.trips = trips;
	}

	public Car() {}
    
    public Car( String brand, String model, String color, String registerNumber, int year, int price,
    		Owner owner, Set<Trip> trips ) {
		super();
		//this.id = id;
		this.brand = brand;
		this.model = model;
		this.color = color;
		this.registerNumber = registerNumber;
		this.year = year;
		this.price = price;
		this.owner=owner;
		this.trips=trips;
	}
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getRegisterNumber() {
		return registerNumber;
	}
	public void setRegisterNumber(String registerNumber) {
		this.registerNumber = registerNumber;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	private String brand, model, color, registerNumber;
    private int year, price;
    
    private Owner owner;

    //Getter and setter
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner")
    public Owner getOwner() {
      return owner;
    }

    public void setOwner(Owner owner) {
      this.owner = owner;
    }

  }


