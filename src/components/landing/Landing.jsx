import "./landing.scss"

export default function Landing(){
    return (
        <div className="landing" id="landing">
            <video autoPlay="autoplay" loop="loop" muted className="promo_video">
                <source src="assets/promo_video.mp4" type="video/mp4" />
            </video>
        </div>
    )
}