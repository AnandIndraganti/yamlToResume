# 🚀 Deployment Guide: Vercel + Railway

## 🏗️ **Backend Deployment (Railway)**

### 1. **Push to GitHub**

```bash
# Initialize git repo (if not already done)
git init
git add .
git commit -m "Ready for deployment"

# Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/yaml-resume-generator
git push -u origin main
```

### 2. **Deploy to Railway**

1. Go to [Railway.app](https://railway.app)
2. Sign up/Login with GitHub
3. Click **"New Project"** → **"Deploy from GitHub repo"**
4. Select your repository
5. Railway will auto-detect it's a Node.js project

### 3. **Configure Railway Environment Variables**

In Railway dashboard → **Variables** tab, add:

```
PORT=8080
NODE_ENV=production
FRONTEND_URL=https://YOUR_VERCEL_APP.vercel.app
```

### 4. **Set Railway Root Directory**

In Railway → **Settings** → **Build**:

```
Root Directory: backend
Build Command: npm install && npm run build
Start Command: npm start
```

---

## 🌐 **Frontend Deployment (Vercel)**

### 1. **Deploy to Vercel**

1. Go to [Vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click **"New Project"** → Import your repository
4. Set **Framework Preset**: Vite
5. Set **Root Directory**: `frontend`

### 2. **Configure Vercel Environment Variables**

In Vercel dashboard → **Settings** → **Environment Variables**:

```
Name: VITE_API_URL
Value: https://YOUR_RAILWAY_APP.railway.app
```

### 3. **Update Build Settings**

```
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

---

## 🔄 **Final Configuration Steps**

### 1. **Update Railway with Vercel URL**

After Vercel deployment, update Railway environment:

```
FRONTEND_URL=https://your-actual-vercel-url.vercel.app
```

### 2. **Test the Deployment**

1. Visit your Vercel URL
2. Try creating a resume
3. Check both frontend and backend logs

---

## 🆓 **Free Tier Limits**

### **Railway Free Tier:**

- 500 hours/month
- 1GB RAM
- 1GB storage
- Perfect for your app!

### **Vercel Free Tier:**

- 100GB bandwidth/month
- Unlimited static sites
- Perfect for React apps!

---

## 🔧 **Troubleshooting**

### **Backend Issues:**

- Check Railway logs: `railway logs`
- Ensure LaTeX packages are installing
- Verify environment variables

### **Frontend Issues:**

- Check Vercel build logs
- Verify API URL is correct
- Check CORS settings

### **CORS Issues:**

If you get CORS errors, ensure your Railway `FRONTEND_URL` exactly matches your Vercel URL (with https://).

---

## 📝 **Deployment Checklist**

- [ ] Backend deployed to Railway
- [ ] Frontend deployed to Vercel
- [ ] Environment variables configured
- [ ] CORS properly set up
- [ ] Test PDF generation works
- [ ] Test all sections render correctly

**Your app will be available at:**

- Frontend: `https://your-app.vercel.app`
- Backend: `https://your-app.railway.app`
