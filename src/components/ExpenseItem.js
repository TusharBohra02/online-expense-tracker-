import React, { useState } from 'react';
import './ExpenseItem.css';

const ExpenseItem = ({ expense, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(expense);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    if (editData.description && editData.amount) {
      onEdit(expense.id, editData);
      setIsEditing(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: name === 'amount' ? parseFloat(value) : value
    });
  };

  const getCategoryEmoji = (category) => {
    const emojis = {
      'Food': '🍔',
      'Transport': '🚗',
      'Entertainment': '🎬',
      'Shopping': '🛍️',
      'Utilities': '💡',
      'Other': '📦'
    };
    return emojis[category] || '📌';
  };

  if (isEditing) {
    return (
      <div className="expense-item editing">
        <div className="edit-form">
          <input
            type="text"
            name="description"
            value={editData.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <input
            type="number"
            name="amount"
            value={editData.amount}
            onChange={handleChange}
            placeholder="Amount"
            step="0.01"
          />
          <select name="category" value={editData.category} onChange={handleChange}>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Shopping">Shopping</option>
            <option value="Utilities">Utilities</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="date"
            name="date"
            value={editData.date}
            onChange={handleChange}
          />
          <div className="edit-actions">
            <button onClick={handleSave} className="save-btn">Save</button>
            <button onClick={handleEdit} className="cancel-btn">Cancel</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="expense-item">
      <div className="item-content">
        <div className="item-info">
          <span className="item-emoji">{getCategoryEmoji(expense.category)}</span>
          <div className="item-details">
            <div className="item-description">{expense.description}</div>
            <div className="item-meta">
              <span className="item-category">{expense.category}</span>
              <span className="item-date">{expense.date}</span>
            </div>
          </div>
        </div>
        <div className="item-amount">${expense.amount.toFixed(2)}</div>
      </div>
      <div className="item-actions">
        <button onClick={handleEdit} className="edit-btn" title="Edit">✏️</button>
        <button onClick={() => onDelete(expense.id)} className="delete-btn" title="Delete">🗑️</button>
      </div>
    </div>
  );
};

export default ExpenseItem;
