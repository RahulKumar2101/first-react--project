const Hero = () => {
    return (
        <main className="hero container">
            <div className="hero-content">

            <h1>Your feet deserve the Best</h1>
            <p>
                Your feet deserve the Best and where here to help you with our shoes
            </p>
            <div className="hero-btn">
                <button>shop now</button>
                <button className="secondary-btn">category</button>
            </div>
            <div className="shopping">
                <p>available on </p>
                <div className="brand-icon">
                    <img src="/images/amazon.png" alt="amazon-logo" />
                    <img src="/images/flipkart.png" alt="amazon-logo" />
                </div>
            </div>
            </div>
            <div className="hero-img">
            <img src="/images/shoe_image.png" alt="brand-logo" />

            </div>
        </main>
    );
};
export default Hero;
