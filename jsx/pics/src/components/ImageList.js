import './ImageList.css'
import ImageShow from './ImageShow';

function ImageList({ images }) {
    const renderedImages = images.map((image) => {
        return <ImageShow image={image} key={image.id} />
    });

    return (
        <div className='image-list'>
            { images.length > 0 ? <div>{renderedImages}</div> : 'No images found' }
        </div>
    )
}

export default ImageList;