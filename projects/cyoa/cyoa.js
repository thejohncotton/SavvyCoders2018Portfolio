// var response = prompt("You walk into a room with a chair and a window. Type 'sit' to sit in the chair, type 'gaze' to gaze wistfully out the window and sigh");

// if(response === "sit"){
//     response = prompt("There is a newspaper. Type 'read' to browse, type 'burn' to set on fire");
// } else if (response === "gaze") {
//     alert("The sun burns your retinas and you are now blind.");
// } else {
//     alert("Please type in a valid input! Refresh the page to try again.");
// }
// // handle 'read' and 'burn'

// if(response === 'burn'){
//     alert('the roof is on fire')
// } else if (response === 'read'){
// alert('a well infromed citizen')

// } else {
//     alert("Please type in a valid input! Refresh the page to try again.");
// }
export default function cyoa(){
var response = prompt("You walk into a meadow with an apple tree and a swing. Type 'get' to pick an apple, type 'swing' to swing from the tree");

if(response === "get"){
    response = prompt("There's a tree. Type 'peel' to peel an apple, type 'munch' to eat the apple");
} else if (response === "swing") {
    alert("Now you are going to starve."); 
} else 
    alert("Now you have a tummy ache.");
//handle "peel" and "munch"

if(response === "peel"){
    alert("The apple is ripe")
} else if (response === "munch") {
    alert("You are no longer hungry")
}

}

    