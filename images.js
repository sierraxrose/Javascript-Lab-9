$(document).ready(function () {
    $("button").click(runLoops);
});

function runLoops() {
    // Clear out all existing images from divs
    $("div.imageHolder").empty();

    // Get the number from the box
    let num = parseInt($("input#numPics").val());

    // Print the desired number of images for each loop
    $("span#while-num").text(num + 1);
    $("span#do-while-num").text(num - 1);
    $("span#for-num").text(num);


     //Create a while loop that runs "num + 1" times.

     while (num < 6) {
         num++;
         addImageToDiv("#while-loop");
     }

     //The body of the loop should contain the statement:
        //addImageToDiv("#while-loop");


     //Create a do-while loop that runs "num - 1" times.

    do {
        num--;
       addImageToDiv("#do-while-loop");
    } while (num);

     //The body of the loop should contain the statement:
        //addImageToDiv("#do-while-loop");


     //Create a for loop that runs exactly "num" times.

    for (num < 6; num >= 1;) {
        addImageToDiv("#for-loop");
    }

     //The body of the loop should contain the statement:
        //addImageToDiv("#for-loop");

}

function addImageToDiv(divId) {
    let fileName = $(":radio[name='pictureSelect']:checked").val();
    // Create a new image element
    let imageElement = $("<img>");
    // Set its source attribute
    imageElement.attr("src", `img/${fileName}`);
    // Add it as a child of another element
    $(divId).append(imageElement);
}