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
    $('.shopping-list').append(`<li> 
        <span class="shopping-item">${userEntry}</span> 
        <div class="shopping-item-controls"> 
        <button class="shopping-item-toggle"> 
            <span class="button-label">check</span></button> 
            <button class="shopping-item-delete"> <span class="button-label">delete</span> </button> 
            </div></li>`);
    // userEntry.val('');
    console.log(userEntry);
  });
};

newItemSubmit();



console.log('hello world');

function removeItemFromList() {
    $('.shopping-item-delete').on('click', '#shopping-list-item', function(event){ 
      console.log('inside the inside function');
     $(event.currentTarget).closest('button').remove();

      // const deletedItem= $(event.target).find($('.shopping-list-item')).val();
      // deletedItem.remove(); 
        })
        console.log('please work');
    }

removeItemFromList();