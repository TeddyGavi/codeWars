function order(number, flavor) {
  let addS = 'scoop';
  if (number > 1){
    addS = 'scoops'
  }
  console.log(`Lemme get ${number} ${addS} of ${flavor}`)
}
//ex
order(2, 'vanilla');

/* Task was to create a function that, 
when given a number and a flavor returned each within a statement 
as well as adding 's' to scoop */