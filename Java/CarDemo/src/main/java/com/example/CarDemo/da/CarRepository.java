package com.example.CarDemo.da;
import com.example.CarDemo.domain.Car;

//this is the basic definition of List. List is like an array with more functions
import java.util.List;

//first option - CrudRepository
//import org.springframework.data.repository.CrudRepository;

//Second option - PagingAndSortingRepository
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.jpa.repository.Query;

//first option - CrudRepository
//public interface CarRepository extends CrudRepository<Car, Long> {

//Second Option PagingAndSortingRepository - a repository based on CrudRepository 
// that includes more methods like FindAll and lazy loading
public interface CarRepository extends PagingAndSortingRepository<Car, Long> {
	//Query Creation from Method Name:
	
	// - fetch cars by brand using the property 'brand' of Car -
	// note that String is a class in java - an array of character
//	List<Car> FindByBrand(String brand);
	
	// - fetch cars by color using the property 'color' of Car
//	List<Car> FindByColor(String color);

	// - fetch cars by year using the property 'year' of Car
	// int is a primitive variable type
//	List<Car> FindByYear(int year);
	
	//There can be multiple fields after the By keyword, connected with the 'And' or 'Or' keywords:
	// Fetch cars by brand AND model
	List<Car> findByBrandAndModel(String brand, String model);

	// Fetch cars by brand Or color
	List<Car> findByBrandOrColor(String brand, String color);
	
	//Queries can be sorted by using the OrderBy keyword in the query method:
	// Fetch cars by brand and sort by year
	List<Car> findByBrandOrderByYearAsc(String brand);
	
	//See Supported keywords inside method names:
	//https://docs.spring.io/spring-data/data-jpa/docs/current/reference/html/#jpa.query-methods.query-creation
	
	//You can also create queries by using SQL statements, via the @Query annotation. 
	// Fetch cars by brand using an SQL statement. ?1 = is the first parameter, c is a line in table Car
	// writing pure SQL will not work. it a special format called JPQL (Java Persistent Quarry Language) 
	// for object oriented explained here: 
	// https://docs.spring.io/spring-data/data-jpa/docs/current/reference/html/#jpa.query-methods.at-query
	// More on JPQL
	// See: https://thoughts-on-java.org/jpql/
	// And: https://www.objectdb.com/java/jpa/query/jpql/structure

	@Query("select c from Car c where c.brand = ?1")
	List<Car> findByBrand2(String brand);
	
	//We can use regular SQL by using Native Queries
	// The @Query annotation allows for running native queries by setting the 
	// nativeQuery flag to true, as shown in the following example:
	@Query(value = "SELECT * FROM CAR WHERE Car.brand = ?1", nativeQuery = true)
	List<Car> findByBrand3(String brand);

}
