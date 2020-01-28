/*
    Student Name  : Spence McComb
    StudentID     : 100426427
    Date Completed: 2020/01/28
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")
    let largeButton;

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
        largeButton = document.getElementById("largeButton");
        console.log(largeButton);
        largeButton.textContent = "Learn More";
        


        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {

    }



    window.addEventListener("load", Start);
})(app || (app = {}));

/**
         * git init
         * git add .
         * git commit -m "first commit"
         * git remote add origin https://github.com/SpenceMcComb/WEBD6201-04-Test-1.git
         * git push -u origin master
         */
