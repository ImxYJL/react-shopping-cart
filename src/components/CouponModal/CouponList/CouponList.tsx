import { COUPON_DISCOUNT_TYPE } from '../../../constants/constants';
import CouponItem from '../CouponItem/CouponItem';
import getCoupons from '../../../api/get/getCoupons';
import useFetch from '../../../hooks/useFetch';
import { selectedCoupons, modalDiscountState, shippingFeeState } from '../../../recoil/atoms';
import { priceInfoStore } from '../../../recoil/selectors';
import useCouponDiscountCalculator from '../../../hooks/coupons/useCouponDiscountCalculator';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect } from 'react';

const CouponList = () => {
  const { data } = useFetch(getCoupons);
  const [selected, setSelected] = useRecoilState(selectedCoupons);
  const [modalDiscountAmount, setModalDiscountAmount] = useRecoilState(modalDiscountState);
  const [shippingFeeInfo, setShippingFeeInfo] = useRecoilState(shippingFeeState);
  const { calculateBestDiscount } = useCouponDiscountCalculator(selected);
  const priceInfo = useRecoilValue(priceInfoStore);

  const isAppliedFreeShipping = () => {
    return selected.find(selectedItem => {
      return selectedItem.discountType === COUPON_DISCOUNT_TYPE.FREE_SHIPPING;
    });
  };

  useEffect(() => {
    if (isAppliedFreeShipping()) {
      setShippingFeeInfo({
        isFree: true,
        shipping: 0,
      });
    } else {
      setShippingFeeInfo({
        ...shippingFeeInfo,
        isFree: false,
      });
    }

    const bestDiscountAmount = calculateBestDiscount(priceInfo.order);
    setModalDiscountAmount(bestDiscountAmount);
  }, [selected]);

  return <>{data?.map(coupon => <CouponItem key={coupon.id} coupon={coupon} />)}</>;
};

export default CouponList;
