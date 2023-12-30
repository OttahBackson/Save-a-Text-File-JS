
const textArea = document.querySelector("textarea");
const fileNameInput = document.querySelector(".file-name input");
const saveAs = document.querySelector(".save-as select");
const btn = document.querySelector(".btn");

saveAs.addEventListener("change", () => {
    //getting selected option text
    let selectedOption = saveAs.options[saveAs.selectedIndex].text;
    btn.innerText = `Save As ${(selectedOption.split(" ")[0])}`
})

btn.addEventListener("click", () => {
    const blob = new Blob([textArea.value], {type : saveAs.value});
    // URl.createObjectURL creates a url that represent passed object
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a"); //creating a link tag
    link.download = fileNameInput.value;
    link.href = fileUrl; //passing fileurl to a href value link
    link.click(); //clicking link so that file downoload 
})