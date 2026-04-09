import fs from "fs";
import path from "path";

import { JSDOM } from "jsdom";

const html = fs.readFileSync(
  path.resolve(__dirname, "..", "index.html"),
  "utf-8"
);

describe("index.html", async () => {
  const dom = await new JSDOM(html);
  console.log(dom.window.document.documentElement.outerHTML);

  describe("basic HTML structure", () => {
    it("has a doctype", () => {
      expect(dom.window.document.doctype.name).toBe("html");
    });

    it("has an <html> element", () => {
      const html = dom.window.document.querySelector("html");
      expect(html).toBeDefined();
    });

    it("has a <head> element", () => {
      const head = dom.window.document.querySelector("head");
      expect(head).toBeDefined();
    });

    it("has a <title> element", () => {
      const title = dom.window.document.querySelector("title");
      expect(title).toBeDefined();
    });

    it("has a <body> element", () => {
      const body = dom.window.document.querySelector("body");
      expect(body).toBeDefined();
    });
  });

  describe("the <h1> element", () => {
    it("has a <h1> element", () => {
      const h1 = dom.window.document.querySelector("h1");
      expect(h1).toBeDefined();
    });
  });

  describe("the <h2> element", () => {
    it("has a <h2> element", () => {
      const h2 = dom.window.document.querySelector("h2");
      expect(h2).toBeDefined();
    });
  });

  describe("the <p> element", () => {
    it("has a <p> element", () => {
      const p = dom.window.document.querySelector("p");
      expect(p).toBeDefined();
    });
  });

  describe("Image Gallery", () => {
    it("has a <ul> element", () => {
      const ul = dom.window.document.querySelector("ul");
      expect(ul).toBeDefined();
    });

    describe("the <li> elements", () => {
      it("has at least two <li> elements", () => {
        const li = dom.window.document.querySelectorAll("li");
        expect(li.length).toBeGreaterThanOrEqual(2);
      });

      describe("<img> elements", () => {
        it("has <img> elements in each <li> element", () => {
          const li = dom.window.document.querySelectorAll("li");
          li.forEach((li) => {
            const img = li.querySelector("img");
            expect(img).toBeDefined();
          });
        });

        it("has an alt attribute for each <img> element", () => {
          const img = dom.window.document.querySelectorAll("img");
          img.forEach((img) => {
            expect(img.getAttribute("alt")).toBeDefined();
          });
        });

        it("has a src attribute for each <img> element", () => {
          const img = dom.window.document.querySelectorAll("img");
          img.forEach((img) => {
            expect(img.getAttribute("src")).toBeDefined();
          });
        });
      });
    });
  });

  describe("Call to Action", () => {
    it("has a <h3> element", () => {
      const h3 = dom.window.document.querySelector("h3");
      expect(h3).toBeDefined();
    });

    it("has a <p> element", () => {
      const p = dom.window.document.querySelector("p");
      expect(p).toBeDefined();
    });

    it("has a <a> element", () => {
      const a = dom.window.document.querySelector("a");
      expect(a).toBeDefined();
    });
  });
});
