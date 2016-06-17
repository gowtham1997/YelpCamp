var express    = require('express'),
    router     = express.Router(),
    Campground = require('../models/campgrounds.js'),
    middleware = require('../middleware');

// Show all campgrounds
router.get("/",function(req, res) {
    Campground.find({}, function(err, campgrounds) {
        if (!err) {
            res.render("campgrounds/index", {
                campgrounds: campgrounds
            });
        }
        else console.log(err);
    });

});
// Create new Campground Form submission route
router.post("/",middleware.isLoggedIn,function(req, res) {
    var name   = req.body.name;
    var image  = req.body.image;
    var desc   = req.body.description;
    var author = {
                    id       :req.user._id,
                    username :req.user.username
                 };
    var newCampground = {
        name        : name,
        image       : image,
        description : desc,
        author      : author
    };
    Campground.create(newCampground, function(err, campground) {
        if (!err) res.redirect("/campgrounds");
        else console.log(err);
    });

});
// Create new Campground form
router.get("/new",middleware.isLoggedIn,function(req, res) {
    res.render("campgrounds/new");
});
// show Campground Route
router.get("/:id", function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function(err, campground) {
        if (!err) {
            res.render("campgrounds/show", {
                campground: campground 
            });
        }
        else console.log(err);
    });

});

//Edit Campground Route 
router.get("/:id/edit",middleware.checkCampgroundOwnership,function(req,res){
    Campground.findById(req.params.id,function(err,campground){
       if(err){
           console.log(err);
           res.redirect("/campgrounds");
       } else {
           res.render("campgrounds/edit",{campground:campground});
       }
    });
});

//Update Campground Route

router.put("/:id",middleware.checkCampgroundOwnership,function(req,res){
    var data={
                name        : req.body.name,
                image       : req.body.image,
                description : req.body.description
             };
    Campground.findByIdAndUpdate(req.params.id,data,function(err,campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/"+campground._id);
        }
    });
});

//Destroy Route

router.delete("/:id",middleware.checkCampgroundOwnership,function(req,res){
    Campground.findByIdAndRemove(req.params.id,function(err){
       if(err){
           console.log(err);
           res.redirect("/campgrounds");
       } 
       else{
           res.redirect("/campgrounds");
       }
    });
});

module.exports = router;