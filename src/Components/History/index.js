import './index.css'

const History = props => {
  const {eachItem, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem

  const deleteItemBtn = () => {
    deleteHistory(id)
  }

  return (
    <li className="item-container">
      <div className="title-logo-container">
        <p className="time">{timeAccessed}</p>
        <div className="logo-container">
          <img src={logoUrl} alt="domain logo" className="image" />
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
      </div>
      <button
        data-testid="delete"
        className="delete-container"
        type="button"
        onClick={deleteItemBtn}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default History
