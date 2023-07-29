let s = "sajeel"
let ss = 1

addendum = s + ss
console.log(addendum)
//q1 sajeel1

console.log(typeof (addendum))
//q2 string


const g = {
  name: "Sajeel",
  section: 1
}

//g = 3 cant be done as g holds the object memry defined above

g["dept"] = "cse"
// can be done as nothing gets disturbed regarding the memmory pointer
console.log(g)
g["name"] = "khan"
//the memory can not be changed but the values in it can be
console.log(g)

//{ name: 'Sajeel', section: 1, dept: 'cse' }
