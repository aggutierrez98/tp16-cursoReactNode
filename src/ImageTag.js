import React from 'react'

export const ImageTag = ({ image }) => {
    return (
        <div className="image-card">
            <div className="image">
                <img src={image.url} />
            </div>

            <div className="image-text">
                <div className="title">
                    <h1>{image.title}</h1>
                </div>

                <div className="description">
                    <h3>{image.description}</h3>
                </div>
            </div>

        </div>
    )
}
