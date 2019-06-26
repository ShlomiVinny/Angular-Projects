package com.example.CarDemo.domain;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Car {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private long id;
  
  private String brand, model, color, registerNumber;
  private int year, price;
  

  public Car() {}

  public Car(String brand, String model, String color, 
    String registerNumber, int year, int price, Owner owner, Set<Trip> trips) {
    super();
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.registerNumber = registerNumber;
    this.year = year;
    this.price = price;
    this.owner = owner;
    this.trips = trips;
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
  
  // Adding this variable is adding a Many to One connection from Car class (table) to Owner class (table)
  // The two annotations define the connection and the foreign key
  // important to do the parallel in the other class (table)
  // EAGER means get all owner list when getting the car
  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "owner")
  private Owner owner;
  
//Getter and setter
  public Owner getOwner() {
    return owner;
  }

  public void setOwner(Owner owner) {
    this.owner = owner;
  }

  /*Adding this many to many mapped to trip*/
  @ManyToMany(cascade = CascadeType.MERGE)
  /*defines the connecting table between Trip and Car including 
    the column names and what that column is connected to*/
  @JoinTable(name = "car_in_trip", joinColumns = @JoinColumn(name = "car_id", referencedColumnName = "id"), 
             inverseJoinColumns = @JoinColumn(name = "trip_id", referencedColumnName = "trip_id"))
  private Set<Trip> trips;
  
  public Set<Trip> getTrips() {
	return trips;
  }

  public void setTrips(Set<Trip> trips) {
		this.trips = trips;
  }

}
