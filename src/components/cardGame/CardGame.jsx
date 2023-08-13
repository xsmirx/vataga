import './cardGame.css'
import img from '../../../public/favicon.ico'

export default function CardGame(props) {
  const getDifficultyName = (props) => {
    if (props.difficulty === 1) return 'Легко'
    if (props.difficulty === 2) return 'Средне'
    if (props.difficulty === 3) return 'Трудно'
  }

  return (
    <div className="card__container mt-4">
      <div className="card__box">
        <div className="card__cont-img">
          <img
            src={`https://raw.githubusercontent.com/vataga1/storage/main${props.src}`}
            alt="img"
          />
        </div>
        <div className="card__cont-info">
          <p className="card__name">{props.title}</p>
          <div className="card__description">{props.description}</div>
          <div className="card__box-info">
            <div className="card__cont">
              <p className="card__h1-name">Время</p>
              <p className="card__time">
                {props.minTime} – {props.maxTime} мин.
              </p>
            </div>
            <div className="card__cont">
              <p className="card__h1-name">Кол-во игроков</p>
              <p className="card__time">
                {props.minPlayer} – {props.maxPlayers} чел.
              </p>
            </div>
            <div className="card__cont">
              <p className="card__h1-name">Сложность</p>
              <p className="card__time">{getDifficultyName(props)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
