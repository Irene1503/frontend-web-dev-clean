const baseUrl = "https:api.escuelajs.co";

function listProduct() {
     fetch(`${baseUrl}/api/v1/products`).then(res => res.json()).then(data => {


listProducts.innerHTML =`
<div class="card shadow-sm">
<img src="./133906652072825377.jpg" alt="coffee">
<div class="card-body">
<div class="d-flex justify-content-between">
<h5>Product Name</h5>
<h5>NGN 300</h5>
</div>
<p class="card-text">This product is good for you and everyone you know.</p>
<div class="d-flex justify-content-between align-items-center">
<div class="btn-group"> <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
</div> <small class="text-body-secondary">9 mins</small>
</div>
</div>
</div>
</div>

`
     });
}
listProduct();