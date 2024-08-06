import React from 'react'

function About() {
  return (
    <div className='about'>
       <nav class="navbar">
      <a href="#" class="nav-cta-btn">Get Started</a>
    </nav>
    <div class="section">
      <div class="video-visual">
        <video
          class="video"
          autoplay
          loop
          muted
          poster=""
          role="none"
          aria-label="background gradient animation"
        >
          <source
            src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/bg-gradient-animation.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="section-wrapper">
        <div class="content-wrapper">
          <div class="content content-1">
            <div class="mobile-visual">
              <img
                class="card-img"
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-1.avif"
                alt="Fantasy warrior  - Video game character"
              />
            </div>
            <div class="meta">
              <h2 class="headline">
                Unleash Your<span class="text-highlight"> Inner Warrior</span>
              </h2>
              <p class="desc">
                Join the battle and conquer the arena with unmatched skill and
                strategy.
              </p>
            </div>
          </div>
          <div class="content content-2">
            <div class="mobile-visual">
              <img
                class="card-img"
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-2.avif"
                alt="Green haired ninja in armor - Video game character"
              />
            </div>
            <div class="meta">
              <h2 class="headline">
                Embark on Your
                <span class="text-highlight">Legendary Journey</span>
              </h2>
              <p class="desc">
                Immerse Yourself in a World Where Legends Clash and Heroes Rise
                to Glory.
              </p>
            </div>
          </div>
          <div class="content content-3">
            <div class="mobile-visual">
              <img
                class="card-img"
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-3.avif"
                alt="Female warrior in armor - Video game character"
              />
            </div>
            <div class="meta">
              <h2 class="headline">
                Master the
                <span class="text-highlight">Art of Magic</span>
              </h2>
              <p class="desc">
                Harness powerful spells and enchantments to dominate your foes
                and change the course of battle.
              </p>
            </div>
          </div>
          <div class="content content-4">
            <div class="mobile-visual">
              <img
                class="card-img"
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-4.avif"
                alt="Agile warrior - Video game character"
              />
            </div>
            <div class="meta">
              <h2 class="headline">
                Rise as the <span class="text-highlight">Champion</span>
              </h2>
              <p class="desc">
                Lead your team to victory with unparalleled strength and
                unwavering determination.
              </p>
            </div>
          </div>
        </div>
        <div class="visual">
          <div class="card-wrapper">
            <div class="card card-1">
              <img
                class="card-img"
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-1.avif"
                alt="Fantasy warrior  - Video game character"
              />
            </div>
            <div class="card card-2">
              <img
                class="card-img"
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-2.avif"
                alt="Green haired ninja in armor - Video game character"
              />
            </div>
            <div class="card card-3">
              <img
                class="card-img"
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-3.avif"
                alt="Female warrior in armor - Video game character"
              />
            </div>
            <div class="card card-4">
              <img
                class="card-img"
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-4.avif"
                alt="Agile warrior - Video game character"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
