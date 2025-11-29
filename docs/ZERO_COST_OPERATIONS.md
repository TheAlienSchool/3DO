# Zero-Cost Operations Guide for Three Days Off

## Overview

Operating Three Days Off at zero cost using free tiers from:
- **Supabase:** Database, authentication, storage (1GB free)
- **Resend:** Email sending (3,000 emails/month free)
- **Netlify:** Hosting, forms, functions (100GB bandwidth/month free)

---

## 1. Email Infrastructure: "Stay Connected to the Practice"

### Strategy: Supabase Database + Resend Email Service

**Free Tier Limits:**
- Resend: 3,000 emails/month
- Supabase: Unlimited database rows
- No credit card required for either service

### Setup Steps:

#### A. Create Resend Account

1. Go to https://resend.com/signup
2. Sign up with GitHub (instant approval)
3. Get your API key from https://resend.com/api-keys
4. Add to Netlify environment variables:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

#### B. Verify Sending Domain (Optional for Production)

For development, Resend provides `onboarding@resend.dev` for testing.

For production:
1. Add your domain in Resend dashboard
2. Add DNS records (TXT, MX)
3. Use `practice@threedaysoff.com` as sender

#### C. Database Schema for Email Subscribers

Already created in `SUPABASE_DATABASE_SETUP.md`:
- `pledges` table includes `email` field
- `newsletter_opt_in` boolean flag
- Email confirmation workflow via `pledge_confirmations` table

#### D. Email Templates

Create in `/src/lib/email-templates.ts`:

**Welcome Email** (sent on pledge):
```
Subject: Your Three Days Off Practice Begins
From: practice@threedaysoff.com

Welcome to the practice.

You've committed to September 5-7, 2026::three days preparing mind,
body, and spirit for what matters.

What happens next:
• Regular practice reminders leading up to Sept 5
• Connection to practice spaces near you
• Resources for your preparation

This practice is always available to you.

::Three Days Off
```

**Monthly Practice Reminder:**
```
Subject: Practice continues :: [Days until Sept 5]

The practice continues.

[X] days until September 5-7, 2026.

Your preparation creates presence.

Practice spaces opening:
[List of nearby venues if available]

::Three Days Off
```

### Cost Analysis:
- **0-500 subscribers:** Free (Resend: 3,000 emails/month)
- **500-1,000 subscribers:** Free (2 emails/month = 2,000 emails)
- **1,000-1,500 subscribers:** Free (2 emails/month = 3,000 emails)

**Stays free for 1,500+ subscribers if you send bi-weekly updates**

---

## 2. Venue Application System

### Strategy: Supabase Database + Netlify Forms (Backup)

**Free Tier Limits:**
- Supabase: Unlimited rows
- Netlify Forms: 100 submissions/month free

### Database Schema for Venues

Add to your Supabase SQL editor:

```sql
-- Venue applications table
create table public.venue_applications (
  id uuid default gen_random_uuid() primary key,

  -- Venue Information
  venue_name text not null,
  venue_type text check (venue_type in ('yoga_studio', 'community_center', 'gallery', 'private_home', 'outdoor_space', 'other')),
  capacity integer check (capacity > 0),

  -- Location
  street_address text,
  city text not null,
  state_province text,
  country text not null default 'USA',
  postal_code text,
  coordinates jsonb, -- {lat: number, lng: number}

  -- Contact
  contact_name text not null,
  contact_email text not null,
  contact_phone text,
  website text,

  -- Practice Details
  practice_offerings text[], -- ['meditation', 'movement', 'silence', 'creative']
  accessibility_features text[], -- ['wheelchair', 'parking', 'transit']
  notes text,

  -- Application Status
  status text check (status in ('pending', 'approved', 'rejected', 'archived')) default 'pending',
  reviewed_at timestamp with time zone,
  reviewed_by text,

  -- Timestamps
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.venue_applications enable row level security;

-- Policy: Anyone can submit application
create policy "Anyone can submit venue application"
  on public.venue_applications
  for insert
  with check (true);

-- Policy: Public can read approved venues only
create policy "Public can read approved venues"
  on public.venue_applications
  for select
  using (status = 'approved');

-- Indexes
create index venue_applications_status_idx on public.venue_applications(status);
create index venue_applications_city_idx on public.venue_applications(city);
create index venue_applications_created_idx on public.venue_applications(created_at desc);

-- Public view for approved venues (for map/directory)
create or replace view public.approved_venues as
select
  id,
  venue_name,
  venue_type,
  capacity,
  city,
  state_province,
  country,
  coordinates,
  practice_offerings,
  accessibility_features,
  website
from public.venue_applications
where status = 'approved'
order by city, venue_name;

grant select on public.approved_venues to anon, authenticated;
```

