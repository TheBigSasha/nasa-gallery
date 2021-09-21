package ca.sashaphoto.nasagalleryserver.dao;

import ca.sashaphoto.nasagalleryserver.model.Post;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface PostRepository extends CrudRepository<Post, String> {
}
