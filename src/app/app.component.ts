import { Component , OnInit} from '@angular/core';
import { Product } from './components/products/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'component_services';

  inputParent = '';

  popup : boolean = false;

  stopwatch : number | any= 0;

  listShoes : Product[]= [];

  onloaded(photo : string) {
    console.log('This message is because i listen the component image');
    console.log(photo);
  };

  showTargetR = false;
  toggleShowReques() {
    this.showTargetR = !this.showTargetR;

  };

  targetAsideLeft = {
    imglink : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqhSK5c68INRc2obeRSkeXOZFPlYFyeHSmCrEC9Ot6g&s'
  }
  ngOnInit() {
    this.stopwatch = setInterval(()=>{this.popup=true},10000);
    setTimeout(()=>{this.popup=false},30000);
  };
  inputsShoes = {
    name : '',
    details : [''],
    price : 0,
    image : ''
  }

  sendProduct() {
    this.listShoes.push(this.inputsShoes);
  };
}
