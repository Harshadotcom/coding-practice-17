import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import TransactionItem from '../TransactionItem'

import './index.css'

import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: '',
    transactionsList: [],
  }

  updateTitleState = event => {
    this.setState({title: event.target.value})
  }

  updateAmountState = event => {
    this.setState({amount: event.target.value})
  }

  updateTypeState = event => {
    this.setState({type: event.target.value})
  }

  incomeDetails = () => {
    const {amount, type} = this.state
    let income = 0
    let balance = 0
    let expenses = 0
    if (type === income) {
      income += amount
    } else if (type === expenses) {
      expenses += amount
    }
    balance = income - expenses
    return {
      income,
      balance,
      expenses,
    }
  }

  submitForm = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      title: '',
      amount: '',
    }))
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    const filterdRes = transactionsList.filter(eachTran => eachTran.id !== id)
    this.setState({transactionsList: filterdRes})
  }

  render() {
    const {title, amount, type, transactionsList} = this.state
    const amountDetails = this.incomeDetails()
    const {income, balance, expenses} = amountDetails

    return (
      <div className="web-page">
        <div className="bg-container">
          <div className="header">
            <h1>Hi Richard</h1>
            <p>
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <div>
            <MoneyDetails
              incomeAmount={income}
              balanceAmount={balance}
              expensesAmount={expenses}
            />
          </div>
          <div className="bottom-section">
            <div className="form">
              <h1>Add Transaction</h1>
              <form onSubmit={this.submitForm}>
                <label className="label" htmlFor="title">
                  Title
                </label>
                <br />
                <input
                  type="text"
                  className="input-box"
                  name="title"
                  value={title}
                  onChange={this.updateTitleState}
                />
                <br />
                <label htmlFor="amount">Amount</label>
                <br />
                <input
                  className="input-box"
                  name="amount"
                  type="text"
                  value={amount}
                  onChange={this.updateAmountState}
                />
                <br />
                <label htmlFor="type">Type</label>
                <br />
                <select
                  onChange={this.updateTypeState}
                  value={type}
                  className="input-box"
                >
                  {transactionTypeOptions.map(eachType => (
                    <option>{eachType.displayText}</option>
                  ))}
                </select>
                <br />
                <button className="button" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="transaction-details">
              <h1>History</h1>
              <div className="heading-container">
                <p className="headings">Title</p>
                <p className="headings">Amount</p>
                <p className="headings">Type</p>
              </div>
              <ul className="unodered-list">
                {transactionsList.map(eachVal => (
                  <TransactionItem
                    key={eachVal.id}
                    transactionDetails={eachVal}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
