$(document).ready(function() {
    $('.loop').owlCarousel({
      items: 2,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      responsive: {
        300: {
            items: 2
          },
          768: {
            items: 4
          },
          992: {
            items: 6
          }
      }
    });
});
$('.basic').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
// JavaScript code to handle button clicks and show/hide product content

// Get references to the buttons and product content divs
const specialBtn = document.getElementById('specialBtn');
const newBtn = document.getElementById('newBtn');
const bestsellerBtn = document.getElementById('bestsellerBtn');
const specialProduct = document.getElementById('specialProduct');
const newProduct = document.getElementById('newProduct');
const bestseller = document.getElementById('bestseller');

// Show Special Product by default
specialProduct.classList.add('show');

// Event listeners for button clicks
specialBtn.addEventListener('click', () => {
  showProductContent('specialProduct');
});

newBtn.addEventListener('click', () => {
  showProductContent('newProduct');
});

bestsellerBtn.addEventListener('click', () => {
  showProductContent('bestseller');
});

// Function to show the selected product content and hide others
function showProductContent(selectedProduct) {
  specialProduct.classList.remove('show');
  newProduct.classList.remove('show');
  bestseller.classList.remove('show');

  if (selectedProduct === 'specialProduct') {
    specialProduct.classList.add('show');
  } else if (selectedProduct === 'newProduct') {
    newProduct.classList.add('show');
  } else if (selectedProduct === 'bestseller') {
    bestseller.classList.add('show');
  }
}
$(document).ready(function() {
  $('.new').owlCarousel({
    loop: true,
    margin: 10,
    nav: true, // Hiển thị nút điều hướng (next và prev)
    dots: true, // Hiển thị nút chấm (dots)
    responsive:{
      0:{
        items: 1
      },
      600:{
        items: 3
      },
      1000:{
        items: 5
      }
    }
  });
});
 // Hiển thị nút "back-to-top" khi trang cuộn xuống
 window.onscroll = function() {
  showBackToTopBtn();
};

function showBackToTopBtn() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

// Xử lý sự kiện khi click vào nút "back-to-top"
document.getElementById("backToTopBtn").addEventListener("click", function() {
  document.body.scrollTop = 0; // Cho trình duyệt Chrome, Firefox, Safari
  document.documentElement.scrollTop = 0; // Cho trình duyệt IE và Edge
});

const deleteButtons = document.querySelectorAll('.delete-item');
deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const row = button.closest('tr');
        row.remove();
    });
});

function decreaseQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);

    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
}

function increaseQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);

    var maxQuantity = 100;
    if (currentQuantity < maxQuantity) {
        quantityInput.value = currentQuantity + 1;
    }
}
function changeImage(element) {

  var main_prodcut_image = document.getElementById('main_product_image');
  main_prodcut_image.src = element.src;
  

}