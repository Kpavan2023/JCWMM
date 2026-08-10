/*
# Add is_read column to prayer_requests

## Summary
Adds a boolean `is_read` column to the existing `prayer_requests` table so the
pastor's admin dashboard can track which prayer requests have been reviewed.

## Changes
- `prayer_requests` table: new column `is_read` (boolean, NOT NULL, default false)
  - New rows default to unread (false).
  - Existing rows are backfilled to false automatically by the DEFAULT.

## Notes
- No RLS changes needed — existing policies already allow authenticated users
  to UPDATE rows, which covers toggling is_read.
- The ADD COLUMN is wrapped in a DO block so it is idempotent (safe to re-run).
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'prayer_requests' AND column_name = 'is_read'
  ) THEN
    ALTER TABLE prayer_requests ADD COLUMN is_read boolean NOT NULL DEFAULT false;
  END IF;
END $$;
