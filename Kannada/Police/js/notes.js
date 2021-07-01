// Dark Mode
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('dark-mode', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('dark-mode', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('dark-mode', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    toggleSwitch.addEventListener('change', switchTheme, false); 


// Scroll to Top
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 30) { // Show backToTopButton
        if (!backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnExit");
            backToTopButton.classList.add("btnEntrance");
            backToTopButton.style.display = "block";
        }
    }
    else { // Hide backToTopButton
        if (backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnEntrance");
            backToTopButton.classList.add("btnExit");
            setTimeout(function () {
                backToTopButton.style.display = "none";
            }, 250);
        }
    }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }
}

function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};


//Sticky Notes
document.onmousemove = snapNote; //Snap selected note to the mouse whenever the mouse moves
document.ontouchmove = snapNoteTouch; //Logic for snapping to touch is slightly different than mouse
document.onmouseup = placeNote; //When the mouse comes up, place the selected note where the user chose
document.ontouchend = placeNote; //When the touch is released, place the note
document.onmousedown = clearMenus; //Clear menus when the mouse is clicked to the side

let notesCount = 0; //Used to give a unique id to each note

/**
 * addNote creates a new sticky note and adds it to the document.
 */
function addNote() {
    console.log('Add button pressed');

    notesCount++;

    //Create note container
    let note = document.createElement('div');
    note.onmousedown = selectNote;
    note.ontouchstart = selectNote;
    note.className = 'note';

    //Create text input for note title
    let titleInput = document.createElement('textarea');
    titleInput.placeholder = 'ಶೀರ್ಷಿಕೆ';
    titleInput.className = 'note-title';
    titleInput.onkeydown = keyDown;
    note.appendChild(titleInput);

    //Create text box for the content of the note
    let textBox = document.createElement('textarea');
    textBox.placeholder = 'ನಿಮ್ಮ ಟಿಪ್ಪಣಿ ಇಲ್ಲಿ ಬರೆಯಿರಿ'
    textBox.className = 'note-content';
    textBox.onkeydown = keyDown;
    note.appendChild(textBox);

    //Create the option button for the note
    let optionButton = document.createElement('button');
    optionButton.className = 'option-button';
    optionButton.textContent = '. . .';
    optionButton.onmousedown = noteMenu;
    optionButton.ontouchstart = noteMenu;
    note.appendChild(optionButton);


    note.id = 'note' + notesCount;

    document.body.appendChild(note); //Add the note to the document

    titleInput.focus(); //Set focus to the title of the new note
}

let selectedNote = null; //The note the user clicks on to move around

/**
 * selectNote sets the selected note to the one the user clicks on.
 */
function selectNote() {
    selectedNote = this;
}

let noteCopy = {}; // A copy of the note that is what will actually be moved
let mouseDidMove = false; // Whether or not the mouse has moved enough to constitute moving the note
let currentSwap = null; // The note most recently swapped with the selected note

/**
 * snapNote snaps the selected note to the mouse position and swaps
 * notes when the user hovers the selected note over another note.
 * @param {MouseEvent} event 
 */
function snapNote(event) {
    if (selectedNote !== null) { // Check that there is a selected note

        let mouseMovement = Math.sqrt((event.movementX ** 2) + (event.movementY ** 2)); // The total distance the mouse moved

        if (!mouseDidMove && mouseMovement > 4) { // Check that the mouse has moved a reasonable distance

            console.log('Mouse moved');

            selectedNote.style.visibility = 'hidden'; // Hide the actual selected note

            currentSwap = selectedNote;

            noteCopy = copyNote(selectedNote); // Make a copy of the selected note to move around
            noteCopy.style.position = 'fixed';

            document.body.appendChild(noteCopy); // Add the copy to the document

            //Snap the note to the mouse position
            noteCopy.style.top = (event.clientY - noteCopy.offsetHeight / 2) + 'px';
            noteCopy.style.left = (event.clientX - noteCopy.offsetWidth / 2) + 'px';

            mouseDidMove = true;

        } else if (mouseDidMove) {
            // Snap note to the mouse position
            noteCopy.style.top = (event.clientY - noteCopy.offsetHeight / 2) + 'px';
            noteCopy.style.left = (event.clientX - noteCopy.offsetWidth / 2) + 'px';

            let notes = document.getElementsByClassName('note'); // Get all the notes in the document

            for (let i = 0; i < notes.length; i++) { // Loop through the notes

                let rect = notes[i].getBoundingClientRect(); // Get the bounding rectangle to know the positon of the note

                // Swap the notes if appropriate
                if (currentSwap !== null && !noteCopy.id.includes(notes[i].id) && notes[i].id !== currentSwap.id) { // Make sure the note is a different note
                    if (event.clientX > rect.left && event.clientX < rect.right
                        && event.clientY > rect.top && event.clientY < rect.bottom) { // Check if the mouse is over this note
                        if (notes[i].style.position !== 'fixed') { // Check if note is being animated
                            console.log('Selected: ' + noteCopy.id);
                            console.log('Swap with: ' + notes[i].id);

                            // Gather old notes positions for animating swap
                            let oldRects = new Map(); //Map for old note positions for animating
                            for (let i = 0; i < notes.length; i++) {
                                if (!notes[i].id.includes('copy')) {
                                    let oldRect = notes[i].getBoundingClientRect();
                                    oldRects.set(notes[i].id, oldRect);
                                }
                            }

                            currentSwap.style.visibility = 'visible'; // Make the old swap visible
                            checkOverflow(currentSwap.children[1]); // Resize the text box if necessary

                            swapNotes(selectedNote, currentSwap); //Undo previous swap
                            currentSwap = notes[i]; //Update currentSwap
                            swapNotes(selectedNote, currentSwap); //Perform new swap

                            currentSwap.style.visibility = 'hidden'; //Hide the new swap

                            animateReorder(oldRects, 300);
                        }
                    }//End if
                }//End if
            }//End for
        }//End else
    }//End if
}//End snapNote

