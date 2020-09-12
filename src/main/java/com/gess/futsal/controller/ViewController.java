package com.gess.futsal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {


    @GetMapping("/index")
    public String showIndex() {
        return "index";
    }

    @GetMapping("/forms")
    public String showForm(){
        return "forms";
    }

    @GetMapping("style.css")
    public String showCss(){
        return "index";
    }
}
