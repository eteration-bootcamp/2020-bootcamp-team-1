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
@RequestMapping("api/recipes/")
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
    @GetMapping("{id}")
    public ResponseEntity<RecipeResponse> getRecipe(@PathVariable(name = "id") long id) {
        try {
            RecipeResponse res = new RecipeResponse();
            res.setRecipeDto(recipeService.getRecipe(id));
            return ResponseEntity.ok(res);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
    }
    @PostMapping
    public ResponseEntity<RecipeResponse> addRecipe(@RequestBody RecipeRequest req) {
        try {
            RecipeResponse res = new RecipeResponse();
            res.setRecipeDto(recipeService.addRecipe(req.getRecipeDto()));
            return ResponseEntity.ok(res);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @DeleteMapping("{id}")
    public ResponseEntity deleteRecipe(@PathVariable(name = "id") long id) {
        try {
            recipeService.removeRecipe(id);
            return ResponseEntity.ok(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
    @GetMapping("/user/{userId}")
    public ResponseEntity<RecipeListResponse> getRecipesByUserId(@PathVariable(name = "userId") long userId) {
        try {
            RecipeListResponse res = new RecipeListResponse();
            res.setRecipeList(recipeService.getListByUserId(userId));
            return ResponseEntity.ok(res);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }
}