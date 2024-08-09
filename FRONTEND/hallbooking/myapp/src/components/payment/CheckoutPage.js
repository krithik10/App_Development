// import React, { useState } from 'react';
// import './CheckoutPage.css';

// const CheckoutPage = () => {
//   const [cartItems] = useState([
//     { name: 'Watermelon', size: 'Medium', price: 25 },
//     { name: 'Bubble', size: 'Medium', price: 25 },
//   ]);
//   const [total] = useState(50);
//   const [showMessage, setShowMessage] = useState(false);

//   const states = [
//     "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
//     "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
//     "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
//     "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
//     "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh",
//     "West Bengal"
//   ];

//   const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];

//   const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);

//   const handlePayClick = () => {
//     setShowMessage(true);
//     setTimeout(() => setShowMessage(false), 3000); // Hide message after 3 seconds
//   };

//   return (
//     <div className="checkout-container">
//       <div className="current-cart">
//         <h2>Current Cart</h2>
//         <ul>
//           {cartItems.map((item, index) => (
//             <li key={index}>
//               <span>{item.name}</span>
//               <span>{item.size}</span>
//               <span>${item.price.toFixed(2)}</span>
//             </li>
//           ))}
//         </ul>
//         <div className="cart-totals">
//           <span>CART TOTALS</span>
//           <span>${total.toFixed(2)}</span>
//         </div>
//         <button className="checkout-button" onClick={handlePayClick}>PAY</button>
//         {showMessage && <div className="verification-message">Payment Successful!</div>}
//       </div>

//       <div className="customer-info">
//         <h2>Customer Info</h2>
//         <form>
//           <div>
//             <label>First Name</label>
//             <input type="text" name="firstName" placeholder="John" />
//           </div>
//           <div>
//             <label>Last Name</label>
//             <input type="text" name="lastName" placeholder="Smith" />
//           </div>
//           <div>
//             <label>Email</label>
//             <input type="email" name="email" placeholder="xyz@example.com" />
//           </div>
//           <div>
//             <label>Address</label>
//             <input type="text" name="address" placeholder="122 Example St" />
//           </div>
//           <div>
//             <label>Select State</label>
//             <select name="state">
//               <option value="">Select State</option>
//               {states.map((state, index) => (
//                 <option key={index} value={state}>
//                   {state}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label>Town/City</label>
//             <input type="text" name="city" placeholder="City" />
//           </div>
//         </form>
//       </div>

//       <div className="payment-info">
//         <h2>Payment Info</h2>
//         <form>
//           <div>
//             <label>Credit Card Number</label>
//             <input type="text" name="cardNumber" placeholder="0000 1111 0000 1111" />
//           </div>
//           <div>
//             <label>Month</label>
//             <select name="month">
//               <option value="">Select Month</option>
//               {months.map((month, index) => (
//                 <option key={index} value={index + 1}>
//                   {month}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label>Year</label>
//             <select name="year">
//               <option value="">Select Year</option>
//               {years.map((year, index) => (
//                 <option key={index} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label>CVC</label>
//             <input type="text" name="cvc" placeholder="123" />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const [cartItems] = useState([
    { name: 'Watermelon', size: 'Medium', price: 25 },
    { name: 'Bubble', size: 'Medium', price: 25 },
  ]);
  const [total] = useState(50);
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh",
    "West Bengal"
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);

  const handlePayClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      setIsLoading(true);
      setTimeout(() => {
        navigate('/available'); // Redirect to the Featured page
      }, 2000); // Loading screen duration
    }, 3000); // Verification message duration
  };

  return (
    <div className="checkout-container">
      {isLoading ? (
        <div className="loading-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <div className="current-cart">
            <h2>Current Cart</h2>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <span>{item.name}</span>
                  <span>{item.size}</span>
                  <span>${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="cart-totals">
              <span>CART TOTALS</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="checkout-button" onClick={handlePayClick}>PAY</button>
            {showMessage && <div className="verification-message">Payment Successful!</div>}
          </div>

          <div className="customer-info">
            <h2>Customer Info</h2>
            <form>
              <div>
                <label>First Name</label>
                <input type="text" name="firstName" placeholder="John" />
              </div>
              <div>
                <label>Last Name</label>
                <input type="text" name="lastName" placeholder="Smith" />
              </div>
              <div>
                <label>Email</label>
                <input type="email" name="email" placeholder="xyz@example.com" />
              </div>
              <div>
                <label>Address</label>
                <input type="text" name="address" placeholder="122 Example St" />
              </div>
              <div>
                <label>Select State</label>
                <select name="state">
                  <option value="">Select State</option>
                  {states.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Town/City</label>
                <input type="text" name="city" placeholder="City" />
              </div>
            </form>
          </div>

          <div className="payment-info">
            <h2>Payment Info</h2>
            <form>
              <div>
                <label>Credit Card Number</label>
                <input type="text" name="cardNumber" placeholder="0000 1111 0000 1111" />
              </div>
              <div>
                <label>Month</label>
                <select name="month">
                  <option value="">Select Month</option>
                  {months.map((month, index) => (
                    <option key={index} value={index + 1}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Year</label>
                <select name="year">
                  <option value="">Select Year</option>
                  {years.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>CVC</label>
                <input type="text" name="cvc" placeholder="123" />
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
