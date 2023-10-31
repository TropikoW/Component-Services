import { Component , Input , Output, EventEmitter,OnChanges,OnInit,AfterViewInit,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnChanges,OnInit,AfterViewInit{
  @Input() photo : string = '';
  @Output() loaded = new EventEmitter<string>();

  counter :number = 0;
  imageDefault = 'https://www.spain.info/.content/imagenes/cabeceras-grandes/valencia/ciudad-artes-ciencias-valencia-c-luca-bravo-u-UyUjtbu5vj4.jpg';
  imgToBreak() {
    // this.photo = this.imageDefault;
    console.log('console.log/folder/image:image no loaded');
  };
  imageLoaded() {
    console.log('console.log/folder/img :image loaded');
    this.loaded.emit(this.photo);
  }
  ngOnChanges(change : SimpleChanges) {
    console.log('onchanges',this.photo);
    console.log(change);
  };
  ngOnInit() :void{
    console.log('OnInit',this.photo);
  };
  ngAfterViewInit() {
    console.log('AfterView',this.photo);
  };
}
