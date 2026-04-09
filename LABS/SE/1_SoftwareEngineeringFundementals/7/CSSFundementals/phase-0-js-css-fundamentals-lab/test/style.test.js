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

  describe('Navigation Bar', () => {
    let navbar;

    beforeAll(() => {
      navbar = document.querySelector('.navbar');
    });

    test('should set background color to #333', () => {
      expect(styles).toContain('.navbar {');
      expect(styles).toContain('background-color: #333;');
    });

    test('should set font size to 1.2em', () => {
      expect(styles).toContain('font-size: 1.2em;');
    });

    test('should add padding of 1em', () => {
      expect(styles).toContain('padding: 1em;');
    });

    test('should center-align the text', () => {
      expect(styles).toContain('text-align: center;');
    });

    test('should set position to fixed', () => {
      expect(styles).toContain('position: fixed;');
    });

    test('should set width to 100%', () => {
      expect(styles).toContain('width: 100%;');
    });

    test('should set top to 0', () => {
      expect(styles).toContain('top: 0;');
    });

    test('should set z-index to 1000', () => {
      expect(styles).toContain('z-index: 1000;');
    });

    test('should set list-style to none', () => {
      expect(styles).toContain('.navbar ul {');
      expect(styles).toContain('list-style: none;');
    });

    test('should set margin to 0 for ul', () => {
      expect(styles).toContain('margin: 0;');
    });

    test('should set padding to 0 for ul', () => {
      expect(styles).toContain('padding: 0;');
    });

    test('should set display to inline for li', () => {
      expect(styles).toContain('.navbar ul li {');
      expect(styles).toContain('display: inline;');
    });

    test('should add margin of 0 1em for li', () => {
      expect(styles).toContain('margin: 0 1em;');
    });

    test('should set text color to #fff for a', () => {
      expect(styles).toContain('.navbar ul li a {');
      expect(styles).toContain('color: #fff;');
    });
  });

  describe('Main Content', () => {
    test('should set padding-top to 5em for main content', () => {
      expect(styles).toContain('.main-content {');
      expect(styles).toContain('padding-top: 5em;');
    });

    test('should add padding of 2em 1em for sections', () => {
      expect(styles).toContain('section {');
      expect(styles).toContain('padding: 2em 1em;');
    });

    test('should center-align the text for sections', () => {
      expect(styles).toContain('text-align: center;');
    });

    test('should increase font size of h1 in #home to 2.5em', () => {
      expect(styles).toContain('#home h1 {');
      expect(styles).toContain('font-size: 2.5em;');
    });

    test('should add margin-bottom of 0.5em for h1 in #home', () => {
      expect(styles).toContain('margin-bottom: 0.5em;');
    });

    test('should set paragraph font size to 1.2em in #home', () => {
      expect(styles).toContain('#home p {');
      expect(styles).toContain('font-size: 1.2em;');
    });

    test('should set paragraph color to #666 in #home', () => {
      expect(styles).toContain('color: #666;');
    });
  });

  describe('Portfolio Section', () => {
    test('should set display to flex for portfolio container', () => {
      expect(styles).toContain('.portfolio-container {');
      expect(styles).toContain('display: flex;');
    });

    test('should enable flex-wrap for portfolio container', () => {
      expect(styles).toContain('flex-wrap: wrap;');
    });

    test('should justify content to space around for portfolio container', () => {
      expect(styles).toContain('justify-content: space-around;');
    });

    test('should add padding of 1em for portfolio container', () => {
      expect(styles).toContain('padding: 1em;');
    });

    test('should set background color to #fff for portfolio items', () => {
      expect(styles).toContain('.portfolio-item {');
      expect(styles).toContain('background-color: #fff;');
    });

    test('should add border of 1px solid #ddd for portfolio items', () => {
      expect(styles).toContain('border: 1px solid #ddd;');
    });

    test('should add margin of 1em around each portfolio item', () => {
      expect(styles).toContain('margin: 1em;');
    });

    test('should add padding of 1em on all sides for portfolio items', () => {
      expect(styles).toContain('padding: 1em;');
    });

    test('should apply box shadow for portfolio items', () => {
      expect(styles).toContain('box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);');
    });

    test('should set width to 30% for portfolio items', () => {
      expect(styles).toContain('width: 30%;');
    });

    test('should set box-sizing to border-box for portfolio items', () => {
      expect(styles).toContain('box-sizing: border-box;');
    });

    test('should apply transition for transform property for portfolio items', () => {
      expect(styles).toContain('transition: transform 0.3s;');
    });

    test('should make the text bold for headings in portfolio items', () => {
      expect(styles).toContain('.portfolio-item h3 {');
      expect(styles).toContain('font-weight: bold;');
    });

    test('should add margin-bottom of 0.5em for headings in portfolio items', () => {
      expect(styles).toContain('margin-bottom: 0.5em;');
    });

    test('should add margin-bottom of 0.5em for paragraphs in portfolio items', () => {
      expect(styles).toContain('.portfolio-item p {');
      expect(styles).toContain('margin-bottom: 0.5em;');
    });

    test('should set color to #666 for paragraphs in portfolio items', () => {
      expect(styles).toContain('color: #666;');
    });

    test('should set width to 100% for images in portfolio items', () => {
      expect(styles).toContain('.portfolio-item img {');
      expect(styles).toContain('width: 100%;');
    });

    test('should apply box shadow for images in portfolio items', () => {
      expect(styles).toContain('box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);');
    });
  });

  describe('Hover Effect for Portfolio Items', () => {
    test('should scale portfolio items when hovered over', () => {
      expect(styles).toContain('.portfolio-item:hover {');
      expect(styles).toContain('transform: scale(1.05);');
    });
  });

  describe('Footer', () => {
    test('should set background color to #222', () => {
      expect(styles).toContain('#footer {');
      expect(styles).toContain('background-color: #222;');
    });

    test('should set text color to #fff', () => {
      expect(styles).toContain('color: #fff;');
    });

    test('should add padding of 2em', () => {
      expect(styles).toContain('padding: 2em;');
    });

    test('should center-align the text', () => {
      expect(styles).toContain('text-align: center;');
    });

    test('should set position to relative', () => {
      expect(styles).toContain('position: relative;');
    });

    test('should set bottom to 0', () => {
      expect(styles).toContain('bottom: 0;');
    });

    test('should set width to 100%', () => {
      expect(styles).toContain('width: 100%;');
    });
  });
});
