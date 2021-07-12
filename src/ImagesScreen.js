import React from 'react'
import { ImageTag } from './ImageTag';

export const ImagesScreen = () => {

    const vector = [
        {
            url: 'https://placeimg.com/80/80/people?id=1',
            title: "Titulo1",
            description: 'Descripcion imagen 1'
        },
        {
            url: 'https://placeimg.com/80/80/people?id=2',
            title: "Titulo2",
            description: 'Descripcion imagen 2'
        },
        {
            url: 'https://placeimg.com/80/80/people?id=3',
            title: "Titulo3",
            description: 'Descripcion imagen 3'
        },
        {
            url: 'https://placeimg.com/80/80/people?id=4',
            title: "Titulo4",
            description: 'Descripcion imagen 4'
        }
    ];

    return (
        <>
            {
                vector.map((image) =>
                    <ImageTag image={image} />
                )

            }
        </>
    )
}
