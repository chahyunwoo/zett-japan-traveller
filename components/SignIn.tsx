"use client";

import {
  ClientSafeProvider,
  signIn,
} from 'next-auth/react';

import { providerIcons } from '@/data/providerIcons';

import SignInButton from './atoms/SignInButton';

interface IProps {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
}

export default function SignIn({ providers, callbackUrl }: IProps) {
  return (
    <ul>
      {Object.values(providers).map((provider) => {
        const IconComponent = providerIcons[provider.name];

        return (
          <li key={provider.name}>
            <SignInButton
              provider={provider}
              signIn={signIn}
              callbackUrl={callbackUrl}
              icon={IconComponent}
            />
          </li>
        );
      })}
    </ul>
  );
}
