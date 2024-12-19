-- Create waitlist table
create table if not exists public.waitlist (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.waitlist enable row level security;

-- Create policy for inserting
create policy "Enable insert for authenticated users only"
  on public.waitlist for insert
  with check (true);

-- Create policy for selecting
create policy "Enable select for authenticated users only"
  on public.waitlist for select
  using (true);
