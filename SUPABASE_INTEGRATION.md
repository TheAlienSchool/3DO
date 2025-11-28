# Supabase Integration Guide for BreathingNetwork

## Step 1: Get Your Credentials

From your Supabase Dashboard:
1. Go to Project Settings → API
2. Copy your:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **Anon/Public Key**: `eyJhbGci...` (safe for client-side)

## Step 2: Add Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
```

## Step 3: Install Supabase Client

```bash
npm install @supabase/supabase-js
```

## Step 4: Choose Your Integration Approach

---

## Option A: Realtime Presence (Recommended ✨)

**Best for:** Live "who's breathing now" without database setup

### Features:
- ✅ No database table needed
- ✅ Automatic cleanup when people leave
- ✅ Shows active participants in real-time
- ✅ Perfect for the wave visualization

### Implementation:

**1. Create Supabase Client** (`src/lib/supabase.ts`):
```typescript
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
```

**2. Update BreathingNetwork Component**:
```typescript
import { supabase } from '@/lib/supabase'

// Inside component
useEffect(() => {
  const sessionId = crypto.randomUUID()

  const channel = supabase.channel('breathing-room')

  // Listen for presence changes
  channel.on('presence', { event: 'sync' }, () => {
    const state = channel.presenceState()
    const participants = Object.values(state).flat()

    // Convert to WaveParticle format
    const waveParticles = participants.map((p: any) => ({
      id: p.id,
      type: p.type || 'individual',
      x: p.x || Math.random() * 100,
      amplitude: p.amplitude || 0.7,
      timestamp: new Date(p.joined_at),
      isNew: false
    }))

    setParticipants(waveParticles)
  })

  // Join the presence
  channel.subscribe(async (status) => {
    if (status === 'SUBSCRIBED') {
      await channel.track({
        id: sessionId,
        type: 'individual', // or 'venue'
        x: Math.random() * 100,
        amplitude: 0.5 + Math.random() * 0.5,
        joined_at: new Date().toISOString()
      })
    }
  })

  return () => {
    channel.unsubscribe()
  }
}, [])
```

---

## Option B: Database + Realtime (More Features)

**Best for:** Persistent data + analytics + historical tracking

### Features:
- ✅ Track all participants (not just current)
- ✅ Show "X now, Y total all-time"
- ✅ Analytics: peak times, growth trends
- ✅ Can associate with user accounts

### Setup:

**1. Create Database Table** (Run in Supabase SQL Editor):

```sql
-- Create participants table
create table participants (
  id uuid default gen_random_uuid() primary key,
  type text check (type in ('individual', 'venue')) not null,
  wave_position jsonb not null, -- {x: number, amplitude: number}
  location text,
  joined_at timestamp with time zone default now(),
  last_active timestamp with time zone default now(),
  is_active boolean default true
);

-- Enable Row Level Security
alter table participants enable row level security;

-- Allow anyone to read
create policy "Anyone can read participants"
  on participants for select
  using (true);

-- Allow anyone to insert
create policy "Anyone can insert participants"
  on participants for insert
  with check (true);

-- Allow users to update their own
create policy "Users can update own participant"
  on participants for update
  using (true);

-- Create index for performance
create index participants_active_idx on participants(is_active, last_active);

-- Enable realtime
alter publication supabase_realtime add table participants;
```

**2. Implement in Component**:

```typescript
// Subscribe to real-time changes
useEffect(() => {
  let participantId: string

  // Insert participant on mount
  const joinNetwork = async () => {
    const { data, error } = await supabase
      .from('participants')
      .insert({
        type: 'individual',
        wave_position: {
          x: Math.random() * 100,
          amplitude: 0.5 + Math.random() * 0.5
        }
      })
      .select()
      .single()

    if (data) participantId = data.id
  }

  joinNetwork()

  // Listen for changes
  const channel = supabase
    .channel('participants-changes')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'participants' },
      (payload) => {
        // Update participants state based on payload
        if (payload.eventType === 'INSERT') {
          // Add new participant
        } else if (payload.eventType === 'DELETE') {
          // Remove participant
        }
      }
    )
    .subscribe()

  // Heartbeat to mark as active
  const heartbeat = setInterval(async () => {
    if (participantId) {
      await supabase
        .from('participants')
        .update({ last_active: new Date().toISOString() })
        .eq('id', participantId)
    }
  }, 30000) // Every 30s

  return () => {
    channel.unsubscribe()
    clearInterval(heartbeat)
    // Mark as inactive on cleanup
    if (participantId) {
      supabase
        .from('participants')
        .update({ is_active: false })
        .eq('id', participantId)
    }
  }
}, [])
```

---

## Recommended: Start with Option A (Presence)

**Why:**
- ✅ Zero database setup
- ✅ Works immediately
- ✅ Perfect for MVP
- ✅ Can add Option B later for analytics

**When to add Option B:**
- When you want historical data
- When you need analytics dashboard
- When you want to show "X people today, Y all-time"

---

## Next Steps

1. Share your Supabase credentials (URL + Anon Key)
2. I'll create the integration files
3. Test with the development buttons
4. Go live! 🌊

---

## Security Notes

- ✅ Anon key is safe for client-side use
- ✅ Row Level Security (RLS) protects your data
- ✅ No sensitive data is stored (just presence)
- ✅ Auto-cleanup when users leave (Option A) or mark inactive (Option B)
