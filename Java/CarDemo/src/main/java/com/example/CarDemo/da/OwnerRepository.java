package com.example.CarDemo.da;

import org.springframework.data.repository.CrudRepository;
import com.example.CarDemo.domain.Owner;

public interface OwnerRepository extends CrudRepository<Owner, Long> 
{

}