/**
 * snapNoteTouch snaps the selected note to the touch position and swaps
 * notes when the user hovers the selected note over another note.
 * @param {TouchEvent} event 
 */
function snapNoteTouch(event) {
    if (selectNote !== null) {
        if (!mouseDidMove) { // Check that the mouse has moved a reasonable distance

            console.log('Mouse moved');

            selectedNote.style.visibility = 'hidden'; // Hide the actual selected note

            currentSwap = selectedNote;

            noteCopy = copyNote(selectedNote); // Make a copy of the selected note to move around
            noteCopy.style.position = 'fixed';

            document.body.appendChild(noteCopy); // Add the copy to the document

            //Snap the note to the mouse position
            noteCopy.style.top = (event.touches[0].clientY - noteCopy.offsetHeight / 2) + 'px';
            noteCopy.style.left = (event.touches[0].clientX - noteCopy.offsetWidth / 2) + 'px';

            mouseDidMove = true;

        } else if (mouseDidMove) {
            // Snap note to the mouse position
            noteCopy.style.top = (event.touches[0].clientY - noteCopy.offsetHeight / 2) + 'px';
            noteCopy.style.left = (event.touches[0].clientX - noteCopy.offsetWidth / 2) + 'px';

            let notes = document.getElementsByClassName('note'); // Get all the notes in the document

            for (let i = 0; i < notes.length; i++) { // Loop through the notes

                let rect = notes[i].getBoundingClientRect(); // Get the bounding rectangle to know the positon of the note

                // Swap the notes if appropriate
                if (currentSwap !== null && !noteCopy.id.includes(notes[i].id) && notes[i].id !== currentSwap.id) { // Make sure the note is a different note
                    if (event.touches[0].clientX > rect.left && event.touches[0].clientX < rect.right
                        && event.touches[0].clientY > rect.top && event.touches[0].clientY < rect.bottom) { // Check if the mouse is over this note
                        if (notes[i].style.position !== 'fixed') {
                            console.log('Selected: ' + noteCopy.id);
                            console.log('Swap with: ' + notes[i].id);

                            // Gather old notes positions for animating swap
                            let oldRects = new Map(); //Map for old note positions for animating
                            for (let i = 0; i < notes.length; i++) {
                                if (!notes[i].id.includes('copy')) {
                                    let oldRect = notes[i].getBoundingClientRect();
                                    oldRects.set(notes[i].id, oldRect);
                                }
                            }

                            currentSwap.style.visibility = 'visible'; // Make the old swap visible
                            checkOverflow(currentSwap.children[1]); // Resize the text box if necessary

                            swapNotes(selectedNote, currentSwap); //Undo previous swap
                            currentSwap = notes[i]; //Update currentSwap
                            swapNotes(selectedNote, currentSwap); //Perform new swap

                            currentSwap.style.visibility = 'hidden'; //Hide the new swap

                            animateReorder(oldRects, 300);
                        }
                    }//End if
                }//End if
            }//End for
        }//End else
    }//End If
}//End snapNoteTouch

/**
 * placeNote places the selected note down in the proper location.
 */
