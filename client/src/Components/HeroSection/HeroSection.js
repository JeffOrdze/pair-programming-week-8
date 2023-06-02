import "./HeroSection.scss";
import heroImg from "../../assets/images/hero-img.png";


const HeroSection = () => {
    return (
        <main className="hero">
            <section className="hero__section-left">
                <div className="hero__intro">
                    <p className="hero__subtitle">Coding by yourself feels lonely?</p>
                    <h1 className="hero__title page-header">Rent A Programming Kitty!</h1>
                </div>
                <article className="hero__hero-copy paragraph">
                We offer professional coding buddies, who can meow in the most popular programming languages. Our kitties will help you stay motivated, by judgmentally staring at you while you take your fifth snack break. They also provide a therapeutic purr, which will keep you calm even when your program has more bugs than lines of code.
                </article>
            </section>
            <section className="hero__section-right">
                <img src={heroImg} alt="screaming kitty"/>
                <button className="hero__button button-large btnLarge">Rent a Kitty</button>
            </section>
        </main>
    )
}

export default HeroSection;