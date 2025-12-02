# Setting Up Subdomains: A Visual Guide
*Making wayof.threedaysoff.com and wayof.thealienschool.com work together*

---

## Understanding Your Domain Structure

Think of domains like a house address system:

```
🏢 Main Building: thealienschool.com
   ├── 🚪 Wing 1: 3do.thealienschool.com (Three Days Off)
   └── 🚪 Wing 2: wayof.thealienschool.com (Stone Forger's Way)

🏢 Main Building: threedaysoff.com
   └── 🚪 Wing 1: wayof.threedaysoff.com (Stone Forger's Way)
```

Each "wing" (subdomain) is a separate website with its own content!

---

## What You're Creating

### Domain Map

```
┌─────────────────────────────────────────────┐
│         threedaysoff.com                    │
│  (Main Three Days Off Website)              │
│                                             │
│  • Homepage                                 │
│  • Press page                               │
│  • Venues                                   │
│  • Global calendar                          │
└─────────────────────────────────────────────┘
                    │
                    ├─── wayof.threedaysoff.com
                    │    (Stone Forger's Way)
                    │
                    └─── [future subdomains]


┌─────────────────────────────────────────────┐
│         thealienschool.com                  │
│  (The Alien School Main Site)               │
│                                             │
│  • School homepage                          │
│  • Projects                                 │
│  • About                                    │
└─────────────────────────────────────────────┘
                    │
                    ├─── 3do.thealienschool.com
                    │    (Mirror of Three Days Off)
                    │
                    └─── wayof.thealienschool.com
                         (Mirror of Stone Forger's Way)
```

---

## Part 1: Setting Up wayof.threedaysoff.com

### Prerequisites

- [ ] BlueHost account with threedaysoff.com
- [ ] Stone Forger's Way code (TheAlienSchool/SteppingStones repo)
- [ ] FileZilla installed

---

### Step 1: Log Into BlueHost

1. Go to **bluehost.com**
2. Click "Log In" (top right)
3. Enter your credentials
4. Click "My Sites" or go to cPanel

---

### Step 2: Create the Subdomain

**In BlueHost cPanel:**

1. Scroll to "Domains" section
2. Click **"Subdomains"**
3. You'll see a form:

```
┌─────────────────────────────────────────────┐
│  Create a Subdomain                         │
├─────────────────────────────────────────────┤
│                                             │
│  Subdomain: [wayof]                         │
│             ↑ Type this                     │
│                                             │
│  Domain: [threedaysoff.com ▼]              │
│          ↑ Select from dropdown            │
│                                             │
│  Document Root: public_html/wayof          │
│                 ↑ Auto-fills               │
│                                             │
│  [ Create ]                                 │
└─────────────────────────────────────────────┘
```

4. Click **"Create"**

✅ **Success!** BlueHost creates:
- Subdomain: `wayof.threedaysoff.com`
- Folder: `public_html/wayof/`

---

### Step 3: Build Stone Forger's Way

**In VS Code Terminal:**

```bash
# Navigate to SteppingStones repo
cd /path/to/TheAlienSchool/SteppingStones

# Install dependencies (first time only)
npm install

# Build for production
npm run build

# This creates an 'out' folder with your website
```

**What's in the `out` folder:**
```
out/
├── index.html           ← Homepage
├── _next/               ← Next.js assets
├── images/              ← Images
└── [other pages]
```

---

### Step 4: Upload to Subdomain via FTP

**Open FileZilla:**

1. **Connect to BlueHost:**
   - Host: `ftp.threedaysoff.com`
   - Username: [your FTP username]
   - Password: [your FTP password]
   - Port: `21`
   - Click **"Quickconnect"**

2. **Navigate on Server (right panel):**
   ```
   Remote site: /public_html/
                └── wayof/     ← Go here!
   ```

3. **Navigate on Computer (left panel):**
   ```
   Local site: /path/to/SteppingStones/out/
   ```

4. **Upload:**
   - Select ALL files in `out` folder (left panel)
   - Drag to `wayof` folder (right panel)
   - Wait for upload (5-15 minutes)

**FileZilla looks like this:**
```
┌──────────────────────┬──────────────────────┐
│  Your Computer       │  BlueHost Server     │
├──────────────────────┼──────────────────────┤
│  SteppingStones/     │  public_html/        │
│  └── out/            │  └── wayof/          │
│      ├── index.html  │      ← drag here     │
│      ├── _next/      │                      │
│      └── images/     │                      │
└──────────────────────┴──────────────────────┘
         Drag →→→→→→→→→→→→→→→→
```

