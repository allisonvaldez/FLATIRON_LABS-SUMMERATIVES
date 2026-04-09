import fs from "fs";
import path from "path";

import { JSDOM } from "jsdom";
import { expect } from "vitest";

const html = fs.readFileSync(
  path.resolve(__dirname, "..", "index.html"),
  "utf-8"
);

describe("index.html", async () => {
  let dom;
  let document;

  beforeAll(() => {
    dom = new JSDOM(html);
    document = dom.window.document;
  });

  it("should have an <h1> tag", () => {
    const h1 = document.querySelector("h1");
  });

  it("should have at least 2 <img> tags", () => {
    const images = document.querySelectorAll("img");
    expect(images.length).toBeGreaterThanOrEqual(2);
  });

  it("should have a <p> tag", () => {
    const p = document.querySelector("p");
  });

  it('should have an <h2> tag with "Gallery: Fire Island" as content', () => {
    const h2 = document.querySelector("h2");
    expect(h2.textContent).toBe("Gallery: Fire Island");
  });

  it("should have a <ul> tag with at least 2 <li> items", () => {
    const ul = document.querySelector("ul");
    const lis = ul.querySelectorAll("li");
    expect(lis.length).toBeGreaterThanOrEqual(2);
  });

  it("each <li> should contain an <img> tag", () => {
    const lis = document.querySelectorAll("li");
    lis.forEach((li) => {
      const img = li.querySelector("img");
      expect(img).not.toBeNull();
    });
  });

  it("should have an <h3> tag", () => {
    const h3 = document.querySelector("h3");
    expect(h3).not.toBeNull();
  });

  it("should have a second <p> tag", () => {
    const ps = document.querySelectorAll("p");
    const secondP = ps[1];
    expect(secondP.textContent).not.toBeNull();
  });

  it("should have an <a> tag with an <href> attribute", () => {
    const a = document.querySelector("a");
    expect(a).not.toBeNull();
    expect(a.getAttribute("href"));
  });
});
