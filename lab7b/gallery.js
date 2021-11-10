
function createEmployee(element){
    return document.createElement(element);
}
function appendChildren(parent, element){
    return parent.appendChild(element);
}
function removeChildren(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
document.getElementById('refresh').addEventListener('click', function(){
  removeChildren(document.getElementById("employees"));
fetch('https://randomuser.me/api/?results=5')
.then((resp)=>resp.json())
.then(function(data){
    let employees = data.results;
    return employees.map(function(employee){
        let div = createEmployee('div');
            img = createEmployee('img');
            p = createEmployee('p');
            
            img.src = employee.picture.large;
            p.innerHTML = `${employee.name.first}  ${employee.name.last} <br> phone: ${employee.phone} <br> ${employee.email}`;
            
            appendChildren(div, img);
            appendChildren(div, p);
            appendChildren(document.getElementById('employees'), div);
    })
})
.catch(function(error){
    console.log(error);
})});
