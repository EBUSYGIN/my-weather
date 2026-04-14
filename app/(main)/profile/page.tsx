'use client';

import { FavoriteCitiesClient } from '@/ui/1-widgets';
import { UserHeader } from '@/ui/3-entities/User';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function ProfilePage() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserHeader />
        <FavoriteCitiesClient />
      </QueryClientProvider>
    </>
  );
}
