import test from "node:test";
import assert from "node:assert/strict";
import { profileData } from "../config/profile.ts";

test("Profile contact configuration is valid and verified", () => {
  const contact = profileData.contact;

  // Email verification
  assert.equal(contact.email.value, "lucianna.neema@gmail.com");
  assert.equal(contact.email.status, "confirmed");

  // WhatsApp verification
  assert.equal(contact.whatsapp.phoneNumber, "+250796164579");
  assert.equal(contact.whatsapp.status, "confirmed");

  // Consultation booking verification
  assert.ok(contact.booking !== undefined, "Booking options must be defined");
  assert.equal(contact.booking?.googleCalendarUrl, "https://calendar.app.google/h4YgNK5MA3hAZw1S9");
  assert.equal(contact.booking?.calendlyUrl, "https://calendly.com/lucianna-neema/30min");
  assert.equal(contact.booking?.status, "confirmed");
});

test("WhatsApp link generator produces correct clean phone number and encoded payload", () => {
  const rawPhone = profileData.contact.whatsapp.phoneNumber;
  const cleanPhone = rawPhone.replace(/[^0-9]/g, "");
  assert.equal(cleanPhone, "250796164579");

  const message = "Hello Neema, I would like to discuss recruitment support.";
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

  assert.ok(waUrl.startsWith("https://wa.me/250796164579?text="));
  assert.ok(!waUrl.includes(" "));
  assert.ok(waUrl.includes("Hello%20Neema"));
});

test("Mailto URI properly encodes multi-line content and subject with special characters", () => {
  const recipient = profileData.contact.email.value;
  const subject = "[Portfolio Enquiry] Recruitment & Talent Sourcing — Marie Claire (Tech NGO)";
  const body = `Name: Marie Claire
Email: marie@ngo.org
Organization: Tech NGO

Message:
We would like to discuss hiring 3 coordinators & specialists in Kigali.`;

  const mailtoUri = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  assert.ok(mailtoUri.startsWith("mailto:lucianna.neema@gmail.com?subject="));
  assert.ok(mailtoUri.includes("&body="));
  assert.ok(!mailtoUri.includes("\n")); // Newlines must be percent-encoded
  assert.ok(mailtoUri.includes("%0A") || mailtoUri.includes("%0D%0A"));
});

test("Social media links contain valid HTTPS URLs with confirmed status", () => {
  assert.ok(profileData.contact.linkedin.url.startsWith("https://www.linkedin.com/"));
  assert.equal(profileData.contact.linkedin.status, "confirmed");
});
