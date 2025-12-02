# Three Days Off Deployment Guide
*A teacher-like guide to bringing your work online*

---

## Part 1: Adding Images to Your Next.js Website

### Understanding the Image Architecture

In Next.js 14, images live in the `public` folder. This folder is special—everything inside it is served directly from your domain's root.

### Step-by-Step: Adding Images in VS Code

#### 1. **Locate the Public Folder**

```
3DO/
├── src/
│   ├── app/
│   └── components/
├── public/          ← Images go here!
│   ├── images/      ← Create this folder
│   ├── videos/      ← Videos go here
│   └── favicon.ico
```

#### 2. **Create an Images Folder**

In VS Code:
- Right-click on the `public` folder
- Select "New Folder"
- Name it `images`

#### 3. **Organize Your Images**

Create subfolders for organization:

```
public/
├── images/
│   ├── hero/              ← Homepage hero images
│   ├── press/             ← Press photos, logos
│   ├── venues/            ← Venue photos
│   ├── blog/              ← Blog post images
│   └── og-image.png       ← Social media preview image
├── videos/
│   └── THREE_DAYS_OFF__A_Festival_of_Stillness.mp4
```

#### 4. **Add Images to the Folder**

Two methods:

**Method A: Drag and Drop**
- Open your file explorer (Finder on Mac, File Explorer on Windows)
- Drag image files directly into the `public/images/` folder in VS Code
- VS Code will copy them into your project

**Method B: Copy/Paste**
- Copy image files from your computer
- Right-click the `public/images/` folder in VS Code
- Click "Reveal in File Explorer" (Windows) or "Reveal in Finder" (Mac)
- Paste your images there
- VS Code will detect the new files

#### 5. **Using Images in Your Code**

Once images are in `public/images/`, reference them like this:

```tsx
// In any component file
import Image from 'next/image'

// For static images
<Image
  src="/images/hero/meditation-space.jpg"
  alt="Contemplative meditation space"
  width={1200}
  height={800}
  className="rounded-lg"
/>

// For background images (CSS)
<div className="bg-cover bg-center" style={{backgroundImage: 'url(/images/hero/background.jpg)'}}>
  Content here
</div>

// For simple img tags
<img src="/images/press/logo.png" alt="Three Days Off Logo" />
```

#### 6. **Image Best Practices**

**File Naming:**
- Use lowercase, hyphen-separated names: `meditation-space.jpg` ✓
- Avoid spaces: `meditation space.jpg` ✗
- Be descriptive: `hero-image.jpg` better than `img1.jpg`

**File Formats:**
- **Photos**: JPG/JPEG (smaller file size)
- **Graphics with transparency**: PNG
- **Logos**: SVG (scalable) or PNG
- **Modern format**: WebP (best compression, modern browsers)

**File Sizes:**
- Resize images before adding them
- Hero images: 1920px width max
- Thumbnails: 400px width max
- Compress images using tools like TinyPNG.com

**Organization Example:**

```
public/images/
├── hero/
│   ├── homepage-meditation.jpg       (1920x1080)
│   └── preparing-for-practice.jpg    (1920x1080)
├── press/
│   ├── logo-horizontal.png           (800x200)
│   ├── logo-square.png               (500x500)
│   └── founder-photo.jpg             (800x800)
├── venues/
│   ├── meditation-center-1.jpg
│   ├── library-space-2.jpg
│   └── community-center-3.jpg
└── blog/
    ├── boundary-templates-hero.jpg
    ├── collective-pause-research.jpg
    └── sanctuary-spaces.jpg
```

#### 7. **Checking Images Work**

After adding images:
1. Save your code changes
2. Your Next.js dev server should still be running (`npm run dev`)
3. Visit your page in the browser
4. Right-click image → "Inspect" to verify it loads

**If image doesn't show:**
- Check the file path (case-sensitive!)
- Verify the image is actually in `public/images/`
- Check browser console for errors (F12 → Console tab)

---

## Part 2: Deploying to BlueHost (threedaysoff.com)

### Understanding the Deployment Process

Your Next.js site needs to be:
1. **Built** into static files
2. **Uploaded** to BlueHost
3. **Configured** to serve correctly

### Prerequisites

Before starting, you need:
- ✓ BlueHost account access
- ✓ Domain: threedaysoff.com (owned by you)
- ✓ FTP credentials from BlueHost
- ✓ Node.js installed on your computer

---

### Step 1: Prepare Your Site for Production

#### 1.1 Update Environment Configuration

Create a production environment file:

**File: `.env.production` (create in root folder)**
```bash
NEXT_PUBLIC_SITE_URL=https://threedaysoff.com
```

