# Deployment Instructions

## GitHub Setup

### Option 1: Using GitHub CLI (Recommended)

If you have GitHub CLI installed:

```bash
# Login to GitHub (if not already logged in)
gh auth login

# Create repository and push
gh repo create sip-pour-unwind --public --source=. --remote=origin --push
```

### Option 2: Manual Setup

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `sip-pour-unwind`
3. **Do NOT** initialize with README, .gitignore, or license (we already have these)
4. Run these commands in your terminal:

```bash
cd "Sip Pour Unwind"
git remote add origin https://github.com/YOUR_USERNAME/sip-pour-unwind.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Vercel Deployment

### Prerequisites
- GitHub repository created and pushed
- Vercel account (sign up at https://vercel.com)

### Steps

1. **Go to Vercel Dashboard**
   - Visit https://vercel.com/new
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your GitHub repository `sip-pour-unwind`
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Vite (should be auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected from vercel.json)
   - **Output Directory**: `dist` (auto-detected from vercel.json)
   - **Install Command**: `npm install` (auto-detected)

4. **Environment Variables** (if needed)
   - No environment variables required for this project

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at `https://sip-pour-unwind.vercel.app` (or similar)

### Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Local Development

Before deploying, you can test locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Automatic Deployments

Once connected to Vercel:
- Every push to `main` branch triggers a production deployment
- Pull requests create preview deployments automatically
- You can view deployment status in the Vercel dashboard

## Troubleshooting

### Build Fails on Vercel

1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Test the build locally: `npm run build`

### Site Not Loading

1. Check that `vercel.json` is properly configured
2. Verify the output directory is set to `dist`
3. Check browser console for errors

### Need Help?

- Vercel Documentation: https://vercel.com/docs
- GitHub Documentation: https://docs.github.com
