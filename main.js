/********************
 * YOUR CODE BELOW! *
 ********************/
function moreThan5(num) {
  return num > 5;
}

// Function to check if a score is greater than a top score
function isNewTopScore(score, topScore) {
  return score > topScore;
}

// Function to check if a grade is between 60 and 71, inclusive
function isInDanger(grade) {
  return grade >= 60 && grade <= 71;
}

// Function to check if a grade is between 72 and 83, inclusive
function isCoasting(grade) {
  return grade >= 72 && grade <= 83;
}

// Function to check if a grade is between 84 and 92, inclusive
function isSucceeding(grade) {
  return grade >= 84 && grade <= 92;
}

// Function to check if a grade is below 60
function isFailing(grade) {
  return grade < 60;
}

// Function to check if a grade is above 92
function isAcing(grade) {
  return grade > 92;
}

// Function to check if a role is "student"
function isStudent(role) {
  return role === "student";
}

// Function to check if a role is "teacher"
function isTeacher(role) {
  return role === "teacher";
}

// Function to check if a role is "admin"
function isAdmin(role) {
  return role === "admin";
}

// Function to check if a school level is "elementary"
function isElementary(schoolLevel) {
  return schoolLevel === "elementary";
}

// Function to check if two names are different
function areDifferentPeople(name1, name2) {
  return name1 !== name2;
}

// Function to check if a person is a middle school teacher (role and level)
function isMiddleSchoolTeacher(role, level) {
  return isTeacher(role) && level >= 6 && level <= 8;
}

// Function to check if someone is NOT an elementary school administrator
function notAnElementarySchoolAdministrator(schoolLevel, role) {
  return !(isElementary(schoolLevel) && isAdmin(role)) && !isMiddleSchoolTeacher(role, schoolLevel);
}

/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
