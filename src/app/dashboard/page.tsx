'use client';

import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { useUser } from '@auth0/nextjs-auth0/client';

function Dashboard() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
      <p>Email: {user?.email}</p>
      <a
        href="/api/auth/logout"
        className="mt-4 inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </a>
    </div>
  );
}

export default withPageAuthRequired(Dashboard);
