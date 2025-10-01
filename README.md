# Tharak Koneni - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing professional experience, projects, publications, and achievements in Computer Science and Machine Learning.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Sections**: Hero, About, Skills, Publications, Experience, Projects, Achievements, and Contact
- **Contact Form**: Functional contact form with toast notifications
- **Social Integration**: Links to GitHub, LinkedIn, and email
- **Downloadable Resume**: Direct link to download resume PDF
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

- **Frontend**: React 19, Tailwind CSS
- **Icons**: Lucide React
- **UI Components**: Custom components with Radix UI primitives
- **Styling**: Tailwind CSS with custom animations
- **Form Handling**: React Hook Form with validation
- **Notifications**: Sonner toast library

## 📋 Prerequisites

- Node.js 16+ 
- Yarn package manager

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd tharak-koneni-portfolio
   ```

2. **Install dependencies**
   ```bash
   yarn install-deps
   ```

3. **Start development server**
   ```bash
   yarn dev
   ```

4. **Build for production**
   ```bash
   yarn build
   ```

## 🌐 Deployment

### Vercel
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Set build command: `yarn build`
4. Set output directory: `frontend/build`
5. Deploy!

### Netlify
1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Set build command: `yarn build`
4. Set publish directory: `frontend/build`
5. Deploy!

### Cloudflare Pages
1. Push your code to GitHub
2. Connect your GitHub repository to Cloudflare Pages
3. Set build command: `yarn build`
4. Set output directory: `frontend/build`
5. Deploy!

## 📁 Project Structure

```
tharak-koneni-portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/           # Reusable UI components
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Publications.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Achievements.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── hooks/
│   │   ├── mock.js          # Portfolio data
│   │   ├── App.js
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
├── package.json
└── README.md
```

## ✏️ Customization

### Updating Portfolio Data
Edit `/frontend/src/mock.js` to update:
- Personal information
- Skills and technologies
- Work experience
- Projects
- Publications
- Achievements
- Contact information

### Styling
- Primary styles are in `/frontend/src/index.css`
- Component-specific styles use Tailwind CSS classes
- Color scheme can be modified in `tailwind.config.js`

### Adding New Sections
1. Create a new component in `/frontend/src/components/`
2. Import and add it to `/frontend/src/App.js`
3. Update navigation in `Header.jsx`

## 🎨 Color Scheme

- Primary: Blue (#2563eb)
- Secondary: Gray (#6b7280)
- Background: White/Gray variants
- Accent: Purple (#7c3aed)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

This is a personal portfolio website. If you'd like to use it as a template:

1. Fork the repository
2. Update the portfolio data in `mock.js`
3. Customize colors and styling as needed
4. Deploy to your preferred platform

## 📄 License

MIT License - feel free to use this code for your own portfolio!

## 📧 Contact

- **Email**: tharak.env@gmail.com
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: https://github.com/tah-rak

---

Built with ❤️ using React and Tailwind CSS
