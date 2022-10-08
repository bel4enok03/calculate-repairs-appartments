const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttonTypeOfRepair = document.querySelector("#addTypeOfRepair");
buttonTypeOfRepair.addEventListener("click", showTypeOfRepair);

function showTypeOfRepair(e) {
    e.preventDefault(); 
    typeOfRepair.style.display = "block";
}

const buttonTypeOfHouse = document.querySelector("#addTypeOfHouse");
buttonTypeOfHouse.addEventListener("click", showTypeOfHouse);

function showTypeOfHouse(e) {
    e.preventDefault(); 
    typeOfHouse.style.display = "block";
}


function calculateAmount(e) {
    e.preventDefault(); 
    const square = document.querySelector("#square").value;
    const typeOfRepair = document.querySelector("#typeOfRepair").value;
    const typeOfHouse = document.querySelector("#typeOfHouse").value;


    if (square === "") {
        Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Please enter your information!'
    })
    return false;
    }

    let price = 4000;
    let totalSquare = price * square;
    let totalTypeOfRepair = totalSquare * typeOfRepair;
    let totalTypeOfHouse = totalSquare * typeOfHouse;
    let totalSum =+ totalSquare + + totalTypeOfRepair + + totalTypeOfHouse ;

    totalSquare = totalSquare.toFixed(2);
    totalTypeOfRepair = totalTypeOfRepair.toFixed(2);
    totalTypeOfHouse = totalTypeOfHouse.toFixed(2);
    totalSum = totalSum.toFixed(2);

    document.querySelector("#totalAmount").textContent = totalSum;

}

