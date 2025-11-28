import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://zehgqixuwkymdltqipiq.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseAnonKey) {
  console.warn('⚠️ NEXT_PUBLIC_SUPABASE_ANON_KEY not found. Add to .env.local')
  console.warn('Running in development mode without realtime sync.')
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

// Check if Supabase is configured
export const isSupabaseConfigured = () => {
  return !!(supabaseUrl && supabaseAnonKey)
}
