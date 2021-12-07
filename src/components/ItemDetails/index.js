import './index.css'

const ItemDetails = props => {
  const {historyDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteItem = () => {
    console.log(id)
    deleteItem(id)
  }

  return (
    <li className="hist-item">
      <div className="history-text-box">
        <p className="time box">{timeAccessed}</p>
        <div className="history-box">
          <img className="logo box" src={logoUrl} alt="domain logo" />
          <div className="domain-text">
            <p className="title box">{title}</p>
            <p className="domain box">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button type="button" testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-icon"
          onClick={onDeleteItem}
          alt="delete"
        />
      </button>
    </li>
  )
}

export default ItemDetails
