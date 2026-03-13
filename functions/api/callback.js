export async function onRequest(context) {
  const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = context.env;
  const code = new URL(context.request.url).searchParams.get("code");

  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { "content-type": "application/json", "accept": "application/json" },
    body: JSON.stringify({ client_id: GITHUB_CLIENT_ID, client_secret: GITHUB_CLIENT_SECRET, code }),
  });

  const result = await response.json();
  // 关键：将 Token 传回给 Decap CMS 的父窗口
  const script = `
    <script>
      (function() {
        function receiveMessage(e) {
          if (e.data === "authorizing:github") {
            window.opener.postMessage('authorization:github:success:${JSON.stringify({ token: result.access_token, provider: "github" })}', e.origin);
          }
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })()
    </script>`;
  return new Response(script, { headers: { "content-type": "text/html" } });
}
