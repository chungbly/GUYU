'use server';

import { cookies } from 'next/headers';

export const removeCookie = (name: string) => {
  cookies().delete(name);
};
