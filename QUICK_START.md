# Quick Setup Guide - Start Here

## Step 1: Get Your Supabase Anon Key (Do This Now!)

### Go to this exact URL:
```
https://app.supabase.com/project/zehgqixuwkymdltqipiq/settings/api
```

### Find "Project API keys" section

You'll see two keys:

**✅ USE THIS ONE:**
```
anon public
eyJhbGci... (long string)
```
👆 Click the copy icon next to this key

**❌ NEVER USE THIS:**
```
service_role secret
ey... (different string)
```

### Step 2: Update Your .env.local

Open `.env.local` and replace the line:
```bash
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

With:
```bash
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...paste-your-actual-key-here
```

### Step 3: Test Locally

```bash
npm run dev
```

Open http://localhost:3000 and check browser console for:
```
🌊 Connected to breathing room
```

---

## Once Key is Added - Netlify Setup

### Option 1: Quick Deploy (Recommended)

**Deploy Now Button:**
1. Push your latest code to GitHub
2. Go to https://app.netlify.com
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub → Select your `3DO` repository
5. **BEFORE clicking Deploy**, click "Show advanced" or "Add environment variables"
6. Add these TWO variables:

```
NEXT_PUBLIC_SUPABASE_URL = https://zehgqixuwkymdltqipiq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = (paste your key here)
```

7. Click **Deploy site**

### Option 2: Manual Setup

If you've already deployed without env vars:

1. Go to your site in Netlify
2. **Site settings** → **Environment variables**
3. Click **Add a variable**
4. Add the same two variables above
5. **Deploys** → **Trigger deploy** → **Deploy site**

---

## Build Settings (Netlify Should Auto-Detect)

```
Build command: npm run build
Publish directory: .next
```

If not auto-detected, set these manually in **Build settings**.

---

## Troubleshooting

### "Build failed - Font error"
This is normal in restricted environments. Netlify will handle this fine.

### "Can't connect to Supabase"
- Check the anon key is correct (copy again from Supabase)
- Make sure both env vars are set in Netlify
- Redeploy after adding variables

### "Site deployed but wave doesn't work"
- Open browser console
- Look for any errors
- Verify env vars in Netlify settings

---

## Next Step: Get That Key!

**Right now, do this:**
1. Visit: https://app.supabase.com/project/zehgqixuwkymdltqipiq/settings/api
2. Copy the **anon public** key
3. Update `.env.local`
4. Let me know when done - I'll help test!
