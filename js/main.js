const searchField = document.querySelector('#search');
const anchorImage = document.getElementsByClassName('galleryImage');
for (let i = 0; i < anchorImage.length; i++) {
    anchorImage[i].caption = anchorImage[i].getAttribute('data-title').toLowerCase();
    // console.log('caption ', i+1, ': ', anchorImage[i].caption);
}
searchField.addEventListener('keyup', () => {
    searchField.x = searchField.value.toLowerCase();
    // console.log('El texto en el search field: ', searchField.x);
    for (let i = 0; i < anchorImage.length; i++) {
        const padre = anchorImage[i].parentNode;
        if (anchorImage[i].caption.includes(searchField.x)) {
            padre.style.display = 'block';
        } else {
            padre.style.display = 'none';
        }
    }
});