package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "suplementos", path = "suplementos")
public interface SuplementoRepository extends CrudRepository<Suplemento, Long> {
    
}
