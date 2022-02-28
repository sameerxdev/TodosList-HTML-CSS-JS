$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    event.stopPropagation();
})

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        var newLi = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> "+newLi+"</li>");
    }
})

$(".fa-plus-circle").click(function(){
    $("input[type='text']").fadeToggle();
})
