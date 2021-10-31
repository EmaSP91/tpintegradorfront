// Función para borrar información del form
function deleteInfo(){

   document.getElementById("firstName").value = ""
   document.getElementById("lastName").value = ""
   document.getElementById("yourEmail").value = ""
   document.getElementById("firstName").value = ""
   document.getElementById("cantidad").value = ""
   document.getElementById("total").textContent = ""
}

//Función que muestra el precio total según la cantidad de tickets y la categoría seleccionada
function totalPagar(){
    var cantidadTickets = document.getElementById("cantidad") 
    var totalPrice = document.getElementById("total") 
    var cantidadPrecio = cantidadTickets.value * 2000
    
    
    
    var categoria = document.getElementById("categoria")


    if (categoria.value == "Vip"){
        
        var aumento = cantidadPrecio * 0.20
        var totalFinal = cantidadPrecio + aumento
        totalPrice.textContent =  totalFinal
    }else if(categoria.value == "Silver"){
        var aumento = cantidadPrecio * 0.50
        var totalFinal = cantidadPrecio + aumento
        totalPrice.textContent =  totalFinal

    }else if (categoria.value == "Gold"){
        var aumento = cantidadPrecio * 0.80
        var totalFinal = cantidadPrecio + aumento
        totalPrice.textContent = totalFinal
    }}
