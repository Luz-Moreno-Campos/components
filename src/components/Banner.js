import Button from './Button';

function Banner(props) {
  return (
    <section className="banner">
      <video className="banner-video" autoPlay loop muted playsInline>
        <source src="/media/banner-video.mp4" type="video/mp4" />
      </video>
      <div className="banner-content">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <div className="banner-buttons">
          <Button label={props.primaryBtnLabel} type="primary" />
          <Button label={props.secondaryBtnLabel} type="secondary" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
