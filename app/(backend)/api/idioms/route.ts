export const dynamic = 'force-dynamic';
import dbConnect from '@/lib/db-connect';
import { errorResp, successResp } from '@/lib/server-json';
import Idioms from '@/models/Idioms';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const text = request.nextUrl.searchParams.get('text');
    if (!text) return errorResp('Vui lòng nhập từ khóa', 400);

    const idioms = await Idioms.find(
      {
        $text: { $search: text },
      },
      {
        score: { $meta: 'textScore' },
      }
    )
      .limit(5)
      .sort({
        score: { $meta: 'textScore' },
      });

    if (!idioms) return errorResp('Không tìm thấy quán dụng', 404);
    return successResp(idioms);
  } catch (e) {
    return errorResp(
      (
        e as unknown as {
          message: string;
        }
      ).message
    );
  }
}

export function removePinyinTones(pinyin: string): string {
  // Map of tone marked vowels to their base form
  const toneMap: { [key: string]: string } = {
    // First tone (ā ē ī ō ū ǖ)
    ā: 'a',
    ē: 'e',
    ī: 'i',
    ō: 'o',
    ū: 'u',
    ǖ: 'u',
    // Second tone (á é í ó ú ǘ)
    á: 'a',
    é: 'e',
    í: 'i',
    ó: 'o',
    ú: 'u',
    ǘ: 'u',
    // Third tone (ǎ ě ǐ ǒ ǔ ǚ)
    ǎ: 'a',
    ě: 'e',
    ǐ: 'i',
    ǒ: 'o',
    ǔ: 'u',
    ǚ: 'u',
    // Fourth tone (à è ì ò ù ǜ)
    à: 'a',
    è: 'e',
    ì: 'i',
    ò: 'o',
    ù: 'u',
    ǜ: 'u',
    // Special cases for ü
    ü: 'u',
    v: 'u',
  };

  return (
    pinyin
      .toLowerCase()
      // Replace each tone marked vowel with its base form
      .split('')
      .map((char) => toneMap[char] || char)
      .join('')
      // Normalize whitespace
      .trim()
      .replace(/\s+/g, ' ')
  );
}

function generateContinuousSubstrings(s: string): string[] {
  const substrings: string[] = [];
  const n = s.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      substrings.push(s.slice(i, j));
    }
  }

  return substrings;
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();
    const { simplified, pinyin, meaning, explanation, explanationPinyin, examples } = body;

    // Validate required fields
    if (!simplified || !pinyin || !meaning || !explanation || !explanationPinyin) {
      return errorResp('All fields are required', 400);
    }

    // Validate examples structure
    if (!Array.isArray(examples) || examples.length === 0) {
      return errorResp('At least one example is required', 400);
    }

    for (const example of examples) {
      if (!example.chinese || !example.pinyin || !example.vietnamese || !example.question) {
        return errorResp('All example fields are required', 400);
      }
    }
    // Check for duplicate idioms
    const existingIdiom = await Idioms.findOne({ simplified });
    if (existingIdiom) {
      return errorResp('Idiom already exists', 400);
    }

    const pinyinTextSearch = removePinyinTones(pinyin);
    const simplifiedTextSearch = generateContinuousSubstrings(simplified).join(' ');
    console.log('simplifiedTextSearch', simplifiedTextSearch);
    console.log('pinyinTextSearch', pinyinTextSearch);
    const idiom = await Idioms.create({
      simplified,
      pinyin,
      meaning,
      explanation,
      explanationPinyin,
      examples,
      simplifiedTextSearch,
      pinyinTextSearch,
    });

    return successResp(idiom);
  } catch (e) {
    return errorResp((e as unknown as { message: string }).message);
  }
}
