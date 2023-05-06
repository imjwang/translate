export async function POST(req) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text");
  const body = JSON.stringify({
    text,
    model_id: "eleven_monolingual_v1",
    voice_settings: {
      stability: 0.7,
      similarity_boost: 0.7,
    },
  });
  const response = await fetch(
    "https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM",
    {
      headers: {
        "xi-api-key": process.env.ELEVENLABS_TOKEN,
        Accept: "audio/mpeg",
        "Content-Type": "application/json",
      },
      method: "POST",
      body,
    }
  );
  return response;
}
