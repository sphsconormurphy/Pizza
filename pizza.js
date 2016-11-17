class Pizza{
  constructor(s, m, v){
    this.size = s;
    this.meatToppings = m;
    this.veggieToppings = v;
  }
  sizeCost(){
    if(this.size == "S"){
      var cost = 7.99;
      return cost;
    }
    if(this.size == "M"){
      var cost = 9.99;
      return cost;
    }
    if(this.size == "L"){
      var cost = 12.99;
      return cost;
    }
    else if(this.size == "XL"){
      var cost = 15.99;
      return cost;
    }
  }
  toppingCost(top){
    if(top == "Meat"){
      var topCost = this.meatToppings.length*0.99;
      return topCost;
    }
    else if(top == "Veggie"){
      var topCost = this.veggieToppings.length*0.5;
      return topCost;
    }
  }
  price(){
    return Pizza.sizeCost + Pizza.toppingCost;
  }
  static promotionalDeal(Pizza, percent){
    var percent = percent/100;
    return Pizza.price * (1-percent);
  }
}
