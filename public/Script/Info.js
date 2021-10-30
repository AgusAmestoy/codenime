const pageItems = document.querySelectorAll('.page-item');
const pageContentItems = document.querySelectorAll('.page-content-item');

function selectItem(e){
    RemoveBorder();
    RemoveShow();
    this.classList.add('page-border');
    const pageContentItem = document.querySelector(`#${this.id}-content`);
    pageContentItem.classList.add('show');
}

function RemoveBorder(){
    pageItems.forEach(item => item.classList.remove('page-border'));
}

function RemoveShow(){
    pageContentItems.forEach(item => item.classList.remove('show'));
}

function SelectItemClick(ID){
    document.getElementById(ID).click();
}


async function GetTextFromFile(IdParagraph, FileUrl){
    try {
        const response = await fetch(FileUrl);
        var data = await response.text();
        data = data.split("\n").join("<br>");
        document.getElementById(IdParagraph).innerHTML = data;
    } catch (err) {
            console.error(err);
    }
}

const data1 = GetTextFromFile("TermsAndConditions-text", "../txt/TermsAndConditions.txt");
const data2 = GetTextFromFile("Privacy-text", "../txt/Privacy.txt");
const data3 = GetTextFromFile("AboutUs-text", "../txt/AboutUs.txt");

pageItems.forEach(item => item.addEventListener('click', selectItem));