const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export function renderInvitation(config) {
  const { couple, copy, wedding, media, venue, dressCode, preWeddingEvents, program, rsvp, sections, creator } = config;
  const whatsappUrl = `https://wa.me/${creator?.whatsappNumber || "919449541723"}?text=${encodeURIComponent(creator?.whatsappMessage || "Hello! I saw the wedding invitation and would like to create one.")}`;

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
          <p class="section-kicker">${escapeHtml(wedding.displayDate)} · ${escapeHtml(wedding.day)}</p>
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
          <p class="section-kicker">Before the Walima</p>
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
                <label class="check"><input type="checkbox" name="events" value="Walima Reception" checked /><span>Walima Reception</span></label>
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
          ${copy.closingCard ? `
            <div class="closing-card">
              <p class="closing-card__date">${escapeHtml(copy.closingCard.date)}</p>
              <h3 class="closing-card__title">${escapeHtml(copy.closingCard.title)}</h3>
              <p class="closing-card__text">${escapeHtml(copy.closingCard.text)}</p>
            </div>
          ` : ""}
          <div class="closing__names">${escapeHtml(couple.brideShortName || couple.brideName.split(" ")[0])}<br><span>&amp;</span><br>${escapeHtml(couple.groomShortName || couple.groomName.split(" ")[0])}</div>
          <time>${escapeHtml(wedding.displayDate)}</time>
          <div class="closing__cta">
            <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="button button--create-yours">
              <svg class="whatsapp-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-12.416c-5.523 0-10 4.477-10 10 0 1.777.468 3.447 1.284 4.897l-1.365 4.992 5.12-1.343c1.402.775 3.01 1.217 4.721 1.217 5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.25c-1.579 0-3.048-.484-4.271-1.314l-.307-.208-3.037.797.811-2.96-.226-.36c-.927-1.477-1.47-3.218-1.47-5.085 0-4.549 3.701-8.25 8.25-8.25s8.25 3.701 8.25 8.25-3.701 8.25-8.25 8.25z"/>
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
