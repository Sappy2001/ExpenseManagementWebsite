Expense Management Website
Overview
This is a finance management web application that helps users track their expenses, manage budgets, and visualize financial data.

Features
User Interface
Responsive UI with pages for:

Registration & Login (User authentication using Supabase)

Dashboard (Summary of expenses and budgets)

Transaction Management (List of transactions with filtering)

Budget Overview (Track spending limits)

Designed with ShadCN, Aceternity UI, and Tailwind CSS for a clean and accessible interface

Data Visualization
Chart.js & Recharts used for financial insights

Line Graph to track credit and debit transactions

Interaction & Functionality
Fetch API for consuming backend data

Client-side validation using React Hook Form & Zod

Dynamic Payment Card Component using react-credit-cards

LocalStorage used for storing authentication state

Route Guards implemented to prevent unauthorized access

Authentication (Supabase)
Users can sign up and log in with Supabase authentication

On successful authentication, user data is stored in LocalStorage

Example authentication logic:

js
Copy
Edit
const onSubmit = async ({ username, email, password }) => {
  let response;
  if (type === "Login") {
    response = await supabase.auth.signInWithPassword({ email, password });
  } else if (type === "Signup") {
    response = await supabase.auth.signUp({
      email,
      password,
      options: { data: { username } },
    });
  }
  if (response.error) {
    console.error("Authentication error:", response.error.message);
  } else {
    localStorage.setItem("user", response.data.user.id);
  }
};
Installation & Setup
Prerequisites
Node.js (v16+)

npm or yarn

Supabase Account

Setup Steps
Clone the repository

sh
Copy
Edit
git clone https://github.com/your-username/ExpenseManagementWebsite.git
cd ExpenseManagementWebsite
Install dependencies

sh
Copy
Edit
npm install
Configure environment variables

Create a .env file in the root directory

Add the following:

ini
Copy
Edit
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_key
Run the development server

sh
Copy
Edit
npm run dev
Open http://localhost:5173 in your browser

Deployment
Deploying to Vercel
Push your code to GitHub

Connect your GitHub repository to Vercel

Set environment variables in Vercel Dashboard

Deploy the project

API Documentation
Since you're using dummy JSON data for transactions, explain how transactions are fetched and displayed:

Transaction API (Dummy JSON Data)
Example transaction list:

json
Copy
Edit
[
  {
    "id": 1,
    "type": "credit",
    "amount": 5000,
    "date": "2025-03-20"
  },
  {
    "id": 2,
    "type": "debit",
    "amount": 1500,
    "date": "2025-03-19"
  }
]
Transactions are displayed in tables and charts using Chart.js & Recharts

Design Decisions
ShadCN + Aceternity UI + Tailwind CSS

Provides a modern, responsive UI with minimal styling effort

React Hook Form & Zod for Validation

Ensures accurate form validation and error handling

Supabase for Authentication

A backend-as-a-service solution for managing users without needing a custom backend

LocalStorage for User Sessions

Stores user authentication state to keep users logged in

Chart.js & Recharts for Data Visualization

Line Graphs to compare credit vs debit transactions

