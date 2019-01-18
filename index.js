'use strict';
/* global $ */


// create array of items??
// traverse shopping list & manipulate items on event clicks
// create a function to add an item to shopping list in input field
// trigger event with that new item submission to add to list
// check button needs to add strikethrough to item
// delete button has to delete shopping list item 

function newItemSubmit() {
  $('#js-shopping-list-form').submit(event => {
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
    console.log(userEntry);
  });
};
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
