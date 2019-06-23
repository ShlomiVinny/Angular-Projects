package com.example.CarDemo;

import java.util.HashSet;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.CarDemo.da.CarRepository;
import com.example.CarDemo.da.OwnerRepository;
import com.example.CarDemo.da.TripRepository;
import com.example.CarDemo.domain.Car;
import com.example.CarDemo.domain.Owner;
import com.example.CarDemo.domain.Trip;

@SpringBootApplication
public class CarDemoApplication {
	
  /*@Autowired - creates injectable, no need to define a class or create a named variable*/
  @Autowired 
  private CarRepository repositoryCar;
  
  @Autowired 
  private OwnerRepository repositoryOwner;
  
  @Autowired 
  private TripRepository repositoryTrip;

  private static final Logger logger = LoggerFactory.getLogger(CarDemoApplication.class);

  /*'main' is the first thing that happens. That is where the App is run,
    Classes are defined, DB is created etc.*/
  public static void main(String[] args) {
    SpringApplication.run(CarDemoApplication.class, args);    
    
    logger.info("Hello Class");
  }
  
  
  /* @Bean is used to simulate user input into command line interface.
     In this case we use it to input data into the tables we defined */
  @Bean
  CommandLineRunner runner(){
    return args -> {
      /*Define Owner*/
    	Owner owner1 = new Owner("Jason", "Ford");
    	Owner owner2 = new Owner("Mary", "Smith");
      /*persist (save) the owners info into the DB using the Owners we already created. 
        Note, these owners have no cars defined since we used the constructor without cars.
        defining multiple constructors with the same name and different composition is allowed
        and called 'Overloading'*/
    	repositoryOwner.save(owner1);
    	repositoryOwner.save(owner2);
    	
    	//Add trip objects
        Trip trip1 = new Trip("Trip A");
        Trip trip2 = new Trip("Trip B");
        repositoryTrip.save(trip1);
        repositoryTrip.save(trip2);

        // Add Sets of trips so we can add them to the Car.
        Set<Trip> trips1= new HashSet<Trip>();
        trips1.add(trip1);
        trips1.add(trip2);
        
        Set<Trip> trips2= new HashSet<Trip>();
        trips2.add(trip1);
        
        Set<Trip> trips3= new HashSet<Trip>();
        trips3.add(trip2);

      /*Save demo data for cars into database using a command line runner that behaves as if it was a user entering data 
    	using 'save' that is defined in CrudRepository*/
    	repositoryCar.save(new Car("Ford", "Mustang", "Red", "ADF-1121", 2017, 59000, owner1, trips1));
    	repositoryCar.save(new Car("Nissan", "Leaf", "White", "SSJ-3002", 2014, 29000, owner2, trips2));    
    	repositoryCar.save(new Car("Toyota", "Prius", "Silver", "KKO-0212", 2018, 39000, owner1, trips3));
    };
  } 

}

