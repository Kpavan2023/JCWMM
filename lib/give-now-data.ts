/* Give Now payment methods */

export interface PaymentMethod {
  id: string;
  label: string;
  type: 'upi' | 'bank';
  upiId?: string;
  merchantName?: string;
  qrImageUrl?: string;
  phones?: string[];
  accountName?: string;
  accountNumber?: string;
  ifscCode?: string;
  branchCode?: string;
  bankName?: string;
  branch?: string;
}

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'upi-sbi',
    label: 'GPay · PhonePe · Paytm · BHIM UPI',
    type: 'upi',
    upiId: 'JCWMM@SBI',
    merchantName: 'JUDAH ASHER',
    qrImageUrl: '/images/JCWMM_OFFERING_QR_CODE_2.jpg',
    phones: ['+91 8686861836', '+91 9700545494'],
  },
  {
    id: 'sbi-main',
    label: 'SBI – Abrahamic Covenant Account',
    type: 'bank',
    accountName: 'MR. JUDAH ASHER',
    accountNumber: '20385704769',
    branchCode: '018395',
    ifscCode: 'SBIN0018395',
    bankName: 'State Bank of India',
    branch: 'Hyderabad',
  },
];

export const GIVE_NOW_VERSE = {
  text: '"Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap."',
  reference: 'Luke 6:38',
};
  