const { createClient } = require('@supabase/supabase-js');


// Create a single supabase client for interacting with your database
const supabase = createClient('https://tgbzpwyazgmvtfasxmph.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnYnpwd3lhemdtdnRmYXN4bXBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU1NzUsImV4cCI6MjA3ODUzMTU3NX0.E7DaeNYaHHgNShZSO-8RZhNxGbRLwzbkCjbtC2v1mDA');

module.exports = supabase;