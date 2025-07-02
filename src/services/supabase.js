import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mbtztgsacqkfqxkfdzym.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1idHp0Z3NhY3FrZnF4a2ZkenltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwNzk1NTEsImV4cCI6MjAzNzY1NTU1MX0.XMyeLBdHi2tmt5Hk5p-v9GHTeC1_lcbJisQka4wfA7U";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
