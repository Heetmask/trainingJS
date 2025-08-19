export const deliveryOptions = [{
   id: '1',
   deliveryDays: 7,
   priceCents: 0   
},{
    id: '2',
    deliveryDays: 3,
    priceCents: 499
},{
    id: '3',
    deliveryDays: 1,
    priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

        deliveryOptions.forEach((option) => {
            if (option.id === deliveryOptionId){
                deliveryOption = option;
            }
        });

        return deliveryOption || deliveryOptions[0];
}

export function calculateDeliveryDate(deliveryOption){
        let today = dayjs();
        let days = deliveryOption.deliveryDays;
        let count = 0;
        let deliveryDate;
        while(days){
            days--;
            count++;
            deliverydate = today.add(count,'days');

            if(deliveryDate === 'Saturday' || deliveryDate === 'Sunday'){
                count++;
            }
        }
        return deliveryDate;
}