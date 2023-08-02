

//create a coupon 
const coupon = new CouponJS({
    discount: 10,
    type: 'percentage',
    name: '10% off',
    code: '10OFF',
    description: '10% off your order',
    freeShipping: true,
});
const myCoupon = coupon.generate();
console.log(myCoupon);


const coupon2 = new CouponJS({
    discount: 20,
    type: 'percentage',
    name: '20% off',
    code: '20OFF',
    description: '20% off your order',
    freeShipping: true,
});
const myCoupon2 = coupon2.generate();
console.log(myCoupon2);



const BigBenOmegaCoupon = coupon.generate({
    characterSet: {
      builtIn: ['CHARSET_ALPHA', 'CHARSET_DIGIT'],
      pattern: 'XXXX-XXXX-XXXX-XXXX',
      prefix: 'BIG-BEN-OMEGA',
      postfix: 'COUPON',
      segments: [4, 4, 4, 4], // 4 groups of 4 characters



    },
  });

    console.log(BigBenOmegaCoupon); 
    export default BigBenOmegaCoupon;
    