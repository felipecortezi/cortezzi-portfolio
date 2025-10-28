export default function HeroBanner() {

    const videoSrc = '/heroBanner.mp4'

    return (
        <video autoPlay loop muted playsInline style={styles.video}>
            <source src={videoSrc} type="video/mp4" />Your browser does not support the video tag.
        </video>
    );
};

const styles = {
    video: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    }
};
