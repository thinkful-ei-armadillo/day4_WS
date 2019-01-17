'use strict';
/* global $ */

// create array of groceries?


$(function() {
  $('#shopping-list-form').submit(event => {
    event.preventDefault();
    const userEntry = $(event.currentTarget).find('#shopping-list-entry');
    $('.shopping-list').text(`user text is: ${userEntry.val()}`);
    userEntry.val('');
  });
});

console.log('hello world');


// $('button')

// use .submit(), preventDefault(), toggleClass(), closest()



$('button').click(function() { 
    let item = $('#shopping-list').val(); 
    $('#shopping-list').append( <li> 
        <span class="shopping-item">${item}</span> 
        <div class="shopping-item-controls"> 
        <button class="shopping-item-toggle"> 
            <span class="button-label">check</span></button> 
            <button class="shopping-item-delete"> <span class="button-label">delete</span> </button> 
            </div></li>) });