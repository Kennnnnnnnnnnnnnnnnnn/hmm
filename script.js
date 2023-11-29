document.addEventListener("DOMContentLoaded", function () {
    const lyrics = [
        "And we can build this dream together",
        "Standing strong forever",
        "Nothing's gonna stop us now",
        "  ",
        "  ",
        "And if this world runs out of lovers",
        "We'll still have each other",
        " ",
        "Nothing's gonna stop us",
        " ",
        "Nothing's gonna stop us ",
        " ",
        "Noww      "
        
    ];

    const delay = 60;
    const lyricsElement = document.getElementById("lyrics");

    async function displayLyrics() {
        for (const line of lyrics) {
            for (const char of line) {
                const charElement = document.createElement("span"); 
                charElement.textContent = char;
                charElement.style.animation = "glow 2s ease-in-out"; 
                lyricsElement.appendChild(charElement); 

                await new Promise((resolve) => setTimeout(resolve, delay));

                
                charElement.style.animation = "";
            }

            lyricsElement.appendChild(document.createElement("br")); 

            await new Promise((resolve) => setTimeout(resolve, delay * 6));

            lyricsElement.textContent = "";

            await new Promise((resolve) => setTimeout(resolve, delay * 6));
        }

        
    }
    
    displayLyrics();
});
