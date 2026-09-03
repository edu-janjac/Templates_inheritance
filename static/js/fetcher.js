async function loadComponents() {
    const navResponse = await fetch('nav.html');
    const navData = await navResponse.text();
    document.getElementById('nav').innerHTML = navData; 

    const footResponse = await fetch('footer.html');
    const footData = await footResponse.text();
    documentgetElementById('foot'),innerHTML = footData;
    
}