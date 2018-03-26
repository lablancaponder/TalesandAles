
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
            <a onclick="bookSelected('${book.id}')" href="#"><img src="${book.volumeInfo.imageLinks.thumbnail}"></a>
                <h5>${book.volumeInfo.title}</h5>
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
    <a href="https://books.google.com/books?id=${bookId}" target="_blank" class="btn btn-warning">View Google Page</a>&nbsp; &nbsp; &nbsp;
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



function getDrink() {
 
  axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php?/")
  

.then(function (response) {
  console.log(response);
  let drinks = response.data.drinks;
  let output = '';
  $.each(drinks, (index, drink) => {
    output+=`


  
  <div class="row">
  <div class="col-md-4">
  <img src="${drink.strDrinkThumb}">\
  </div>

  <div class="col-md-8">
  <center>
  <h2 class="text-center"> Your Recommended Drink</h2>
  <hr>
  

  <h5>${drink.strDrink}</h5>
  <br>
 
  <br>
  ${drink.strInstructions}
 
</center>
  </div>
  
  </div>
  `;


  $("#drink").html(output);

})
.catch(function (err) {
  console.log(err);
});
});
};