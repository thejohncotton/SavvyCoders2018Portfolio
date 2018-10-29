        var name = prompt('What is your name?')

        var checkName = function(){
            if (name === ""){
                name = prompt('For real, what is your name?')
                checkName()
                } else if (name === null){
                
                }
                
            } 
        
        


        checkName();
        if (name === null){
            name = "friend"
        }
        alert('There is a ghost behind you, ' + name)