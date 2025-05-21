function nota1(){
    let nota1 = Number (document.getElementById("nota1").value)
    let peso1 = Number (document.getElementById("peso1").value)
    let tagresultado1 = document.getElementById ("resultado")

    tagresultado1.innerText = "Resultado: " + (nota1 + peso1) 
    }
    
function nota2(){   
    let nota2 = Number (document.getElementById("nota2").value)
    let peso2 = Number (document.getElementById("peso2").value)
    let tagresultado2 = document.getElementById("resultado")

    tagresultado2.innerText = "Resultado: " + (nota2 + peso2) 

    }

    function nota3(){
        let nota3 = Number (document.getElementById("nota3").value)
        let peso3 = Number (document.getElementById("peso3").value)
        let tagresultado3 = document.getElementById ("resultado")
    
        tagresultado3.innerText = "Resultado: " + (nota3 + peso3) 
        }
        
    function nota4(){   
        let nota4 = Number (document.getElementById("nota4").value)
        let peso4 = Number (document.getElementById("peso4").value)
        let tagresultado4 = document.getElementById("resultado")
    
        tagresultado4.innerText = "Resultado: " + (nota4+ peso4) 
    
        }

        function somatotal(){
            let somatotal = Number (document.getElementById("somatotal").value)
            let tagresultadototal = document.getElementById ("resultadototal"). value

            tagresultadototal = (nota1 + peso1) + (nota2)


        }
    



    
    