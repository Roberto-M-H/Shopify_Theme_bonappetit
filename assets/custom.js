$(document).ready(function(){
  
  $('.products__slider').slick({
    infinite: true,
    arrows: false,
    dots: true
  });
  
  $('.product__quantity .icon').on('click', function(){
    var qty = parseInt($(this).parent('.product__quantity').find('.quantity-input').val());
    if($(this).hasClass('plus-btn')) {
      qty++;
    }else {
      if(qty > 1) {
        qty--;
      }
    }
    qty = (isNaN(qty))?1:qty;
    $(this).parent('.product__quantity').find('.quantity-input').val(qty);
  });
  
});


document.addEventListener('readystatechange', event => { 
    
  if (event.target.readyState === "complete") {
    if ($(window).width() < 768) {
      $('.product-recommendations .collection-grid').slick({
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      });
      $('.featured-collection .collection-grid').slick({
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      });

    }
  }
});