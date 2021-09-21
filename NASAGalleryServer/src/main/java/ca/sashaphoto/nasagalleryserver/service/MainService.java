package ca.sashaphoto.nasagalleryserver.service;

import ca.sashaphoto.nasagalleryserver.dao.PostRepository;
import ca.sashaphoto.nasagalleryserver.dao.UserRepository;
import ca.sashaphoto.nasagalleryserver.model.Person;
import ca.sashaphoto.nasagalleryserver.model.Post;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@org.springframework.stereotype.Service
public class MainService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    PostRepository postRepository;

    public int getLikesOfPost(String postID){
        Optional<Post> p = postRepository.findById(postID);
        return p.map(post -> post.likers.size()).orElse(0);
    }

    public Set<Person> getLikersOfPost(String postID){
        Optional<Post> p = postRepository.findById(postID);
        if(p.isPresent()){
            return p.get().likers;
        }else{
            return new HashSet<>();
        }
    }

    public boolean userLikedPost(String postID, String userID){
        var u = userRepository.findById(userID);
        if(u.isEmpty()) throw new IllegalArgumentException("Not a valid user!");
        return getOrCreatePost(postID).likers.stream().anyMatch(person -> person.id.equals(userID));
    }

    private Post getOrCreatePost(String postID){
        var p = postRepository.findById(postID);
        Post post;
        if(p.isEmpty()){
            post = new Post();
            post.id = postID;
            post.likers = new HashSet<>();
            postRepository.save(post);
        }else{
            post = p.get();
        }
        return post;
    }

    public void likePost(String postID, String userID){
        var u = userRepository.findById(userID);
        if(u.isEmpty()) throw new IllegalArgumentException("Not a valid user!");
        Post post = getOrCreatePost(postID);
        int likesBefore = post.likers.size();

        Person person = u.get();
        if(!userLikedPost(postID, userID)) {
            post.likers.add(person);
            person.likedItems.add(post);
        }else{
            post.likers.remove(person);
            person.likedItems.remove(post);
        }

        postRepository.save(post);
        userRepository.save(person);

        assert post.likers.size() == likesBefore + 1;
    }

    public void createUser(String name, String ID){
        userRepository.save(new Person(name, ID));
    }

    public Post getPost(String ID){
        if(postRepository.findById(ID).isEmpty()){
            Post p = new Post();
            p.id = ID;
            p.likers = new HashSet<>();
            postRepository.save(p);
        }
        return postRepository.findById(ID).get();
    }

    public Person getUserByID(String ID){
        if(userRepository.findById(ID).isEmpty()) throw new IllegalArgumentException("No such user");
        return userRepository.findById(ID).get();
    }


}
