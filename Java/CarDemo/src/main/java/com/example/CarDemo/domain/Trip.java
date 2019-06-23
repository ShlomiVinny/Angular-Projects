package com.example.CarDemo.domain;

	import java.util.Set;
	import javax.persistence.*;
	import javax.persistence.GeneratedValue;
	import javax.persistence.GenerationType;
	import javax.persistence.Id;

	@Entity
	public class Trip {

	  long trip_id;
	  String name;
	  
	  /*Set is another version of array or list. Cannot include double values*/
	  private Set<Car> cars;
	
	  /*creates a many to many connection to Car where there should be a variable 'trips'*/
	  @ManyToMany(mappedBy = "trips")
	  public Set<Car> getCars() {
			return cars;
	  }
	  public void setCars(Set<Car> cars) {
			this.cars = cars;
	  }
     
	  /* defines trip_id as the primary key. 
	   * The annotation can be added over the setter or over the variable*/
	  @Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	  public long getTrip_id() {
			return trip_id;
	  }
	  
	  public void setTrip_id(long trip_id) {
			this.trip_id = trip_id;
	  }
	  public String getName() {
			return name;
	  }
	  public void setName(String name) {
			this.name = name;
	  }
	  public Trip(String name, Set<Car> cars) {
			super();
			
			this.name = name;
			this.cars=cars;
	  }
	  public Trip(String name) {
			super();
			this.name = name;
	  }
	  public Trip() {}
}

