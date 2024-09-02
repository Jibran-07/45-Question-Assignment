var guest_list = ["Ali", "Umer", "Zafeer"];
console.log(guest_list[1] + " cant make it");
guest_list.splice(1, 1, "Ashir");
guest_list.forEach(function (guest) { return console.log("Dear ".concat(guest, ", would you like to have dinner with me?")); });
