'use strict';

/*
As you code your JS, do not move on to "the next task or function" until the "sanity check" works as expected. You will find sanity checks peppered throughout the commented instructions below.

Do not edit any function names below.
Do not change/delete/add any parameters below.

When finished with the JS, examine the generated HTML and ensure you have generated valid HTML.
  HINT: Use the Dev Tools Inspector > ELements tab to view the generated HTML
*/

makeMenu();
getTracks();

function makeMenu() {
  // get the H1 for later use
  const h1 = document.querySelector('h1');

  // create a LABEL, give it a FOR attribute, and give it the text content: Albums:
  // (include a space to the right of Albums: so there's a space between it and its associated form field)
  const label = document.createElement('label');
  label.setAttribute('for', 'albumSelect');
  label.textContent = 'Albums: ';

  // create a SELECT and give it an id to match the label's FOR
  const select = document.createElement('select');
  select.id = 'albumSelect';

  // create an OPTION, append it to the select, and give it the text content: Choose an album
  const defaultOption = document.createElement('option');
  defaultOption.textContent = 'Choose an album';
  select.appendChild(defaultOption);

  // edit the DOM: insert the label after the H1
  h1.insertAdjacentElement('afterend', label);

  // order the provided albums array (imported from the data.js file) by the album name, ascending, and store the sorted array in a new variable
  const sortedAlbums = _.sortBy(albums, 'name');

  // iterate through the ordered array of album names and for each one:
  // create an option element
  // give it the text of the album name
  // append the option to the select
  sortedAlbums.forEach(album => {
    const option = document.createElement('option');
    option.textContent = album.name;
    select.appendChild(option);
  });

  // edit the DOM: insert the select after the label
  label.insertAdjacentElement('afterend', select);

      /**********************************
      SANITY CHECK:
      You should now have a select menu on the page, label to its left, and populated with six options in this order:
      Choose an album
      Diver Down
      Fair Warning
      Van Halen I
      Van Halen II
      Women and Children First
      **********************************/
}

function getTracks() {
  // add event listener to select, listening for change event
  // anonymous callback function should:
  // get the single array item from the albums array where the name property matches the select menu value
  // if there's no match, exit the function
  // within the found item, get the tracks
  // call a function named: makeTable
  // pass the makeTable function the selected tracks object
  const select = document.getElementById('albumSelect');
  select.addEventListener('change', function() {
    const selectedAlbumName = this.value;
    const selectedAlbum = albums.find(album => album.name === selectedAlbumName);
    if (!selectedAlbum) return;
    const tracks = selectedAlbum.tracks;
    makeTable(tracks);
  });
}

function makeTable(tracks, orderBy = 'position') {
        /**********************************
        SANITY CHECK:
        try console.table(tracks) and when you change your menu selection on the page, the console should show the list of songs for the selected album
        **********************************/
  console.table(tracks);

  // create a table with id: trackListing
  // create a tr and append it to the table
  // if an existing table (with the aforementioned id) exists in the DOM, remove it; use a single line ternary operator to accomplish this
  // edit the DOM: insert the table after the select
  const existingTable = document.getElementById('trackListing');
  existingTable ? existingTable.remove() : null;
  const table = document.createElement('table');
  table.id = 'trackListing';
  const tableHeader = document.createElement('tr');
  table.appendChild(tableHeader);
  const select = document.getElementById('albumSelect');
  select.insertAdjacentElement('afterend', table);

  // Get the first item (object) in the tracks array
  // Extract the keys from that item/object and store them in an array
  // Iterate through the keys and:
  // create a th and give it the text content of the key
  // give the th a scope attribute with the value: col
  // Add an event listener to the th so that when clicked, the sortOnClick function is called, passing it both this (the clicked th) and the tracks variable
  // Append the th it to the tr
  const firstTrack = tracks[0];
  const keys = Object.keys(firstTrack);
  keys.forEach(key => {
    const th = document.createElement('th');
    th.textContent = key;
    th.setAttribute('scope', 'col');
    th.addEventListener('click', () => sortOnClick(th, tracks));
    tableHeader.appendChild(th);
  });


        /**********************************
        SANITY CHECK:
        Select an album from the menu on the page.
        A table with a single row should appear with the headers Position, Title, Time.
        Change the menu selection and it should look like nothing happens. There is still just that one single-row table on the page.
        **********************************/

  // create a variable to store the sorted/ordered tracks
  // set the variable equal to a function: sortTable
  // pass that function the tracks variable and the orderBy variable
  const sortedTracks = sortTable(tracks,orderBy);

  // Iterate through the sorted tracks and for each one:
  // create a new tr
  // create a td, give it text of the track's position, and append it to the tr
  // create a td, give it text of the track's title, and append it to the tr
  // create a td, give it text of the track's time, and append it to the tr
  // append the tr to the table
  sortedTracks.forEach(track => {
    const tr = document.createElement('tr');
    const tdPosition = document.createElement('td');
    tdPosition.textContent = track.position;
    tr.appendChild(tdPosition);
    const tdTitle = document.createElement('td');
    tdTitle.textContent = track.title;
    tr.appendChild(tdTitle);
    const tdTime = document.createElement('td');
    tdTime.textContent = track.time;
    tr.appendChild(tdTime);
    table.appendChild(tr);
  })
}

function sortTable(tracks, orderBy) {
  // Order the tracks by the orderBy string that was passed, storing them in an array
  // return the new array
  return _.sortBy(tracks, [orderBy]);
}

function sortOnClick(th, tracks) {
  // Get the text content of the clicked th and store it in a variable named: clickedText
  // Call the sortTable function, passing it the tracks (one of the parameters from this sortOnCLick function) and clickedText; store the returned value in a variable named: sortedTracks
  // call makeTable, passing it the sortedTracks and clickedText variables
  const clickedText = th.textContent.toLowerCase();
  const sortedTracks = sortTable(tracks, clickedText);
  makeTable(sortedTracks, clickedText);
}

/*
Optional enhancements:
- insert up-triangle next to header that currently controls the sorting
- click any heading a second time to toggle the sort order asc/desc, also toggling between up-triangle and down-triangle icon/emoji as needed
- refactor to fewer functions that perform fewer tasks
- You may need to edit the starter function parameters to incorporate some of these enhancements
*/
