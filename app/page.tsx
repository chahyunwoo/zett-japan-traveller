import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import SignOut from '@/components/SignOut';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("auth/signin");
  }

  console.log(session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>ZeTT Main</h1>
      <p>{session.user?.name}님 환영합니다.</p>
      <SignOut />
    </main>
  );
}
