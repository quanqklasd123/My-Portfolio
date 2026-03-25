const fs = require('fs');
const p = 'D:/My-Portfolio/Tran-Van-Quan-TopCV.vn-250326.185315 (1).pdf';
const b = fs.readFileSync(p);
const outDir = 'D:/My-Portfolio/public/cv-assets';
fs.mkdirSync(outDir, { recursive: true });
let c = 0;
for (let i = 0; i < b.length - 1; i++) {
  if (b[i] === 0xff && b[i + 1] === 0xd8) {
    let j = i + 2;
    while (j < b.length - 1) {
      if (b[j] === 0xff && b[j + 1] === 0xd9) {
        const s = b.slice(i, j + 2);
        if (s.length > 15000) {
          const f = `${outDir}/img-${String(c).padStart(2, '0')}.jpg`;
          fs.writeFileSync(f, s);
          console.log('saved', f, s.length);
          c++;
        }
        i = j + 1;
        break;
      }
      j++;
    }
  }
}
console.log('total', c);
