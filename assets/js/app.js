const cl = console.log;

const addMovie = document.getElementById('addMovie');
const ourModal = document.getElementById('ourModal');
const backdrop = document.getElementById('backdrop');
const movieTitleControl = document.getElementById('movieTitleCtrl');
const imgUrlControl = document.getElementById('imgUrlCtrl');
const ratingControl = document.getElementById('ratingCtrl');
const closeBtn = [...document.querySelectorAll('.closeBtn')];
const movieCardContainer = document.getElementById('movieCardContainer');
const movieForm = document.getElementById('movieForm');
const successMovieAdd = document.getElementById('successMovieAdd');

const movieArr = [];

const templatingMovie = (arr) => {
   let result = ``;
   arr.forEach(movie => {
            result += ` <div class="col-md-4 my-4 movieCard">
                           <div class="card">
                              <div class="card-header">
                                  <h3 class="m-0 d-flex justify-content-between">${movie.movieTitle}
                                       <small>Rating: ${movie.movieRating}/5</small>
                                   </h3>
                               </div>
                           <div class="card-body">
                              <img src="${movie.movieImgUrl}" title="cardImg" alt="cardImg" id="cardImg">
                           </div>
                           <div class="card-footer d-flex justify-content-between">
                              <button class="btn btn-success">Edit</button>
                              <button class="btn btn-danger">Delete</button>
                           </div>
                        </div>
                      </div>`
   });
   movieCardContainer.innerHTML = result;
}

const backdropHandler = () => {
   ourModal.classList.toggle('visible');
   backdrop.classList.toggle('visible');
}

const addMovieInCard = (eve) => {
    eve.preventDefault();
    let movieObj = {
          movieTitle : movieTitleControl.value,
          movieImgUrl : imgUrlControl.value,
          movieRating : ratingControl.value
    }
    movieArr.unshift(movieObj);
    templatingMovie(movieArr);
    
    eve.target.reset();
    backdropHandler();
}

closeBtn.forEach((btns) => {
   btns.addEventListener('click',backdropHandler);
})

// const movieAddSuccess = () => {
//     Swal.fire({
//        title : `Movie added in gallery successfully`,
//        timer : 3000,
//        icon: 'success',
//        position: 'top-center'
//     })
// }

addMovie.addEventListener('click',backdropHandler);
movieForm.addEventListener('submit',addMovieInCard);
successMovieAdd.addEventListener('click',movieAddSuccess);