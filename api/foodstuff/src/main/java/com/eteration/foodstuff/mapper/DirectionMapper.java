package com.eteration.foodstuff.mapper;

import com.eteration.foodstuff.dto.DirectionDto;
import com.eteration.foodstuff.model.Direction;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring")
public interface DirectionMapper {
    @Named("toDirection")
    Direction toDirection(DirectionDto directionDto);

    @Named("toDirectionDto")
    DirectionDto toDirectionDto(Direction direction);

    @IterableMapping(qualifiedByName = "toDirectionList")
    List<Direction> toDirectionList(List<DirectionDto> directionDtoList);

    @IterableMapping(qualifiedByName = "toDirectionDtoList")
    List<DirectionDto> toDirectionDtoList(List<Direction> directions);
}
