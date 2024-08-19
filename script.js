document.addEventListener('DOMContentLoaded',()=>{
    // toggle detail anime
    const togglebuttons=document.querySelectorAll('toggle-btn');

    togglebuttons.forEach(button => {
        button.addEventListener ('click',()=>{
            const details =
            button.nextelementsibling;
            if
            (details.style.display ==='none'|| details.style.display ==='')
            details.style.display = 'block';
            button.sttyle.display ='none';
            button.textcontent ='show details';
        })
    })
})


// Toggle Gallery
const togglegallerybutton =
document.getElementById('toggle-gallery');
  const gallerycontent =
  document.getElementById('gallery-content');

  togglegallerybutton.addEventListener('click',() => {
    if
    (gallerycontent.style.display ==='none'  ||
        gallerycontent.style.display === '') {

            gallerycontent.style.display='block';
            toggleGalleryButton.textcontent ='Hide Gallery';
        }else{
            gallerycontent.style.display ='none';
            toggleGalleryButton ='show Gallery';
}
});

//toggle dark mode
const darkmodetoggle =
document.getElementById('dark-mode-toggle');

darkmodetoggle.addEventListener('click',()=>{

    document.body.classList.toggle('dark-mode');

    document.querySelectorAll('header,footer,nav ul li a, .anime-review,article').forEach(el => {
        el.classList.toggle('dark-mode');
    });
});
    
