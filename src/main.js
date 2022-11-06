export const mainHTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="description" content="Sustainable Media Platform" />
    <style>
    /* Global variables. */

.test {
  display: inline;
}

.wrapper-1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;
}

.media_content-1 {
  grid-row-start: 1;
  grid-row-end: 3;
  align-self: center;
}

.centered_content-1 {
  align-self: center;
}

.centered_content {
  padding: 5rem 5rem;
  border: 3px solid var(--text);
  text-align: center;
  border-radius: 5px;
  background-color: var(--accent-bg);
}

.columns-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.columns-3 .img-wrapper {
  aspect-ratio: 16/9;
  overflow: hidden;
}

.img-wrapper {
  background-color: var(--accent-bg);
  display: flex;
  min-width: 100%;
  min-height: 100px;
  align-items: center;
  justify-content: center;
  color: var(--text);
  border-radius: 5px;
}

.article_content {
  max-width: 610px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.logo-link {
  display: flex;
}

:root {
  /* Set sans-serif & mono fonts */
  --sans-font: -apple-system, BlinkMacSystemFont, "Avenir Next", Avenir,
    "Nimbus Sans L", Roboto, "Noto Sans", "Segoe UI", Arial, Helvetica,
    "Helvetica Neue", sans-serif;
  --mono-font: Consolas, Menlo, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
}

:root,
[data-theme="default"] {
  color-scheme: dark;
  --bg: #212121;
  --accent-bg: #2b2b2b;
  --text: #dcdcdc;
  --text-light: #ababab;
  --accent: #4ecca3;
  --code: #f06292;
  --preformatted: #ccc;
  --disabled: #111;
}

[data-theme="light"] {
  --bg: #fff;
  --accent-bg: #f5f7ff;
  --text: #212121;
  --text-light: #585858;
  --border: #898ea4;
  --accent: #0d47a1;
  --code: #d81b60;
  --preformatted: #444;
  --marked: #ffdd33;
  --disabled: #efefef;
}

/* Reset box-sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Reset default appearance */
textarea,
select,
input,
progress {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

html {
  /* Set the font globally */
  font-family: var(--sans-font);
  scroll-behavior: smooth;
}

/* Make the body a nice central block */
body {
  color: var(--text);
  background-color: var(--bg);
  font-size: 1.15rem;
  line-height: 1.5;
  display: grid;
  grid-template-columns: 1fr min(80rem, 90%) 1fr;
  margin: 0;
  overflow-x: hidden;
}
body > * {
  grid-column: 2;
}

.hero-banner {
  min-height: 60vh;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.hero-banner:before {
  content: "";
  position: absolute;
  width: 100vw;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  background: linear-gradient(
    -90deg,
    rgba(134, 131, 238, 0.702140231092437) 0%,
    rgba(113, 214, 181, 0.32679009103641454) 30%,
    rgba(255, 255, 255, 0) 87%
  );
}

.hero-banner__img {
  position: absolute;
  top: 0;
  height: 100%;
  right: -20px;
  z-index: -1;
  opacity: 60%;
}

/* Make the header bg full width, but the content inline with body */
body > header {
  background-color: var(--accent-bg);
  border-bottom: 1px solid var(--border);
  text-align: center;
  padding: 0.8rem 1rem;
  grid-column: 1 / -1;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
}

body > header h1 {
  max-width: 1200px;
  margin: 1rem auto;
}

body > header p {
  max-width: 40rem;
  margin: 1rem auto;
}

/* Add a little padding to ensure spacing is correct between content and header > nav */
main {
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 64px;
}

body > footer {
  margin-top: 4rem;
  padding: 2rem 1rem 1.5rem 1rem;
  color: var(--text-light);
  font-size: 0.9rem;
  text-align: center;
  border-top: 1px solid var(--border);
}

/* Format headers */
h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2.6rem;
}

h3 {
  font-size: 2rem;
}

h4 {
  font-size: 1.44rem;
}

h5 {
  font-size: 1.15rem;
}

h6 {
  font-size: 0.96rem;
}

/* Prevent long strings from overflowing container */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

/* Fix line height when title wraps */
h1,
h2,
h3 {
  line-height: 1.1;
}

/* Reduce header size on mobile */
@media only screen and (max-width: 720px) {
  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2.1rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.25rem;
  }
}

/* Format links & buttons */
a:not(.button),
a:not(.button):visited {
  color: var(--accent);
}

a:hover {
  text-decoration: none;
}

.button,
button,
[role="button"] {
  border: none;
  border-radius: 24px;
  background-color: var(--accent);
  font-size: 1rem;
  color: var(--bg);
  padding: 0.7rem 0.9rem;
  margin: 0.5rem 0;
  display: inline-block;
  text-decoration: none;
}

.button[disabled],
button[disabled],
[role="button"][aria-disabled="true"] {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Set the cursor to '?' on an abbreviation and style the abbreviation to show that there is more information underneath */
abbr[title] {
  cursor: help;
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

button:focus,
button:enabled:hover,
.button:hover,
.button:focus,
[role="button"]:focus,
[role="button"]:not([aria-disabled="true"]):hover,
input[type="submit"]:focus,
input[type="submit"]:enabled:hover,
input[type="reset"]:focus,
input[type="reset"]:enabled:hover,
input[type="button"]:focus,
input[type="button"]:enabled:hover,
label[type="button"]:focus,
label[type="button"]:hover {
  filter: brightness(1.4);
  cursor: pointer;
}

/* Format navigation */
header > nav {
  font-size: 1rem;
  line-height: 2;
  padding: 1rem 0 0 0;
}

/* Use flexbox to allow items to wrap, as needed */
header > nav ul,
header > nav ol {
  align-content: space-around;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

/* List items are inline elements, make them behave more like blocks */
header > nav ul li,
header > nav ol li {
  display: inline-block;
}

header > nav a,
header > nav a:visited {
  margin: 0 0.5rem 1rem 0.5rem;
  border: 1px solid var(--border);
  border-radius: 5px;
  color: var(--text);
  display: inline-block;
  padding: 0.1rem 1rem;
  text-decoration: none;
}

header > nav a:hover {
  border-color: var(--accent);
  color: var(--accent);
  cursor: pointer;
}

/* Reduce nav side on mobile */
@media only screen and (max-width: 720px) {
  header > nav a {
    border: none;
    padding: 0;
    text-decoration: underline;
    line-height: 1;
  }
}

/* Consolidate box styling */
aside,
details,
pre,
progress {
  background-color: var(--accent-bg);
  border: 1px solid var(--border);
  border-radius: 5px;
  margin-bottom: 1rem;
}

aside {
  font-size: 1rem;
  width: 30%;
  padding: 0 15px;
  margin-left: 15px;
  float: right;
}

/* Make aside full-width on mobile */
@media only screen and (max-width: 720px) {
  aside {
    width: 100%;
    float: none;
    margin-left: 0;
  }
}

article,
fieldset {
  border: 1px solid var(--border);
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
}

article h2:first-child,
section h2:first-child {
  margin-top: 1rem;
}

section {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 2rem 1rem;
  margin: 3rem 0;
}

/* Don't double separators when chaining sections */
section + section,
section:first-child {
  border-top: 0;
  padding-top: 0;
}

section:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

details {
  padding: 0.7rem 1rem;
}

summary {
  cursor: pointer;
  font-weight: bold;
  padding: 0.7rem 1rem;
  margin: -0.7rem -1rem;
  word-break: break-all;
}

details[open] > summary + * {
  margin-top: 0;
}

details[open] > summary {
  margin-bottom: 0.5rem;
}

details[open] > :last-child {
  margin-bottom: 0;
}

/* Misc body elements */
hr {
  border: none;
  height: 1px;
  background: var(--border);
  margin: 1rem auto;
}

mark {
  padding: 2px 5px;
  border-radius: 4px;
  background-color: var(--marked);
}

img,
video {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

figure {
  margin: 0;
  text-align: center;
}

figcaption {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 1rem;
}

blockquote {
  margin: 2rem 0 2rem 2rem;
  padding: 0.4rem 0.8rem;
  border-left: 0.35rem solid var(--accent);
  color: var(--text-light);
  font-style: italic;
}

cite {
  font-size: 0.9rem;
  color: var(--text-light);
  font-style: normal;
}

@media screen and (max-width: 720px) {
  .wrapper-1,
  .columns-3 {
    grid-template-columns: 1fr;
  }

  .hero-banner__img {
    max-width: 500px;
  }

  main {
    row-gap: 32px;
  }

  body > header {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
}

.wistia {
  background-color: #000;
  margin-bottom: 30px;
  position: relative;
  padding-top: 56.25%;
  overflow: hidden;
  cursor: pointer;
}
.wistia img {
  width: 100%;
  top: 0; /* Change this for different ratio than 16:9 */
  left: 0;
  opacity: 0.7;
}
.wistia .play-button {
  width: 90px;
  height: 60px;
  background-color: #333;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
  z-index: 1;
  opacity: 0.8;
  border-radius: 6px;
}
.wistia .play-button:before {
  content: "";
  border-style: solid;
  border-width: 15px 0 15px 26px;
  border-color: transparent transparent transparent #fff;
}
.wistia img,
.wistia .play-button {
  cursor: pointer;
}
.wistia img,
.wistia iframe,
.wistia .play-button,
.wistia .play-button:before {
  position: absolute;
}
.wistia .play-button,
.wistia .play-button:before {
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.wistia iframe {
  background-color: var(--bg);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}

    </style>
    <title>Gryn Fyld</title>
  </head>
  <body>
    <header>
      <a class="logo-link" href="/" aria-label="Home page link">
        <svg
          width="210"
          height="37"
          viewBox="0 0 210 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_17_126)">
            <path
              d="M2.14343 1.66075C2.24353 1.37687 2.48278 1.16948 2.77102 1.11449C3.05867 1.06635 3.35458 1.16775 3.54433 1.39838C5.17017 3.35226 8.9184 4.0334 12.8873 4.7553C20.0785 6.06318 29.0276 7.69234 30.1402 18.0075C30.4741 21.1077 29.7436 24.0856 28.0887 26.5591C29.9758 28.5266 31.573 30.9644 32.5762 33.9774C32.7236 34.4205 32.4943 34.9056 32.063 35.0563C31.9739 35.0881 31.8837 35.1028 31.7951 35.1028C31.4525 35.1028 31.1318 34.8818 31.0147 34.5282C30.1115 31.8144 28.7129 29.6452 27.0805 27.8811C24.4344 30.8919 20.5476 32.5528 16.1195 32.5528C10.7526 32.5528 6.64184 30.5088 3.90114 26.4764C-1.14228 19.058 0.145826 7.31833 2.14343 1.66075ZM5.25151 25.5017C7.66549 29.053 11.3219 30.8527 16.119 30.8527C20.0939 30.8527 23.5638 29.3799 25.8931 26.7053C23.7954 24.812 21.4299 23.5048 19.1804 22.6456C19.1688 22.6423 19.1567 22.6439 19.1452 22.6394C19 22.5867 18.8696 22.5233 18.7266 22.4688C15.1565 21.1864 11.9891 20.9932 10.9177 21.2448C10.4739 21.3428 10.0322 21.0589 9.93315 20.6005C9.83306 20.1421 10.1136 19.6876 10.5585 19.5845C11.125 19.4547 11.9544 19.4225 12.9323 19.4831C9.9755 17.4283 7.75405 14.8415 6.30146 11.7429C6.10346 11.3197 6.27503 10.8113 6.68592 10.6073C7.09346 10.4033 7.58847 10.5807 7.78756 11.0023C9.89133 15.4903 13.6303 18.6994 19.1715 20.8239C18.2684 18.8026 18.0286 16.3653 19.1583 14.038C19.3624 13.6197 19.8585 13.4469 20.2655 13.6577C20.673 13.8685 20.8386 14.3785 20.6346 14.7984C19.1969 17.761 20.6604 20.6278 21.9001 22.0512C23.6079 22.9086 25.3008 24.0108 26.8595 25.3906C28.1943 23.2923 28.7812 20.7955 28.5007 18.1967C27.5239 9.14472 19.9371 7.76545 12.6006 6.43041C8.95958 5.768 5.49128 5.13728 3.30282 3.46502C1.66325 9.12831 0.901478 19.1011 5.25151 25.5017Z"
              fill="var(--text)"
            />
            <path
              d="M16.119 30.8528C11.3218 30.8528 7.66542 29.053 5.25144 25.5017C0.901413 19.1012 1.66319 9.12838 3.30276 3.46509C3.30276 3.46509 4.60712 8.36784 6.05971 11.4664C7.5123 14.5649 9.97544 17.4284 12.9322 19.4832C11.9544 19.4225 11.1249 19.4548 10.5584 19.5846C10.1135 19.6877 9.83299 20.1422 9.93309 20.6006C10.0321 21.059 10.4738 21.3429 10.9176 21.2449C11.989 20.9933 15.1565 21.1865 18.7265 22.4689C18.8696 22.5233 18.9999 22.5867 19.1451 22.6395C19.1566 22.644 19.1688 22.6423 19.1803 22.6457C21.4298 23.5048 23.7954 24.8121 25.8931 26.7054C23.5638 29.38 20.0938 30.8528 16.119 30.8528Z"
              fill="var(--accent)"
            />
          </g>
          <path
            d="M68.832 25.8428C67.584 26.4908 66.12 27.0188 64.44 27.4268C62.784 27.8348 60.972 28.0388 59.004 28.0388C56.964 28.0388 55.08 27.7148 53.352 27.0668C51.648 26.4188 50.172 25.5068 48.924 24.3308C47.7 23.1548 46.74 21.7508 46.044 20.1188C45.348 18.4628 45 16.6268 45 14.6108C45 12.5708 45.348 10.7228 46.044 9.06681C46.764 7.41081 47.748 6.00681 48.996 4.8548C50.244 3.67881 51.708 2.77881 53.388 2.15481C55.068 1.5308 56.88 1.2188 58.824 1.2188C60.84 1.2188 62.712 1.5308 64.44 2.15481C66.168 2.7548 67.572 3.57081 68.652 4.60281L64.764 9.0308C64.164 8.3348 63.372 7.7708 62.388 7.3388C61.404 6.8828 60.288 6.65481 59.04 6.65481C57.96 6.65481 56.964 6.85881 56.052 7.26681C55.14 7.6508 54.348 8.20281 53.676 8.92281C53.004 9.61881 52.476 10.4588 52.092 11.4428C51.732 12.4028 51.552 13.4588 51.552 14.6108C51.552 15.7868 51.72 16.8668 52.056 17.8508C52.392 18.8348 52.884 19.6868 53.532 20.4068C54.204 21.1028 55.02 21.6548 55.98 22.0628C56.964 22.4468 58.08 22.6388 59.328 22.6388C60.048 22.6388 60.732 22.5908 61.38 22.4948C62.028 22.3748 62.628 22.1948 63.18 21.9548V17.3108H58.32V12.3428H68.832V25.8428Z"
            fill="var(--text)"
          />
          <path
            d="M85.16 14.2868C84.896 14.2148 84.632 14.1668 84.368 14.1428C84.128 14.1188 83.888 14.1068 83.648 14.1068C82.856 14.1068 82.184 14.2508 81.632 14.5388C81.104 14.8268 80.672 15.1748 80.336 15.5828C80.024 15.9908 79.796 16.4348 79.652 16.9148C79.508 17.3948 79.436 17.8148 79.436 18.1748V27.3908H73.532V9.4628H79.22V12.0548H79.292C79.748 11.1428 80.396 10.3988 81.236 9.82281C82.076 9.24681 83.048 8.95881 84.152 8.95881C84.392 8.95881 84.62 8.9708 84.836 8.9948C85.076 9.0188 85.268 9.05481 85.412 9.10281L85.16 14.2868Z"
            fill="var(--text)"
          />
          <path
            d="M97.9214 30.0908C97.5614 31.0268 97.1534 31.8548 96.6974 32.5748C96.2654 33.3188 95.7374 33.9428 95.1134 34.4468C94.5134 34.9748 93.7934 35.3708 92.9534 35.6348C92.1374 35.8988 91.1654 36.0308 90.0374 36.0308C89.4854 36.0308 88.9094 35.9948 88.3094 35.9228C87.7334 35.8508 87.2294 35.7548 86.7974 35.6348L87.4454 30.6668C87.7334 30.7628 88.0454 30.8348 88.3814 30.8828C88.7414 30.9548 89.0654 30.9908 89.3534 30.9908C90.2654 30.9908 90.9254 30.7748 91.3334 30.3428C91.7414 29.9348 92.0894 29.3468 92.3774 28.5788L92.9534 27.1028L85.4654 9.4628H92.0174L96.0134 20.9828H96.1214L99.6854 9.4628H105.949L97.9214 30.0908Z"
            fill="var(--text)"
          />
          <path
            d="M120.003 27.3908V17.5988C120.003 17.0948 119.955 16.6148 119.859 16.1588C119.787 15.7028 119.655 15.3068 119.463 14.9708C119.271 14.6108 118.995 14.3348 118.635 14.1428C118.299 13.9268 117.867 13.8188 117.339 13.8188C116.811 13.8188 116.343 13.9268 115.935 14.1428C115.551 14.3348 115.227 14.6108 114.963 14.9708C114.699 15.3308 114.495 15.7508 114.351 16.2308C114.231 16.6868 114.171 17.1668 114.171 17.6708V27.3908H108.231V9.4628H113.955V11.9468H114.027C114.243 11.5628 114.519 11.1908 114.855 10.8308C115.215 10.4468 115.623 10.1228 116.079 9.8588C116.559 9.5948 117.075 9.37881 117.627 9.21081C118.179 9.04281 118.767 8.95881 119.391 8.95881C120.591 8.95881 121.611 9.17481 122.451 9.60681C123.291 10.0388 123.963 10.6028 124.467 11.2988C124.995 11.9708 125.367 12.7508 125.583 13.6388C125.823 14.5268 125.943 15.4148 125.943 16.3028V27.3908H120.003Z"
            fill="var(--text)"
          />
          <path
            d="M145.823 7.1588V12.4148H155.687V17.4908H145.823V27.3908H139.739V1.90281H156.515V7.1588H145.823Z"
            fill="var(--text)"
          />
          <path
            d="M169.64 30.0908C169.28 31.0268 168.872 31.8548 168.416 32.5748C167.984 33.3188 167.456 33.9428 166.832 34.4468C166.232 34.9748 165.512 35.3708 164.672 35.6348C163.856 35.8988 162.884 36.0308 161.756 36.0308C161.204 36.0308 160.628 35.9948 160.028 35.9228C159.452 35.8508 158.948 35.7548 158.516 35.6348L159.164 30.6668C159.452 30.7628 159.764 30.8348 160.1 30.8828C160.46 30.9548 160.784 30.9908 161.072 30.9908C161.984 30.9908 162.644 30.7748 163.052 30.3428C163.46 29.9348 163.808 29.3468 164.096 28.5788L164.672 27.1028L157.184 9.4628H163.736L167.732 20.9828H167.84L171.404 9.4628H177.668L169.64 30.0908Z"
            fill="var(--text)"
          />
          <path
            d="M180.022 27.3908V0.174805H185.998V27.3908H180.022Z"
            fill="var(--text)"
          />
          <path
            d="M204.245 27.3908V25.0508H204.173C203.597 25.9628 202.769 26.6708 201.689 27.1748C200.633 27.6548 199.505 27.8948 198.305 27.8948C196.961 27.8948 195.761 27.6308 194.705 27.1028C193.649 26.5748 192.749 25.8788 192.005 25.0148C191.285 24.1268 190.733 23.1068 190.349 21.9548C189.965 20.8028 189.773 19.6028 189.773 18.3548C189.773 17.1068 189.965 15.9188 190.349 14.7908C190.757 13.6388 191.321 12.6308 192.041 11.7668C192.785 10.9028 193.673 10.2188 194.705 9.71481C195.761 9.21081 196.937 8.95881 198.233 8.95881C199.553 8.95881 200.669 9.21081 201.581 9.71481C202.493 10.2188 203.201 10.7708 203.705 11.3708H203.777V0.174805H209.681V27.3908H204.245ZM204.029 18.3908C204.029 17.8148 203.921 17.2508 203.705 16.6988C203.513 16.1468 203.225 15.6548 202.841 15.2228C202.481 14.7908 202.037 14.4428 201.509 14.1788C200.981 13.9148 200.381 13.7828 199.709 13.7828C199.013 13.7828 198.401 13.9148 197.873 14.1788C197.345 14.4428 196.901 14.7908 196.541 15.2228C196.181 15.6308 195.905 16.1108 195.713 16.6628C195.545 17.2148 195.461 17.7788 195.461 18.3548C195.461 18.9308 195.545 19.5068 195.713 20.0828C195.905 20.6348 196.181 21.1268 196.541 21.5588C196.901 21.9908 197.345 22.3388 197.873 22.6028C198.401 22.8668 199.013 22.9988 199.709 22.9988C200.381 22.9988 200.981 22.8668 201.509 22.6028C202.037 22.3388 202.481 21.9908 202.841 21.5588C203.225 21.1268 203.513 20.6348 203.705 20.0828C203.921 19.5308 204.029 18.9668 204.029 18.3908Z"
            fill="var(--text)"
          />
          <defs>
            <clipPath id="clip0_17_126">
              <rect
                width="33"
                height="34"
                fill="white"
                transform="matrix(-1 0 0 1 33 1.10278)"
              />
            </clipPath>
          </defs>
        </svg>
      </a>
      <div style="display: flex; column-gap: 8px;">
        <button id="dark-mode-toggle" onclick="toggleDarkMode()">
          Dark Mode
        </button>
      </div>
    </header>

    <main>
      <div class="hero-banner">
        <h1>
          <!-- <div id="eco-mode-state" /> -->
          🍃 Sustainable Media Platform
        </h1>
        <div>
          <p>
            This page was created for CGI challenge "Now Green Code you must".
          </p>
          <p>
            It aims to demonstrate a simple media site aimed at sustainability
            and green tech.
          </p>
          <a
            href="https://rocky-brie-147.notion.site/Greenfield-Whitepaper-43e591f29f3446f089616a324ef91b76"
          >
            <button>Read our Whitepaper</button>
          </a>
          <svg
            class="hero-banner__img"
            width="246"
            height="416"
            viewBox="0 0 246 416"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M138.196 198.866C134.376 199.336 131.48 195.494 132.983 191.951L161.908 123.763C163.411 120.22 168.186 119.632 170.503 122.706L215.093 181.849C217.41 184.923 215.531 189.352 211.711 189.822L138.196 198.866Z"
              fill="#8683EE"
            />
            <path
              d="M25.8638 333.245C23.5228 330.19 25.3671 325.746 29.1835 325.247L102.625 315.63C106.442 315.13 109.368 318.949 107.893 322.504L79.4998 390.915C78.0243 394.47 73.2538 395.095 70.9128 392.04L25.8638 333.245Z"
              fill="#72C8A5"
            />
            <path
              d="M104.355 32.0045C103.463 28.2604 106.958 24.9542 110.647 26.0533L148.87 37.4432C152.559 38.5423 153.675 43.2224 150.878 45.8674L121.903 73.2751C119.106 75.9201 114.496 74.5461 113.603 70.802L104.355 32.0045Z"
              fill="#FCD64F"
            />
          </svg>
        </div>
      </div>

      <div class="centered_content">
        <h2>
          How does this website work?
        </h2>
        <p>
          Read an article about our solution
        </p>
        <a class="button" href="articles/how-it-works">Read more</a>
      </div>

      <!-- template 1 -->
      <div>
        <h2>🎬 Video impact on the environment</h2>
        <p>
          Many media websites use videos to make content more interesting and
          engaging. We are no exception and provide content with a reduced
          carbon footprint.
        </p>
      </div>
      <div class="wrapper-1">
        <!-- Wistia video div -->
        <div
          class="wistia"
          data-embed="o6etgu4t9e"
          data-thumb="00858937181102effb7246f500542927988697c8"
        >
          <div class="play-button"></div>
        </div>
        <div>
          <p>
            We chose Wistia as our video provider since they run on renewable
            energy and have optimized computing, which reduces asset sizes up to
            40%. You can click on the link to Read more about Wistia's approach
            to sustainability.
          </p>
          <a class="button" href="articles/video-impact">Read more</a>
        </div>
      </div>

      <!-- template 1 -->
      <div class="wrapper-1">
        <div>
          <h2>
            How energy consumption is taken into account in service design?
          </h2>
          <p>
            Analysing user journeys can help to identify UX flows and features
            which can be more energy efficient.
          </p>
          <a class="button" href="articles/service-design">Read more</a>
        </div>
        <div class="img-wrapper">
          <img
            src="https://green-field.pages.dev/houses.avif"
            alt="wireframe"
            loading="lazy"
            sizes="(max-width: 600px) 480px, 800px"
            srcset="
              image-480w.avif                           480w,
              https://green-field.pages.dev/houses.avif 800w
            "
          />
        </div>
      </div>
      <!-- template 1 -->

      <div>
        <h2>🖼️ Image compression matters</h2>
        <div>
          <img
            alt="dog-comparisons"
            src="https://green-field.pages.dev/dog-comparison.avif"
            class="media_content-1"
          />
          <div>
            <p>
              Images in this website are compressed using AVIF image file
              format. Exact savings depend on content, however, greater than 50%
              savings were observed compared to JPEG while maintaining similar
              image quality.
            </p>
            <a class="button" href="articles/image-compression">Read more</a>
          </div>
        </div>
      </div>

      <div class="centered_content">
        <h3>
          This media site was served from the nearest cloud edge location 🌏
        </h3>
        <span id="latency"></span>
      </div>

      <!-- template centered content -->

      <div>
        <!-- template 3 columns -->
        <h2>☁️ Articles from the Edge</h2>
        <div class="columns-3">
          <div class="columns-3__item">
            <div>
              <div class="img-wrapper">
                <img
                  src="https://green-field.pages.dev/energy.avif"
                  alt="Electronic devices"
                  loading="lazy"
                  sizes="(max-width: 600px) 480px, 800px"
                  srcset="
                    image-480w.avif                           480w,
                    https://green-field.pages.dev/energy.avif 800w
                  "
                />
              </div>
              <h3>🚅 Cloudflare worker energy efficiency</h3>
            </div>
            <p>
              Cloudflare announced on July 27, 2021 that it intends to operate
              its Internet services on 100% renewable energy and remove all
              historical carbon emissions its global network has emitted since
              its founding by 2025.
            </p>
            <a class="button" href="articles/worker-efficiency">Read More</a>
          </div>
          <div class="columns-3__item">
            <div>
              <div class="img-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                  alt="Electronic devices"
                  loading="lazy"
                  sizes="(max-width: 600px) 480px, 800px"
                  srcset="
                    image-480w.avif                                                                                                                                             480w,
                    https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80 800w
                  "
                />
              </div>
              <h3>⚡️ Support for 0ms cold starts</h3>
            </div>
            <p>
              Most serverless platforms experience a cold start every time you
              deploy or your service increases in popularity, which increase the
              response time by an additional 1-2 seconds. Workers can run your
              code instantly, without cold starts, thus not wasting unnecessary
              energy.
            </p>
            <a href="articles/cold-starts" class="button">Read More</a>
          </div>
          <div class="columns-3__item">
            <div>
              <div class="img-wrapper">
                <img
                  src="https://green-field.pages.dev/serverless.avif"
                  alt="serverless"
                  loading="lazy"
                  sizes="(max-width: 600px) 480px, 800px"
                  srcset="
                    image-480w.avif                               480w,
                    https://green-field.pages.dev/serverless.avif 800w
                  "
                />
              </div>
              <h3>🔧 No servers to maintain</h3>
            </div>
            <p>
              Spend more time building, less time configuring. No VMs, no
              servers, and no containers to spin up or manage.
            </p>
            <a href="articles/server-maintenance" class="button">Read More</a>
          </div>
        </div>
        <!-- template 3 columns -->
      </div>

      <!-- template centered content -->
      <div class="centered_content">
        <h3 id="eco-mode-state">
          Eco Mode
        </h3>
        <p>
          You can always pick and use eco mode to browse this web more
          sustainably!
        </p>
        <a class="button" href="articles/eco-mode">Read more</a>
      </div>
      <!-- template centered content -->

      <!-- template 1 -->
      <div class="wrapper-1">
        <div>
          <h2>Data in multiple cache servers</h2>
          <p>
            In this application we are using Cloudflare Key-Value to store and
            update articles in distributed data stores.
          </p>
          <a class="button" href="articles/cache-servers">Read more</a>
        </div>
        <div class="img-wrapper">
          <img
            src="https://green-field.pages.dev/tree.avif"
            alt="Tree on top of a hill during a sunset."
            loading="lazy"
            sizes="(max-width: 600px) 480px, 800px"
            srcset="
              image-480w.avif                         480w,
              https://green-field.pages.dev/tree.avif 800w
            "
          />
        </div>
      </div>
      <!-- template 1 -->
    </main>
    <footer>
      This web page is cleaner than 92 % of web pages
      <a
        href="https://www.websitecarbon.com/website/green-field-worker-v2-workers-dev/"
        >tested</a
      >
      <span style="display: block;">Made with ☕ @ Junction 2022</span>
    </footer>
  </body>
  <script>
    (function () {
      var wistia = document.querySelectorAll(".wistia");
      // console.log(wistia);

      for (var i = 0; i < wistia.length; i++) {
        var source =
          "https://embed-ssl.wistia.com/deliveries/" +
          wistia[i].dataset.thumb +
          ".jpg";

        var image = new Image();
        image.src = source;
        image.alt = "Grass";
        image.addEventListener(
          "load",
          (function () {
            wistia[i].appendChild(image);
          })(i)
        );

        wistia[i].addEventListener("click", function () {
          var iframe = document.createElement("iframe");

          iframe.setAttribute("frameborder", "0");
          iframe.setAttribute("allowfullscreen", "");
          iframe.setAttribute("mozallowfullscreen", "");
          iframe.setAttribute("webkitallowfullscreen", "");
          iframe.setAttribute("oallowfullscreen", "");
          iframe.setAttribute("msallowfullscreen", "");
          iframe.setAttribute("allowtransparency", "true");
          iframe.setAttribute(
            "src",
            "//fast.wistia.net/embed/iframe/" +
              this.dataset.embed +
              "?videoFoam=true"
          );
          // TODO: Prevent flicker on video click
          // iframe.setAttribute(
          //   'style',
          //   'display: none;'
          // );
          // iframe.onload = () => {
          //   setTimeout(() => {
          //     image.remove();
          //     iframe.setAttribute(
          //         'style',
          //         ''
          //       );
          //   }, 1000);
          // }
          this.innerHTML = "";
          this.appendChild(iframe);
        });
      }
    })();

    //   return localStorage.getItem("ecoMode");
    // }

    function toggleEcoMode() {
      const ecoMode = getEcoMode();
      const newEcoMode = !ecoMode || ecoMode === "false" ? "true" : "false";
      localStorage.setItem("ecoMode", newEcoMode);

      document.getElementById("eco-mode-state").innerHTML =
        newEcoMode === "true" ? "On" : "Off";
    }

    const getLatencyToCloudflare = async () => {
      const TEST_URL = "https://1.1.1.1/cdn-cgi/trace";
      const NUM_TESTS = 5;

      let started = 0;
      async function load() {
        started++;
        const resp = await fetch(TEST_URL, {
          mode: "no-cors",
          cache: "no-store"
        });
        if (started < NUM_TESTS) await load();
      }

      await load();
      let entries = performance.getEntriesByName(TEST_URL, "resource");
      let min = Infinity;
      let location = "";

      for (
        let i = Math.max(0, entries.length - NUM_TESTS);
        i < entries.length;
        i++
      ) {
        // iOS Safari doesn’t report duration
        const duration =
          entries[i].duration || entries[i].responseEnd - entries[i].fetchStart;

        if (duration < min) min = duration;
        if (!location) location = entries[i];
      }

      return min;
    };

    getLatencyToCloudflare().then((val) => {
      if (val) {
        const latencySpan = document.querySelector("#latency");
        latencySpan.innerHTML =
          "It took only <i> " +
          Math.ceil(val) +
          " ms</i> to connect to an Edge location";
      }
    });

    function toggleDarkMode() {
      const root = document.documentElement;
      const theme = root.getAttribute("data-theme");
      const themeAttribute = theme === "light" ? "default" : "light";
      root.setAttribute("data-theme", themeAttribute);
    }
  </script>
</html>
`
