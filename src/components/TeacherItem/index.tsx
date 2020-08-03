import React from "react";
import "./styles.css"
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://vignette.wikia.nocookie.net/schoolofrock/images/4/4f/Dewey-finn.jpg/"
                     alt="Dewey Finn"/>
                <div>
                    <strong>Dewey Finn</strong>
                    <span>Rock</span>
                </div>
            </header>
            <p>
                Um cantor e guitarrista de rock, que acaba de ser expulso da banda No Vacancy.
                <br/>
                Vencedor da batalha de bandas.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 150,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;