import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionList = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyList = moviesList.filter(each => each.categoryId === 'COMEDY')
  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="logo"
      />
      <div className="movie-container">
        <h1 className="action-style">Action Movies</h1>
        <MoviesSlider movieList={actionList} />
        <h1 className="action-style">Comedy Movies</h1>
        <MoviesSlider movieList={comedyList} />
      </div>
    </div>
  )
}

export default PrimeVideo
