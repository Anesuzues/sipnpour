# Requirements

## Summary
"Sip, Pour & Unwind" is a single-page luxury event landing page for Candid Candles & More — a private wellness and lifestyle experience for women. The page showcases event highlights, details, and a booking form using a dark, gold-accented aesthetic inspired by the brand's visual identity. It targets women seeking premium self-care, creativity, and connection, and drives bookings directly through the page.

## Use cases

- Full Landing Page Experience
  1) Visitor lands on the hero section and sees the event name, subheading, description, and a "Book Your Spot" CTA button
  2) Visitor scrolls to see elegant icon cards for the four event highlights: Yoga Session, Candle Making Experience, Wine Tasting, Real Conversations & Story Sharing
  3) Visitor views the event details (location, date, time, price) in stylish info cards
  4) Visitor sees the Dress Code banner: "Soft Life | Neutrals | Effortless"
  5) Visitor fills in the booking form (Full Name, Phone, Email, Dietary Requirements, Plus One toggle) and submits
  6) On successful submission, a thank-you message is displayed
  7) Visitor sees the footer with WhatsApp number, email, and social media icons
  8) On mobile, a sticky "Book Now" button is visible at the bottom of the screen

## Plan

### Full Landing Page Experience
1. [x] Set up the global page styles: black/deep charcoal background (#0d0d0d), gold (#C9A84C) and champagne/cream (#F5E6C8) accent colors, elegant serif + script font pairing (Playfair Display + Dancing Script via Google Fonts), smooth scroll behavior, and fade-in scroll animations using Intersection Observer
2. [x] Build the Hero Section: full-viewport dark section with a subtle warm candlelight radial glow overlay, large script-style heading "Sip, Pour & Unwind ♡", subheading "A Private Wellness Experience by Candid Candles", short description text, and a gold CTA button "Book Your Spot" with smooth scroll anchor to the booking form
3. [x] Build the Event Highlights Section: gold section title "What to Expect", four rounded dark cards with gold icon outlines and labels — Yoga Session, Candle Making Experience, Wine Tasting, Real Conversations & Story Sharing — arranged in a 2×2 grid on mobile and 4-column row on desktop
4. [x] Build the Event Details Section: a horizontal info bar / card row showing Location (Midrand, exact location shared after booking), Date (August 2026), Time (12:00 PM – Sunset), and Price (R650 per person) — each with a matching gold icon, styled on a dark card with gold borders
5. [x] Build the Dress Code Banner: full-width warm-toned strip with a ♡ icon and italic gold text "Dress Code: Soft Life | Neutrals | Effortless", with a subtle brushstroke/texture background
6. [x] Build the Booking Form Section: section title "Reserve Your Spot", dark card with gold-outlined form inputs — Full Name, Phone Number, Email Address, Dietary Requirements (textarea), Bringing a Plus One? (Yes/No radio buttons); conditionally show a "Plus One Name" text input when Yes is selected; gold "Confirm Booking" submit button
7. [x] Implement booking form state and submission logic: track all field values and Plus One toggle in React state, validate required fields on submit, show inline error hints, on success display a styled success message "Thank you! Your booking request has been received. We'll contact you shortly." and hide the form
8. [x] Build the Footer: dark footer with WhatsApp icon + "060 484 4697", envelope icon + "candidcandlesandmore@gmail.com", placeholder Instagram/Facebook/TikTok icon links, and a tagline "Spots are limited. Secure yours today! ♡"
9. [x] Add mobile-first responsive layout: stack all sections vertically, ensure form is full-width, add a sticky bottom "Book Now" button visible only on mobile (hidden on md+ screens) that smooth-scrolls to the booking form
10. [x] Add scroll-triggered fade-in animations: use Intersection Observer (or a lightweight CSS class toggle) to fade and slide up each section as it enters the viewport, ensuring a premium feel throughout
