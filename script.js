document.getElementById("numberForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var number = document.getElementById("numberInput").value;
    var iframe = document.getElementById("embeddedVideo");
    iframe.src = `https://api.embess.ws/embed/movie/${number}`;
});