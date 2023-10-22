import { createClient } from '@supabase/supabase-js'
const URL = 'https://mitsjxcbbetanlimnaqf.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pdHNqeGNiYmV0YW5saW1uYXFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5NDI3MDcsImV4cCI6MjAxMzUxODcwN30.qs5AKvHq8Vyvr-am5VrTIHT5J3JIV_Jr_UR-zx-bI3g'
export const supabase = createClient(URL, API_KEY);