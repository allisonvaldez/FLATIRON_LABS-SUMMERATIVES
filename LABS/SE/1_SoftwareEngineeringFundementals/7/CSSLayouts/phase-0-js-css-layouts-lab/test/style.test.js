const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const htmlFilePath = path.resolve(__dirname, '../index.html');
const cssFilePath = path.resolve(__dirname, '../style.css');
let dom;
let document;

beforeAll(() => {
  const html = fs.readFileSync(htmlFilePath, 'utf8');
  dom = new JSDOM(html);
  document = dom.window.document;
});

describe('CSS Lab Tests', () => {
  let styles;

  beforeAll(() => {
    styles = fs.readFileSync(cssFilePath, 'utf8');
  });

  test('should link the CSS file', () => {
    const link = document.querySelector('link[rel="stylesheet"]');
    expect(link).not.toBeNull();
    expect(link.getAttribute('href')).toBe('style.css');
  });

  describe('Cat breed container', () => {
    test('should have correct styles', () => {
      expect(styles).toContain('.cat-container {');
      expect(styles).toContain('display: flex;');
      expect(styles).toContain('flex-wrap: wrap;');
      expect(styles).toContain('justify-content: space-around;');
      expect(styles).toContain('padding: 2em;');
    });
  });

  describe('Cat breed cards', () => {
    test('should have correct styles', () => {
      expect(styles).toContain('.cat-breed {');
      expect(styles).toContain('flex: 1 1 300px;');
      expect(styles).toContain('margin: 1em;');
      expect(styles).toContain('padding: 1em;');
      expect(styles).toContain('border: 1px solid #ddd;');
      expect(styles).toContain('border-radius: 8px;');
      expect(styles).toContain('box-shadow: 0 4px 8px rgba(0,0,0,0.1);');
      expect(styles).toContain('text-align: center;');
      expect(styles).toContain('transition: transform 0.3s;');
    });

    test('should have hover effect', () => {
      expect(styles).toContain('.cat-breed:hover {');
      expect(styles).toContain('transform: scale(1.05);');
    });

    test('images should have correct styles', () => {
      expect(styles).toContain('.cat-breed img {');
      expect(styles).toContain('max-width: 100%;');
      expect(styles).toContain('height: auto;');
      expect(styles).toContain('border-radius: 8px;');
    });

    test('headings should have correct styles', () => {
      expect(styles).toContain('.cat-breed h3 {');
      expect(styles).toContain('margin: 0.5em 0;');
    });

    test('paragraphs should have correct styles', () => {
      expect(styles).toContain('.cat-breed p {');
      expect(styles).toContain('margin: 0.5em 0 1em;');
    });
  });

  describe('Responsive layout', () => {
    test('should have responsive styles', () => {
      expect(styles).toContain('@media (max-width: 768px) {');
      expect(styles).toContain('.cat-container {');
      expect(styles).toContain('flex-direction: column;');
      expect(styles).toContain('align-items: center;');
      expect(styles).toContain('.cat-breed {');
      expect(styles).toContain('flex: 1 1 100%;');
      expect(styles).toContain('max-width: 100%;');
    });
  });
});
