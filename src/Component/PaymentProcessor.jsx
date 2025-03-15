// src/components/PaymentProcessor.jsx
import { useState, useEffect } from 'react';
import { initiateOpayPayment, generateTransactionReference } from '../utils/opayServices';

export default function PaymentProcessor({ 
  amount, 
  onSuccess, 
  onCancel, 
  serviceName, 
  serviceDescription, 
  userInfo,
  onClose
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [paymentUrl, setPaymentUrl] = useState(null);

  const handlePaymentInitiation = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Generate a unique reference for this transaction
      const reference = generateTransactionReference();
      
      const paymentDetails = {
        amount,
        reference,
        productName: serviceName,
        productDescription: serviceDescription,
        userInfo
      };
      
      const response = await initiateOpayPayment(paymentDetails);
      
      if (response && response.code === "00000" && response.data && response.data.cashierUrl) {
        // Store the payment reference in localStorage for verification when user returns
        localStorage.setItem('pendingPayment', JSON.stringify({
          reference,
          amount,
          serviceName,
          timestamp: new Date().getTime()
        }));
        
        // Open the payment URL in a new window/tab
        setPaymentUrl(response.data.cashierUrl);
        window.open(response.data.cashierUrl, '_blank');
      } else {
        setError(response?.message || 'Failed to initiate payment. Please try again.');
      }
    } catch (err) {
      setError('An error occurred while processing your payment. Please try again.');
      console.error('Payment error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Automatically start payment process when component mounts
    handlePaymentInitiation();
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="mb-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto"></div>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {loading ? 'Processing Payment...' : 'Payment Initiated'}
        </h3>
        
        {error ? (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-4">
            {error}
          </div>
        ) : paymentUrl ? (
          <div className="text-sm text-gray-600 mb-4">
            <p>A new window has opened to complete your payment with OPay.</p>
            <p className="mt-2">If the payment window doesn't open, please click the button below.</p>
          </div>
        ) : (
          <p className="text-sm text-gray-600">
            Please wait while we connect to the payment gateway...
          </p>
        )}
      </div>
      
      <div className="flex flex-col space-y-3">
        {paymentUrl && (
          <a 
            href={paymentUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 px-4 rounded-lg hover:shadow-md transition-all duration-300 text-center"
          >
            Complete Payment with OPay
          </a>
        )}
        
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-800 text-sm flex items-center justify-center"
        >
          Cancel and Return
        </button>
      </div>
    </div>
  );
}