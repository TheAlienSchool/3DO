# Finding Your Supabase Anon Key

## Step 1: Go to Your Project Settings

Visit:
```
https://app.supabase.com/project/zehgqixuwkymdltqipiq/settings/api
```

## Step 2: Find the "Project API keys" Section

You'll see two keys:
- **anon public** ← This is what you need! (safe for client-side)
- **service_role** ← NEVER use this in client-side code!

## Step 3: Copy the Anon Key

Click the copy icon next to the **anon public** key.

It will look like:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplaGdxaXh1d2t5bWRsdHFpcGlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwMDAwMDAsImV4cCI6MjAxNTU3NjAwMH0.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Step 4: Add to .env.local

Open `.env.local` and paste it:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://zehgqixuwkymdltqipiq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...your-key-here
```

## Step 5: Test Locally

```bash
npm run dev
```

Open http://localhost:3000 and check the browser console for:
```
🌊 Connected to breathing room
```

Success! Now let's set up Netlify...
