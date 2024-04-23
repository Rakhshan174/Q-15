"use strict";
//Changing Guest List: You just hesrd one of your guest can't make the dinner.so you need to send out a new
// set of invitations. you'll have to think of someone else to invite.
// (a) Start with your program from Exercise 14.Add a print statment at the end of your program stating the name 
//of the guest who's can't make it
// (b)Modify your list, replacing the name of the guest who can't make the name of the new person you are inviing.
//(c) Print a second set of invitation  messages, one for each person who is still in your list.
let guestArr = ["Ali", "Wajahat", "Muzammil", "Haseeb"];
let canNotAttend = "Muzammil";
// console.log(canNotAttend + " " "can not attend the dinner.")
let newGuest = "Hamza";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//  console.log(guestArr)
guestArr.map((items) => (console.log(`Dear ${items}, you are invited to the dinner`)));
