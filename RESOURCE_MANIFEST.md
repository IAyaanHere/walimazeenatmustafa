# Resource Manifest

## Localized Assets
- HTML: index.html
- CSS: src/styles.css, src/fonts.css
- JS: src/app.js, src/config.js, src/components/render.js, src/lib/scratch.js, src/lib/petals.js
- Fonts: ssets/fonts/font-*.woff2
- Video: ssets/video/intro-placeholder1.mp4, ssets/video/intro-poster.webp
- Audio: ssets/audio/bismillah.mp3
- Images: ssets/gallery/gallery-*.jpg

## Modifications Made
1. **Google Fonts Localization:** Intercepted font loading by downloading .woff2 fonts directly and providing a local src/fonts.css. index.html updated to bypass Google CDNs.
2. **NAQSH CTAs Removal:** Removed 'Demo Version' floating badge and 'Create Yours' bottom CTA. Stripped inline modal structure and its governing scripts. Cleaned styles.css of NAQSH UI preview code.
3. **Data Configuration (config.js):**
   - Groom: Shaikh Zaid (Parents: Shaikh Tariq & Shabana Begum). Short Name: Zaid.
   - Bride: Zoya Khan (Parents: Rashid Khan & Farida Begum). Short Name: Zoya.
4. **JS Name Logic (pp.js, ender.js):**
   - Implemented shortName fallback rendering logic across <title>, og: meta fields, and pp.js/ender.js instances.
5. **Venue Configuration:** Set to "Noor Invites, Mahal, Nagpur".
6. **Audio Override & Optimization (pp.js):** Bound logic explicitly bypassing mobile baked-in track olume block: applied ideo.volume = 0 directly on the intro-video DOM component. Background config directed locally to ssets/audio/bismillah.mp3.
