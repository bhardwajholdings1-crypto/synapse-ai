# ◈ SYNAPSE AI
### A BhardwajTechnologieS Initiative
**Built by Arnav Bhardwaj — CEO / Chairman, BhardwajTechnologieS**

---

## What is SYNAPSE AI?
SYNAPSE AI is a unified frontier AI aggregator giving access to 6 of the world's most powerful AI models through a single sci-fi interface. Built for the 22nd century.

## Models
| Model | Provider | Cost |
|---|---|---|
| SYNAPSE NEMOTRON | NVIDIA | FREE |
| SYNAPSE DEEPSEEK | DeepSeek | 5M FREE |
| SYNAPSE GROK | xAI | Trial |
| SYNAPSE GEMINI | Google | Free Tier |
| SYNAPSE KIMI | Moonshot AI | Paid |
| SYNAPSE GPT | OpenAI | Paid |

## Setup Instructions

### Step 1 — Add Supabase credentials
Open `login.html` and `app.html`, find these lines and replace:
```
const SUPABASE_URL  = 'YOUR_SUPABASE_URL'
const SUPABASE_ANON = 'YOUR_SUPABASE_ANON_KEY'
```
Get these from: supabase.com → Your Project → Settings → API

### Step 2 — Add app icons
Create icons in `assets/icons/` folder:
- icon-72.png, icon-96.png, icon-128.png
- icon-144.png, icon-192.png, icon-512.png
Use Canva (free) to create a ◈ SYNAPSE AI icon in purple on black.

### Step 3 — Deploy to GitHub Pages
1. Push all files to your `synapse-ai` GitHub repo
2. Go to repo Settings → Pages → Source: main branch
3. Your site goes live at: `https://YOUR_USERNAME.github.io/synapse-ai`

### Step 4 — Use the app
1. Visit your live URL
2. Click Get Access → Create Account
3. Log in → Enter your OpenRouter API key in Settings
4. Start chatting with all 6 models

## File Structure
```
synapse-ai/
├── index.html      Landing page
├── app.html        Main AI chat app
├── login.html      Login / Signup
├── style.css       All styles
├── manifest.json   PWA config
├── sw.js           Service worker (offline)
└── assets/icons/   App icons
```

## To make changes
- **Add a model**: Edit MODELS array in `app.html` and `index.html`
- **Change colors**: Edit `:root` variables in `style.css`
- **Change AI behavior**: Edit system prompt in `app.html` settings or directly in the textarea
- **Change branding**: Search and replace "SYNAPSE AI" or "BhardwajTechnologieS"

---
© 2026 BhardwajTechnologieS. All rights reserved.
