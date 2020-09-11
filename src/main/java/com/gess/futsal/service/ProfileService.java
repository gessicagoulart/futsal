package com.gess.futsal.service;

import com.gess.futsal.entity.Profile;
import com.gess.futsal.repository.ProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepo repo;

    public Profile saveProfile(Profile profile) {
        return repo.save(profile);
    }

    public List<Profile> saveProfiles(List<Profile> profiles) {
        return repo.saveAll(profiles);
    }

    public List<Profile> getProfiles() {
        return repo.findAll();
    }

    public Profile getProfileById(int id) {
        return repo.findById(id).orElse(null);
    }

    public Profile getProfileByName(String name){
        return repo.findByName(name);
    }

    public String deleteProfile(int id){
         repo.deleteById(id);
         return "Product removed: " + id;
    }

    public Profile updateProfile(Profile profile){
       Profile existingProfile = repo.findById(profile.getId()).orElse(null);
        existingProfile.setAge(profile.getAge());
        existingProfile.setHeight(profile.getHeight());
        existingProfile.setAge(profile.getAge());
        existingProfile.setName(profile.getName());
        return repo.save(existingProfile);
    }
}
