import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referral-code',
  templateUrl: './referral-code.component.html',
  styleUrls: ['./referral-code.component.scss']
})
export class ReferralCodeComponent implements OnInit {
  cvv = ['', '', ''];
  pin = ['', '', '', ''];
  confirmPin = ['', '', '', ''];
  openDialog = false;
  openSecondDialog = false;
  step = 0;
  constructor() { }

  ngOnInit() {
  }

  onCvvChange(event) {
    if (this.cvv[0].length > 1) {
      this.cvv[0] = this.cvv[0].substr(0, 1);
    }
    if (this.cvv[1].length > 1) {
      this.cvv[1] = this.cvv[1].substr(0, 1);
    }
    if (this.cvv[2].length > 1) {
      this.cvv[2] = this.cvv[2].substr(0, 1);
    }
    if (event.target.value) {
      const element = event.srcElement.nextElementSibling;
      if (element === null) {
        return;
      }
      element.focus();
      element.setSelectionRange(0, 0);
    }
  }

  onPinChange(event) {
    if (this.pin[0].length > 1) {
      this.pin[0] = this.pin[0].substr(0, 1);
    }
    if (this.pin[1].length > 1) {
      this.pin[1] = this.pin[1].substr(0, 1);
    }
    if (this.pin[2].length > 1) {
      this.pin[2] = this.pin[2].substr(0, 1);
    }
    if (this.pin[3].length > 1) {
      this.pin[3] = this.pin[3].substr(0, 1);
    }
    if (event.target.value) {
      const element = event.srcElement.nextElementSibling;
      if (element === null) {
        return;
      }
      element.focus();
      element.setSelectionRange(0, 0);
    }
  }

  onConfirmPinChange(event) {
    if (this.confirmPin[0].length > 1) {
      this.confirmPin[0] = this.confirmPin[0].substr(0, 1);
    }
    if (this.confirmPin[1].length > 1) {
      this.confirmPin[1] = this.confirmPin[1].substr(0, 1);
    }
    if (this.confirmPin[2].length > 1) {
      this.confirmPin[2] = this.confirmPin[2].substr(0, 1);
    }
    if (this.confirmPin[3].length > 1) {
      this.confirmPin[3] = this.confirmPin[3].substr(0, 1);
    }
    if (event.target.value) {
      const element = event.srcElement.nextElementSibling;
      if (element === null) {
        return;
      }
      element.focus();
      element.setSelectionRange(0, 0);
    }
  }

  submit(event) {
    event.preventDefault();
    if (this.step === 0) {
      this.openDialog = true;
    } else if (this.step === 1) {
      this.step = 2;
    } else if (this.step === 2) {
      this.openSecondDialog = true;
    }
  }

  hideDialog() {
    this.openDialog = false;
  }

  setPin() {
    this.step = 1;
    this.openDialog = false;
  }

  getTitle() {
    if (this.step === 0) {
      return 'Enter the CVV';
    } else if (this.step === 1) {
      return 'Create your PIN Code';
    } else if (this.step === 2) {
      return 'Re-enter your PIN Code';
    }
  }

  getDescription() {
    if (this.step === 0) {
      return 'Welcome Spendusername, Please enter the three digit security code found on the back of your card:';
    } else if (this.step === 1) {
      return 'Please set a secure PIN to use your Spend Card.';
    } else if (this.step === 2) {
      return 'Re-enter your 4 digits';
    }
  }

  getBtnText() {
    if (this.step === 0) {
      return 'Activate';
    } else if (this.step === 1) {
      return 'Next';
    } else if (this.step === 2) {
      return 'Complete';
    }
  }

  close() {
    this.openSecondDialog = false;
  }
}
