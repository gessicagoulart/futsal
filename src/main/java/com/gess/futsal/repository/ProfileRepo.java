package com.gess.futsal.repository;

import com.gess.futsal.entity.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepo extends JpaRepository<Profile, Integer> {


    Profile findByName(String name);
}
