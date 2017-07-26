$("h1").css("text-align", "center").css("color", "CadetBlue").css("font-family", "Georgia").css("font-style", "italic").text("Brand New Heading");

$("p").css("font-family", "Verdana");

$("#change").css("text-align", "center").fadeOut("slow").css("color", "#d37268").css("font-weight", "bold").css("font-size", "2em").text("Disappear! Disappear!");

$("#hide").css("text-align", "center").text("Going Up!").css("font-weight", "bolder").css("color", "#ecdc81").css("font-size", "1.1em");

$(".bigger").animate({'font-size': '150%'}).css("font-family", "Verdana").css("color", "#ad789c");

$("#small").text("I was small...").css("margin", "0 0 0 375px");

$("#large").text("But now I'm big!").css("font-weight", "bold").css("margin", "0 0 0 700px");

$("ul li").prepend("See ").css("font-style", "italic");

$("ol li").append(" is here").css("font-style", "oblique");

$("li").css("color", "#8ceaec").css("font-weight", "bold").css("font-size", "1.25em");

$("ol").prepend("<h3>Best Of</h3>").css("padding", "0px 250px 5px 250px").css("text-align", "center").css("margin", "0px 300px 0px 300px").css("border", "2px dashed #639eb7").css("color", "#639eb7");

$("ul").prepend("<h3>Favorites</h3>").css("padding", "0px 110px 5px 110px").css("text-align", "center").css("margin", "25px 450px 25px 450px").css("border", "2px dashed #639eb7").css("color", "#639eb7");
