// $(document).ready(() => {
//   $("#searchForm").on('submit', (e) => {
//     e.preventDefault();
//     let searchText = $("#searchText").val();
//     getBooks(searchText);
//   });
// });

// function getBooks(searchText){

  function bookSearch() {
    console.log("this function runs");

    var search = document.getElementById("search").value;
    document.getElementById("books").innerHTML = "";
    
    console.log(search);


  $.ajax({

    url: "https://www.googleapis.com/books/v1/volumes?q=" + search,        
    dataType: "json",
    success: function(data) {

        for (var i = 0; i < 12; i++) {

          
            books.innerHTML +="<div class='col-md-3'>" + "<div class='well text-center'>" + "<img src=" + data.items[i].volumeInfo.imageLinks.thumbnail +">" + "<a href='match.html'>" + "<h4>" + data.items[i].volumeInfo.title + "</h4>" + "</a>" ;
          
            // books.innerHTML += "<h3> By " + data.items[i].volumeInfo.authors + "</h3>";
            // books.innerHTML += "<h3> Description </h3>" + data.items[i].volumeInfo.description + "<br>";
            // books.innerHTML += "<img src=" + data.items[i].volumeInfo.imageLinks.thumbnail +">";
            books.innerHTML += "</div>" + "</div>";
        }
        
    },
    type: "GET"
});
}

document.getElementById("button").addEventListener("click", bookSearch, false);


  //make request to api using axios
  // Make a request for a user with a given ID
  // axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchText)
  //   .then(function (response) {
  //     let books = response.data.items.volumeInfo;
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

// function getBook(){
//   let bookId = sessionStorage.getItem('bookId');
//   // Make a request for a user with a given ID
//   axios.get("https://api.themoviedb.org/3/movie/" + bookId + "?api_key=98325a9d3ed3ec225e41ccc4d360c817")
//     .then(function (response) {
//     let book = response.data;
//     //console.log(movie);
//     let output = `
//         <div class="row">
//           <div class="col-md-4">
//             <img src="https://image.tmdb.org/t/p/w500${book.poster_path}" class="thumbnail">
//           </div>
//           <div class="col-md-8">
//             <h2>${book.title}</h2>
//             <ul class="list-group">
              
//               <li class="list-group-item"><strong>Released:</strong> ${book.release_date}</li>
//               <li class="list-group-item"><strong>Rated:</strong> ${book.vote_average}</li>
//               <li class="list-group-item"><strong>Runtime:</strong> ${book.runtime} min.</li>
            
//             </ul>
//           </div>
//         </div>
//         <div class="row">
//           <div class="well">
//             <h3>Plot</h3>
//             ${book.overview}
//             <hr>
//             <a href="http://imdb.com/title/${book.imdb_id}" target="_blank" class="btn btn-primary">View IMDB</a>
//             <a href="index.html" class="btn btn-default">Go Back To Search</a>
//           </div>
//         </div>
//     `;
//     $('#book').html(output);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }