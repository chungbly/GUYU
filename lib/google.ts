import { google } from 'googleapis';
import { Readable } from 'stream';
import { v4 } from 'uuid';
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;

const auth = new google.auth.JWT(
  GOOGLE_CLIENT_EMAIL,
  undefined,
  GOOGLE_PRIVATE_KEY!.split(String.raw`\n`).join('\n'),
  ['https://www.googleapis.com/auth/drive']
);

export async function uploadAudio(file: File, id?: string) {
  await auth.authorize();
  const drive = google.drive({ version: 'v3', auth: auth });
  const res = await drive.files.create({
    requestBody: {
      name: `${id ?? v4()}.mp3`,
      mimeType: 'audio/mpeg',
      parents: ['1MZEIvguGsZ8TgUlqK4EtHhGVa3hhvWRy'],
    },
    media: {
      mimeType: 'audio/mpeg',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      body: Readable.from(file.stream() as unknown as Iterable<any>),
    },
  });
  return res.data;
}
