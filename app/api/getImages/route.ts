export async function GET(request: Request) {
  const response = await fetch(
    "https://ksalpern-ai-image-generator.azurewebsites.net/api/getimages",
    // "http://localhost:7071/api/getImages",
    {
      cache: "no-store",
    }
  );

  const blob = await response.blob();
  const textData = await blob.text();

  const data = JSON.parse(textData);

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