### Admin Review System (Zero Cost)

**Option A: Supabase Dashboard (Simplest)**
1. Go to Table Editor in Supabase
2. View `venue_applications` table
3. Filter by `status = 'pending'`
4. Edit row → Change status to 'approved' or 'rejected'

**Option B: Simple Admin Page (More features)**
Create `/src/app/admin/venues/page.tsx` with basic auth:
- List all pending applications
- Approve/reject with one click
- Protected by Supabase auth (only you can access)

### Email Notifications for Venue Approval

Use Resend to notify venue owners:

```typescript
// When status changes to 'approved'
await resend.emails.send({
  from: 'practice@threedaysoff.com',
  to: venue.contact_email,
  subject: 'Your Practice Space is Approved',
  text: `
    Welcome to the network of practice spaces.

    Your venue "${venue.venue_name}" is now listed on threedaysoff.com

    Participants preparing for September 5-7, 2026 can now find your space.

    ::Three Days Off
  `
})
```

### Cost Analysis:
- **Database storage:** Free (Supabase 500MB free)
- **Form submissions:** Free (Netlify 100/month)
- **Approval emails:** Free (part of 3,000/month Resend limit)

**Stays free for up to 100 venue applications per month**

---

## 3. Video Content Hosting

### Strategy: YouTube Embedding (Recommended)

**Free Tier Limits:**
- YouTube: Unlimited storage, bandwidth, playback
- No video length limits
- No subscription required

### Option A: YouTube (Recommended - Start Here)

**Setup:**

