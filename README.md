# 🚀 Muhammad Noman — Personal Portfolio Website

> A modern, responsive portfolio website showcasing my journey as a Full Stack Web Developer, built with React, Vite, and Supabase.

---

## 📌 About This Project

This is a **production-ready personal portfolio** designed to highlight my skills, projects, and professional background as a Full Stack Developer. The website features smooth animations, interactive UI elements, and a fully functional contact form powered by Supabase backend. Built for **performance, accessibility, and responsiveness** across all devices.

👤 **Developer:** Muhammad Noman  
📍 **Location:** Peshawar, Pakistan  
💼 **Role:** Full Stack Web Developer (MERN Stack)

---

## ✨ Features

- 🎨 **Modern UI/UX** — Clean, professional design with smooth animations (Animate.css)
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- 🖱️ **Interactive Elements** — Cursor-following effects, hover animations, and asteroid particle effects
- 📝 **Contact Form** — Functional form with validation, integrated with Supabase database
- 📧 **Newsletter Subscription** — Email subscription feature with duplicate detection and error handling
- 🔀 **Multi-Page Routing** — React Router-powered navigation (Home, About, Projects)
- 🎭 **Scroll Animations** — Elements animate dynamically as users scroll through sections
- 💾 **Backend Integration** — Supabase-powered data storage for contact messages and email subscribers
- ⚡ **Fast Performance** — Built with Vite for lightning-fast development and production builds
- ♿ **Accessibility Focus** — Keyboard navigation, screen reader compatibility, high contrast support

---

## 🛠️ Tech Stack

### Frontend

| Technology          | Purpose                      |
| ------------------- | ---------------------------- |
| **React 19**        | Core UI framework            |
| **Vite**            | Build tool & dev server      |
| **React Router v7** | Client-side routing          |
| **Animate.css**     | Pre-built CSS animations     |
| **React Typed**     | Typing text animation effect |
| **React Toastify**  | Toast notifications          |

### Backend & Database

| Technology          | Purpose                              |
| ------------------- | ------------------------------------ |
| **Supabase**        | Backend-as-a-Service (BaaS)          |
| **Supabase JS SDK** | Database operations & authentication |

### Development Tools

| Technology   | Purpose                         |
| ------------ | ------------------------------- |
| **ESLint**   | Code linting & quality checks   |
| **dotenv**   | Environment variable management |
| **Yarn/npm** | Package management              |

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────┐
│                   Frontend (React + Vite)       │
├─────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐  │
│  │   Home   │  │  About   │  │   Projects   │  │
│  │   Page   │  │   Page   │  │    Page      │  │
│  └────┬─────┘  └────┬─────┘  └──────┬───────┘  │
│       │              │               │           │
│       └──────────────┼───────────────┘           │
│                      │                           │
│              ┌───────▼────────┐                  │
│              │  React Router  │                  │
│              └───────┬────────┘                  │
│                      │                           │
│       ┌──────────────┼───────────────┐          │
│       │              │               │          │
│  ┌────▼────┐  ┌─────▼─────┐  ┌─────▼──────┐   │
│  │ Banner  │  │ Features  │  │  Contact   │   │
│  │ Section │  │  Section  │  │   Form     │   │
│  └─────────┘  └───────────┘  └─────┬──────┘   │
│                                     │           │
└─────────────────────────────────────┼───────────┘
                                      │
                           ┌──────────▼──────────┐
                           │   Supabase Backend  │
                           ├─────────────────────┤
                           │  • contacts table   │
                           │  • subscribers table│
                           └─────────────────────┘
```

---

## 📦 Installation & Setup

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Supabase account** (for backend integration)

### Step-by-Step Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/muhammadnomanorakzai/PortfolioCode.git
   cd PortfolioCode
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   - Copy the `.env` file and update with your Supabase credentials:

   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_KEY=your_supabase_anon_key
   ```

