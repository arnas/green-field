import { articleHTML } from "./article.js";
import { mainHTML } from "./main.js";
export default {
  async fetch(request, env) {
    return await handleRequest(request, env).catch(
      (err) => new Response(err.stack, { status: 500 })
    );
  },
};



// const articles = [

async function handleRequest(request, env) {


  const { pathname } = new URL(request.url);

  if (pathname.startsWith("/articles/")) {

    const articleSlug = pathname.split("/articles/")[1];
    const value = await env.GREEN_FIELD_KV.get("articles");
    let articles = JSON.parse(value);

    const article = articles.find((item) => item.slug === articleSlug);

    
    let modified = articleHTML.replace("{{title}}", article.title);
    modified = modified.replace("{{content}}", article.description);

    return new Response(modified, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  }

  if (pathname.startsWith("/robots.txt") || pathname.startsWith("/favicon.ico") ) {



    return new Response();
  }
  

  return new Response(mainHTML, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  });
}


// [{"type":"image","slug": "test", "title":"This is a test article","desription":"aiguhfasdiohfjiaudwfisadhf"},{"type":"image","title":"This is a test article 2","desription":"aiguhfasdiohfjiaudwfisadhf"},{"type":"image","title":"This is a test article","desription":"adsfgasdfasdfasdf"},{"type":"image","title":"This is a test article","desription":"dfsgsfdgdfwgsfdgdsgdsfg"}]
