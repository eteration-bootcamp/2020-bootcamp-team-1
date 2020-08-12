package com.eteration.FoodStuff.dto;

import lombok.*;

import javax.persistence.Lob;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DirectionDto extends  BaseDto {
    private byte stepNumber;
    @Lob
    private String description;
}