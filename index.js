// Code your solution here
const findMatching = (arr,str) => arr.filter(el => el.toLowerCase() === str.toLowerCase())
const fuzzyMatch = (arr,str) => arr.filter(el => el.toLowerCase().indexOf(str.toLowerCase())===0)
const matchName = (arr,str) => arr.filter(el => el.name === str)