import React from 'react';

import { usePaystackPayment} from 'react-paystack';

const MakePayment = ({metadata, onClose, onSuccess, email, amount, pay=false}) => {
    const init =  usePaystackPayment({
        currency: 'GHS',
        email,
        amount,
        metadata,
        publicKey:'pk_test_c5847678ba4a867b55f4b9bdb8e032f277a360b2',
      });

      if (pay){
          init(onSuccess, onClose)
      }

      return <> </>
}

export default MakePayment;