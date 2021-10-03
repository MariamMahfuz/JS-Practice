var Students=[
    {
        id:10,
        Name:'Mariam',
        gpa:3.65,
    },

    {
        id:11,
        Name:'Zahed',
        gpa:3.85
    }
]

const StudentName=()=>{
    return Students.filter((x)=>x.gpa>3).map((y)=>y.Name)
}
console.log(StudentName())