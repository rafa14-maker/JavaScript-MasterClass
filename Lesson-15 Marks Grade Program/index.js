// letter grade
//user make input
//A+ 80-100
//A 70-79
//D(33-39)
//F(fail)

var grade = prompt("Enter your grade :");

if(grade >= 80)document.write("You have got A+");
else if(grade >= 70)document.write("You have got A");
else if(grade >= 60)document.write("You have got A-");
else if(grade >= 50)document.write("You have got B");
else if(grade >= 40)document.write("You have got C");
else if(grade >= 33)document.write("You have got D");
else document.write("You have Failed");