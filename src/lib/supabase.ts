import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
// Add your credentials to .env.local:
// NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
// NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found. Running in development mode.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  }
})

// Type for presence state
export interface PresenceParticipant {
  id: string
  type: 'individual' | 'venue'
  x: number
  amplitude: number
  joined_at: string
  location?: string
}
