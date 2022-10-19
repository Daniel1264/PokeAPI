import FormHome from "../components/Home/FormHome"
import './styles/home.css'

const Home = () => {

    // This component is the main
    return (
        <article className="pokedex">
        <img className="pokedex_img" src="/images/home/pokedex.png" alt="pokedex-text"/>
        <header className="pokedex_header">
        <h3 className="pokedex_subtitle">Hi triner!!</h3>
        <p className="pokedex_text">give me your name to se the pokedex</p>
        </header>
        <FormHome />
        </article>
    )
}

export default Home