---

### Step 5: Test Your Subdomain

1. Open browser
2. Go to: **`https://wayof.threedaysoff.com`**
3. Stone Forger's Way should load! 🎉

**If it doesn't work yet:**
- Wait 10-15 minutes (DNS propagation)
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
- Check files uploaded correctly in FileZilla

---

## Part 2: Setting Up 3do.thealienschool.com

### Step 1: Log Into Your OTHER BlueHost Account

You need to log into the BlueHost account that manages **thealienschool.com** (different from threedaysoff.com).

**Two scenarios:**

#### Scenario A: Both domains in same BlueHost account
- Log in once
- You can access both domains

#### Scenario B: Domains in separate accounts (most common)
- Log out of threedaysoff.com account
- Log into thealienschool.com account
- Navigate to cPanel

---

### Step 2: Create 3do Subdomain

**In thealienschool.com cPanel:**

1. Go to **"Subdomains"**
2. Fill in:

```
Subdomain: [3do]
Domain: [thealienschool.com ▼]
Document Root: public_html/3do
```

3. Click **"Create"**

✅ Creates: `3do.thealienschool.com` → `public_html/3do/`

---

### Step 3: Upload Three Days Off Site

**Build the site first:**

```bash
# In your 3DO folder
cd /path/to/3DO

npm run build
# Creates 'out' folder
```

**Upload via FileZilla:**

1. Connect to thealienschool.com FTP:
   - Host: `ftp.thealienschool.com`
   - [credentials for this account]

2. Navigate to: `public_html/3do/`

3. Upload all files from `3DO/out/`

4. Test: **`https://3do.thealienschool.com`**

---

### Step 4: Create wayof.thealienschool.com

**Same process:**

1. Create subdomain: `wayof.thealienschool.com`
2. Upload Stone Forger's Way files to `public_html/wayof/`
3. Test: **`https://wayof.thealienschool.com`**

---

## Part 3: Managing Multiple Subdomains

### Your Complete Site Map

After setup, you'll have:

```
🌐 threedaysoff.com
   ├── https://threedaysoff.com (main site)
   └── https://wayof.threedaysoff.com (Stone Forger's Way)

🌐 thealienschool.com
   ├── https://thealienschool.com (school site)
   ├── https://3do.thealienschool.com (Three Days Off)
   └── https://wayof.thealienschool.com (Stone Forger's Way)
```

---

### Understanding the Relationship

**Think of it like this:**

