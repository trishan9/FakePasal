const PaymentOptions = () => {
  return (
    <>
      <p class="text-2xl pb-2 border-b border-gray-400">Payment Options</p>
      
      <div class="flex gap-6">
        <div class="bg-white p-4 shadow-md rounded-md cursor-pointer hover:scale-105 transition-all ease-in-out flex justify-center items-center">
          <img
            src="https://nepalijob.com/wp-content/uploads/2020/03/eSewa-Money-Transfer.png"
            class="w-40"
          />
        </div>

        <div class="bg-white p-4 shadow-md rounded-md cursor-pointer hover:scale-105 transition-all ease-in-out flex justify-center items-center">
          <img
            src="https://login.fonepay.com/assets/img/fonepay_payments_fatafat.png"
            class="w-40"
          />
        </div>

        <div class="bg-white p-4 shadow-md rounded-md cursor-pointer hover:scale-105 transition-all ease-in-out flex justify-center items-center">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo.png"
            class="w-40"
          />
        </div>
      </div>
    </>
  );
};

export default PaymentOptions;
