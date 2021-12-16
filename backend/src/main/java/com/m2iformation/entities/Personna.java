package com.m2iformation.entities;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@Data
@Getter
@Setter
public class Personna {

    @Id
    private String firstName;
    private String lastname;
}
