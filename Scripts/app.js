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
    //console.log("%cDeclaring Variables", "color: red;")
    let largeButton;

    let largeButtonParent;
    let h3AboutMe;

    let firstParagraph;

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {  
        /**
         * PART 1
         */

        // 1.a) Replacing the large button's text
        largeButton = document.getElementById("largeButton");
        largeButton.textContent = "Learn More";

        // 1.b) Inserting an about me h3 tag before the large button       
        largeButtonParent = largeButton.parentNode; 
        h3AboutMe = document.createElement("h3");
        h3AboutMe.textContent = "Name: [Spence McComb] [100426427]";
        largeButtonParent.insertBefore(h3AboutMe, largeButton);

        // 1.c) Replacing the first paragraph's text with the provided snippet
        firstParagraph = document.getElementById("firstParagraph");
        firstParagraph.textContent = 
        "JavaScript is a prototype-based language, and every object in JavaScript has a hidden internal property called Prototype that can be used to extend object properties and methods.";
        console.log(firstParagraph.textContent);

        // 1.d) Hiding the first paragraph
        firstParagraph.hidden = true;


        /**
         * PART 2
         */

        // 2.a)b)c) Toggling the large button's text and the associated paragraph's visibility
        largeButton.addEventListener("click", function(){
            if (largeButton.textContent === "Learn More") {
                largeButton.textContent = "Hide Details";
                firstParagraph.hidden = false;
            }
            else if (largeButton.textContent === "Hide Details") {
                largeButton.textContent = "Learn More";
                firstParagraph.hidden = true;
            }
        });



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
