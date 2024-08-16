import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movieList} = props
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }

  return (
    <>
      <Slider {...settings}>
        {movieList.map(each => (
          <MovieItem eachDetail={each} key={each.id} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
