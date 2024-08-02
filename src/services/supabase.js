import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://zygrnggezzbiexluhkav.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5Z3JuZ2dlenpiaWV4bHVoa2F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEyMjgwMzAsImV4cCI6MjAzNjgwNDAzMH0.qm-E-uRCDtfAjaZskUyA8jjKscAI4f3U2FhntpnrIm4';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;