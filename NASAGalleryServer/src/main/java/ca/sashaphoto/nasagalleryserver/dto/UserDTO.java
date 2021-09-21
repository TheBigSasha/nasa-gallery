package ca.sashaphoto.nasagalleryserver.dto;

import ca.sashaphoto.nasagalleryserver.model.Person;

public class UserDTO {
    public String name;
    public String id;

    public UserDTO(){

    }
    public UserDTO(Person st){
        this.name = st.name;
        this.id = st.id;
    }
}
