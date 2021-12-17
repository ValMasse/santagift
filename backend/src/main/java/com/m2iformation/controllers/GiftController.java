package com.m2iformation.controllers;

import com.m2iformation.entities.Gift;
import com.m2iformation.services.GiftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("gifts")
public class GiftController {

    @Autowired
    GiftService service;

    @GetMapping("")
    public List<Gift> findAll(){
        return this.service.findAll();
    }

    @PostMapping("")
    public Gift save(@RequestBody Gift cadeau){
        return this.service.save(cadeau);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable String id){
        this.service.deleteById(id);
    }
}
