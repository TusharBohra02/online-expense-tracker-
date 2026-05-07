# 💰 Online Expense Tracker

An intuitive and user-friendly web application built with React.js to track your daily expenses efficiently. Manage your finances, categorize your spending, and visualize your expense patterns.

## Features

✨ **Core Features:**
- ➕ **Add Expenses** - Easily add new expenses with description, amount, category, and date
- 📊 **View Statistics** - See total expenses, number of transactions, and highest expense amount
- 📋 **Expense List** - View all your expenses in a organized list format
- 🔍 **Filter by Category** - Filter expenses by different categories like Food, Transport, Entertainment, Shopping, and more
- ✏️ **Edit Expenses** - Modify existing expense details anytime
- 🗑️ **Delete Expenses** - Remove expenses you no longer need
- 💾 **Local Storage** - All your expenses are saved locally on your device
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

## Categories

The app includes the following expense categories:
- 🍔 Food
- 🚗 Transport
- 🎬 Entertainment
- 🛍️ Shopping
- 💡 Utilities
- 📦 Other

## Tech Stack

- **Frontend Framework:** React.js (v18.2.0)
- **Styling:** CSS3 with Modern Design
- **Storage:** Browser LocalStorage API
- **Build Tool:** Create React App (React Scripts 5.0.1)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/TusharBohra02/online-expense-tracker-.git
cd online-expense-tracker-
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Usage

1. **Adding an Expense:**
   - Fill in the description (e.g., "Lunch")
   - Enter the amount spent
   - Select a category
   - Choose the date
   - Click "Add Expense"

2. **Viewing Statistics:**
   - Check the total expenses amount
   - See the number of transactions
   - View the highest single expense
   - See breakdown by category

3. **Filtering:**
   - Click on category buttons to filter expenses
   - Click "All" to view all expenses

4. **Editing/Deleting:**
   - Click the ✏️ icon to edit an expense
   - Click the 🗑️ icon to delete an expense
   - Confirm your changes

## Project Structure

```
online-expense-tracker-/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ExpenseForm.js
│   │   ├── ExpenseForm.css
│   │   ├── ExpenseList.js
│   │   ├── ExpenseList.css
│   │   ├── ExpenseItem.js
│   │   ├── ExpenseItem.css
│   │   ├── ExpenseStats.js
│   │   └── ExpenseStats.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## How Data is Stored

All expenses are stored in your browser's LocalStorage. This means:
- Your data persists between sessions
- Your data is stored locally on your device
- No data is sent to any server
- Clearing browser data will remove all stored expenses

## Future Enhancements

- Export expenses to CSV/PDF
- Monthly and yearly reports
- Budget tracking
- Data visualization with charts
- Dark mode theme
- Multiple account support

## Author

**Tushar Bohra**

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

---

**Made with ❤️ for better expense management**
