var guest_list = ["Ali", "Umer", "Zafeer"];
console.log("\n Great News! I just found a bigger dinner table.\n");
guest_list.unshift("Rayyan");
guest_list.splice(guest_list.length / 2, 0, "Hateez");
guest_list.push("Izaan");
guest_list.forEach(function (guest) { return console.log("Dear ".concat(guest, ", would you like to have dinner with me?")); });
console.log("\n Due to unforseen circumstances, I can only invite two people for dinner\n");
var og = guest_list.length;
for (var i = guest_list.length; i > 2; i--) {
    console.log("Dear ".concat(guest_list[guest_list.length - 1], ", Sorry I can't invite you to dinner"));
    guest_list.pop();
}
