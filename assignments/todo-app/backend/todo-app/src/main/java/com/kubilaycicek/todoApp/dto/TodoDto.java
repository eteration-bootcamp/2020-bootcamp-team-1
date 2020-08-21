package com.kubilaycicek.todoApp.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(value = "Todo Data Transfer Object")
public class TodoDto extends BaseDto {
    @ApiModelProperty(required = true,value = "Title")
    private String title;
    @ApiModelProperty(required = true,value = "isChecked")
    private boolean isChecked;
}
