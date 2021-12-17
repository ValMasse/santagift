package com.m2iformation.entities;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@Getter
@Setter
public class Gift {

    @Id
    private String id;
    private String name;
    private String urlImage;
}
