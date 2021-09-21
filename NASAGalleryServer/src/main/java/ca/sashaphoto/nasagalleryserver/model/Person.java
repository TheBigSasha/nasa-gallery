package ca.sashaphoto.nasagalleryserver.model;

import ca.sashaphoto.nasagalleryserver.pojo.UserPojo;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Person {
    @Id
    public String id;

    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinTable(//https://stackabuse.com/a-guide-to-jpa-with-hibernate-relationship-mapping/
            name = "posts_users",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "post_id")
    )
    public Set<Post> likedItems;

    public String name;

    public Person(String name, String id) {
        this.name= name;
        this.id = id;
    }

    public Person() {

    }

    public Person(UserPojo pojo){
        this.name= pojo.name;
        this.id = pojo.APIKey;
    }
}
