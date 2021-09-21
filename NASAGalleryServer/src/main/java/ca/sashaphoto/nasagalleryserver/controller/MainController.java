package ca.sashaphoto.nasagalleryserver.controller;

import ca.sashaphoto.nasagalleryserver.dto.PostDTO;
import ca.sashaphoto.nasagalleryserver.dto.UserDTO;
import ca.sashaphoto.nasagalleryserver.pojo.UserPojo;
import ca.sashaphoto.nasagalleryserver.service.MainService;
import ca.sashaphoto.nasagalleryserver.util.RandomNames;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashSet;
import java.util.Set;

@RestController
@CrossOrigin
public class MainController {
    @Autowired
    MainService mainService;

    RandomNames r = new RandomNames();

    @PostMapping("/users/")
    public void postUser(@RequestBody UserPojo pojo) {
        mainService.createUser(pojo.name != null && pojo.name.length() > 3 ? pojo.name : r.nextName(), pojo.APIKey);
    }

    @GetMapping("/users/{userID}/")
    public UserDTO getUser(@PathVariable String userID) {
        return new UserDTO(mainService.getUserByID(userID));
    }

    @GetMapping("/users/{userID}/likes/")
    public boolean userLikedPost(@RequestParam  String postID, @PathVariable String userID){
        try {
            return mainService.userLikedPost(postID, userID);
        }catch(Exception ignored){
            return false;
        }
    }


    @GetMapping("/posts/{postID}/likes/users/")
    public Set<String> likersOfPost(@PathVariable String postID){
        Set<String> out = new HashSet<>();
        var likers = mainService.getLikersOfPost(postID);
        likers.forEach((liker) -> {
            out.add(liker.name);
        });
        return out;
    }

    @GetMapping("/posts/{postID}/likes/")
    public int likesOfPost(@PathVariable String postID){
        return mainService.getLikesOfPost(postID);
    }

    @GetMapping("/posts/{postID}/")
    public PostDTO getPost(@PathVariable String postID){
        return new PostDTO(mainService.getPost(postID));
    }

    @PostMapping("/posts/{postID}/likes/")
    public void likePost(@PathVariable String postID, @RequestParam String userID) {
        mainService.likePost(postID,userID);
    }


}
