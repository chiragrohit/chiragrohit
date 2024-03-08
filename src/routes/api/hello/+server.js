import { AUTH_TOKEN } from "$env/static/private";
export async function GET() {
  try {
    console.log("Fetching data from /api/hello/+server.js");
    console.log("AUTH_TOKEN:", AUTH_TOKEN);
    const response = await fetch(
      "https://chiragrohit--chiragrohit-fastapi-app.modal.run/users",
      {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + AUTH_TOKEN,
        },
      },
    );

    const data = await response.json();
    console.log("############### data:", data);

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
