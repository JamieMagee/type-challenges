#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';
import lzs from 'lz-string';
import markdownTable from 'markdown-table';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.join(__dirname, '../', 'src');

const colours = {
  warm: 'teal',
  easy: '90bb12',
  medium: 'eaa648',
  hard: 'red',
  extreme: 'b11b8d',
};

const solutions = fs.readdirSync(srcDir);
let table = [['Challenge', 'Solution']];
solutions.forEach((solution) => {
  const [number, difficulty, ..._] = solution.split('-');
  const infoPath = path.join(srcDir, solution, 'info.yml');
  if (!fs.existsSync(infoPath)) {
    return;
  }
  const info = yaml.safeLoad(fs.readFileSync(infoPath, 'utf-8'));
  const badge = generateBadge(solution, number, info.title, difficulty);
  const typeScriptPlaygroundBadge = generateTypeScriptPlaygroundBadge(solution);
  table = table.concat([[badge, typeScriptPlaygroundBadge]]);
});

const readmePath = path.join(__dirname, '../', 'README.md');
let readme = fs.readFileSync(readmePath, 'utf-8');
const markdown = markdownTable(table);
readme = readme.replace(
  /<!--begin-table-->[\s\S]*<!--end-table-->/s,
  `<!--begin-table-->\n${markdown}\n<!--end-table-->`
);
fs.writeFileSync(readmePath, readme, { encoding: 'utf-8' });

function generateBadge(solution, number, text, difficulty) {
  const colour = colours[difficulty];

  const badgeUrl = `https://img.shields.io/badge/-${encodeURIComponent(
    number + '・' + text
  )}-${colour}?style=for-the-badge`;
  return `[![](${badgeUrl})](https://github.com/JamieMagee/type-challenges/tree/master/src/${solution})`;
}

function generateTypeScriptPlaygroundBadge(solution) {
  const readme = fs
    .readFileSync(path.join(srcDir, solution, 'README.md'), 'utf-8')
    .replaceAll('\n', '\n// ');
  const template = fs.readFileSync(
    path.join(srcDir, solution, 'template.ts'),
    'utf-8'
  );
  const testCases = fs.readFileSync(
    path.join(srcDir, solution, 'test-cases.ts'),
    'utf-8'
  );

  const code = `// ${readme}\n\n${template}\n\n${testCases}`;
  const typeScriptPlaygroundUrl = `https://www.typescriptlang.org/play#code/${lzs.compressToEncodedURIComponent(
    code
  )}`;
  return `[![](https://img.shields.io/badge/-Solution-3178c6?logo=typescript&style=for-the-badge)](${typeScriptPlaygroundUrl})`;
}
