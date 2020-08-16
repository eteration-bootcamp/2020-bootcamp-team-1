package com.eteration.foodstuff.service;

import com.eteration.foodstuff.dto.DirectionDto;
import com.eteration.foodstuff.mapper.DirectionMapper;
import com.eteration.foodstuff.repository.DirectionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DirectionServiceImpl implements DirectionService {

    private  final DirectionRepository directionRepository;
    private final DirectionMapper directionMapper;
    @Override
    public List<DirectionDto> getListByRecipeId(long recipeId) {
        return directionMapper.toDirectionDtoList(directionRepository.findAllByRecipeId(recipeId));
    }
}
