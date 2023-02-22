import React from "react";
import { FaQuestion, FaTimes } from "react-icons/fa";

function Cards({ choozes }) {
  return (
    <section className="choozes-container" role="list">
      {choozes ? (
        choozes.map((chooze, index) => {
          return (
            <article key={index} className="chooze-card" role="listitem">
              <img className="chooze-card__img" src={chooze.backgroundImageUrl} />
              <div className="chooze-card__infos">
                <FaQuestion className="chooze-card__icon" aria-hidden="true" />
                <h3 className="chooze-card__title">{chooze.question}</h3>
                <FaTimes className="chooze-card__exit" aria-hidden="true" />
              </div>
            </article>
          );
        })
      ) : (
        <section className="no-chooze">
          <h2>Vous n'avez pas encore créé de Chooze!</h2>
          <h3>
            Utilisez le bouton ci-dessous pour créer votre premier sondage:
          </h3>
          <button className="create-chooze-button">Créer un chooze</button>
        </section>
      )}
    </section>
  );
}

export default Cards;
