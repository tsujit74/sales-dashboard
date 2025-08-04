# Sales Dashboard App

This project is a simple yet effective **Sales Dashboard** built using **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Recharts**. It demonstrates atomic design principles and includes reusable chart components. The app displays sales data for the years **2022, 2023, and 2024**, with filter capabilities and chart visualization.

## 🧱 Atomic Design Structure

This project follows the **Atomic Design Principle**, with components organized as:
src/
  ├── components/
  │   ├── atoms/         # Smallest components (e.g., Heading)
  │   ├── molecules/     # Groups of atoms (e.g., Input)
  │   └── organisms/     # Full sections (e.g., Chart)
  ├── pages/             # Pages like /dashboard
  ├── data/              # Mock sales data
  ├── types/             # TypeScript interfaces

---

## Setup Instructions

### 1. Clone the repository

git clone https://github.com/tsujit74/sales-dashboard.git
cd sales-dashboard

### 2. Install dependencies

npm install

### 3. Run the development server

npm run dev

### 4. Open your browser
Visit: [https://sales-dashboard-two-xi.vercel.app/](https://sales-dashboard-two-xi.vercel.app/)

## 💡 Features

- 🎯 **Sales Chart**: Displays sales for 2022, 2023, and 2024.
- 🔍 **Sales Filter**: Input box to filter sales greater than a threshold.
- 📊 **Bar Chart**: Visualize sales using Recharts.
- 🧱 **Componentized**: Built with atomic structure for better scalability.
- ⚡ **Tailwind CSS**: Clean and modern UI.
- ☁️ **Deployable**: Easily deploy on Vercel or any platform.

---

## 🔧 Technologies Used

- **Next.js 15 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Recharts**
- **Atomic Design Architecture**

---

## 📈 Future Enhancements

- Add chart type switcher (bar, line, pie)
- Integrate real-time sales API
- Add authentication with roles (Admin/User)
- Dashboard summary cards (total sales, year-on-year growth)


## 🧑‍💻 Author
Sujit Thakur

---

## 📄 License

This project is for educational and internship assessment purposes only.
