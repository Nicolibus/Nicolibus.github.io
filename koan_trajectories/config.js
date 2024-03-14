const cfg = {
//data –> the public url of the google sheet
    data: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQwx1fIDflG3RjMG1EqK9VZb29PcROZcp6N9NOhTYkB-O9drypZrVMPr7njCkTyBptkpNcHMJOQQCHj/pub?output=csv",
//clientName –> the name of the client, any character allowed if " is necessary use \" 
    clientName: "Client \"Example\" ",
//show threshold lines if the value of x or y is zero the relative line will be hidden
    threshold: {x:9, y:9 },
//horizontal gridlines true or false
    showYGrid: false
}