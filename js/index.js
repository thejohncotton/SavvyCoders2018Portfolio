import Navigation from "~/components/Navigation"
import Header from "~/components/Header"
import Content from "~/components/Content"
import Footer from "~/components/Footer"
document.querySelector('#root').innerHTML  = `
        ${Navigation}
        ${Header}
        ${Content}
        ${Footer}
        `

var firstName = prompt("Hi there! What's your first name?")
var lastName = prompt("What's your last name?")
var output = document.querySelector("#greeting")

        var checkName = function(){
            if (firstName && firstName != 'null' && lastName && lastName != 'null'){
                output.innerHTML = `<p>Thanks for visiting <span class="highlighted">${firstName} ${lastName}.</span></p>`
            } else {
                firstName = prompt('For real, what is your first name?')
                lastName = prompt("For real, what's your last name?")
                checkName()
            }
        } 
        
        checkName()
        
      
       
        // alert('There is a ghost behind you, ' + name)