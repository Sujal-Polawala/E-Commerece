function displayProducts(category) {
  $.getJSON("productCatalog.json", function (data) {
    var products = data.Products;
    var product_Container = $(".product_container");
    var productContainer = $("#product-container");
    var productContainer1 = $("#product_container");
    var productContainer2 = $("#product-container1");
    // // Clear previous products
    product_Container.empty();
    productContainer.empty();
    productContainer1.empty();
    productContainer2.empty();
    // Filter products based on the selected category
    var filteredProducts = products.filter(function (product) {
      return category === "default" || product.category === category;
    });
    // Display the filtered products
    filteredProducts.forEach(function (product) {
      // Append product information including name, price, and image
      if (category === "men") {
        if (product.pid == 1) {
          productContainer.append(
            `<div class="box"> 
              <div class="box-content"> 
                <div class="img-box"> 
                  <img src="` +product.pimg +`" alt=""> 
                </div> 
                <div class="detail-box"> 
                  <div class="text"> 
                    <h6>` +product.pname +`</h6> 
                    <h5>` +product.price +`</h5> 
                  </div> 
                  <div class="like"> 
                    <h6> Like </h6> 
                    <div class="star_container"> 
                      <i class="fa fa-star" aria-hidden="true"></i> 
                      <i class="fa fa-star" aria-hidden="true"></i> 
                      <i class="fa fa-star" aria-hidden="true"></i> 
                      <i class="fa fa-star" aria-hidden="true"></i> 
                      <i class="fa fa-star" aria-hidden="true"></i> 
                    </div> 
                  </div> 
                </div> 
              </div> 
              <div class="btn-box"> 
                <a href="">Add To Cart</a> &nbsp;&nbsp; 
                <a href="productdetails.html?p_id=` +product.id +`">View Details </a> 
              </div> 
            </div>`
          );
        }
      } else if (category === "women") {
        if (product.pid == 2) {
          productContainer1.append(
            `<div class="box"> 
              <div class="box-content"> 
                <div class="img-box"> 
                  <img src="` +product.pimg +`" alt=""> 
                </div> 
                <div class="detail-box"> 
                  <div class="text"> 
                    <h6>` +product.pname +`</h6> 
                    <h5>` +product.price +`</h5> 
                  </div> 
                  <div class="like"> 
                    <h6> Like </h6> 
                    <div class="star_container"> 
                      <i class="fa fa-star" aria-hidden="true"></i> 
                      <i class="fa fa-star" aria-hidden="true"></i> 
                      <i class="fa fa-star" aria-hidden="true"></i> 
                      <i class="fa fa-star" aria-hidden="true"></i> 
                      <i class="fa fa-star" aria-hidden="true"></i> 
                    </div> 
                  </div> 
                </div> 
              </div> 
              <div class="btn-box"> 
                <a href="">Add To Cart</a> &nbsp;&nbsp; 
                <a href="productdetails.html?p_id=` +product.id +`">View Details </a> 
              </div> 
            </div>`
          );
        }
      } else if (category === "kid") {
        if (product.pid == 3) {
          productContainer2.append(
            `<div class="box"> 
              <div class="box-content"> 
                <div class="img-box"> 
                  <img src="` +product.pimg +`" alt=""> 
                </div> 
                <div class="detail-box"> 
                  <div class="text"> 
                    <h6>` +product.pname +`</h6> 
                    <h5>` +product.price +`</h5> 
                  </div> 
                  <div class="like"> 
                    <h6> Like </h6> 
                    <div class="star_container"> 
                      <i class="fa fa-star" aria-hidden="true"></i> 
                      <i class="fa fa-star" aria-hidden="true"></i> 
                      <i class="fa fa-star" aria-hidden="true"></i> 
                      <i class="fa fa-star" aria-hidden="true"></i> 
                      <i class="fa fa-star" aria-hidden="true"></i> 
                    </div> 
                  </div> 
                </div> 
              </div> 
              <div class="btn-box"> 
                <a href="">Add To Cart</a> &nbsp;&nbsp; 
                <a href="productdetails.html?p_id=` +product.id +`">View Details </a> 
              </div> 
            </div>`
          );
        }
      } else if (category === "default") {
        if (product.pid == 1 || product.pid == 2 || product.pid == 3) {
          productContainer.append(
            `<div class="box"> 
              <div class="box-content"> 
                <div class="img-box"> 
                  <img src="` +product.pimg +`" alt=""> 
                </div> 
                <div class="detail-box"> 
                  <div class="text"> 
                    <h6>` +product.pname +`</h6> 
                    <h5>` +product.price +`</h5> 
                  </div> 
                  <div class="like"> 
                    <h6> Like </h6> 
                    <div class="star_container"> 
                      <i class="fa fa-star" aria-hidden="true"></i> 
                      <i class="fa fa-star" aria-hidden="true"></i> 
                      <i class="fa fa-star" aria-hidden="true"></i> 
                      <i class="fa fa-star" aria-hidden="true"></i> 
                      <i class="fa fa-star" aria-hidden="true"></i> 
                    </div> 
                  </div> 
                </div> 
              </div> 
              <div class="btn-box"> 
                <a href="">Add To Cart</a> &nbsp;&nbsp; 
                <a href="productdetails.html?p_id=` +product.id +`">View Details </a> 
              </div> 
            </div>`
          );
        }
      }
    });
  });
}
// Handle change event on the category select dropdown
$("#catalog").on("change", function () {
  var selectedCategory = $(this).val();
  displayProducts(selectedCategory);
});
// Call the function to display products when the page loads
$(document).ready(function () {
  displayProducts("default"); // Display all products initially
});
$(document).ready(function () {
  $("#btn").click(function () {
    let email = $("#logemail").val();
    let pass = $("#logpass").val();
    let e = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (email == "") {
      $("#valid").text("Email Field Is not Empty.").css("color", "red");
      $("#logemail").focus();
      return false;
    } 
    else if (!e.test(email)) {
      $("#valid").text("Please Enter Valid E - mail.").css("color", "red");
      $("#logemail").focus();
      return false;
    } else {
      $("#valid").text("Valid Email.").css("color", "green");
    }
    if (pass == "") {
      $("#valid1").text("Password Field Is not Empty.").css("color", "red");
      $("#logpass").focus();
      return false;
    }
    else if (pass.length < 6) {
      $("#valid1").text("Password must have 6 characters.").css("color", "red");
      $("#logpass").focus();
      return false;
    } else {
      $("#valid1").text("Valid Password.").css("color", "green");
      // return true;
    }
  });
  $("#btn1").click(function () {
    let uname = $("#logname").val();
    let email = $("#logemail").val();
    let pass = $("#logpass").val();
    let e = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (uname == null || uname == "") {
      $(".v").text("Please Enter name.").css("color", "red");
      $("#logname").focus();
      return false;
    } else {
      $(".v").text("Valid Name.").css("color", "green");
    }
    if (!e.test(email)) {
      $(".valid").text("Please Enter Valid E - mail.").css("color", "red");
      $("#logemail").focus();
      return false;
    } else {
      $(".valid").text("Valid Email.").css("color", "green");
    }
    if (pass.length < 6) {
      $(".valid1").text("Password must have 6 characters.").css("color", "red");
      $("#logpass").focus();
      return false;
    } else {
      $(".valid1").text("Valid Password.").css("color", "green");
    }
  });
});
