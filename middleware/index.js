// all middleware goes here 
var Campground    = require("../models/campgrounds");
var Comment       = require("../models/comments");
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership=function(req,res,next){
    
    if(req.isAuthenticated()){
        Campground.findById(req.params.id,function(err,campground){
       if(err){
           console.log(err);
           req.flash("error","Something went wrong , Please try later");
           res.redirect("back");
       } else {
           if(campground.author.id.equals(req.user._id)){
               next();          
           } else {
               res.flash("error","You don't have permissions to do this");
           }
       }
    });
    } else {
            req.flash("error","You need to be logged in to do that");
            res.redirect("/login");
    }
    
};

middlewareObj.checkCommentOwnership=function(req,res,next){
    
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id,function(err,comment){
           if(err){
                req.flash("error","You need to Login to do that");
                res.redirect("/login");
           } else {
               if(comment.author.id.equals(req.user._id)){
                   next();
               } else {
                   res.redirect("back");
               }
           }
        });
    } else {
            req.flash("error","You need to be logged in to do that");
            res.redirect("/login");
    }
    
};

middlewareObj.isLoggedIn=function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error","You need to be logged in to do that");
    res.redirect("/login");
}

module.exports=middlewareObj;