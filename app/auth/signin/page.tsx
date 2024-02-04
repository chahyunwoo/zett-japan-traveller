import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';

import SignIn from '@/components/SignIn';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

interface IProps {
  searchParams: {
    callbackUrl: string;
  };
}

export default async function Page({ searchParams: { callbackUrl } }: IProps) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section>
      <SignIn providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
}
