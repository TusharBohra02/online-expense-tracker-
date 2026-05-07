import React from 'react';
import './ExpenseStats.css';

const ExpenseStats = ({ expenses }) => {
  const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const categoryStats = expenses.reduce((stats, expense) => {
    const existing = stats.find(stat => stat.category === expense.category);
    if (existing) {
      existing.amount += expense.amount;
    } else {
      stats.push({ category: expense.category, amount: expense.amount });
    }
    return stats;
  }, []);

  const highestExpense = expenses.length > 0
    ? Math.max(...expenses.map(e => e.amount))
    : 0;

  return (
    <div className="stats-container">
      <h3>📊 Statistics</h3>
      
      <div className="stat-card total">
        <div className="stat-label">Total Expenses</div>
        <div className="stat-value">${totalExpense.toFixed(2)}</div>
      </div>

      <div className="stat-card count">
        <div className="stat-label">Total Transactions</div>
        <div className="stat-value">{expenses.length}</div>
      </div>

      <div className="stat-card highest">
        <div className="stat-label">Highest Expense</div>
        <div className="stat-value">${highestExpense.toFixed(2)}</div>
      </div>

      {categoryStats.length > 0 && (
        <div className="category-breakdown">
          <h4>By Category</h4>
          {categoryStats.map(stat => (
            <div key={stat.category} className="category-item">
              <span className="category-name">{stat.category}</span>
              <span className="category-amount">${stat.amount.toFixed(2)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpenseStats;
