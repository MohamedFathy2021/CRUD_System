var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc");
var mainBtn = document.getElementById("mainBtn");

var productsContainer ;
if (localStorage.getItem("productsList") == null)
{
  productsContainer = [];
}
else
{
  productsContainer = JSON.parse(localStorage.getItem("productsList"));
  displayProducts()
}

function addProduct() {

  if (checkInputs() == true )
  {
    var product = {
      name: productName.value,
      price: productPrice.value,
      category: productCategory.value,
      desc:productDesc.value 
  }

  productsContainer.push(product);
  localStorage.setItem("productsList", JSON.stringify(productsContainer))
  displayProducts()

  clearForm()
  }
  else 
  {
    window.alert("Sorry All Fields are Required")
  }
    
}
function clearForm() {
     
  productName.value = "" ;
  productPrice.value = "" ;
  productCategory.value = "" ;
  productDesc.value = "" ;
}

function displayProducts() {

  var cartoona = `` ;
  for (var i=0 ; i<productsContainer.length ; i++){
    cartoona += 
    `<tr>
    <td>${i}</td>
    <td>${productsContainer[i].name}</td>
    <td>${productsContainer[i].price}</td>
    <td>${productsContainer[i].category}</td>
    <td>${productsContainer[i].desc}</td>
    <td><button onclick="changeFormForUpdate(`+i+`)" class=" btn btn-outline-warning">update</button></td>
    <td><button onclick="deleteProduct(`+i+`)" class=" btn btn-outline-danger">delete</button></td>

    </tr>`;
  }
  document.getElementById("tableBody").innerHTML = cartoona ;
}

function checkInputs() {
  if (productName.value !="" && productPrice.value!="" && productCategory.value !="" && productDesc.value !="")
  {
    return true ;
  }
  else
  {
    return false ;
  }
}
function deleteProduct(index)
{
  productsContainer.splice(index,1);
  localStorage.setItem("productsList", JSON.stringify(productsContainer));

  displayProducts();
}

function searchProduct(searchTerm)
{
  var cartoona = `` ;
for (var i=0 ; i<productsContainer.length ;i++)
{
  if(productsContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true)
  {
    cartoona +=  `<tr>
    <td>${i}</td>
    <td>${productsContainer[i].name}</td>
    <td>${productsContainer[i].price}</td>
    <td>${productsContainer[i].category}</td>
    <td>${productsContainer[i].desc}</td>
    <td><button class=" btn btn-outline-warning">update</button></td>
    <td><button onclick="deleteProduct(`+i+`)" class=" btn btn-outline-danger">delete</button></td>
    </tr>`;
  }
  else
  {
    console.log("m4 Mawgod")
  }
}
document.getElementById("tableBody").innerHTML = cartoona ;
}

function changeFormForUpdate(productIndex)
{
  productName.value = productsContainer[productIndex].name;
  productPrice.value = productsContainer[productIndex].price;
  productCategory.value = productsContainer[productIndex].category;
  productDesc.value = productsContainer[productIndex].desc;

  mainBtn.innerHTML = "update" ;
}