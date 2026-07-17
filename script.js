// ================================
// Tiny Foot PK
// script.js
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // ----------------------------
    // Smooth Scroll
    // ----------------------------

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({
                    behavior:"smooth"
                });

            }

        });

    });

    // ----------------------------
    // Product Animation
    // ----------------------------

    const products = document.querySelectorAll(".product");

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";
                entry.target.style.transform="translateY(0px)";

            }

        });

    },{
        threshold:0.15
    });

    products.forEach(product=>{

        product.style.opacity="0";
        product.style.transform="translateY(40px)";
        product.style.transition="0.6s ease";

        observer.observe(product);

    });

    // ----------------------------
    // WhatsApp Button
    // ----------------------------

    const whatsappButtons = document.querySelectorAll(".whatsapp");

    whatsappButtons.forEach(button=>{

        button.addEventListener("click",()=>{

            console.log("WhatsApp Clicked");

        });

    });

});

// ==========================================
// Search Products
// ==========================================

function searchProducts(){

    let input=document.getElementById("searchInput");

    if(!input) return;

    let filter=input.value.toUpperCase();

    let cards=document.querySelectorAll(".product");

    cards.forEach(card=>{

        let title=card.querySelector("h3").innerText.toUpperCase();

        if(title.indexOf(filter)>-1){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

}

// ==========================================
// Filter By Size
// ==========================================

function filterSize(size){

    const cards=document.querySelectorAll(".product");

    cards.forEach(card=>{

        const productSize=card.querySelector(".size").innerText;

        if(size==="All"){

            card.style.display="block";

        }

        else if(productSize.includes(size)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

}

// ==========================================
// Scroll To Top
// ==========================================

window.addEventListener("scroll",()=>{

    const button=document.getElementById("topBtn");

    if(!button) return;

    if(window.scrollY>400){

        button.style.display="block";

    }

    else{

        button.style.display="none";

    }

});

function topFunction(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

console.log("Tiny Foot PK Loaded Successfully");
