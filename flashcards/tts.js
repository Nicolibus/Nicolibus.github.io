
const key = "18f83d39d6e04328bc35dfda8b03384f"
const id = "kt3rW1d7V7TPMDxClc0VGhUMeal1"


async function voice(word = 'terve maailma') {
    const url = "https://api.play.ht/api/v2/tts/stream";
    const bodyData = JSON.stringify({ 
        text: word,   
        voice: "en-US-JennyNeural" 
    });
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'X-USER-ID': id,
          'AUTHORIZATION': key,
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS',
        },
        body: bodyData,
      });
  
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      document.write(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  

  

// curl --request POST \
//      --url https://api.play.ht/api/v2/tts/stream \
//      --header 'X-USER-ID: <YOUR_USER_ID>' \
//      --header 'AUTHORIZATION: <YOUR_API_KEY>' \
//      --header 'accept: audio/mpeg' \
//      --header 'content-type: application/json' \
//      --data '
// {
//   "text": "Hello from a realistic voice.",
//   "voice_engine": "PlayDialog",
//   "voice": "s3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json",
//   "output_format": "mp3"
// }
// ' --output result.mp3