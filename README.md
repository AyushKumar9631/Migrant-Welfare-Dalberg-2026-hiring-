# Migrant Welfare Access - Patna

<div align="center">

## 🌐 **[VIEW LIVE WEBSITE →](https://my-project-five-navy-64.vercel.app/)**

**Improving welfare access for 500,000+ urban migrants in Patna through technology-led solutions**

---

### 📊 Quick Overview

| 🎯 **Problem** | 💡 **Solution** | 🤖 **Tech** | 💰 **Cost** |
|:---:|:---:|:---:|:---:|
| 500K+ migrants excluded from welfare benefits | AI-powered assistant + intervention strategies | Next.js, Groq AI, Vercel | ₹5 Crore / 24 months |

### ✨ Key Features

```
🤖 AI Welfare Assistant    |  📱 Mobile-First Design    |  🗺️ Interactive Solutions
  Smart chatbot helps          Responsive on all           SAATHI & PRAMAN
  navigate schemes             devices                      intervention models
```

### 🚀 Quick Links

- **[Try AI Assistant](https://my-project-five-navy-64.vercel.app/assistant)** - Chat with welfare bot
- **[Compare Solutions](https://my-project-five-navy-64.vercel.app/compare)** - SAATHI vs PRAMAN
- **[View Resources](https://my-project-five-navy-64.vercel.app/resources)** - Government schemes info

</div>

---

## Overview

This project showcases two intervention approaches to address documentation barriers and awareness gaps that prevent 500,000+ migrants from accessing government welfare benefits:

- **SAATHI**: Digital-led solution with AI chatbot
- **PRAMAN**: Community-based documentation network

## Features

- 🤖 AI-powered welfare assistant chatbot
- 🗺️ Interactive map of service centers
- 📊 Comparison tool for interventions
- 📱 Mobile-first responsive design
- ♿ WCAG 2.1 AA accessibility compliant

## Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **AI**: Groq API or Google Gemini API
- **Maps**: Leaflet.js + OpenStreetMap
- **Charts**: Recharts
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- API key from Groq or Google Gemini

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd migrant-welfare-website
```

2. Install dependencies
```bash
npm install
```

3. Create environment variables file
```bash
cp .env.example .env.local
```

4. Add your API key to `.env.local`:
```
# For Groq (recommended)
GROQ_API_KEY=your_groq_api_key_here

# OR for Google Gemini
GEMINI_API_KEY=your_gemini_api_key_here
```

5. Run development server
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Deployment on Vercel

### Via GitHub

1. Push your code to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure environment variables:
   - Add `GROQ_API_KEY` or `GEMINI_API_KEY`
6. Click "Deploy"

Your site will be live at: `https://your-project-name.vercel.app`

## Environment Variables

Required environment variables:

| Variable | Description | Where to Get |
|----------|-------------|--------------|
| `GROQ_API_KEY` | Groq API key for AI chatbot | https://console.groq.com |
| `GEMINI_API_KEY` | Google Gemini API key (alternative) | https://aistudio.google.com/app/apikey |

**Note**: You only need ONE of the above API keys.

## Project Structure

```
migrant-welfare-website/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   ├── interventions/
│   │   ├── saathi/page.tsx     # SAATHI intervention
│   │   └── praman/page.tsx     # PRAMAN intervention
│   ├── compare/page.tsx        # Comparison page
│   ├── assistant/page.tsx      # AI assistant page
│   ├── about/page.tsx          # About page
│   ├── resources/page.tsx      # Resources page
│   └── api/
│       └── chat/route.ts       # AI chat API endpoint
├── components/
│   ├── Hero.tsx
│   ├── StatsCard.tsx
│   ├── ChatInterface.tsx
│   └── ...
├── lib/
│   ├── schemes-data.ts         # Welfare scheme information
│   └── ai-utils.ts             # AI helper functions
├── public/
│   └── images/
├── styles/
│   └── globals.css
└── package.json
```

## Features Breakdown

### AI Welfare Assistant
- Multilingual support (English/Hindi)
- Answers questions about government schemes
- Eligibility checking
- Application guidance
- Powered by Groq or Gemini API

### Interactive Features
- **Patna Coverage Map**: Shows 50 documentation centers and mobile van routes
- **Comparison Tool**: Side-by-side analysis of SAATHI vs PRAMAN
- **Decision Quiz**: Recommends best intervention based on context
- **Eligibility Checker**: Quick qualification assessment

## API Key Security

⚠️ **Important Security Notes**:

- Never commit `.env.local` to Git (already in `.gitignore`)
- Never hardcode API keys in your code
- Use environment variables for all sensitive data
- Add API keys only in Vercel dashboard for production

## Cost

This prototype runs on **100% free tier** services:
- Groq: 14,400 requests/day free
- Gemini: 1,500 requests/day free
- OpenStreetMap: Free, no limits
- Vercel: Free hobby tier

**Total cost: $0**

## Performance

Target metrics:
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: 90+
- Mobile-optimized for 3G networks

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation supported
- Screen reader friendly
- High contrast text
- Semantic HTML

## Contributing

This is a prototype for an assignment submission. Not open for contributions.

## License

MIT License - Educational/Assignment Use

## Credits

- **Assignment**: Improving welfare access for urban migrants in Patna
- **Data Sources**: Government of India welfare schemes, Bihar state programs
- **Maps**: OpenStreetMap contributors
- **AI**: Groq/Google Gemini

## Support

For issues or questions about this assignment submission, contact the project author.

---

**Built with ❤️ for improving migrant welfare access in Patna**