4. **Configure Supabase Database**
   - Create a Supabase project at [supabase.com](https://supabase.com)
   - Create the following tables in your Supabase dashboard:

   **`contacts` table:**

   ```sql
   CREATE TABLE contacts (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT,
     phone TEXT,
     email TEXT,
     subject TEXT,
     message TEXT,
     created_at TIMESTAMPTZ DEFAULT NOW()
   );
   ```

   **`subscribers` table:**

   ```sql
   CREATE TABLE subscribers (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     email TEXT UNIQUE NOT NULL,
     created_at TIMESTAMPTZ DEFAULT NOW()
   );
   ```

5. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open in browser**
   - Navigate to `http://localhost:5173`

---

## 🔑 Environment Variables

| Variable            | Description                   | Required |
| ------------------- | ----------------------------- | -------- |
| `VITE_SUPABASE_URL` | Your Supabase project URL     | ✅ Yes   |
| `VITE_SUPABASE_KEY` | Your Supabase anon/public key | ✅ Yes   |

> ⚠️ **Security Note:** Never commit your `.env` file to version control. The `.env` file is already listed in `.gitignore`.

---

## 💻 Usage Guide

### Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build for production                     |
| `npm run preview` | Preview production build locally         |
| `npm run lint`    | Run ESLint to check code quality         |

### Navigating the Portfolio

- **Home Page (`/`)** — Hero banner, experience timeline, features, and contact form
- **About Page (`/about`)** — Detailed background, skills with progress bars, and personal journey
- **Projects Page (`/projects`)** — Showcase of 14+ projects with live demos and tech stack details
- **Sidebar Navigation** — Quick access to all pages and sections with dropdown menu on Home

---

## 🖥️ API & Backend

### Supabase Tables Used

#### 1. `contacts` — Contact Form Submissions

Stores messages submitted through the contact form.

| Field        | Type        | Description          |
| ------------ | ----------- | -------------------- |
| `name`       | TEXT        | User's full name     |
| `phone`      | TEXT        | User's phone number  |
| `email`      | TEXT        | User's email address |
| `subject`    | TEXT        | Message subject      |
| `message`    | TEXT        | Message body         |
| `created_at` | TIMESTAMPTZ | Submission timestamp |

#### 2. `subscribers` — Newsletter Subscriptions

Stores email addresses for newsletter subscription.

| Field        | Type        | Description                 |
| ------------ | ----------- | --------------------------- |
| `email`      | TEXT        | Subscriber's email (unique) |
| `created_at` | TIMESTAMPTZ | Subscription timestamp      |

---

## 📸 Screenshots

> 📷 _Add screenshots here:_

| Section           | Screenshot                                                  |
| ----------------- | ----------------------------------------------------------- |
| **Home Page**     | `![Home Page](./public/images/home-screenshot.png)`         |
| **About Page**    | `![About Page](./public/images/about-screenshot.png)`       |
| **Projects Page** | `![Projects Page](./public/images/projects-screenshot.png)` |
| **Contact Form**  | `![Contact Form](./public/images/contact-screenshot.png)`   |

> 💡 **Tip:** Take screenshots of each page and save them in the `public/images/` folder.

---

## 🌐 Live Demo

> 🔗 _Add your deployed URL here once live_  
> Example: [https://your-portfolio-domain.com](https://your-portfolio-domain.com)

---

## 📁 Folder Structure

```
PortfolioCode/
├── public/                  # Static assets served directly
│   ├── files/               # Resume/CV files
│   ├── images/              # Project screenshots & assets
│   └── _redirects           # Netlify redirect rules
├── src/
│   ├── assets/              # CSS stylesheets for each component
│   ├── lib/
│   │   └── supabaseClient.js  # Supabase client configuration
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # Entry point
│   ├── HomePage.jsx         # Home page composition
│   ├── AboutPage.jsx        # About page composition
│   ├── ProjectsPage.jsx     # Projects showcase
│   ├── Banner.jsx           # Hero section with typing effect
│   ├── Contact.jsx          # Contact form with Supabase
│   ├── Features.jsx         # Service features cards
│   ├── Experience.jsx       # Developer journey timeline
│   ├── Skills.jsx           # Skills with animated progress bars
│   ├── SideBar.jsx          # Navigation sidebar
│   ├── Footer.jsx           # Footer with newsletter
│   └── [components...]      # Reusable UI components
├── .env                     # Environment variables (not committed)
├── .gitignore               # Git ignore rules
├── package.json             # Dependencies & scripts
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

---

## 🧩 Challenges & Solutions

| Challenge                    | Solution                                                                                                                                                                  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Supabase Integration**     | Configured Supabase client with environment variables for secure credential management; implemented error handling for duplicate email subscriptions (error code `23505`) |
| **Scroll Animations**        | Built custom scroll-based animations using `getBoundingClientRect()` and `window.scroll` events with cleanup via `useEffect` return functions                             |
| **Responsive Sidebar**       | Implemented toggle-based mobile sidebar with hamburger menu, active route highlighting, and dropdown navigation for Home sections                                         |
| **Form Validation**          | Added multi-layer validation (client-side regex for email, required fields check) with user-friendly toast notifications via `react-toastify`                             |
| **Performance Optimization** | Used Vite for fast builds, lazy component loading, and CSS animations instead of JavaScript-based animations for better runtime performance                               |

---

## 🚀 Future Improvements

- [ ] Add **dark/light theme toggle** for better user experience
- [ ] Implement **blog section** with MDX support for technical articles
- [ ] Add **test coverage** with Vitest and React Testing Library
- [ ] Migrate to **TypeScript** for type safety and better developer experience
- [ ] Add **internationalization (i18n)** support for multiple languages
- [ ] Integrate **Google Analytics** for visitor tracking
- [ ] Build **admin dashboard** to manage contact form submissions
- [ ] Add **SEO optimization** with React Helmet for meta tags
- [ ] Implement **server-side rendering (SSR)** with Next.js for better performance
- [ ] Add **unit and integration tests** for critical components

---

## 👨‍💻 Author

**Muhammad Noman**  
Full Stack Web Developer | MERN Stack

- 🌐 **Portfolio:** _[Add live URL]_
- 💻 **GitHub:** [muhammadnomanorakzai](https://github.com/muhammadnomanorakzai)
- 💼 **LinkedIn:** [muhammad-noman](https://www.linkedin.com/in/muhammad-noman-7a3156339/)
- 📧 **Email:** muhammadnomanorakzai313@gmail.com
- 📍 **Location:** Peshawar, Pakistan

---

## 📄 License

This project is open-source and available for learning purposes. Feel free to use it as inspiration for your own portfolio!

---

> ⭐ **If you found this project helpful, consider giving it a star on GitHub!**
