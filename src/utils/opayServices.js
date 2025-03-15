// src/utils/opayService.js
import axios from 'axios';

// OPay API configuration
const OPAY_API_URL = 'https://testapi.opaycheckout.com/api/v1/international/cashier/create';
const MERCHANT_ID = '256625022590964'; // Replace with your actual Merchant ID
const PUBLIC_KEY = 'OPAYPUB17404971048920.1793348454538205'; // Replace with your actual public key

// Base URL for your application (for callbacks)
const BASE_URL = window.location.origin;

/**
 * Creates a payment request with OPay
 * 
 * @param {Object} paymentDetails - The payment details
 * @param {number} paymentDetails.amount - The amount to charge
 * @param {string} paymentDetails.reference - Unique reference ID for this transaction
 * @param {string} paymentDetails.productName - Name of the product/service
 * @param {string} paymentDetails.productDescription - Description of the product/service
 * @param {Object} paymentDetails.userInfo - User information
 * @returns {Promise} - The OPay API response
 */
export const initiateOpayPayment = async (paymentDetails) => {
  try {
    const { amount, reference, productName, productDescription, userInfo } = paymentDetails;
    
    const formData = {
      amount: {
        currency: "NGN",
        total: amount
      },
      callbackUrl: `${BASE_URL}/payment/callback`,
      cancelUrl: `${BASE_URL}/payment/cancel`,
      country: "NG",
      evokeOpay: true,
      expireAt: 300, // 5 minutes expiry
      sn: reference,
      payMethod: "BankCard",
      product: {
        description: productDescription,
        name: productName,
      },
      reference: reference,
      returnUrl: `${BASE_URL}/payment/success`,
      userInfo: {
        userEmail: userInfo.email,
        userId: userInfo.id,
        userMobile: userInfo.mobile || "",
        userName: userInfo.name
      }
    };

    const response = await axios({
      url: OPAY_API_URL,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${PUBLIC_KEY}`,
        'MerchantId': MERCHANT_ID
      },
      data: formData
    });

    return response.data;
  } catch (error) {
    console.error('OPay payment initiation error:', error);
    throw error;
  }
};

/**
 * Generates a unique reference ID for transactions
 * @returns {string} - A unique reference ID
 */
export const generateTransactionReference = () => {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000000);
  return `CMPGT-${timestamp}-${random}`;
};