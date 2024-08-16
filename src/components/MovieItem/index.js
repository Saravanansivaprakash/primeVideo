import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {eachDetail} = props
  const {thumbnailUrl, videoUrl} = eachDetail
  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} className="thumb-img-style" alt="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              label="close"
              className="close-button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
            <div className="movie-player-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
