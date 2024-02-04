import {
  ClientSafeProvider,
  SignInOptions,
  SignInResponse,
} from 'next-auth/react';

interface IProps {
  provider: ClientSafeProvider;
  signIn: (
    id: string,
    options: SignInOptions
  ) => Promise<SignInResponse | undefined>;
  callbackUrl: string;
  icon: () => React.ReactElement;
}

export default function SignInButton({
  provider,
  signIn,
  callbackUrl,
  icon,
}: IProps) {
  return (
    <button onClick={() => signIn(provider.id, { callbackUrl })}>
      <div>
        <div>{icon()}</div>
        <p>Sign in with {provider.name}</p>
      </div>
    </button>
  );
}
