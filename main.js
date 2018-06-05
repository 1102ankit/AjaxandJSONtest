var pageCounter = 1;
var animal = document.getElementById("animal-info");
var btn = document.getElementById("btn");

window.onload = function (){
btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-' + pageCounter+'.json');
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
};

ourRequest.onerror = function (){
console.log("connection error");
};
ourRequest.send();
pageCounter++;
if(pageCounter > 3){
    btn.classList.add('hide-me');
}
});

function renderHTML(data){
    var htmlstring = "";

    for (i=0; i <data.length; i++ ){
        htmlstring += '<p>'+ data[i].name + "is a"+data[i].species + 'that likes to eat';
        for(ii = 0; ii< data[i].food.likes.length; ii++){
           if(ii == 0){
            htmlstring += data[i].food.likes[ii];
           }
           else {
            htmlstring += " and "  + data[i].food.likes[ii];
           }
        }

        htmlstring += 'and dislikes';

        for(ii = 0; ii< data[i].food.dislikes.length; ii++){
            if(ii == 0){
             htmlstring += data[i].food.dislikes[ii];
            }
            else {
             htmlstring += " and "  + data[i].food.dislikes[ii];
            }
         }

        htmlstring += '</p>'
    }

    animal.insertAdjacentHTML('beforeend', htmlstring);
    animal
};
};

