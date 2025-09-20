import {Component, inject, type OnInit} from '@angular/core';
import {ActivatedRoute, Router,} from '@angular/router';
import type { ProductType } from '../../../../types/product.type';
import {
  AbstractControl,
  FormBuilder,
  type ValidationErrors, Validators
} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

function phoneValidator(ctrl: AbstractControl): ValidationErrors | null {
  const value: string = (ctrl.value ?? '').trim();
  if (!/^\+?\d+$/.test(value)) return {phoneChars: true};
  const digits = value.replace(/\D/g, '');
  if (digits.length !== 11) {
    return { phoneLen: true };
  }
  return null;
}

@Component({
  selector: 'checkout-component',
  standalone: false,
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss'
})
export class Checkout implements OnInit {

  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private lettersOnly = Validators.pattern(/^[\p{L}]+$/u);

  sending = false;
  success = false;
  error = false;

  isShown(c: AbstractControl | null | undefined) { return !!c && (c.dirty || c.touched); }

  orderForm = this.fb.group({
    name: ['', [Validators.required, this.lettersOnly]],
    surname: ['', [Validators.required, this.lettersOnly]],
    phone: ['', [Validators.required, phoneValidator]],
    country: ['', Validators.required],
    zip: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
    address: ['', [Validators.required, Validators.pattern(/^[\p{L}\d\s\-\/]+$/u)]],
    product: [{ value: '', disabled: true }],
    comment: ['']
  });

  get f() { return this.orderForm.controls; }

  selectedProduct: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const product = navigation.extras.state['product'] as ProductType;
      if (product) {
        this.selectedProduct = product.title;
      }
    }
  }

  ngOnInit() {
    const title = this.route.snapshot.queryParamMap.get('product') ?? '';
    this.orderForm.get('product')?.setValue(title); // кладём в FormControl
  }

  submit() {
    if (this.orderForm.invalid || this.sending) return;

    this.sending = true;
    this.success = false;
    this.error = false;

    const v = this.orderForm.getRawValue();

    const body = {
      name: v.name ?? '',
      last_name: v.surname ?? '',
      phone: v.phone ?? '',
      country: v.country ?? '',
      zip: v.zip ?? '',
      product: v.product ?? '',
      address: v.address ?? '',
      comment: v.comment ?? ''
    };

    this.http.post<{ success: 0 | 1 }>('https://testologia.ru/order-tea', body).subscribe({
      next: (res) => {
        this.sending = false;
        if (res?.success === 1) {
          this.success = true;
        } else {
          this.error = true;
          setTimeout(() => (this.error = false), 3000);
        }
      },
      error: () => {
        this.sending = false;
        this.error = true;
        setTimeout(() => (this.error = false), 3000);
      }
    });
  }
}
