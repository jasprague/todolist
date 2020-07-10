 
//click on X to remove li from list

function removeFromList(){
    $("span").on("click", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
};

//toggle input box
$("span").show();
function showSpan(){
    $("span").on("hover", function(){
        $("span").toggle();
    });
}

//Check off TODOs by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//add "enter" key listener to text input
$("input").on("keypress",function(e) {
    var inputValue = $(this).val();
if(e.which === 13) {
    //retrieve value of text input
    $(this).val("")
    //append ul with text from input
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " +inputValue+ "</li");
}
removeFromList();
});

//click + to toggle text input box
$("#showInput").on("click", function(e){
    $("input").fadeToggle();
});
