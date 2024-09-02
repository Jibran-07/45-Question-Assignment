let guest_list:string[] = ["Ali","Umer","Zafeer"]
guest_list.forEach(guest=>console.log(`Dear ${guest}, would you like to have dinner with me?`))
console.log(guest_list[1] + " can't make it")
guest_list.splice(1,1,"Ashir")
guest_list.forEach(guest=>console.log(`Dear ${guest}, would you like to have dinner with me?`))