- **threedaysoff.com** = The official home for Three Days Off
  - `wayof.threedaysoff.com` = Companion practice (Stone Forger's Way)

- **thealienschool.com** = The parent organization
  - `3do.thealienschool.com` = One of the school's projects
  - `wayof.thealienschool.com` = Another school project

**Why multiple locations?**
- **Branding**: Official site at threedaysoff.com
- **Archive**: School portfolio at thealienschool.com
- **Flexibility**: Update one without affecting the other

---

## Common Questions

### Q: Do I need to upload twice?

**A: Yes!** Each domain is separate.

- Upload to `threedaysoff.com` → serves threedaysoff.com
- Upload to `thealienschool.com` → serves 3do.thealienschool.com

They're independent copies.

### Q: How do I update sites?

**For threedaysoff.com:**
1. Make changes in VS Code
2. Run `npm run build`
3. FTP to `threedaysoff.com`
4. Upload to `public_html/`

**For 3do.thealienschool.com:**
1. Same changes (or different)
2. Run `npm run build`
3. FTP to `thealienschool.com`
4. Upload to `public_html/3do/`

### Q: Can subdomains have their own subdomains?

**A: Technically yes, but not recommended.**

This works:
- `wayof.threedaysoff.com` ✓

This is confusing:
- `practice.wayof.threedaysoff.com` 😵

Keep it simple!

### Q: How long until subdomains work?

**A: Usually instant, but can take up to 24 hours.**

- Subdomain creation: Instant
- DNS propagation: Up to 24 hours
- SSL certificate: 15-30 minutes

Be patient on first setup!

---

## Folder Structure on BlueHost

### threedaysoff.com account:

```
public_html/
├── index.html           ← Main site (threedaysoff.com)
├── _next/
├── images/
├── press/
└── wayof/               ← Subdomain (wayof.threedaysoff.com)
    ├── index.html
    ├── _next/
    └── images/
```

### thealienschool.com account:

```
public_html/
├── index.html           ← School site (thealienschool.com)
├── about/
├── projects/
├── 3do/                 ← Subdomain (3do.thealienschool.com)
│   ├── index.html
│   ├── _next/
│   └── images/
└── wayof/               ← Subdomain (wayof.thealienschool.com)
    ├── index.html
    ├── _next/
    └── images/
```

---

## Step-by-Step Checklist

### For wayof.threedaysoff.com:

- [ ] Log into BlueHost (threedaysoff.com)
- [ ] Create subdomain: `wayof`
- [ ] Build SteppingStones: `npm run build`
- [ ] Upload to `public_html/wayof/` via FTP
- [ ] Test: `https://wayof.threedaysoff.com`
- [ ] Verify SSL (green padlock)

### For 3do.thealienschool.com:

- [ ] Log into BlueHost (thealienschool.com)
- [ ] Create subdomain: `3do`
- [ ] Build 3DO: `npm run build`
- [ ] Upload to `public_html/3do/` via FTP
- [ ] Test: `https://3do.thealienschool.com`
- [ ] Verify SSL (green padlock)

### For wayof.thealienschool.com:

- [ ] Already logged into BlueHost (thealienschool.com)
- [ ] Create subdomain: `wayof`
- [ ] Build SteppingStones: `npm run build`
- [ ] Upload to `public_html/wayof/` via FTP
- [ ] Test: `https://wayof.thealienschool.com`
- [ ] Verify SSL (green padlock)

---

## Troubleshooting

### Subdomain shows "coming soon" page

**Fix:**
- Files not uploaded yet
- Upload files to correct subdomain folder
- Clear browser cache

### Subdomain shows 404 error

**Fix:**
- Check `index.html` exists in folder
- Verify `.htaccess` file present
- Check file permissions (ask BlueHost support)

### Subdomain not secure (no HTTPS)

**Fix:**
1. Go to BlueHost cPanel
2. "SSL/TLS Status"
3. Find your subdomain
4. Click "Run AutoSSL"
5. Wait 15-30 minutes

### Images don't load on subdomain

**Fix:**
- Verify images uploaded to subdomain's images folder
- Check image paths start with `/images/`
- Ensure images in correct subfolder

---

## Advanced: Linking Between Sites

### From Three Days Off → Stone Forger's Way

**In any 3DO page:**

```tsx
<a
  href="https://wayof.threedaysoff.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Explore The Stone Forger's Way
</a>
```

### From Stone Forger's Way → Three Days Off

**In SteppingStones pages:**

```tsx
<Link href="https://threedaysoff.com">
  Return to Three Days Off
</Link>
```

---

## Quick Command Reference

### Building Sites

```bash
# Three Days Off
cd /path/to/3DO
npm run build

# Stone Forger's Way
cd /path/to/SteppingStones
npm run build
```

### FileZilla Connections

```
Three Days Off:
Host: ftp.threedaysoff.com
Port: 21

The Alien School:
Host: ftp.thealienschool.com
Port: 21
```

---

## Final Architecture Diagram

```
                Your Code (VS Code)
                        │
                        │ npm run build
                        ↓
                   'out' folder
                        │
                        │ FTP Upload
                        ↓
        ┌───────────────┴───────────────┐
        │                               │
        ↓                               ↓
    BlueHost                        BlueHost
  (threedaysoff.com)            (thealienschool.com)
        │                               │
        ├── threedaysoff.com            ├── thealienschool.com
        └── wayof.threedaysoff.com      ├── 3do.thealienschool.com
                                        └── wayof.thealienschool.com

            Visitors Access:
            ↓              ↓              ↓
         Browser ──→ DNS ──→ BlueHost ──→ Your Site
```

---

**You now have a complete multi-site architecture!** 🏗️

*Each site can be updated independently. Each serves its own purpose. Together they form The Alien School ecosystem.*

---

## Need More Help?

**BlueHost Support:**
- Chat: Available 24/7 in cPanel
- Phone: Listed in your account
- Knowledge Base: bluehost.com/help

**DNS Checker:**
- Use dnschecker.org to verify subdomain propagation
- Enter your subdomain URL
- Check if it resolves globally

**Video Tutorials:**
- Search YouTube: "BlueHost subdomain setup"
- Search YouTube: "FileZilla upload tutorial"

---

*Remember: You're learning system architecture! Take it step by step. Each subdomain you create teaches you more about how the web works.*
