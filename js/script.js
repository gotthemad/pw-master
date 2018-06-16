'use strict';
document.addEventListener('DOMContentLoaded', function(event) {
    
let jsNoJsCollect = document.getElementsByClassName('no-js'),
    jsNoJs = jsNoJsCollect[0],

    navBtnCollect = document.getElementsByClassName('jsNavBtn'),
    navBtn = navBtnCollect[0],
//    navLinkCollect = document.getElementsByClassName('jsNavLink'),
    
    headingCollect = document.getElementsByClassName('jsHeading'),
    heading = headingCollect[0],
    
    fadeToBlackCollect = document.getElementsByClassName('jsFadeToBlack'),
    fadeToBlack = fadeToBlackCollect[0],
    
    isClicked = false,
    
    offerBtnCollect = document.getElementsByClassName('jsOffer'),
    offerBtn = offerBtnCollect[0],
    
    isOfferBtnClicked = false;
    
(function init(){
    
    jsCheck();
    navOnClick();
    selectCategory();
    
})()
    
function jsCheck() {
    jsNoJs.classList.add('js');
    jsNoJs.classList.remove('no-js');
}
function navOnClick(){
    navBtn.addEventListener('click', function(){
        if(isClicked === false) {
            
            heading.classList.add('jsHeading--active');
            fadeToBlack.classList.add('jsFadeToBlack--active');
            
            isClicked = true;
        } else {
            
            heading.classList.remove('jsHeading--active');
            fadeToBlack.classList.remove('jsFadeToBlack--active');

            isClicked = false; 
        } 
    })
}
// TABLE
var responseObject;   
function selectCategory(){
    offerBtn.addEventListener('click', function(e){
        var productCategory = e.target.value;
//        let categoryData = loadJSON(category);
        var xhr = new XMLHttpRequest();
//            responseObject;
        xhr.onload = function(){
            if(xhr.status === 200){
//                console.log(xhr.responseText);
                
                responseObject = JSON.parse(xhr.responseText);
                let products  = responseObject.products;
                console.log('prod: '+products);
                

                
//                let newContent = 'newContent: ';
//                let category = productCategory;
//                let cos = responseObject.products;
//                console.log('cos: '+cos);
                
//                for(let i = 0; i < responseObject.products.length; i++){
//                    newContent += "<div>";
//                    newContent += responseObject.products[i].Price;
//                    newContent += "</div>";
//                    console.log("price: "+responseObject.products[i].Price);
//                }
                
//                console.log('works: '+productCategory);
//                document.getElementById('showData').innerHTML = newContent;
                
                // EXTRACT VALUE FOR HTML HEADER. 
                  // ('Book ID', 'Book Name', 'Category' and 'Price')
                  var col = [];
                  for (var i = 0; i < responseObject.products.length; i++) {
                      for (var key in responseObject.products[i]) {
                          if (col.indexOf(key) === -1) {
                              col.push(key);
                          }
                      }
                  }

                  // CREATE DYNAMIC TABLE.
                  var table = document.createElement("table");

                  // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

                  var tr = table.insertRow(-1); // TABLE ROW.

                  for (var i = 0; i < col.length; i++) {
                      var th = document.createElement("th"); // TABLE HEADER.
                      th.innerHTML = col[i];
                      tr.appendChild(th);
                  }

                  // ADD JSON DATA TO THE TABLE AS ROWS.
                  for (var i = 0; i < responseObject.products.length; i++) {

                      tr = table.insertRow(-1);

                      for (var j = 0; j < col.length; j++) {
                          var tabCell = tr.insertCell(-1);
                          tabCell.innerHTML = responseObject.products[i][col[j]];
                      }
                  }

                  // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
                  var divContainer = document.getElementById("jsShowData");
                  divContainer.innerHTML = "";
                  divContainer.appendChild(table);
                
                }
            }
        
        xhr.open('GET', 'data/'+productCategory+'.json', true);
        xhr.send(null);
        }, false);
        
        }

        
//         function loadJSON(callback) {   
//
//    var xobj = new XMLHttpRequest();
//        xobj.overrideMimeType("application/json");
//    xobj.open('GET', 'data/'+category+'.json', true);
//    xobj.onreadystatechange = function () {
//          if (xobj.readyState == 4 && xobj.status == "200") {
//            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//            callback(xobj.responseText);
//          }
//    };
//    xobj.send(null);  
// }
             
//            switch(ev) {
//                case 'bottles':
//                    getJson(ev)
//                    console.log('bottles');
//                    break;
//                case 'jars':
//                    console.log('jars');
//                    break;
//                case 'caps':
//                    console.log('caps');
//                    break;
//                default:
//                    break;
//            }
            

    
    
    
    
//  function CreateTableFromJSON() {
//      var myBooks = [
//          {
//              "Book ID": "1",
//              "Book Name": "Computer Architecture",
//              "Category": "Computers",
//              "Price": "125.60"
//            },
//          {
//              "Book ID": "2",
//              "Book Name": "Asp.Net 4 Blue Book",
//              "Category": "Programming",
//              "Price": "56.00"
//            },
//          {
//              "Book ID": "3",
//              "Book Name": "Popular Science",
//              "Category": "Science",
//              "Price": "210.40"
//            }
//        ]
//
//      // EXTRACT VALUE FOR HTML HEADER. 
//      // ('Book ID', 'Book Name', 'Category' and 'Price')
//      var col = [];
//      for (var i = 0; i < myBooks.length; i++) {
//          for (var key in myBooks[i]) {
//              if (col.indexOf(key) === -1) {
//                  col.push(key);
//              }
//          }
//      }
//
//      // CREATE DYNAMIC TABLE.
//      var table = document.createElement("table");
//
//      // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
//
//      var tr = table.insertRow(-1); // TABLE ROW.
//
//      for (var i = 0; i < col.length; i++) {
//          var th = document.createElement("th"); // TABLE HEADER.
//          th.innerHTML = col[i];
//          tr.appendChild(th);
//      }
//
//      // ADD JSON DATA TO THE TABLE AS ROWS.
//      for (var i = 0; i < myBooks.length; i++) {
//
//          tr = table.insertRow(-1);
//
//          for (var j = 0; j < col.length; j++) {
//              var tabCell = tr.insertCell(-1);
//              tabCell.innerHTML = myBooks[i][col[j]];
//          }
//      }
//
//      // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
//      var divContainer = document.getElementById("showData");
//      divContainer.innerHTML = "";
//      divContainer.appendChild(table);
//  }
//script end    
});