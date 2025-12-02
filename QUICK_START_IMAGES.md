# Quick Start: Adding Images to Three Days Off

*A visual, step-by-step guide*

---

## Your Current Project Structure

```
3DO/
├── src/
│   ├── app/
│   │   ├── page.tsx              ← Homepage
│   │   ├── press/
│   │   ├── venues/
│   │   └── ...
│   └── components/
├── public/                        ← ADD IMAGES HERE! 👈
│   ├── favicon.ico
│   └── [empty - you'll add images]
├── package.json
└── README.md
```

---

## Step 1: Create Images Folder (30 seconds)

**In VS Code:**

1. Look at the left sidebar (File Explorer)
2. Find the `public` folder
3. Right-click `public`
4. Select "New Folder"
5. Type: `images`
6. Press Enter

```
public/
├── images/          ← You just created this!
└── favicon.ico
```

---

## Step 2: Add Subfolders (1 minute)

Create organization folders inside `images/`:

**Right-click `images` folder → New Folder** (repeat for each):

```
public/images/
├── hero/           ← Homepage main images
├── press/          ← Press photos, logos
├── venues/         ← Venue photos
├── blog/           ← Blog post images
└── team/           ← Team/founder photos
```

---

## Step 3: Add Your Images (2 minutes)

### Method A: Drag & Drop (Easiest!)

1. Open your computer's file folder (where your images are)
2. In VS Code, click on `public/images/hero/`
3. Drag image files from your folder → VS Code
4. They'll appear in the folder!

### Method B: Copy-Paste

1. Select images on your computer
2. Copy (Ctrl+C / Cmd+C)
3. In VS Code, right-click `public/images/hero/`
4. Click "Reveal in Finder" (Mac) or "Reveal in File Explorer" (Windows)
5. Paste (Ctrl+V / Cmd+V)
6. Return to VS Code - images are there!

---

## Step 4: Use Images in Your Code

### Example 1: Homepage Hero Image

**File: `src/app/page.tsx`**

```tsx
// Add this import at the top
import Image from 'next/image'

// Then inside your component:
<section className="relative">
  <Image
    src="/images/hero/meditation-space.jpg"
    alt="Contemplative meditation space for Three Days Off"
    width={1920}
    height={1080}
    className="rounded-lg"
  />
</section>
```

### Example 2: Press Page Logo

**File: `src/app/press/page.tsx`**

```tsx
<img
  src="/images/press/logo-horizontal.png"
  alt="Three Days Off Logo"
  className="h-20"
/>
```

### Example 3: Background Image

```tsx
<div
  className="min-h-screen bg-cover bg-center"
  style={{backgroundImage: 'url(/images/hero/background.jpg)'}}
>
  <h1>Welcome to Three Days Off</h1>
</div>
```

---

## Step 5: See It Work! (Instant)

Your dev server auto-refreshes:

1. Make sure `npm run dev` is running
2. Open browser to `http://localhost:3000`
3. Your image appears! ✨

**Not working?**
- Check the path: `/images/hero/your-file.jpg` (starts with `/`)
- Check spelling (case-sensitive!)
- Check file actually exists in folder
- Press F12 in browser → Console tab (shows errors)

---

## Image Best Practices

### File Naming ✓

```
✓ meditation-space.jpg
✓ founder-photo-2024.png
✓ venue-library-1.jpg

✗ Meditation Space.jpg    (no spaces)
✗ IMG_1234.jpg           (not descriptive)
✗ PHOTO.JPG              (not specific)
```

### File Sizes

Before adding images, resize them:

| Use Case | Recommended Size | Example |
|----------|------------------|---------|
| Hero images | 1920 x 1080 px | Homepage background |
| Feature images | 1200 x 800 px | Press photos |
| Thumbnails | 400 x 300 px | Blog previews |
| Logos | 800 x 200 px | Horizontal logo |
| Profile photos | 400 x 400 px | Team photos |

**Compress images** at:
- tinypng.com (drag & drop, free)
- squoosh.app (in browser)
- ImageOptim (Mac app)

### File Formats

| Format | When to Use | Example |
|--------|-------------|---------|
| **JPG** | Photos, complex images | Hero backgrounds, venue photos |
| **PNG** | Logos, graphics with transparency | Three Days Off logo, icons |
| **SVG** | Simple logos, icons | Scalable icons, simple graphics |
| **WebP** | Modern sites (best compression) | All images (modern browsers) |

---

## Example: Complete Homepage Setup

### Folder Structure

```
public/images/
├── hero/
│   ├── homepage-background.jpg       (1920x1080, 300KB)
│   └── meditation-practice.jpg       (1920x1080, 250KB)
├── press/
│   ├── logo-horizontal.png           (800x200, 50KB)
│   ├── logo-square.png               (500x500, 40KB)
│   └── founder-kamau.jpg             (600x600, 120KB)
└── og-image.jpg                      (1200x630, social media)
```

### Code Usage

**Homepage (`src/app/page.tsx`):**

```tsx
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{backgroundImage: 'url(/images/hero/homepage-background.jpg)'}}
      >
        <div className="container-contemplative py-32">
          <h1 className="text-hero text-white">
            THREE DAYS OFF
          </h1>
        </div>
      </section>

      {/* Feature Section with Next Image */}
      <section className="bg-warm-white py-20">
        <div className="container-contemplative">
          <Image
            src="/images/hero/meditation-practice.jpg"
            alt="Person practicing meditation"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  )
}
```

---

## Checking Your Work

### Browser DevTools (F12)

**Console Tab:**
- Shows errors if images don't load
- Look for "404" errors (file not found)

**Network Tab:**
- Click "Img" filter
- Shows all images loading
- Red = failed, Green = success

**Elements Tab:**
- Right-click image → Inspect
- See actual path used
- Verify image tag is correct

---

## Common Mistakes & Fixes

### ❌ Image path doesn't start with `/`

```tsx
// Wrong:
<img src="images/hero/photo.jpg" />

// Right:
<img src="/images/hero/photo.jpg" />
```

### ❌ File name doesn't match

```
Folder: meditation-space.jpg
Code:   meditation-Space.jpg  ← Capital S!
```

Linux/Unix servers are case-sensitive!

### ❌ File not in public folder

```tsx
// Wrong location:
src/images/photo.jpg  ❌

// Right location:
public/images/photo.jpg  ✓
```

### ❌ Forgot to save file

After adding image path to code:
- Press Ctrl+S (Windows) or Cmd+S (Mac)
- VS Code shows unsaved dot • next to filename

---

## Next Steps

Once images are working locally:

1. **Test all pages** - Click through site, verify images
2. **Check mobile** - Resize browser, images responsive?
3. **Optimize sizes** - Compress large images
4. **Build for production** - `npm run build`
5. **Deploy to BlueHost** - See `DEPLOYMENT_GUIDE.md`

---

## Quick Reference

| Task | Command/Action |
|------|----------------|
| Create folder | Right-click → New Folder |
| Add image | Drag file into VS Code folder |
| Image path | Always starts with `/images/` |
| Test locally | `npm run dev` |
| Check errors | F12 → Console |
| Build site | `npm run build` |

---

## Visual Checklist

Before deploying:

- [ ] All images in `public/images/` folder
- [ ] Images organized in subfolders
- [ ] File names lowercase, hyphen-separated
- [ ] Images compressed (<500KB each)
- [ ] Images display correctly in browser
- [ ] No console errors (F12)
- [ ] Mobile responsive (resize browser)
- [ ] All image alt tags filled in

---

**You're ready to add visual beauty to Three Days Off!** 🎨

*Remember: Start small. Add one image, see it work, then add more. Learning by doing!*
