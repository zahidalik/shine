import { Component } from '@angular/core';

@Component({
  selector: "shine-customer-search",
  template: '\
<header> \
  <h1 class="h2">Customer Search</h1> \
</header> \
<section class="search-form"> \
  <form> \
    <div class="input-group input-group-lg"> \
      <label for="keywords" class="sr-only">Keywords</label> \
      <input type="text" id="keywords" name="keywords" \
             placeholder="First Name, Last Name, or Email Address" \
             class="form-control input-lg" \
             bindon-ngModel="keywords"> \
      <span class="input-group-btn"> \
        <input type="submit" value="Find Customers" \
               class="btn btn-primary btn-lg" \
               on-click="search()"> \
      </span> \
    </div> \
  </form> \
</section> \
<p></p> \
<section class="search-results"> \
  <header> \
    <h1 class="h3">Results</h1> \
  </header> \
  <ol class="list-group"> \
    <li class="list-group-item clearfix"> \
      <h3 class="float-right"> \
        <small class="text-uppercase">Joined</small> \
      </h3> \
      <h2 class="h3"> \
        Pat Smith\
        <small>psmith34</small> \
      </h2> \
      <h4>pat.smith@example.com</h4> \
    </li> \
  </ol> \
</section>'
})

export class CustomerAppComponent {
  constructor() {
    this.keywords = null;
  };
  search() {
    alert("Searched for: " + this.keywords);
  };
}
