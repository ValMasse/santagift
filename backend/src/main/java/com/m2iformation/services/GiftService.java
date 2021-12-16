package com.m2iformation.services;

import com.m2iformation.entities.Gift;
import com.m2iformation.repositories.GiftRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GiftService extends CRUDService<Gift> {

    @Autowired
    GiftRepository repo;
}
