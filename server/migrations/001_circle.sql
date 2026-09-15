CREATE EXTENSION IF NOT EXISTS citext;

CREATE TABLE IF NOT EXISTS members (
  id uuid PRIMARY KEY,
  given_name text NOT NULL,
  family_name text NOT NULL,
  display_name text NOT NULL,
  handle citext NOT NULL UNIQUE,
  birth_date date NOT NULL,
  home_country text NOT NULL,
  role text NOT NULL,
  bio text NOT NULL DEFAULT '',
  email citext UNIQUE,
  mobile text UNIQUE,
  password_hash text NOT NULL,
  verified_at timestamptz,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active','restricted','suspended','deleted')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS verifications (id uuid PRIMARY KEY,member_id uuid NOT NULL REFERENCES members(id) ON DELETE CASCADE,code_hash text NOT NULL,expires_at timestamptz NOT NULL,attempts int NOT NULL DEFAULT 0,consumed_at timestamptz,created_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE IF NOT EXISTS sessions (token_hash text PRIMARY KEY,member_id uuid NOT NULL REFERENCES members(id) ON DELETE CASCADE,expires_at timestamptz NOT NULL,created_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE IF NOT EXISTS member_settings (member_id uuid PRIMARY KEY REFERENCES members(id) ON DELETE CASCADE,profile_visibility text NOT NULL DEFAULT 'public',message_privacy text NOT NULL DEFAULT 'members',protect_locations boolean NOT NULL DEFAULT true,notifications boolean NOT NULL DEFAULT true);
CREATE TABLE IF NOT EXISTS posts (id uuid PRIMARY KEY,member_id uuid NOT NULL REFERENCES members(id) ON DELETE CASCADE,type text NOT NULL,species text NOT NULL DEFAULT '',country text NOT NULL DEFAULT '',place text NOT NULL DEFAULT '',location_protected boolean NOT NULL DEFAULT true,body text NOT NULL,visibility text NOT NULL DEFAULT 'public',image_url text,created_at timestamptz NOT NULL DEFAULT now(),deleted_at timestamptz);
CREATE TABLE IF NOT EXISTS follows (follower_id uuid REFERENCES members(id) ON DELETE CASCADE,followed_id uuid REFERENCES members(id) ON DELETE CASCADE,created_at timestamptz NOT NULL DEFAULT now(),PRIMARY KEY(follower_id,followed_id),CHECK(follower_id<>followed_id));
CREATE TABLE IF NOT EXISTS appreciations (member_id uuid REFERENCES members(id) ON DELETE CASCADE,post_id uuid REFERENCES posts(id) ON DELETE CASCADE,created_at timestamptz NOT NULL DEFAULT now(),PRIMARY KEY(member_id,post_id));
CREATE TABLE IF NOT EXISTS comments (id uuid PRIMARY KEY,post_id uuid NOT NULL REFERENCES posts(id) ON DELETE CASCADE,member_id uuid NOT NULL REFERENCES members(id) ON DELETE CASCADE,body text NOT NULL,created_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE IF NOT EXISTS threads (id uuid PRIMARY KEY,created_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE IF NOT EXISTS thread_members (thread_id uuid REFERENCES threads(id) ON DELETE CASCADE,member_id uuid REFERENCES members(id) ON DELETE CASCADE,PRIMARY KEY(thread_id,member_id));
CREATE TABLE IF NOT EXISTS messages (id uuid PRIMARY KEY,thread_id uuid NOT NULL REFERENCES threads(id) ON DELETE CASCADE,sender_id uuid NOT NULL REFERENCES members(id) ON DELETE CASCADE,body text NOT NULL,created_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE IF NOT EXISTS blocks (blocker_id uuid REFERENCES members(id) ON DELETE CASCADE,blocked_id uuid REFERENCES members(id) ON DELETE CASCADE,created_at timestamptz NOT NULL DEFAULT now(),PRIMARY KEY(blocker_id,blocked_id),CHECK(blocker_id<>blocked_id));
CREATE TABLE IF NOT EXISTS reports (id uuid PRIMARY KEY,reporter_id uuid NOT NULL REFERENCES members(id),target_type text NOT NULL CHECK(target_type IN ('member','post','message')),target_id text NOT NULL,reason text NOT NULL,details text NOT NULL DEFAULT '',status text NOT NULL DEFAULT 'open' CHECK(status IN ('open','reviewing','actioned','dismissed')),reviewer_id uuid REFERENCES members(id),decision_notes text,created_at timestamptz NOT NULL DEFAULT now(),resolved_at timestamptz);
CREATE INDEX IF NOT EXISTS reports_queue ON reports(status,created_at);
CREATE INDEX IF NOT EXISTS posts_feed ON posts(created_at DESC) WHERE deleted_at IS NULL;
