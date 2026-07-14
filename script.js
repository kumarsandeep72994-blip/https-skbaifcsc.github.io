// मेनू बटन पर क्लिक करने पर पेज बदलने का फंक्शन
function switchPage(event, sectionId) {
    // पेज रीफ्रेश होने से रोकना
    event.preventDefault();
    
    // सभी पेजों (Sections) को छुपाना
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => {
        sec.classList.remove('active');
    });
    
    // मेनू बार के सभी बटनों से 'active' रंग हटाना
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // जिस पेज पर क्लिक किया गया है, सिर्फ उसे दिखाना
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // क्लिक किए गए मेनू बटन को गहरा/हाईलाइट करना
    event.target.classList.add('active');
    
    // क्लिक करते ही स्क्रीन को सुगमता से सबसे ऊपर ले जाना
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
}

// कंसोल मैसेज जांच के लिए
document.addEventListener('DOMContentLoaded', () => {
    console.log("बाएफ कृत्रिम गर्भाधान केन्द्र की वेबसाइट लोड हो चुकी है।");
});
