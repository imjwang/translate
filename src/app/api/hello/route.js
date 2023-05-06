export async function POST(req) {
  const { searchParams } = new URL(req.url);
  const data = searchParams.get("data");
  const body = JSON.stringify({
    inputs: data,
  });
  const response = await fetch(
    "https://api-inference.huggingface.co/models/Helsinki-NLP/opus-mt-zh-en",
    {
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_TOKEN}`,
      },
      method: "POST",
      body,
    }
  );
  const result = await response.json();
  return Response.json(result);
}
