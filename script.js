let wantsName=[]
let wantsAm=[]

let needsName=[]
let needsAm=[]

let savingsName=[]
let savingsAm=[]

let total=[]

let select=""
let nameput=""
let amountput=0

let addWants=0
let addNeeds=0
let addSavings=0
let addTotal=0

//Pie Chart
const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');
const ctx4 = document.getElementById('myChart4');

let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: wantsName,
    datasets: [{
      label: '$ spent on wants',
      data: wantsAm,
      borderWidth: 1,
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

let myChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: needsName,
    datasets: [{
      label: '$ spent on needs',
      data: needsAm,
      borderWidth: 1,
      backgroundColor: 'rgba(255, 159, 64, 0.2)'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

let myChart3 = new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: savingsName,
    datasets: [{
      label: '$ spent on savings',
      data: savingsAm,
      borderWidth: 1,
      backgroundColor: 'rgba(255, 99, 132, 0.2)'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// let myChart4 = new Chart(ctx4, {
//   type: 'pie',
//   data: {
//     labels: ['Savings', 'Wants', 'Needs'],
//     datasets: [{
//       label: '$ spent on savings',
//       data: [addSavings,addWants,addNeeds],
//       borderWidth: 1,
      
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });

function updatePieData() {
  console.log('hi',addWants,addNeeds,addSavings)
  myChart.update()
  myChart2.update()
  myChart3.update()
  // myChart4.update()
}

updatePieData()














function appChange(){
  
  if((document.getElementById("nameInput").value)!=""){
    if(document.getElementById("amountInput").value!=0){
      if(select==="wants"){ 
        
        wantsName.push(nameput)
        wantsAm.push(amountput)
        total.push(amountput)
        console.log(wantsName)
        console.log(wantsAm)
        document.getElementById('nameInput').value = ''
        document.getElementById('amountInput').value = ''
        document.getElementById('drop').value = 'Select'
        totallabel.innerHTML="Total spent: "+add(total)
        wantslabel.innerHTML='Wants spent: '+add(wantsAm)
        
        table.innerHTML+=`
          <tr class='child1'>
            <td>${nameput}</td>
            <td>${amountput}</td>
            <td>${select}</td>
            
          <tr>
        `
        updatePieData()
        label()
      }
      else if(select==="needs"){
        
        needsName.push(nameput)
        needsAm.push(amountput)
        total.push(amountput)
        console.log(needsName)
        console.log(needsAm)
        document.getElementById('nameInput').value = ''
        document.getElementById('amountInput').value = ''
        document.getElementById('drop').value = 'Select'
        totallabel.innerHTML="Total spent: "+add(total)
        needslabel.innerHTML='Needs spent: '+add(needsAm)
        
        table.innerHTML+=`
          <tr class='child1'>
            <td>${nameput}</td>
            <td>${amountput}</td>
            <td>${select}</td>
            
          <tr>
        `
        updatePieData()
        label()
      }
      else if(select==="savings"){
        
        savingsName.push(nameput)
        savingsAm.push(amountput)
        total.push(amountput)
        console.log(savingsName)
        console.log(savingsAm)
        document.getElementById('nameInput').value = ''
        document.getElementById('amountInput').value = ''
        document.getElementById('drop').value = 'Select'
        totallabel.innerHTML="Total spent: "+add(total)
        savingslabel.innerHTML='Savings spent: '+add(savingsAm)
        label()
        
        table.innerHTML+=`
          <tr class='child1'>
            <td>${nameput}</td>
            <td>${amountput}</td>
            <td>${select}</td>
            
          <tr>
        `
        updatePieData()
      }
      else{
        console.log('select something')
      }
    }
    else if(document.getElementById("amountInput").value<0){
      console.log('cannot be neg')
    }
    else{
     
      console.log('need to enter value')
    }
  }
  else{
    console.log('need to enter name')
  }
}


function selectFunction(thing){
  select=thing
  nameput=document.getElementById('nameInput').value
  amountput=document.getElementById('amountInput').value
  
}

function add(list){
  let adding=parseInt(list[0])
  for(var i=1;i<list.length;i++){
    adding+=parseInt(list[i])
  }
  return adding
}

function label(){
  addWants=add(wantsAm)
  addNeeds=add(needsAm)
  addSavings=add(savingsAm)
  addTotal=add(total)
  needslabelper.innerHTML="Needs: "+Math.round((addNeeds/addTotal)*100)+"%"
  wantslabelper.innerHTML="Wants: "+Math.round((addWants/addTotal)*100)+"%"
  savingslabelper.innerHTML="Savings: "+Math.round((addSavings/addTotal)*100)+"%"
}