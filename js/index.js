import Navigation from "~/components/Navigation"
import Header from "~/components/Header"
import Content from "~/components/Content"
import Footer from "~/components/Footer"
import Blog from "~/components/Blog"

var state = {
    Home : {
        title: "Welcome to John's Savvy Coders Portfolio",
        links: [`home`,`projects`,`blog`,`contact`]
    },
    Blog : {
        title: "Welcome to my blog!",
        links: [`home`,`projects`,`blog`,`contact`],
        content: Blog()

        },
    Projects : {
        title: "Welcome to my projects page!",
        links: [`home`,`projects`,`blog`,`contact`],
    },
    Contact : {
        title: "Welcome to my Contact Page!",
        links: [`home`,`projects`,`blog`,`contact`]
        }
}
function handleNavigation(event) {
    // pull the component name from the text in the anchor tag
    var component = event.target.textContent;
    event.preventDefault();
    // select a piece of the state tree by component
    render(state[component]);
  }


var root = document.querySelector("#root"); // this doesn't need to be queried every time we re-render
function render(state) {
    root.innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Content(state)}
        ${Footer(state)}
      `;
    

    
  }
  
render(state.Home)
   

// var firstName = prompt("Hi there! What's your first name?")
// var lastName = prompt("What's your last name?")
// var output = document.querySelector("#greeting")

//         function checkName(){
//             if (firstName && firstName != 'null' && lastName && lastName != 'null'){
//                 output.innerHTML = `<p>Thanks for visiting <span class="highlighted">${firstName} ${lastName}.</span></p>`
//             } else {
//                 firstName = prompt('For real, what is your first name?')
//                 lastName = prompt("For real, what's your last name?")
//                 checkName()
//             }
//         } 
        
//         checkName()
        
      
 