1. **Create YouTube Account** (if you don't have one):
   - Go to https://youtube.com
   - Sign in or create account

2. **Upload Video:**
   - Click profile icon → "Create a video"
   - Upload your video file
   - Set visibility to "Unlisted" (only people with link can view)
   - Get the video ID from URL: `https://youtube.com/watch?v=VIDEO_ID`

3. **Embed in Component:**
   ```typescript
   <iframe
     width="100%"
     height="100%"
     src="https://www.youtube.com/embed/VIDEO_ID"
     title="Three Days Off: Preparation Practice"
     frameBorder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     allowFullScreen
   />
   ```

4. **Update Components:**
   ```typescript
   <ContemplativeVideoPlayer
     src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
     title="Three Days Off: Preparation Practice"
     description="Thousands preparing for presence together across the globe"
   />
   ```

**Why YouTube:**
- ✅ Unlimited bandwidth (never pay overages)
- ✅ Professional video quality options (auto-adaptive)
- ✅ Built-in analytics (view counts, watch time)
- ✅ No storage size limits
- ✅ Fast CDN globally
- ✅ One-time setup, no maintenance

### Option B: Supabase Storage (Backup for Non-Video Assets)

For images, PDFs, and other smaller assets:

1. **Enable Supabase Storage:**
   - Go to https://app.supabase.com/project/zehgqixuwkymdltqipiq/storage/buckets
   - Create bucket: `media` (public)

2. **Upload via dashboard:**
   - Storage → media → Upload file
   - Copy public URL for use in components

### Cost Analysis:

**YouTube:**
- Cost: Free (always)
- Bandwidth: Unlimited
- Storage: Unlimited
- Best for: Video content

**Supabase Storage:**
- Cost: Free up to 2GB bandwidth/month
- Best for: Images, documents, non-video files
- Upgrade at: Heavy traffic (>10,000 visitors/month)

**Verdict:**
- **Start with YouTube for all video content** - zero cost at any scale
- Use Supabase Storage for images and supporting assets

---

## 4. Link Sharing Guide

When sharing links or resources for placement in the documentation, use this naming convention for clarity and optimal placement:

### Naming Format

```
[SECTION]_[LOCATION]_[BRIEF_DESCRIPTION]
```

### Examples

**Video Hosting Section:**
- `VIDEO_SETUP_YOUTUBE_UPLOAD_TUTORIAL`
- `VIDEO_ALT_SUPABASE_STORAGE_OPTION`
- `VIDEO_COMPARISON_BANDWIDTH_ANALYSIS`

**Email Infrastructure Section:**
- `EMAIL_SETUP_RESEND_ACCOUNT_CREATION`
- `EMAIL_TEMPLATE_WELCOME_EMAIL_EXAMPLE`
- `EMAIL_MONITORING_DASHBOARD_SCREENSHOT`

**Venue Applications Section:**
- `VENUES_FORM_HTML_TEMPLATE`
- `VENUES_ADMIN_REVIEW_WORKFLOW_DIAGRAM`
- `VENUES_APPROVAL_EMAIL_SAMPLE`

### Placement Guidelines

1. **Research/Reference Links**
   - Place at top of relevant section
   - Prefix: `[RESEARCH]` or `[REFERENCE]`
   - Example: `[RESEARCH]_YOUTUBE_EMBEDDING_BEST_PRACTICES`

2. **Setup Instructions**
   - Place under "Setup" subsection
   - Prefix: `[SETUP]` or `[GUIDE]`
   - Example: `[SETUP]_SUPABASE_DATABASE_CREATION_STEPS`

3. **Templates/Examples**
   - Place in code blocks or separate sections
   - Prefix: `[TEMPLATE]` or `[EXAMPLE]`
   - Example: `[TEMPLATE]_EMAIL_WELCOME_MESSAGE`

4. **Comparisons/Analysis**
   - Place in "Cost Analysis" or decision sections
   - Prefix: `[COMPARISON]` or `[ANALYSIS]`
   - Example: `[COMPARISON]_HOSTING_OPTIONS_COST_BREAKDOWN`

### How to Share

When you want to add a link or resource:

1. **Provide the link or content**
2. **Use the naming format** to indicate where it fits
3. **Specify the section** (e.g., "Video Hosting" or "Email Infrastructure")
4. **Add context** about why this resource is useful

**Example format:**
```
Resource: [SETUP]_YOUTUBE_PRIVACY_SETTINGS_GUIDE
Section: Video Content Hosting
Link: [URL]
Context: Shows how to set videos to "Unlisted" for optimal privacy control
Placement: Under "Upload Video" step
```

---

## 5. Complete Zero-Cost Stack Summary

| Service | Purpose | Free Tier | When to Upgrade |
|---------|---------|-----------|------------------|
| **Netlify** | Website hosting | 100GB bandwidth/month | >100,000 visitors/month |
| **YouTube** | Video hosting | Unlimited (always free) | Never (unless you want YouTube Premium features) |
| **Supabase** | Database + Auth + Storage | 500MB DB, 1GB storage, 2GB bandwidth | >10,000 active users |
| **Resend** | Email sending | 3,000 emails/month | >1,500 subscribers with bi-weekly emails |
| **Netlify Forms** | Venue applications backup | 100 submissions/month | >100 venues/month |

### Cost Projection:

**0-1,000 users:** $0/month
**1,000-5,000 users:** $0/month (stay within limits)
**5,000-10,000 users:** $0-25/month (may need Resend Pro: $20/month)
**10,000+ users:** $50-100/month (Supabase Pro: $25/month + Resend Pro: $20/month)

---

## 5. Implementation Checklist

### Email System
- [ ] Create Resend account
- [ ] Get API key
- [ ] Add to Netlify environment variables
- [ ] Test welcome email on pledge submission
- [ ] Schedule monthly practice reminders

### Venue Applications
- [ ] Run SQL to create `venue_applications` table
- [ ] Create venue application form page
- [ ] Set up admin review workflow
- [ ] Create approved venues directory page

### Video Hosting
- [ ] Create YouTube account
- [ ] Upload video as "Unlisted"
- [ ] Get YouTube video ID
- [ ] Update ContemplativeVideoPlayer component with YouTube embed URL
- [ ] Test playback on deployed site
- [ ] (Optional) Upload images/thumbnails to Supabase Storage

### Monitoring
- [ ] Check Resend email logs weekly
- [ ] Review venue applications in Supabase dashboard
- [ ] Monitor bandwidth usage in Netlify analytics

---

## Next Steps

Ready to implement? I can:
1. Create the email service integration code
2. Build the venue application form
3. Set up the admin review dashboard
4. Configure Supabase Storage for videos

Let me know which you'd like to start with!
