
export default {
  async fetch(request, env) {
    return await handleRequest(request, env).catch(
      (err) => new Response(err.stack, { status: 500 })
    );
  },
};



const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="styles.css" />
    <title>Static Template</title>
    <script
      src="https://fast.wistia.com/embed/medias/o6etgu4t9e.jsonp"
      async
    ></script>
    <script
      src="https://fast.wistia.com/assets/external/E-v1.js"
      async
    ></script>
    <style>
    /* Global variables. */

.test {
  display: inline;
}

.wrapper-1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3.2rem;
}

.media_content-1 {
  grid-row-start: 1;
  grid-row-end: 3;
  align-self: center;
}

.centered_content {
  padding: 5rem 5rem;
  border: 3px solid var(--text);
  text-align: center;
}

.columns-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;
}

.img-wrapper {
  background-color: var(--accent);
  display: flex;
  min-width: 100%;
  min-height: 100px;
  align-items: center;
  justify-content: center;
  color: var(--bg);
  border-radius: 5px;
}

@media screen and (max-width: 720px) {
  .wrapper-1,
  .columns-3 {
    grid-template-columns: 1fr;
  }
}

:root {
  /* Set sans-serif & mono fonts */
  --sans-font: -apple-system, BlinkMacSystemFont, "Avenir Next", Avenir,
    "Nimbus Sans L", Roboto, "Noto Sans", "Segoe UI", Arial, Helvetica,
    "Helvetica Neue", sans-serif;
  --mono-font: Consolas, Menlo, Monaco, "Andale Mono", "Ubuntu Mono", monospace;

  /* Default (light) theme */
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

/* Dark theme */
@media (prefers-color-scheme: dark) {
  :root {
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
  grid-template-columns: 1fr min(45rem, 90%) 1fr;
  margin: 0;
}
body > * {
  grid-column: 2;
}

/* Make the header bg full width, but the content inline with body */
body > header {
  background-color: var(--accent-bg);
  border-bottom: 1px solid var(--border);
  text-align: center;
  padding: 0 0.5rem 2rem 0.5rem;
  grid-column: 1 / -1;
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
  row-gap: 32px;
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
  margin-top: 2.25rem;
}

h3 {
  font-size: 2rem;
  margin-top: 1.75rem;
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
    margin-top: 1.5rem;
  }

  h3 {
    font-size: 1.75rem;
    margin-top: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
  }
}

/* Format links & buttons */
a,
a:visited {
  color: var(--accent);
}

a:hover {
  text-decoration: none;
}

button,
[role="button"] {
  border: none;
  border-radius: 5px;
  background-color: var(--accent);
  font-size: 1rem;
  color: var(--bg);
  padding: 0.7rem 0.9rem;
  margin: 0.5rem 0;
}

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

    </style>
  </head>
  <body>
    <header style="display: flex; justify-content: left; text-align: justify;">
      <div>Green Field</div>
    </header>
    <main>
      <h1>
        Green field page
      </h1>
      <p>Lorem ipsum, hero banner</p>
      <!-- template 1 -->
      <div class="wrapper-1">
        <!-- Wistia video div -->
        <div
          class="wistia_responsive_padding media_content-1"
          style="padding: 56.25% 0 0 0; position: relative;"
        >
          <div
            class="wistia_responsive_wrapper"
            style="
              height: 100%;
              left: 0;
              position: absolute;
              top: 0;
              width: 100%;
            "
          >
            <div
              class="wistia_embed wistia_async_o6etgu4t9e videoFoam=true"
              style="height: 100%; position: relative; width: 100%;"
            >
              <div
                class="wistia_swatch"
                style="
                  height: 100%;
                  left: 0;
                  opacity: 0;
                  overflow: hidden;
                  position: absolute;
                  top: 0;
                  transition: opacity 200ms;
                  width: 100%;
                "
              >
                <img
                  src="https://fast.wistia.com/embed/medias/o6etgu4t9e/swatch"
                  style="
                    filter: blur(5px);
                    height: 100%;
                    object-fit: contain;
                    width: 100%;
                  "
                  alt=""
                  aria-hidden="true"
                  onload="this.parentNode.style.opacity=1;"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"></img> -->
        <div>
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            maximus est vitae vehicula facilisis. Proin augue turpis, interdum
            at sem quis, iaculis auctor ex. Maecenas in neque nibh. Quisque
            turpis quam, imperdiet ut lectus ut, eleifend congue elit. Praesent
            gravida finibus arcu et tempor. Morbi quam mi, pretium quis
            scelerisque in, sagittis non massa.
          </p>
          <button>Learn more</button>
        </div>
      </div>
      <!-- template 1 -->
      <!-- template centered content -->
      <div class="centered_content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus
        est vitae vehicula facilisis. Proin augue turpis, interdum at sem quis,
        iaculis auctor ex. Maecenas in neque nibh. Quisque turpis quam,
        imperdiet ut lectus ut, eleifend congue elit. Praesent gravida finibus
        arcu et tempor. Morbi quam mi, pretium quis scelerisque in, sagittis non
        massa.
      </div>
      <!-- template centered content -->

      <!-- template 3 columns -->
      <h2>Extra title</h2>
      <div class="columns-3">
        <div class="columns-3__item">
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
          <h3>Title 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            saepe sequi minima sint nihil magni perspiciatis commodi, deleniti,
            sapiente, libero culpa illo. Saepe corporis fuga expedita
            exercitationem obcaecati quae illo.
          </p>
        </div>
        <div class="columns-3__item">
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
          <h3>Title 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            saepe sequi minima.
          </p>
        </div>
        <div class="columns-3__item">
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
          <h3>Title 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            saepe sequi minima sint nihil magni perspiciatis commodi, deleniti,
            sapiente, libero culpa illo.
          </p>
        </div>
      </div>
      <!-- template 3 columns -->
    </main>
    <footer>footer</footer>
  </body>
</html>

`;

// const articles = [

async function handleRequest(request, env) {
  // const value = await env.GREEN_FIELD_KV.get("articles");
  // let articles = JSON.parse(value);

  // let formatedHtml = html.replace(
  //   "{{articles}}",
  //   articles.map(
  //     (item) => `
  //   <div>
  //     <h1>${item.title}</h1>
  //     <p>${item.desription}</p>
  //     <img src="https://green-field.pages.dev/nature-3294632_1920-1024x682.jpeg" />
  //   </div>
  //   `
  //   )
  // );

  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  });
}
