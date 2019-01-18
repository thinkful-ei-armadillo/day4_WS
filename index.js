'use strict';
/* global $ */

// traverse shopping list & manipulate items on event clicks
// create a function to add an item to shopping list in input field
// reset input field after new item submit event
// check button event has to toggle() 'shopping-item__checked'
// delete button has to remove entire item from list using remove()

function newItemSubmit() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const userEntry = $(event.currentTarget).find('#shopping-list-entry').val();
    $('.shopping-list').append(`
      <li> 
        <span class="shopping-item">${userEntry}</span> 
        <div class="shopping-item-controls"> 
          <button class="shopping-item-toggle"> 
            <span class="button-label">check</span>
          </button> 
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button> 
        </div>
      </li>`);
    this.reset(); // doesn't work with fat arrow
  });
}
newItemSubmit();



function removeItemFromList() {
  $('.shopping-list').on('click', '.shopping-item-delete', event =>{ 
    $(event.currentTarget).parent().parent().remove();
  });
}
removeItemFromList();


function checkThroughItem() {
  $('.shopping-list').on('click', '.shopping-item-toggle', event => {
    $(event.currentTarget).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
  });
}
checkThroughItem();
