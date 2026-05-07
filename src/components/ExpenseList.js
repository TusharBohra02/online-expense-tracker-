import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = ({ expenses, onDeleteExpense, onEditExpense }) => {
  return (
    <div className="expense-list-container">
      <h3>📝 Expense List</h3>
      {expenses.length === 0 ? (
        <div className="empty-state">
          <p>No expenses recorded yet. Start by adding one!</p>
        </div>
      ) : (
        <div className="expense-list">
          {expenses.map(expense => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              onDelete={onDeleteExpense}
              onEdit={onEditExpense}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
