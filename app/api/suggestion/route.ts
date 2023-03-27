export async function GET(request: Request) {
  const response = await fetch(
    "https://ksalpern-ai-image-generator.azurewebsites.net/api/getchatgptsuggestion",
    // "http://localhost:7071/api/getChatGPTSuggestion",
    {
      cache: "no-store",
    }
  );
  const textData = await response.text();

  return new Response(JSON.stringify(textData.trim()), {
    status: 200,
  });
}
