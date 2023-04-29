/*var audioTrack = WaveSurfer.create({
    container: ".audio",
    waveColor: "#eee",
    progressColor: "white",
    barWidth: 2,
});


audioTrack.load("../audio/track1.wav");*/



var wavesurfer = WaveSurfer.create({
    container: ".audio",
    waveColor: "white",
    progressColor: "purple",
});


wavesurfer.load("../audio/track1.mp3");














const api_url = "https://random.dog/woof.json?ref=apilist.fun";

async function getDog() {
    
      // Making an API call (request)
      // and getting the response back
      const response = await fetch(api_url);
    //fetch get the funtion from in or out
      // Parsing it to JSON format
      const data = await response.json();
      
      console.log(data)

      let url = data.url;

      document.getElementById("dog").src=url;
}
    
    // Calling the function
getDog();


{

    


}
