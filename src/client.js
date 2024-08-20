import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cftelhtzzxytxnmgjpew.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmdGVsaHR6enh5dHhubWdqcGV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwODE3MTMsImV4cCI6MjAzOTY1NzcxM30.1qjT1SGQaEGkhPHuI-Kyv--LUC6GhC7_YU8EEiFF3Es'
export const supabase = createClient(supabaseUrl, supabaseKey)