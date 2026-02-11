console.log("event 2nd code start now");

// enent delegation code here now;
// let orderList = document.getElementById("orderList");
// orderList.addEventListener("click",(e)=>{
//     if(e.target.tagName ==="LIST"){
//         console.log(e.target);
//     }
// })
let ol = document.getElementById("orderList2")
ol.addEventListener("click", (e) => {
    // console.log("hi");


    // create element:
    let liCreate = document.createElement("p");
    liCreate.innerText = "add items new";
    // parent element;
    let parent = document.getElementsByClassName("delete");
    parent.appendChild(liCreate)
    // Remove code;
    if (e.target.classList.contains("delete")) {
        e.target.parentNode.removeChild(e.target)
    }
    // let addBtn = document.getElementById("addBtn");









    // e.target.parentNode.removeChild(e.target)
    // Remove items code here now;



    // Rong way event delegation:-
    // let dele = document.querySelectorAll(".delete");
    // dele.forEach((del)=>{
    //     // console.log(del);
    //     del.addEventListener("click",(e)=>{
    //         e.target.parentNode.removeChild(e.target)
    //     })
    // })
})