function placeNote() {
    if (selectedNote !== null) { //Check if there is a note selected

        selectedNote.style.visibility = 'visible';
        checkOverflow(selectedNote.children[1]);
        selectedNote = null;

        if (mouseDidMove) {
            noteCopy.remove();
            mouseDidMove = false;
        }

        if (currentSwap !== null) {
            currentSwap.style.visibility = 'visible';
            checkOverflow(currentSwap.children[1]);
            currentSwap = null;
        }
    }
}

/**
 * swapNotes swaps the content and appropriate properties of each note.
 * @param {HTMLDivElement} note1 The first note to swap
 * @param {HTMLDivElement} note2 The second note to swap
 */
function swapNotes(note1, note2) {
    //Save note1 values
    let title1 = note1.children[0].value;
    let content1 = note1.children[1].value;
    let id1 = note1.id
    let height1 = note1.children[1].style.height;
    let color1 = note1.style.backgroundColor;

    //Update note1 values
    note1.children[0].value = note2.children[0].value;
    note1.children[1].value = note2.children[1].value;
    note1.children[1].style.height = note2.children[1].style.height;
    note1.id = note2.id
    note1.style.backgroundColor = note2.style.backgroundColor;
    note1.children[0].style.backgroundColor = note2.style.backgroundColor;
    note1.children[1].style.backgroundColor = note2.style.backgroundColor;

    //Update note2 values
    note2.children[0].value = title1;
    note2.children[1].value = content1;
    note2.children[1].style.height = height1;
    note2.id = id1;
    note2.style.backgroundColor = color1;
    note2.children[0].style.backgroundColor = color1;
    note2.children[1].style.backgroundColor = color1;
}

/**
 * copyNote copies the content and appropriate properties of a note and returns the copy.
 * @param {HTMLDivElement} originalNote
 * @returns {HTMLDivElement} The copy of the original note
 */
function copyNote(originalNote) {
    let noteCopy = document.createElement('div');
    noteCopy.className = 'note';
    noteCopy.innerHTML = originalNote.innerHTML;
    noteCopy.children[0].value = originalNote.children[0].value;
    noteCopy.children[1].value = originalNote.children[1].value;
    noteCopy.id = originalNote.id + 'copy';

    let color = originalNote.style.backgroundColor;

    noteCopy.style.backgroundColor = color;
    noteCopy.children[0].style.backgroundColor = color;
    noteCopy.children[1].style.backgroundColor = color;

    noteCopy.style.animationName = 'none'; //Remove fade-in animation

    return noteCopy;
}

/**
 * keyDown checks the overflow of note text boxes when a key is pressed.
 */
function keyDown() {
    checkOverflow(this);
}

/**
 * checkOverflow checks if a note text box needs to be resized to fit its text.
 * @param {HTMLTextAreaElement} textBox 
 */
function checkOverflow(textBox) {
    textBox.style.height = "";
    while (textBox.scrollHeight > textBox.clientHeight) {
        textBox.style.height = (textBox.clientHeight + 2) + 'px';
    }
}

/**
 * noteMenu creates the note options menu.
 */
function noteMenu() {
    console.log('option button pressed');

    let menus = document.getElementsByClassName('note-menu'); // Get all menus
    let thisNoteHasMenu = (this.parentNode.getElementsByClassName('note-menu').length != 0); //Whether this particular note has an active menu

    for (let i = 0; i < menus.length; i++) {
        menus[i].remove();
    }

    let noteMenu = document.createElement('div');
    noteMenu.className = "note-menu";

    let colors = [ // Nine different note colors
        'lightgoldenrodyellow',
        'lightblue',
        'lightgreen',
        'lightpink',
        'lightcoral',
        'lightskyblue',
        'lightsalmon',
        'plum',
        'lightseagreen'
    ];

    // Create nine different color buttons
    colors.forEach(color => {
        let colorOption = document.createElement('button');
        colorOption.className = "color-option";
        colorOption.style.backgroundColor = color;
        colorOption.onmousedown = setColor;
        colorOption.ontouchstart = setColor;
        noteMenu.appendChild(colorOption);
    });

    // Create a delete button
    let deleteButton = document.createElement('div');
    deleteButton.className = 'delete-note';
    deleteButton.onmousedown = (() => { setTimeout(deleteNote.bind(deleteButton), 155); }); //Add a delay to let user see button press
    let deleteText = document.createElement('p');
    deleteText.textContent = 'ಅಳಿಸಿ';
    deleteText.className = 'delete-text';
    deleteButton.appendChild(deleteText);
    let deleteIcon = document.createElement('img');
    deleteIcon.src = '../Assets/Notes/delete-24px-red.svg';
    deleteIcon.className = 'delete-icon';
    deleteButton.appendChild(deleteIcon);
    noteMenu.appendChild(deleteButton);

    this.parentNode.appendChild(noteMenu); // Add the menu to the note

    if (!thisNoteHasMenu) {

    }
}

