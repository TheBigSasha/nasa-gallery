package ca.sashaphoto.nasagalleryserver.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Set;

@Entity
public class Post {
    @Id
    public String id;

    @ManyToMany
    public Set<Person> likers;
}
