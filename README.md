# Simply Shokupan (Simply 食パン)

A modern, aesthetically pleasing recipe application dedicated to the art of Shokupan (Japanese milk bread) and its versatile uses. This project showcases a beautiful, responsive UI with interactive elements, animations, and a seamless user experience.

## 📸 Screenshots

![Home Page Placeholder](./public/Screenshot%202026-02-19%20at%2020-55-35%20Shokupan.png)
*The main recipe grid with filtering and search capabilities.*

![Recipe Details Placeholder](./public/Screenshot%202026-02-19%20at%2020-55-58%20Shokupan.png)
*Detailed recipe view featuring the timer widget and interactive background stickers.*

## ✨ Features

-   **Dynamic Recipe Cards**: Beautifully designed cards with hover effects, displaying recipe details, calories, and time.
-   **Interactive Background**: Playful, randomized sticker animations on the recipe details page (`Recipes.tsx`) that float and rotate, creating a unique visual experience every time.
-   **Smart Search & Filtering**:
    -   Real-time search with a dropdown of matching recipes.
    -   Filter recipes by type (Veg/Non-veg) and preparation time using a slider.
-   **Cooking Timer Widget**: An integrated countdown timer on the recipe page to help users track cooking times, complete with an audio alarm.
-   **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
-   **Nutritional breakdown**: Detailed nutrition information for each recipe.

## 🛠️ Tech Stack

-   **Frontend**: React (Vite), TypeScript
-   **Styling**: Tailwind CSS
-   **Icons**: Lucide React
-   **Routing**: React Router DOM (v6)

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/simply-shokupan.git
    cd simply-shokupan
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Build for production**:
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── components/
│   ├── footer/       # Footer component with social links
│   ├── navbar/       # Navigation bar
│   ├── HomePage.tsx  # Main landing page
│   ├── Items.tsx     # Recipe grid with search/filter
│   └── Recipes.tsx   # Detailed recipe view with timer
├── data/
│   └── recipes.json  # Recipe data source
├── App.tsx           # Main application entry
└── main.tsx          # React DOM rendering
```

## 🎨 Design Philosophy

The design is inspired by the clean, minimalist aesthetic of Japanese bakeries ("Shokupan" means eating bread). We use:
-   **Colors**: Warm earth tones (`#8b5a4b`) mixed with fresh pastels and crisp whitespace.
-   **Typography**: Serif fonts for headings to evoke tradition, Sans-serif for readability.
-   **Interactivity**: Subtle hover states, floating animations, and glassmorphism effects (`backdrop-blur`).

## 👨‍💻 Designed & Developed By

**Sunag** - [GitHub Profile](https://github.com/Start-Sunag)

---

&copy; 2026 Simply Shokupan. All rights reserved.
