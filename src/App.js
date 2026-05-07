import React, { useState, useEffect } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseStats from './components/ExpenseStats';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState('All');

  // Load expenses from localStorage on mount
  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses');
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);

  // Save expenses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    const newExpense = {
      id: Date.now(),
      ...expense,
      date: new Date(expense.date).toLocaleDateString()
    };
    setExpenses([newExpense, ...expenses]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const editExpense = (id, updatedExpense) => {
    setExpenses(expenses.map(expense =>
      expense.id === id
        ? {
          ...updatedExpense,
          id,
          date: new Date(updatedExpense.date).toLocaleDateString()
        }
        : expense
    ));
  };

  const filteredExpenses = filter === 'All'
    ? expenses
    : expenses.filter(expense => expense.category === filter);

  const categories = [...new Set(expenses.map(expense => expense.category))];

  return (
    <div className="app">
      <div className="container">
        <h1 className="app-title">💰 Expense Tracker</h1>
        <p className="app-subtitle">Manage your expenses efficiently</p>
        
        <div className="content">
          <ExpenseForm onAddExpense={addExpense} />
          
          <div className="right-section">
            <ExpenseStats expenses={filteredExpenses} />
            
            <div className="filter-section">
              <h3>Filter by Category</h3>
              <div className="filter-buttons">
                <button
                  className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
                  onClick={() => setFilter('All')}
                >
                  All
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    className={`filter-btn ${filter === category ? 'active' : ''}`}
                    onClick={() => setFilter(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <ExpenseList
              expenses={filteredExpenses}
              onDeleteExpense={deleteExpense}
              onEditExpense={editExpense}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