#### 1.2 Build Your Site

In VS Code terminal:

```bash
# Navigate to your project folder
cd /path/to/3DO

# Install dependencies (if not already done)
npm install

# Build for production
npm run build
```

This creates an `out` folder with your static website.

**What happens during build:**
- Next.js compiles your TypeScript/React code
- Optimizes images and assets
- Creates static HTML files
- Minifies CSS and JavaScript

#### 1.3 Test the Production Build Locally

```bash
# Serve the built site locally
npx serve out

# Opens at http://localhost:3000
# Test everything works before deploying
```

---

### Step 2: Set Up BlueHost for Next.js

#### 2.1 Log Into BlueHost

1. Go to bluehost.com
2. Sign in to your account
3. Go to "My Sites" or cPanel

#### 2.2 Locate Your Domain's Root Folder

In BlueHost cPanel:
1. Find "File Manager"
2. Navigate to `public_html` (this is your web root)
3. You'll upload your site here

**Folder structure will be:**
```
public_html/          ← Your site goes here
├── _next/            ← Next.js assets
├── images/
├── index.html
└── [other files]
```

---

### Step 3: Upload Your Site to BlueHost

You have two options: FTP or File Manager

#### Option A: Using FileZilla (FTP) - RECOMMENDED

**Step 1: Get FTP Credentials**
- In BlueHost cPanel, find "FTP Accounts"
- Create an FTP account or use existing credentials
- Note: hostname, username, password, port (usually 21)

**Step 2: Download FileZilla**
- Visit filezilla-project.org
- Download FileZilla Client (free)
- Install it

**Step 3: Connect to BlueHost**
In FileZilla:
- Host: `ftp.threedaysoff.com` (or IP from BlueHost)
- Username: Your FTP username
- Password: Your FTP password
- Port: 21
- Click "Quickconnect"

**Step 4: Upload Files**
- Left panel: Your computer (navigate to `3DO/out/`)
- Right panel: BlueHost server (navigate to `public_html/`)
- Select ALL files in the `out` folder
- Drag them to the right panel (to `public_html/`)
- Wait for upload to complete (may take 10-30 minutes)

#### Option B: Using BlueHost File Manager

1. In cPanel → File Manager
2. Navigate to `public_html/`
3. Click "Upload"
4. Select files from your `out` folder
5. Upload (slower than FTP)

---

### Step 4: Configure BlueHost for Next.js

#### 4.1 Create a `.htaccess` File

This tells BlueHost how to serve your Next.js site correctly.

In `public_html/`, create a file named `.htaccess`:

```apache
# Three Days Off - Next.js Configuration

# Enable HTTPS redirect
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle Next.js routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Compress files
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

**How to create in FileZilla:**
1. Right-click in `public_html/`
2. "Create new file"
3. Name it `.htaccess`
4. Right-click → "View/Edit"
5. Paste the content above
6. Save and upload

---

### Step 5: DNS and SSL Configuration

#### 5.1 Verify DNS Settings

In BlueHost:
1. Go to "Domains" section
2. Select `threedaysoff.com`
3. Verify DNS is pointing to BlueHost nameservers

If you registered elsewhere:
- Get BlueHost nameservers (in DNS section)
- Update at your domain registrar
- Wait 24-48 hours for propagation

#### 5.2 Enable SSL Certificate (HTTPS)

In BlueHost cPanel:
1. Find "SSL/TLS Status"
2. Select `threedaysoff.com`
3. Click "Run AutoSSL"
4. Wait for certificate to install (5-15 minutes)

Your site will be accessible at: `https://threedaysoff.com`

---

### Step 6: Test Your Live Site

Visit: `https://threedaysoff.com`

**Check:**
- ✓ Homepage loads correctly
- ✓ Images display
- ✓ Navigation works (click all menu items)
- ✓ Links work (press page, pledge, venues)
- ✓ HTTPS (green padlock in browser)
- ✓ Mobile responsive (resize browser)

**Common Issues:**

**Issue: "404 Not Found" on pages**
- Solution: Check `.htaccess` file is uploaded correctly
- Verify the rewrite rules are in place

**Issue: Images don't load**
- Solution: Check image paths start with `/images/` not `../images/`
- Verify images folder uploaded to `public_html/images/`

**Issue: Styling looks broken**
- Solution: Check `_next` folder uploaded completely
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)

---

## Part 3: Setting Up Subdomains

### Understanding Subdomains

A subdomain is a separate section of your website:
- Main: `threedaysoff.com`
- Subdomain: `wayof.threedaysoff.com`
- Subdomain: `blog.threedaysoff.com`

Each subdomain can host a completely different website.