/**
 * setColor sets the color of a note to the color of the button pressed.
 */
function setColor() {
    console.log('color button pressed');

    let note = this.parentNode.parentNode;
    let newColor = this.style.backgroundColor;

    note.style.backgroundColor = newColor;
    note.children[0].style.backgroundColor = newColor;
    note.children[1].style.backgroundColor = newColor;
}

/**
 * clearMenus clears all menus that the mouse is not hovering over.
 * @param {MouseEvent} event 
 */
function clearMenus(event) {
    console.log('Clear menus');
    console.log('ClientX: ' + event.clientX);
    console.log('ClientY: ' + event.clientY);

    let noteMenus = document.getElementsByClassName('note-menu'); // Get all menus

    for (let i = 0; i < noteMenus.length; i++) { // Loop through the menus
        let rect = noteMenus[i].getBoundingClientRect(); // Get the bounding rectangle to know the position

        // If the mouse is not above the menu, then remove it
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
            if (noteMenus[i].id == 'active') { //Remove the note only on a second click to account for clicking the option button
                noteMenus[i].remove();
            } else {
                noteMenus[i].id = 'active';
            }//End else
        }//End if
    }//End for
}//End clearMenus

/**
 * deleteNote deletes a note whose delete button was pressed and initiates the reordering animation.
 */
function deleteNote() {
    let thisNote = this.parentNode.parentNode;

    let notes = document.getElementsByClassName('note');
    let oldRects = new Map(); // Initialize an array for the old note positions

    // Collect all the current note positions
    for (let i = 0; i < notes.length; i++) {
        let rect = notes[i].getBoundingClientRect();
        oldRects.set(notes[i].id, rect);
    }

    thisNote.remove();

    animateReorder(oldRects, 300); // Using the old positions, animate the reording of the notes over the specified time
}

/**
 * Takes the old positions of elements and animates them to their new positions
 * @param {Map} oldRects dictionary of note id's and their rects
 * @param {number} duration
 */
function animateReorder(oldRects, duration) {
    console.log(oldRects);
    let notes = document.getElementsByClassName('note'); // Get all the notes
    let newRects = new Map(); // Initialize array for collecting new positions

    // Collect the new positions
    for (let i = 0; i < notes.length; i++) {
        let newRect = notes[i].getBoundingClientRect();
        newRects.set(notes[i].id, newRect);
    }


    // Set initial positions
    let offsetX = parseFloat(window.getComputedStyle(notes[0]).marginLeft);
    let offsetY = parseFloat(window.getComputedStyle(notes[0]).marginTop);
    let width = parseFloat(window.getComputedStyle(notes[0]).width);
    for (let i = 0; i < notes.length; i++) {
        if (oldRects.has(notes[i].id) && newRects.has(notes[i].id)) {

            notes[i].style.position = 'fixed';
            notes[i].style.left = (oldRects.get(notes[i].id).left - offsetX) + 'px';
            notes[i].style.top = (oldRects.get(notes[i].id).top - offsetY) + 'px';
            notes[i].style.width = width + 'px';
        }
    }

    let timePassed = 0; // Time passed since animation began, in ms
    let lastFrame = Date.now(); //The timestamp of the previous frame

    // This function animates a single frame of the animation and then passed itself to `requestAnimationFrame`.
    function animateFrame() {

        let deltaT = Date.now() - lastFrame; // Time difference between now and the last frame
        timePassed += deltaT;
        lastFrame = Date.now();

        // Update the positions of the notes
        for (let i = 0; i < notes.length; i++) {
            if (oldRects.has(notes[i].id) && newRects.has(notes[i].id)) {
                let deltaX = (newRects.get(notes[i].id).left - oldRects.get(notes[i].id).left) * deltaT / duration;
                let deltaY = (newRects.get(notes[i].id).top - oldRects.get(notes[i].id).top) * deltaT / duration;

                notes[i].style.left = (parseFloat(notes[i].style.left) + deltaX) + 'px';
                notes[i].style.top = (parseFloat(notes[i].style.top) + deltaY) + 'px';
            }
        }

        // Check if the proper amount of time has passed
        if (timePassed < duration) {
            requestAnimationFrame(animateFrame);
        } else {
            for (let i = 0; i < notes.length; i++) {
                if (oldRects.has(notes[i].id) && newRects.has(notes[i].id)) {
                    notes[i].style.position = 'relative';
                    notes[i].style.left = '0px';
                    notes[i].style.top = '0px';
                    notes[i].style.width = "";
                }//End if
            }//End for
        }//End else
    }//End animateFrame

    animateFrame();
}