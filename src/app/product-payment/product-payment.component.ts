import {
  Component,
  OnInit,
  NgZone,
  ViewChild
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  CdkTextareaAutosize
} from '@angular/cdk/text-field';
import {
  take
} from 'rxjs/operators';

@Component({
  selector: 'app-product-payment',
  templateUrl: './product-payment.component.html',
  styleUrls: ['./product-payment.component.scss']
})
export class ProductPaymentComponent implements OnInit {

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  step = 0;
  story = ' 八闽王子';
  category = 'Подволк';
  productWeight = 0.27;
  unit = 1;
  productWeights = 0.27;
  costs = 12705;
  cardimage = 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg';
  cities = ['ub', 'darhan', 'erdenet'];
  code = 'ORD-0000011353';
  mode = [''];
  allWeights = this.unit * this.productWeights;
  allcosts = this.unit * this.costs ;
  paycosts = 1000 ;
  transcost = this.allcosts - this.paycosts;
  delivert: string;
  deliveries = [{
      deli: 'Оффисоос ирж авна',
      deli1: 'Улаанбаатарт таны захиалга ирэхэд мессэжээр мэдэгдэх бөгөөд та манай оффисоос ирж бараагаа авна.',
      deli2: '0₮'
    },
    {
      deli: 'Гэртээ хүргүүлээд авна',
      deli1: '',
      deli2: '3000₮'
    },
    {
      deli: 'Орон нутгийн унаанд өгч явуулна',
      deli1: 'Орон нутгаас захиалга хийж байгаа бол уг сонголтыг сонгож өгнө үү',
      deli2: '3000₮'
    }
  ];

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  constructor(
    private _formBuilder: FormBuilder,
    private ngZone: NgZone,
    private fb: FormBuilder) {}

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      addr3: ['', Validators.required],
      addr4: ['', Validators.required],
      addr5: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  get firstname() {
    return this.firstFormGroup.get('firstname');
  }
  get lastname() {
    return this.firstFormGroup.get('lastname');
  }
  get phone() {
    return this.firstFormGroup.get('phone');
  }
  get addr3() {
    return this.firstFormGroup.get('addr3');
  }
  get addr4() {
    return this.firstFormGroup.get('addr4');
  }
  get addr5() {
    return this.firstFormGroup.get('addr5');
  }

}