---

### Creating wayof.threedaysoff.com (Stone Forger's Way)

#### Step 1: Create Subdomain in BlueHost

1. Log into BlueHost cPanel
2. Find "Subdomains" section
3. Click "Create Subdomain"
4. Enter:
   - **Subdomain**: `wayof`
   - **Domain**: Select `threedaysoff.com` from dropdown
   - **Document Root**: Auto-fills as `public_html/wayof`
5. Click "Create"

BlueHost creates: `public_html/wayof/` folder

#### Step 2: Build Stone Forger's Way Site

In your SteppingStones repository:

```bash
# Navigate to Stone Forger's Way project
cd /path/to/SteppingStones

# Install dependencies
npm install

# Build for production
npm run build
```

#### Step 3: Upload to Subdomain

Using FileZilla:
1. Connect to BlueHost (same FTP credentials)
2. Navigate to `public_html/wayof/` (right panel)
3. Upload all files from `SteppingStones/out/` (left panel)

#### Step 4: Test Subdomain

Visit: `https://wayof.threedaysoff.com`

Should load Stone Forger's Way site!

---

### Creating Subdomains on thealienschool.com

Same process, but on your thealienschool.com BlueHost account:

#### For wayof.thealienschool.com

1. Log into BlueHost (thealienschool.com account)
2. Subdomains → Create
3. Subdomain: `wayof`
4. Domain: `thealienschool.com`
5. Upload Stone Forger's Way files to `public_html/wayof/`

#### For 3do.thealienschool.com

1. Subdomains → Create
2. Subdomain: `3do`
3. Domain: `thealienschool.com`
4. Upload Three Days Off files to `public_html/3do/`

---

## Part 4: Updating Your Live Site

### When You Make Changes

After editing code in VS Code:

```bash
# 1. Build new version
npm run build

# 2. Upload ONLY changed files via FTP
# Or upload entire 'out' folder to replace everything

# 3. Test at https://threedaysoff.com
```

### Quick Update Workflow

**For small text changes:**
1. Edit file in VS Code
2. Run `npm run build`
3. Upload just that HTML file via FileZilla

**For large changes:**
1. Full rebuild: `npm run build`
2. Delete old files in `public_html/` (via FileZilla)
3. Upload entire `out` folder

---

## Troubleshooting Guide

### Site Not Loading

**Check:**
1. DNS propagation (use dnschecker.org)
2. Files uploaded to correct folder (`public_html/`)
3. `.htaccess` file present
4. BlueHost account active

### Images Not Showing

**Check:**
1. File paths start with `/images/` not relative paths
2. Image files uploaded to `public_html/images/`
3. File names match exactly (case-sensitive!)

### Subdomain Not Working

**Check:**
1. Subdomain created in BlueHost cPanel
2. Files uploaded to correct subfolder
3. Wait 1-2 hours for DNS propagation

---

## Learning Resources

### Next.js Documentation
- **Official Docs**: nextjs.org/docs
- **Learn Next.js**: nextjs.org/learn (interactive tutorial)

### BlueHost Help
- **Knowledge Base**: bluehost.com/help
- **24/7 Support**: Chat or phone support

### FTP/FileZilla
- **FileZilla Guide**: wiki.filezilla-project.org
- **Video Tutorials**: YouTube "FileZilla tutorial"

---

## Quick Reference Card

### File Locations
- **Images**: `public/images/`
- **Videos**: `public/videos/`
- **Built site**: `out/` folder
- **BlueHost root**: `public_html/`

### Common Commands
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npx serve out        # Test production build
```

### Important URLs
- **Main site**: https://threedaysoff.com
- **Stone Forger's**: https://wayof.threedaysoff.com
- **BlueHost cPanel**: bluehost.com/my-sites

---

## Need Help?

If you get stuck:

1. **Check browser console**: F12 → Console tab (shows errors)
2. **Check BlueHost logs**: cPanel → Error Log
3. **Google the error**: Copy error message, search it
4. **Ask in communities**:
   - Next.js Discord: nextjs.org/discord
   - BlueHost Support: 24/7 chat

---

*Remember: Deployment is a learning process. Be patient with yourself. Each error teaches you something about how the web works!*

---

**Summary Checklist:**

- [ ] Images added to `public/images/` folder
- [ ] Site built with `npm run build`
- [ ] Files uploaded to BlueHost via FTP
- [ ] `.htaccess` file configured
- [ ] SSL certificate installed (HTTPS)
- [ ] Subdomains created and configured
- [ ] All sites tested and working
- [ ] DNS propagated (24-48 hours)

You're ready to share Three Days Off with the world! 🎉
