const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export function renderInvitation(config) {
  const { couple, copy, wedding, media, venue, dressCode, preWeddingEvents, program, rsvp, sections } = config;

  return `
    <section class="hero" id="top" aria-label="Opening invitation">
      <video
        class="hero__video"
        id="intro-video"
        preload="auto"
        playsinline
        muted
        poster="${escapeHtml(media.introPoster)}"
      >
        <source src="${escapeHtml(media.introVideo)}" type="video/mp4" />
      </video>
      <img
  class="hero__poster-frame"
  id="hero-poster-frame"
  src="${escapeHtml(media.introPoster)}"
  alt=""
  aria-hidden="true"
/>
      <div class="hero__ornament hero__ornament--one"></div>
      <div class="hero__ornament hero__ornament--two"></div>

      <button class="music-control" id="music-control" type="button" aria-label="Turn music on">
        <span class="music-control__icon" aria-hidden="true">♪</span>
        <span class="music-control__label">Sound ready</span>
      </button>

      <button class="opening-gate" id="opening-gate" type="button" aria-label="Open wedding invitation">

      </button>

      <div class="hero__content" id="hero-content" aria-hidden="true">

  <p class="hero__bismillah" lang="ar" dir="rtl">
    ${escapeHtml(copy.heroBismillah)}
  </p>

  <div class="hero__intro">
    <p>${escapeHtml(copy.heroIntroLineOne)}</p>
    <p>${escapeHtml(copy.heroIntroLineTwo)}</p>
    <p>${escapeHtml(copy.heroIntroLineThree)}</p>
  </div>

  <h1 class="hero__names">

    <span class="hero__person">
      <span class="hero__name">
        ${escapeHtml(couple.brideName)}
      </span>

      <span class="hero__parents">
        ${escapeHtml(couple.brideParents)}
      </span>
    </span>

    <span class="hero__ampersand">&amp;</span>

    <span class="hero__person">
      <span class="hero__name">
        ${escapeHtml(couple.groomName)}
      </span>

      <span class="hero__parents">
        ${escapeHtml(couple.groomParents)}
      </span>
    </span>

  </h1>

  <p class="hero__closing-line">
    ${escapeHtml(copy.heroClosingLine)}
  </p>

</div>

      <a class="scroll-cue" id="scroll-cue" href="#welcome" aria-label="Scroll to invitation details">
        <span>Discover</span><i></i>
      </a>
    </section>

    <audio id="background-music" src="${escapeHtml(media.backgroundMusic)}" preload="auto" loop></audio>

    ${sections.welcome ? `
      <section class="section welcome reveal-on-scroll" id="welcome">
        <div class="section__inner section__inner--narrow">
          <p class="section-kicker"></p>
          <h2>${escapeHtml(copy.welcomeTitle)}</h2>
          <p class="lead">${escapeHtml(copy.welcomeBody)}</p>
          <div class="flourish" aria-hidden="true"><span></span><b>✦</b><span></span></div>
        </div>
      </section>
    ` : ""}

    ${sections.scratchReveal ? `
      <section class="section date-reveal reveal-on-scroll" id="date-reveal">
        <div class="section__inner">
          <p class="section-kicker" id="date-kicker">${escapeHtml(copy.dateIntro)}</p>
          <h2 id="date-heading">${escapeHtml(copy.datePrompt)}</h2>
          <p class="gesture-hint"></p>

          <div class="scratch-wrap" id="scratch-wrap">
            <div class="date-card" aria-live="polite">
              <p class="date-card__eyebrow">You’re invited</p>
              <p class="date-card__date">${escapeHtml(wedding.displayDate)}</p>
              <div class="date-card__meta">
                <span>${escapeHtml(wedding.day)}</span>
                <i></i>
                <span>${escapeHtml(wedding.time)}</span>
              </div>
              <p class="date-card__venue"></p>
            </div>
            <canvas id="scratch-canvas" aria-label="Scratch surface covering the wedding date"></canvas>
          </div>

          <div class="petal-layer" id="petal-layer" aria-hidden="true"></div>
        </div>
      </section>
    ` : ""}

    ${sections.gallery ? `
      <section class="section gallery-section reveal-on-scroll" id="gallery">
        <div class="section__inner">
          <p class="section-kicker">Moments held close</p>
          <h2>${escapeHtml(copy.galleryTitle)}</h2>
          <div class="gallery" id="gallery-slider">
            <div class="gallery__track">
              ${media.gallery.map((image, index) => `
                <figure class="gallery__slide ${index === 0 ? "is-active" : ""}">
                  <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" loading="lazy" />
                </figure>
              `).join("")}
            </div>

            <div class="gallery__dots" aria-label="Choose gallery image">
              ${media.gallery.map((_, index) => `<button type="button" data-slide="${index}" aria-label="View image ${index + 1}" class="${index === 0 ? "is-active" : ""}"></button>`).join("")}
            </div>
          </div>
        </div>
      </section>
    ` : ""}

    ${sections.countdown ? `
      <section class="section countdown-section reveal-on-scroll" id="countdown">
        <div class="section__inner">
          <p class="section-kicker">Insha’Allah</p>
          <h2>${escapeHtml(copy.countdownTitle)}</h2>
          <div class="countdown" id="countdown-clock" data-target="${escapeHtml(wedding.isoDateTime)}">
            ${["Days", "Hours", "Minutes", "Seconds"].map((label) => `
              <div class="countdown__unit">
                <strong data-unit="${label.toLowerCase()}">00</strong>
                <span>${label}</span>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    ` : ""}

    ${sections.timeline ? `
      <section class="section timeline-section reveal-on-scroll" id="timeline">
        <div class="section__inner section__inner--narrow">
          <p class="section-kicker">December 25 · Friday</p>
          <h2>${escapeHtml(copy.timelineTitle)}</h2>
          <div class="timeline">
            ${program.map((item, index) => `
              <article class="timeline__item">
                <div class="timeline__marker"><span>${String(index + 1).padStart(2, "0")}</span></div>
                <div class="timeline__content">
                  <time>${escapeHtml(item.time)}</time>
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.detail)}</p>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    ` : ""}

    ${sections.venue ? `
      <section class="section venue-section reveal-on-scroll" id="venue">
        <div class="venue-card">
          <div class="venue-card__decor" aria-hidden="true"></div>
          <div class="venue-card__content">
            <p class="section-kicker">The venue</p>
            <h2>${escapeHtml(copy.venueTitle)}</h2>
            <h3>${escapeHtml(venue.name)}</h3>
            <address>${escapeHtml(venue.address)}</address>
            <p>${escapeHtml(venue.note)}</p>
            <a class="button button--light" href="${escapeHtml(venue.mapsUrl)}" target="_blank" rel="noreferrer">View on Google Maps ↗</a>
          </div>
        </div>
      </section>
    ` : ""}

    ${sections.dressCode ? `
      <section class="section dress-section reveal-on-scroll" id="dress-code">
        <div class="section__inner section__inner--narrow">
          <p class="section-kicker">Celebrate in style</p>
          <h2>${escapeHtml(copy.dressCodeTitle)}</h2>
          <h3>${escapeHtml(dressCode.title)}</h3>
          <p class="lead">${escapeHtml(dressCode.description)}</p>
          <div class="palette" aria-label="Suggested colour palette">
            ${dressCode.palette.map((color) => `<span style="--swatch:${escapeHtml(color)}" title="${escapeHtml(color)}"></span>`).join("")}
          </div>
        </div>
      </section>
    ` : ""}

    ${sections.preWeddingEvents ? `
      <section class="section events-section reveal-on-scroll" id="events">
        <div class="section__inner">
          <p class="section-kicker">Before the Nikah</p>
          <h2>${escapeHtml(copy.preWeddingTitle)}</h2>
          <div class="event-grid">
            ${preWeddingEvents.map((event) => `
              <article class="event-card">
                <span class="event-card__star">✦</span>
                <h3>${escapeHtml(event.title)}</h3>
                <p class="event-card__date">${escapeHtml(event.date)}</p>
                <p>${escapeHtml(event.time)} · ${escapeHtml(event.venue)}</p>
                <small>${escapeHtml(event.note)}</small>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    ` : ""}

    ${sections.gifts ? `
      <section class="section gifts-section reveal-on-scroll" id="gifts">
        <div class="section__inner section__inner--narrow">
          <div class="gift-icon" aria-hidden="true">♡</div>
          <h2>${escapeHtml(copy.giftsTitle)}</h2>
          <p class="lead">${escapeHtml(copy.giftsBody)}</p>
        </div>
      </section>
    ` : ""}

    ${sections.rsvp ? `
      <section class="section rsvp-section reveal-on-scroll" id="rsvp">
        <div class="section__inner section__inner--narrow">
          <p class="section-kicker">Répondez s’il vous plaît</p>
          <h2>${escapeHtml(copy.rsvpTitle)}</h2>
          <p class="rsvp-subtitle">${escapeHtml(copy.rsvpSubtitle)}</p>

          <form class="rsvp-form" id="rsvp-form" novalidate>
            <label>
              <span>Your name</span>
              <input name="guestName" type="text" autocomplete="name" placeholder="Full name" required />
            </label>

            <fieldset>
              <legend>Will you attend?</legend>
              <div class="choice-row">
                <label class="choice"><input type="radio" name="attendance" value="Yes, joyfully attending" required /><span>Joyfully attending</span></label>
                <label class="choice"><input type="radio" name="attendance" value="Regretfully unable" required /><span>Regretfully unable</span></label>
              </div>
            </fieldset>

            <label>
              <span>Number of guests</span>
              <select name="guestCount">
                ${[1,2,3,4,5,6].map((n) => `<option value="${n}">${n}</option>`).join("")}
              </select>
            </label>

            <fieldset>
              <legend>Events attending</legend>
              <div class="check-grid">
                ${preWeddingEvents.map((event) => `<label class="check"><input type="checkbox" name="events" value="${escapeHtml(event.title)}" /><span>${escapeHtml(event.title)}</span></label>`).join("")}
                <label class="check"><input type="checkbox" name="events" value="Nikah & Reception" checked /><span>Nikah & Reception</span></label>
              </div>
            </fieldset>

            <label>
              <span>Meal preference</span>
              <select name="mealPreference">
                ${rsvp.mealOptions.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join("")}
              </select>
            </label>

            <label>
              <span>Dietary restrictions</span>
              <input name="dietaryRestrictions" type="text" placeholder="Optional" />
            </label>

            <label>
              <span>A message for the couple</span>
              <textarea name="message" rows="4" placeholder="Share your duas and wishes"></textarea>
            </label>

            <button class="button button--gold button--full" type="submit">Send RSVP</button>
            <p class="form-note">This sample stores responses only in this browser. Connect an API endpoint in the config for production.</p>
            <p class="form-status" id="form-status" role="status"></p>
          </form>
        </div>
      </section>
    ` : ""}

    ${sections.closing ? `
      <footer class="closing" id="closing">
        <div class="closing__pattern" aria-hidden="true"></div>
        <div class="closing__content reveal-on-scroll">
          <p class="closing__arabic"></p>
          <h2>${escapeHtml(copy.closingTitle)}</h2>
          <p>${escapeHtml(copy.closingBody)}</p>
          <div class="closing__names">${escapeHtml(couple.brideShortName || couple.brideName.split(" ")[0])}<br><span>&amp;</span><br>${escapeHtml(couple.groomShortName || couple.groomName.split(" ")[0])}</div>
          <time>${escapeHtml(wedding.displayDate)}</time>
          <div class="closing__cta">
            <a href="https://www.instagram.com/noor.invites.nagpur/" target="_blank" rel="noopener noreferrer" class="button button--create-yours">
              <svg class="instagram-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Create Yours</span>
            </a>
          </div>
          <div class="closing__credits">
            <span>Designed by</span> <a href="https://www.instagram.com/noor.invites.nagpur/" target="_blank" rel="noopener noreferrer">@noor.invites.nagpur</a>
          </div>
          <a href="#top" class="back-to-top">Back to the beginning ↑</a>
        </div>
      </footer>
    ` : ""}
  `;
}
