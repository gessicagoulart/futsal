package com.gess.futsal.controller;

import com.gess.futsal.entity.Profile;
import com.gess.futsal.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ProfileController {

    @Autowired
    private ProfileService service;

    @PostMapping("/addProfile")
    public Profile addProfile(@RequestBody Profile profile){
        return service.saveProfile(profile);
    }

    @PostMapping("/addProfiles")
    public List<Profile> addProfiles(@RequestBody List<Profile> profiles){
        return service.saveProfiles(profiles);
    }

    @GetMapping("/profiles")
    public List<Profile> findAllProfiles(){
        return service.getProfiles();
    }

    @GetMapping("/profileid/{id}")
    public Profile findProfileById(@PathVariable int id){
        return service.getProfileById(id);
    }

    @GetMapping("/profile/{name}")
    public Profile findProfileByName(@PathVariable String name){
        return service.getProfileByName(name);
    }

    @PutMapping("/update")
    public Profile updateProfile(@RequestBody Profile profile){
        return service.updateProfile(profile);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteProfile(@PathVariable int id){
        return service.deleteProfile(id);
    }
    
}
