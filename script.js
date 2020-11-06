//1
for (i in staff){
  console.log(staff[i])
}

//2
for(let i of staff) {
  console.log(i.email = i.lastName.toLowerCase() + "@coorparation.com");
}
// console.log(staff);


for(let i of staff){
 i.getFullName =function(){
    return this.fullName = this.firstName +' '+ this.lastName;
  }
  i.fullName=i.getFullName();
  }
   console.log(staff[5].fullName ); //Alisha Davenport

   //3 forloop way
   for(let i of staff) {
     if(i.age>=21){
       console.log(i);
      }
   }
   //filter way
   let older21= staff.filter(item=>item.age>=21);
   console.log(older21)

   //4
   let experienceSort = staff.sort((a,b)=> a.experience - b.experience );
 console.log(experienceSort);

 //5
 let averageAge = staff.reduce((sum, item) => sum + item.age, 0) / staff.length;
console.log(Math.floor(averageAge)); //38

// //6
let findStaff = staff.filter(item => item.language === 'Turkish' && item.age < 40 && item.isActive===true);
console.log(findStaff);
console.log(findStaff.sort((a,b) => b.age - a.age));