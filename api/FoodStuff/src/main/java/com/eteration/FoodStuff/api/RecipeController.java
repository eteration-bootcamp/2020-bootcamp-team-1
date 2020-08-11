package com.eteration.FoodStuff.api;

import com.eteration.FoodStuff.request.RecipeRequest;
import com.eteration.FoodStuff.response.RecipeListResponse;
import com.eteration.FoodStuff.response.RecipeResponse;
import com.eteration.FoodStuff.service.RecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/recipes/")
public class RecipeController {
    private final RecipeService recipeService;

    @GetMapping
    public ResponseEntity<RecipeListResponse> getRecipes() {
        try {
            RecipeListResponse res = new RecipeListResponse();
            res.setRecipeList(recipeService.getList());
            return ResponseEntity.ok(res);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping
    public ResponseEntity<RecipeResponse> addRecipe(@RequestBody RecipeRequest req) {
        try {
            RecipeResponse res = new RecipeResponse();
            System.out.println(req.getRecipeDto().toString());
            res.setRecipeDto(recipeService.addRecipe(req.getRecipeDto()));
            return ResponseEntity.ok(res);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}