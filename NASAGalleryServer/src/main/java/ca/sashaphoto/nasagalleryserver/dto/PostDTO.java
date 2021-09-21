package ca.sashaphoto.nasagalleryserver.dto;

import ca.sashaphoto.nasagalleryserver.model.Post;

import java.util.HashSet;
import java.util.Set;

public class PostDTO {
    public String id;
    public Set<UserDTO> likers;
    public int likeCount;

    public PostDTO(){

    }

    public PostDTO(Post p){
        this.id = p.id;
        this.likers = new HashSet<UserDTO>();
        p.likers.forEach(u -> {
            this.likers.add(new UserDTO(u));
        });
        this.likeCount = p.likers.size();
    }
}
