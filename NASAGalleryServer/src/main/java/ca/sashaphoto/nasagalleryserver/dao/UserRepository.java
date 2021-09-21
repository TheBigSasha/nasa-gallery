package ca.sashaphoto.nasagalleryserver.dao;

 import ca.sashaphoto.nasagalleryserver.model.Person;
 import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<Person, String> {
}
