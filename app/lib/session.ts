import 'server-only';
import { SignJWT, jwtVerify } from 'jose';
import { cookies, headers } from 'next/headers';
import { revalidatePath } from 'next/cache';

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

type SessionPayload = {
  id: string;
  role: string;
};

export async function signSession(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .setIssuer('next-books')
    .setAudience('hopefully-employers')
    .sign(encodedKey);
}

export async function verifySession(token: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(token, encodedKey, {
      algorithms: ['HS256'],
      issuer: 'next-books',
      audience: 'hopefully-employers'
    });
    return payload;
  } catch (error) {
    console.log('Failed to verify session: ', error);
    return null;
  }
}

export async function createSession(id: string, role: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const session = await signSession({ id, role });

  const cookieStore = await cookies();

  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });
}

export async function deleteSession() {
  'use server'
  const cookieStore = await cookies();
  cookieStore.delete('session');
}

export async function returnUserRole(){
  const cookieStore = await cookies()
  const token = cookieStore.get('session')?.value
  const session = token ? await verifySession(token) : { role: 'GUEST' };
  const userRole = session?.role;
  return userRole;
}
