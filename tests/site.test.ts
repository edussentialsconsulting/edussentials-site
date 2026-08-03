import { test } from "node:test";
import assert from "node:assert/strict";
import { BASE_URL, buildBreadcrumbSchema, CONTACT, NAV_LINKS } from "../app/lib/site.ts";

test("BASE_URL has no trailing slash", () => {
  assert.ok(!BASE_URL.endsWith("/"));
});

test("CONTACT email and phone are non-empty and internally consistent", () => {
  assert.match(CONTACT.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  assert.ok(CONTACT.phoneHref.startsWith("tel:"));
  assert.ok(CONTACT.whatsappHref.startsWith("https://wa.me/"));
});

test("NAV_LINKS all start with /", () => {
  for (const link of NAV_LINKS) {
    assert.ok(link.href.startsWith("/"), `${link.href} should start with /`);
  }
});

test("buildBreadcrumbSchema always starts with Home and orders positions sequentially", () => {
  const schema = buildBreadcrumbSchema([
    { name: "Services", path: "/services" },
  ]);
  assert.equal(schema.itemListElement[0].name, "Home");
  assert.equal(schema.itemListElement[0].position, 1);
  assert.equal(schema.itemListElement[1].name, "Services");
  assert.equal(schema.itemListElement[1].position, 2);
  assert.equal(schema.itemListElement[1].item, `${BASE_URL}/services`);
});

test("buildBreadcrumbSchema supports multiple trailing pages", () => {
  const schema = buildBreadcrumbSchema([
    { name: "Blog", path: "/blog" },
    { name: "Some Post", path: "/blog/some-post" },
  ]);
  assert.equal(schema.itemListElement.length, 3);
  assert.equal(schema.itemListElement[2].position, 3);
});
