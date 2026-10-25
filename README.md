# Still & Verse

An English-first, interactive introduction to classical Chinese writing through everyday moments.

Choose a mood or describe your moment in a sentence, explore an original line and its context, optionally add a photo, and download a shareable card. All photo processing happens in your browser. The English lines are new interpretive renderings for this prototype; each context panel links to the original text on Wikisource.

## Run locally

Open `index.html` in a browser, or serve the folder (`python3 -m http.server`). There is no build step.

## Choosing with Claude (optional)

A visitor can describe their moment in their own words. The site ranks lines from the curated library in `library.js` by keyword, then, if the visitor has entered their own Anthropic API key, sends the description and a shortlist of eight lines to Claude (`claude-opus-5-5`). Claude must pick one of the shortlisted IDs (enforced with a JSON schema) and writes a short note on why it fits. The verse, translation, context, and source always come from the library, never from the model. If there is no key, or the call fails or is declined, the best keyword match is shown instead.

The key is kept in `sessionStorage` for the current tab and sent directly from the browser to `api.anthropic.com`. That is fine for trying the prototype with your own key, but a public launch should move the call behind a small server or proxy that holds the key.

## Publish with GitHub Pages

In this repository's **Settings → Pages**, select **Deploy from a branch**, `main`, and `/(root)`. The site is ready to publish directly from the repository root. `.nojekyll` is included.

This is a small, hand-curated prototype: 41 passages, each checked against its Wikisource page and filed under one or more moods. It does not analyze uploaded photos or store visitor data.
