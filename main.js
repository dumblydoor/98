var speechRec = window.webkitSpeechRecognition;
var recognition = new speechRec();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content; console.log(Content);
    if(Content =="take my selfie")
    {
console.log("take my cat on a walk");
speak();

    }
    speak();
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90,
})
camera = document.getElementById("camera");

function take_snapshot()
{

    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';
    });

}