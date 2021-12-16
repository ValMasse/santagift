package com.m2iformation.repositories;

import com.m2iformation.entities.Gift;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GiftRepository extends MongoRepository<Gift, String> {
}
