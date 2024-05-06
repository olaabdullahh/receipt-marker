
document.getElementById('Receipt').onclick = function () {
    let CustomerName = document.getElementById("CustomerName").value
    let ItemName = document.getElementById("ItemName").value
    let ItemQuantity = parseInt(document.getElementById("ItemQuantity").value)
    let ItemUnitPrice = parseInt(document.getElementById("ItemUnitPrice").value)
    let OrderDate = document.getElementById("OrderDate").value
    let TotalPrice = (ItemQuantity * ItemUnitPrice)
    let TotalPriceTax = TotalPrice * (10/100)
    let TotalPriceTax1 = TotalPriceTax + TotalPrice


      let outputDiv =  document.getElementById("result")
      outputDiv.style.display = "block"
      let line1 = document.createElement('div')

      line1.style.lineHeight = "50px" ;


      line1.innerHTML = `<h2>Receipt</h2>` + `<strong> Customer Name: </strong>`+ `<span class= "m"> ` + CustomerName + `</span>` + `<br>` +
      `<strong> Item Name: </strong>`+ `<span class= "m"> ` + ItemName + `</span>` + `<br>` +
      `<strong> Item Unit Price: </strong>`+ `<span class= "m"> ` + ItemUnitPrice + `</span>` + `<br>` + 
      `<strong> Item Quantity: </strong>`+ `<span class= "m"> ` + ItemQuantity + `</span>` + `<br>` + 
      `<strong> Order Date: </strong>`+ `<span class= "m"> ` + OrderDate + `</span>` + `<br>` +  
      `<strong> Total Price: </strong>`+ `<span class= "m"> ` + TotalPrice + `</span>` + `<br>` +
      `<strong> Total Price Tax1: </strong>`+ `<span class= "m"> ` + TotalPriceTax1 + `</span>` + `<br>`
      outputDiv.innerHTML = ""
      outputDiv.appendChild(line1);


}



    //document.getElementById("result").innerHTML = taxes
