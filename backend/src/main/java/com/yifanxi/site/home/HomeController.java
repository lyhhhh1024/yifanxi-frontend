package com.yifanxi.site.home;

import com.yifanxi.site.home.HomeModels.HomeData;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HomeController {
    private final HomeService homeService;

    public HomeController(HomeService homeService) {
        this.homeService = homeService;
    }

    @GetMapping("/home")
    public HomeData home() {
        return homeService.getHomeData();
    }

    @GetMapping("/health")
    public String health() {
        return "ok";
    }
}
