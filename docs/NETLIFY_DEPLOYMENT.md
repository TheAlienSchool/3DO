# Netlify Deployment Guide for Three Days Off

## Prerequisites

- ✅ Supabase anon key (see FINDING_SUPABASE_KEY.md)
- ✅ GitHub repository pushed
- ✅ Netlify account (create at netlify.com)

---

## Part 1: Connect Repository to Netlify

### 1. Import Your Repository

1. Go to https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub**
4. Select your `3DO` repository

### 2. Configure Build Settings

Netlify should auto-detect Next.js. Verify these settings:

```
Build command: npm run build
Publish directory: .next
```

**IMPORTANT:** Before clicking "Deploy", add environment variables first!

---

## Part 2: Add Environment Variables

### In Netlify Dashboard:

1. Go to **Site settings** → **Environment variables**
2. Click **Add a variable**
3. Add these two variables:

**Variable 1:**
```
Key: NEXT_PUBLIC_SUPABASE_URL
Value: https://zehgqixuwkymdltqipiq.supabase.co
```

**Variable 2:**
```
Key: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGci...your-anon-key-here
```

4. Click **Save**

---

## Part 3: Deploy!

### Option A: First Deployment

Click **"Deploy site"** - Netlify will:
1. Pull your code from GitHub
2. Run `npm install`
3. Run `npm run build`
4. Deploy to a `.netlify.app` URL

### Option B: Trigger New Deployment

If already deployed, go to:
**Deploys** → **Trigger deploy** → **Deploy site**

---

## Part 4: Configure Custom Domain (Optional)

### If you have a domain:

1. Go to **Domain management** → **Add a domain**
2. Enter your domain (e.g., `threedaysoff.com`)
3. Follow DNS configuration instructions
4. Netlify provides free SSL certificate automatically

---

## Part 5: Enable Automatic Deployments

**Already configured!** Every time you push to your GitHub branch:
```bash
git push origin claude/code-review-01Wh9B8zNvnS8cjQu28CSyRB
```

Netlify will automatically:
1. Detect the push
2. Build and deploy
3. Show build progress in dashboard

---

## Verify Deployment

### 1. Check Build Log

In Netlify dashboard → **Deploys** → Click latest deploy

Look for:
```
✓ Build succeeded!
```

### 2. Visit Your Site

Click the preview URL (e.g., `your-site-name.netlify.app`)

### 3. Test Realtime Connection

Open browser console, should see:
```
🌊 Connected to breathing room
```

### 4. Test with Multiple Tabs

1. Open site in 2 browser tabs
2. Click "+ Person" in dev mode (if still enabled)
3. Watch wave appear in BOTH tabs! 🌊

---

## Common Issues

### Build Fails - "Missing dependencies"
```bash
# Run locally first to update package-lock.json
npm install
git add package-lock.json
git commit -m "Update dependencies"
git push
```

### Environment Variables Not Working
- Check they start with `NEXT_PUBLIC_`
- Redeploy after adding variables
- Clear site cache: **Site settings** → **Build & deploy** → **Clear cache and retry deploy**

### Supabase Connection Fails
- Verify anon key is correct (copy again from Supabase dashboard)
- Check browser console for specific error message
- Ensure Supabase project is not paused

---

## Production Checklist

Before going live:

- [ ] Remove development testing buttons (in `BreathingNetwork.tsx`)
- [ ] Verify environment variables in Netlify
- [ ] Test on mobile devices
- [ ] Check Supabase realtime connection works
- [ ] Set up custom domain (if desired)
- [ ] Enable branch deploys for testing (optional)

---

## Next Steps

Once deployed, you can:
1. Add the database table for pledges (see SUPABASE_DATABASE_SETUP.md)
2. Connect custom domain
3. Monitor realtime users in Supabase dashboard
4. View site analytics in Netlify

---

## Support

- Netlify Docs: https://docs.netlify.com
- Next.js on Netlify: https://docs.netlify.com/frameworks/next-js/
- Environment Variables: https://docs.netlify.com/environment-variables/overview/
