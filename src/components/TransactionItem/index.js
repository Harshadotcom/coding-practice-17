// Write your code here
import './index.css'

const TransactionItem = props => {
  const {key, transactionDetails, deleteTransaction} = props
  const {id, type, amount, title} = transactionDetails

  const callDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="list-item-container">
      <p className="headings">{title}</p>
      <p className="headings">{amount}</p>
      <p className="headings">{type}</p>
      <button
        onClick={callDeleteTransaction}
        data-testid="button"
        type="button"
        className="btn"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
