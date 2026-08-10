/*
# Create prayer_requests table

1. New Tables
- `prayer_requests`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's name
  - `email` (text, nullable) — optional contact email
  - `phone` (text, nullable) — optional contact phone
  - `request` (text, not null) — the prayer request content
  - `created_at` (timestamptz) — submission timestamp

2. Security
- Enable RLS on `prayer_requests`.
- Anyone (anon or authenticated) can INSERT prayer requests — no login required.
- Only authenticated users (admins) can SELECT/UPDATE/DELETE records.
- Public submit (INSERT) is intentional: church visitors submit without an account.
*/

CREATE TABLE IF NOT EXISTS prayer_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text,
  phone text,
  request text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE prayer_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anyone_can_insert_prayer" ON prayer_requests;
CREATE POLICY "anyone_can_insert_prayer" ON prayer_requests FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_select_prayer" ON prayer_requests;
CREATE POLICY "admin_select_prayer" ON prayer_requests FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "admin_update_prayer" ON prayer_requests;
CREATE POLICY "admin_update_prayer" ON prayer_requests FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_prayer" ON prayer_requests;
CREATE POLICY "admin_delete_prayer" ON prayer_requests FOR DELETE
  TO authenticated USING (true);
