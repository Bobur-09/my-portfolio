# Next.js Dynamic Portfolio

Portfolio maketi Next.js App Router + TypeScript bilan tayyorlangan.

## Ishga tushirish

1. Node.js LTS o'rnating.
2. Terminalda loyiha papkasiga kiring.
3. Quyidagilarni bajaring:

```bash
npm install
npm run dev
```

4. Brauzerda http://localhost:3000 ni oching.

## O'zingizga moslash

Asosiy matnlar, ko'nikmalar, ijtimoiy tarmoqlar va projectlar:
`src/data/portfolio.ts`

Rasmlarni `public/images/` papkasiga joylang va shu fayldagi `portrait`, `aboutImage` hamda project `image` yo'llarini moslang.

CV faylini `public/cv.pdf` nomi bilan qo'ying yoki `cvUrl` qiymatini o'zgartiring.

## Contact form haqida

Hozirgi starter form email dasturini ochishga mo'ljallangan `mailto:` varianti. Saytning o'zida xabarni qabul qilish uchun keyin API route va email provider (masalan, Resend) yoki Formspree kabi xizmatni ulash kerak. Maxfiy API kalitlarini `.env.local` da saqlang, repozitoriyga yubormang.

## Eslatma

`public/images/` ichiga o'zingiz ishlatishga ruxsatli rasmlarni qo'shing. `portfolio.ts` ichidagi demo ma'lumotlar va `example.com` havolalarini haqiqiy ma'lumotlaringiz bilan almashtiring.
