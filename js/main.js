
// function getBooks(searchText){

//   function bookSearch() {
//     console.log("this function runs");

//     var search = document.getElementById("search").value;
//     document.getElementById("books").innerHTML = "";
    
//     console.log(search);


//   $.ajax({

//     url: "https://www.googleapis.com/books/v1/volumes?q=" + search,        
//     dataType: "json",
//     success: function(data) {

//         for (var i = 0; i < 12; i++) {

          
//             books.innerHTML +="<div class='col-md-3'>" + "<div class='well text-center'>" + "<img src=" + data.items[i].volumeInfo.imageLinks.thumbnail +">" + "<a onclick='bookSelected(bookId)' href='#'>" + "<h5>" + data.items[i].volumeInfo.title + "</h5>" + "</a>" ;
          
//             // books.innerHTML += "<h3> By " + data.items[i].volumeInfo.authors + "</h3>";
//             // books.innerHTML += "<h3> Description </h3>" + data.items[i].volumeInfo.description + "<br>";
//             // books.innerHTML += "<img src=" + data.items[i].volumeInfo.imageLinks.thumbnail +">";
//             books.innerHTML += "</div>" + "</div>";
//         }
        
//     },
//     type: "GET"
// });
// }

// document.getElementById("button").addEventListener("click", bookSearch, false);

// function bookSelected(id) {
//   sessionStorage.setItem("bookId", id);
//   window.location = "book.html";
//   return false;
// }




// $("#book").click(function(e) {
//   e.preventDefault();
//   $.get("api/url", function(data) {
//     $("#resultDestination").html(data);
//     // here we have data and can put it into html
//   });
// });


  //make request to api using axios
  // Make a request for a user with a given ID
  // axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchText)
  //   .then(function (response) {
  //     let books = data.items.volumeInfo;
  //     let output = '';
  //     $.each(books, (index, book) => {
  //       output+=`
  //         <div class="col-md-3">
  //           <div class="well text-center">
  //             <img src="${books.imageLinks.thumbnail}">
  //             <h5>${books.title}</h5>
  //             <a onclick="bookSelected('${book.ISBN}')" class="btn btn-primary" href="#">Book Details</a>
  //           </div>
  //         </div>
  //       `;
  //     });
  //     $('#books').html(output);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
//     });
// }

// function bookSelected(id){
//   sessionStorage.setItem('bookId', id);
//   window.location = 'book.html';
//   return false;
// }



$(document).ready(() => {
  $("#searchForm").on('click', (e) => {
    e.preventDefault();
    let searchText = $("#searchText").val();
    getBooks(searchText);
  });
});

function getBooks(searchText){
  //make request to api using axios
  // Make a request for a user with a given ID
  axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchText)
    .then(function (response) {
      console.log(response);
      let books = response.data.items;
      let output = '';
      $.each(books, (index, book) => {
        output+=`

          <div class="col-md-3">
            <div class="well text-center">
                  <img src="${book.volumeInfo.imageLinks.thumbnail}">
                  <h5>${book.volumeInfo.title}</h5>
                  <a onclick="bookSelected('${book.id}')" class="btn btn-warning" href="#">BOOK DETAILS</a>
            </div>
          </div>

        `;
      });
      $('#books').html(output);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function bookSelected(id){
  sessionStorage.setItem('bookId', id);
  window.location = 'book.html';
  return false;
}

function getBook(){
  let bookId = sessionStorage.getItem('bookId');
  // Make a request for a user with a given ID
  axios.get("https://www.googleapis.com/books/v1/volumes/" + bookId)
  .then(function (response) {

  
    let book = response.data;

    console.log(book);
    
    let output =`
    <div class="row">

    <div class="col-md-4">
    <img src="${book.volumeInfo.imageLinks.small}">
    </div>
    <div class="col-md-8">

    <h2>${book.volumeInfo.title}</h2>
    <h4>Written by ${book.volumeInfo.authors}</h4>
    <hr>
    <h3>Description</h3><br>
   <div> ${book.volumeInfo.description} </div>
    <br><br>  
    <a href="https://books.google.com/books?id={bookId}" target="_blank" class="btn btn-warning">View Google Page</a>&nbsp; &nbsp; &nbsp;
    <a href="index.html" class="btn btn-default">Back To Search</a>     
    </div>
    </div>
 

    `;

    $("#book").html(output);
  })
  .catch(function (err) {
    console.log(err);
  });
};




function getDrinks() {
 
  
  
  let drinkoutput =`
  
  <div class="row">
  <h2 class="text-center"> Your Drink Options </h2>
  <hr>
  <div class="col-md-4" id="wine">

  </div>
  <div class="col-md-4" id="beer">
  
  </div>
  
  <div class="col-md-4" id="liquor">
  
  </div>

  </div>
  
  `;

  $("#drinks").html(drinkoutput);

}
// .catch(function (err) {
// console.log(err);

// })



