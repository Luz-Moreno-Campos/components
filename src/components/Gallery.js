function Gallery(props) {

  return (
    <>
      <h2 className= "gallery-header">Our Adventures</h2>
      <p className="gallery-text">Explore a world of beauty, freedom, and discovery—your next adventure begins here.</p>
      <section className="gallery">
        {props.galleryImages.map((photo) => (
          <div className="gallery-photo" key={photo.index}>
            <img src={photo.url} alt={photo.alt} />
            <p className="gallery-caption">{photo.caption}</p>
          </div>
        ))}
      </section>
    </>

  )

}

export default Gallery;