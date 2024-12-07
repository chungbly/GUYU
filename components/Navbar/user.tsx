import { handleGetUser } from '@/lib/user';
import dynamic from 'next/dynamic';
import { MobileMenu } from './menu-mobile';
import UserMenu from './user-menu';

const SignInDialog = dynamic(() => import('@/components/Login/sign-in'));
const SignUpForm = dynamic(() => import('@/components/Login/sign-up'));

async function UserInfo() {
  const user = await handleGetUser();
  return (
    <>
      <div className="flex-1 hidden sm:flex justify-end ">
        {user ? (
          <UserMenu user={user} />
        ) : (
          <div className="flex gap-4">
            <SignInDialog />
            <SignUpForm />
          </div>
        )}
      </div>
      <div className="flex sm:hidden flex-1 justify-end">
        <MobileMenu user={user} />
      </div>
    </>
  );
}

export default UserInfo;
