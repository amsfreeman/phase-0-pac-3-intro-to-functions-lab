function shout(string) {
    return string.toUpperCase();
}
string = ("Hello!");

function whisper(string) {
    return string.toLowerCase();
}
string = ("Hello!");

function logShout(string){
    console.log(string.toUpperCase());
}
string = "Hello!";

function logWhisper(string){
    console.log(string.toLowerCase());
}
string = "Hello!";

function sayHiToHeadphonedRoommate(string){
    if (string == string.toLowerCase()){
    return ("I can't hear you!");
   }
   if (string == string.toUpperCase()) {
    return("YES INDEED!");
   }
   if (string == "Let's have dinner together!");
   return("I would love to!");
}
whisper();