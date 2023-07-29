// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, balanceAmount, expensesAmount} = props

  return (
    <div className="bank-details">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="bank-image"
        />
        <div>
          <p>Your Balance</p>
          <p>{balanceAmount}</p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="bank-image"
        />
        <div>
          <p>Your Income</p>
          <p>{incomeAmount}</p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="bank-image"
        />
        <div>
          <p>Your Expenses</p>
          <p>{expensesAmount}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
