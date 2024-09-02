let guest_list:string[] = ["Ali","Umer","Zafeer"]
guest_list.forEach(guest=>console.log(`Dear ${guest}, would you like to have dinner with me?`))
console.log("\n" + guest_list[1] + " can't make it\n")
guest_list.splice(1,1,"Ashir")
guest_list.forEach(guest=>console.log(`Dear ${guest}, would you like to have dinner with me?`))

console.log("\n Great News! I just found a bigger dinner table.\n")
guest_list.unshift("Rayyan")
guest_list.splice(guest_list.length/2,0,"Hateez")
guest_list.push("Izaan")
guest_list.forEach(guest=>console.log(`Dear ${guest}, would you like to have dinner with me?`))
