function addSongToPlaylist(form) {
    // Read input values from the form
    let artist = form["artist"].value;
    let song = form["song"].value;
    let album = form["album"].value;
    let searchText = (artist + ' ' + song + ' ' + album).toLowerCase().replace(' ', '+');
    let searchHref = `https://www.google.com/search?q=${searchText}`;

    // get a reference to the template and create a clone (copy) of it.
    let template = document.getElementById('playlist-entry-template')
        .content.cloneNode(true);

    // Populate the template with values from the form.
    template.getElementById('artist-td').innerText = artist;
    template.getElementById('song-td').innerText = song;
    template.getElementById('album-td').innerText = album;
    template.getElementById('search-link').setAttribute('href', searchHref);

    // Add the new table row content to the table body
    let tbody = document.getElementById('playlist-body');
    tbody.appendChild(template);
}