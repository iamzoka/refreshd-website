# Refresh'd

My personal website built with 11ty.

## 100 Days of code refactor

I've started refactoring 11ty setup on 29-6-2020 as part of my #100daysofcode journey.

When I first deployed this version of the site, I used some starter kit just to get me going. Now, my idea is to
get rid of everything non-essential and add just what I want, so I cleaned out `dependencies` from `package.json`.
It appears 11ty can run without it, who new!

Then, I moved all templates and assets to `src/` for cleaner file tree. Also, started removing stuff from `.eleventy.js`
I don't need.

One thing I wanted to add was Parcel bundler for bundling styles and JavaScript. After deploying refactored version,
I had to update build command in `netlify.toml` to: `DEBUG=* eleventy && npm run prod:parcel`, so that parcel copies
bundled files to `_site/`.

Honestly, I thought I'll have to delete everything and start from scratch, but it worked on the first try.

To be continued...

## To do:

- [x] Clean out project repo
- [x] Implement bundling with Parcel
- [x] Remove everything non-essential
- [x] Clean out `eleventy.js`
- [x] Add SVG sprite generator
- [ ] Write an article about this refactor
