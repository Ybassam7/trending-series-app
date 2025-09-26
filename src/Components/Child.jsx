import React from 'react'

function Child({item}) {
  const releaseYear = item.first_air_date ? item.first_air_date.substring(0, 4) : 'N/A';

  return (
    <>
      <div className="series-card">
            <div className="card-poster-container">
                <img src={"https://image.tmdb.org/t/p/original"+item.backdrop_path} alt={item.name + " Poster"}/>
                <div className="rating-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <span>{item.vote_average.toFixed(1)}</span>
                    <span className="vote-count">({item.vote_count})</span>
                </div>
            </div>
            <div className="card-content">
                <h2 className="series-title">{item.name}</h2>
                <p className="series-info">{item.media_type} &bull; {releaseYear} &bull; {item.origin_country.join(', ')}</p>
                <p className="series-synopsis">{item.overview}</p>
                <div className="card-actions">
                    <button className="action-btn btn-primary">Watch Now</button>
                    <button className="action-btn btn-secondary">More Info</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Child