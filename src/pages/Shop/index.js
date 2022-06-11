import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Input } from "components/Input";
import { Stack } from "components/Stack";
import { Button } from "components/Button";
import { Line } from "components/Line";
import { List } from "components/List";
import { Grid } from "components/Grid";
import { RatingBar } from "components/RatingBar";

const ShopPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-dmsans items-center justify-start mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Column className="w-[100%]">
            <Row className="bg-white_A700 items-center justify-start w-[100%]">
              <Text className="cursor-pointer hover:font-bold font-bold lg:mb-[16px] xl:mb-[18px] mb-[21px] 3xl:mb-[25px] 3xl:ml-[112px] lg:ml-[73px] xl:ml-[83px] ml-[94px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] text-deep_orange_A200 lg:text-fs30 xl:text-fs34 text-fs39 3xl:text-fs46 text-left tracking-ls1 w-[auto]">{`Dealerz.`}</Text>
              <Image
                src={"images/img_phone_3.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[24px] xl:mb-[28px] mb-[32px] 3xl:mb-[38px] lg:ml-[592px] xl:ml-[677px] ml-[762px] 3xl:ml-[914px] lg:mt-[28px] xl:mt-[32px] mt-[37px] 3xl:mt-[44px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Phone"
              />
              <Text className="cursor-pointer hover:font-bold font-medium lg:mb-[27px] xl:mb-[31px] mb-[35px] 3xl:mb-[42px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mt-[30px] xl:mt-[34px] mt-[39px] 3xl:mt-[46px] hover:text-deep_orange_A200 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Call Center`}</Text>
              <Image
                src={"images/img_truckdelivery_3.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[24px] xl:mb-[28px] mb-[32px] 3xl:mb-[38px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:mt-[28px] xl:mt-[32px] mt-[37px] 3xl:mt-[44px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="TruckDelivery"
              />
              <Text className="cursor-pointer hover:font-bold font-medium lg:mb-[27px] xl:mb-[31px] mb-[35px] 3xl:mb-[42px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mt-[30px] xl:mt-[34px] mt-[39px] 3xl:mt-[46px] hover:text-deep_orange_A200 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Shipping & Returns`}</Text>
            </Row>
            <Row className="items-start justify-start lg:my-[21px] xl:my-[24px] my-[28px] 3xl:my-[33px] w-[100%]">
              <Row className="items-center justify-center mb-[18px] 3xl:mb-[21px] 3xl:ml-[112px] lg:ml-[73px] xl:ml-[83px] ml-[94px] mt-[19px] 3xl:mt-[22px] lg:my-[14px] xl:my-[16px] w-[18%]">
                <Text className="font-medium lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Shop`}</Text>
                <Text className="font-medium lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Promo`}</Text>
                <Text className="font-medium lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`About`}</Text>
                <Text className="font-medium lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Blog`}</Text>
              </Row>
              <div className="3xl:ml-[110px] bg-transparent border-0 lg:ml-[71px] ml-[92px] w-[40%] xl:ml-[81px] input-wrap">
                <Image
                  src={"images/img_vector_3.svg"}
                  className="absolute h-[19.75px] right-[22.299988px] bg-transparent border-0 lg:h-[16px] lg:right-[17px] xl:h-[18px] xl:right-[19px] 2xl:h-[20px] 2xl:right-[22px] 3xl:h-[24px] 3xl:right-[26px] my-[auto] inset-y-[0]"
                  alt="Vector"
                />
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border-0 font-normal not-italic lg:pl-[23px] xl:pl-[26px] pl-[30px] 3xl:pl-[36px] 3xl:pr-[100px] lg:pr-[65px] xl:pr-[74px] pr-[84.09998799999995px] 2xl:pr-[84px] lg:py-[15px] xl:py-[17px] py-[20px] 3xl:py-[24px] rounded-radius4 placeholder:text-bluegray_300 text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[100%]"
                  name="Search what you"
                  placeholder={`Search what you need`}
                ></Input>
              </div>
              <Row className="items-start justify-center xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[49px] xl:ml-[56px] ml-[64px] 3xl:ml-[76px] w-[17%]">
                <Image
                  src={"images/img_heart_3.svg"}
                  className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                  alt="Heart"
                />
                <Stack className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] w-[19%]">
                  <Image
                    src={"images/img_shoppingcart_3.svg"}
                    className="absolute bottom-[0] lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] left-[0] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                    alt="ShoppingCart"
                  />
                  <Column className="absolute bg-deep_orange_A200 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-start right-[0] rounded-radius50 top-[0] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                    <Text className="font-medium xl:mb-[1px] lg:mb-[1px] mb-[2px] xl:mt-[2px] lg:mt-[2px] mt-[3px] mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[auto]">{`3`}</Text>
                  </Column>
                </Stack>
                <Image
                  src={"images/img_userprofile2_3.svg"}
                  className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[20px] xl:ml-[23px] ml-[26px] 3xl:ml-[31px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                  alt="UserProfile2"
                />
                <Image
                  src={"images/img_notificationbe_3.svg"}
                  className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                  alt="NotificationBe"
                />
              </Row>
            </Row>
          </Column>
        </header>
        <Stack className="bg-white_A700 lg:h-[399px] xl:h-[456px] h-[512px] 2xl:h-[513px] 3xl:h-[615px] w-[100%]">
          <Image
            src={"images/img_maskgroup_2.svg"}
            className="absolute lg:h-[399px] xl:h-[456px] h-[512px] 2xl:h-[513px] 3xl:h-[615px] inset-[0] object-cover w-[100%]"
            alt="MaskGroup"
          />
          <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[7%] w-[43%]">
            <Text className="font-bold leading-lh12000 mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs49 xl:text-fs56 text-fs64 3xl:text-fs76 text-gray_900 text-left tracking-ls1 w-[97%]">{`Home Shopping, Your Choice!`}</Text>
            <Text className="font-normal leading-lh12500 lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[100%]">
              {
                <>
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, `}
                  <br />
                  {`sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
                </>
              }
            </Text>
          </Column>
        </Stack>
        <Row className="items-start justify-start xl:mt-[106px] mt-[120px] 3xl:mt-[144px] lg:mt-[93px] w-[100%]">
          <Column className="items-start justify-start lg:mb-[283px] xl:mb-[323px] mb-[364px] 3xl:mb-[437px] ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] w-[21%]">
            <div className="w-[100%] input-wrap">
              <Image
                src={"images/img_vector_4.svg"}
                className="absolute h-[19.75px] right-[21.299988px] lg:h-[16px] lg:right-[16px] xl:h-[18px] xl:right-[18px] 2xl:h-[20px] 2xl:right-[21px] 3xl:h-[24px] 3xl:right-[25px] my-[auto] inset-y-[0]"
                alt="Vector"
              />
              <Button className="border border-gray_900 border-solid font-normal not-italic lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[63px] xl:pr-[73px] pr-[82.09998800000001px] 2xl:pr-[82px] 3xl:pr-[98px] lg:py-[15px] xl:py-[17px] py-[20px] 3xl:py-[24px] rounded-radius4 text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[100%]">{`Search products`}</Button>
            </div>
            <Column className="lg:mt-[51px] xl:mt-[58px] mt-[66px] 3xl:mt-[79px] w-[100%]">
              <Column className="w-[100%]">
                <Row className="items-start justify-between w-[100%]">
                  <Text className="font-bold lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[auto]">{`Price`}</Text>
                  <Image
                    src={"images/img_filter.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="Filter"
                  />
                </Row>
                <Column className="items-center justify-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <Row className="lg:gap-[217px] xl:gap-[249px] gap-[280px] 3xl:gap-[336px] grid grid-cols-2 items-start justify-between w-[100%]">
                    <div className="bg-gray_301 border border-gray_301 border-solid 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] mb-[1px] rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"></div>
                    <div className="bg-gray_301 border border-gray_301 border-solid 3xl:h-[10px] lg:h-[7px] h-[8px] 2xl:h-[9px] mt-[1px] rounded-radius50 lg:w-[6px] xl:w-[7px] w-[8px] 3xl:w-[9px]"></div>
                  </Row>
                  <Line className="bg-gray_301 h-[1px] xl:mb-[2px] lg:mb-[2px] mb-[3px] xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:mr-[5px] xl:mr-[6px] mr-[7px] 3xl:mr-[8px] w-[96%]" />
                </Column>
                <Row className="items-center justify-between lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                  <Text className="font-normal not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Range`}</Text>
                  <Text className="font-normal not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-right tracking-ls1 w-[auto]">{`$5-$20`}</Text>
                </Row>
              </Column>
              <Column className="items-start justify-start lg:mt-[56px] xl:mt-[64px] mt-[72px] 3xl:mt-[86px] w-[100%]">
                <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[auto]">{`Product Categories`}</Text>
                <Column className="lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Text className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Coat and Jackets`}</Text>
                    <Image
                      src={"images/img_arrowchevronr.svg"}
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[2px] lg:mb-[2px] mb-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="ArrowChevronR"
                    />
                  </Row>
                  <Row className="items-start justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                    <Text className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Dressses`}</Text>
                    <Image
                      src={"images/img_arrowchevronr_1.svg"}
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[2px] lg:mb-[2px] mb-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="ArrowChevronR"
                    />
                  </Row>
                  <Row className="items-start justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                    <Text className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Playsuit`}</Text>
                    <Image
                      src={"images/img_arrowchevronr_2.svg"}
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[2px] lg:mb-[2px] mb-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="ArrowChevronR"
                    />
                  </Row>
                  <Row className="items-start justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                    <Text className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Short`}</Text>
                    <Image
                      src={"images/img_arrowchevronr_3.svg"}
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[2px] lg:mb-[2px] mb-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="ArrowChevronR"
                    />
                  </Row>
                  <Row className="items-start justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                    <Text className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Top`}</Text>
                    <Image
                      src={"images/img_arrowchevronr_4.svg"}
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[2px] lg:mb-[2px] mb-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="ArrowChevronR"
                    />
                  </Row>
                  <Row className="items-start justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                    <Text className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Bottoms`}</Text>
                    <Image
                      src={"images/img_arrowchevronr_5.svg"}
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[2px] lg:mb-[2px] mb-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="ArrowChevronR"
                    />
                  </Row>
                </Column>
              </Column>
            </Column>
            <Column className="items-start justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[56px] xl:mt-[64px] mt-[72px] 3xl:mt-[86px] w-[79%]">
              <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[auto]">{`Featured Product`}</Text>
              <Column className="lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]">
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="items-center justify-between xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                    <div className="bg-gray_300 lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius8 lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"></div>
                    <Column className="items-start lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[55%]">
                      <Column className="w-[100%]">
                        <Text className="font-bold mx-[auto] text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 tracking-ls1 w-[auto]">{`Tropical Playsuit`}</Text>
                      </Column>
                      <Text className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] text-deep_orange_A200 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1 w-[auto]">{`$100`}</Text>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                    <div className="bg-gray_300 lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius8 lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"></div>
                    <Column className="items-start lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[55%]">
                      <Column className="w-[100%]">
                        <Text className="font-bold mx-[auto] text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 tracking-ls1 w-[auto]">{`Tropical Playsuit`}</Text>
                      </Column>
                      <Text className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] text-deep_orange_A200 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1 w-[auto]">{`$100`}</Text>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                    <div className="bg-gray_300 lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius8 lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"></div>
                    <Column className="items-start lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[55%]">
                      <Column className="w-[100%]">
                        <Text className="font-bold mx-[auto] text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 tracking-ls1 w-[auto]">{`Tropical Playsuit`}</Text>
                      </Column>
                      <Text className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] text-deep_orange_A200 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1 w-[auto]">{`$100`}</Text>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                    <div className="bg-gray_300 lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius8 lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"></div>
                    <Column className="items-start lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[55%]">
                      <Column className="w-[100%]">
                        <Text className="font-bold mx-[auto] text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 tracking-ls1 w-[auto]">{`Tropical Playsuit`}</Text>
                      </Column>
                      <Text className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] text-deep_orange_A200 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1 w-[auto]">{`$100`}</Text>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                    <div className="bg-gray_300 lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius8 lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"></div>
                    <Column className="items-start lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[55%]">
                      <Column className="w-[100%]">
                        <Text className="font-bold mx-[auto] text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 tracking-ls1 w-[auto]">{`Tropical Playsuit`}</Text>
                      </Column>
                      <Text className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] text-deep_orange_A200 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1 w-[auto]">{`$100`}</Text>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                    <div className="bg-gray_300 lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius8 lg:w-[62px] xl:w-[71px] w-[80px] 3xl:w-[96px]"></div>
                    <Column className="items-start lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[55%]">
                      <Column className="w-[100%]">
                        <Text className="font-bold mx-[auto] text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 tracking-ls1 w-[auto]">{`Tropical Playsuit`}</Text>
                      </Column>
                      <Text className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] text-deep_orange_A200 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1 w-[auto]">{`$100`}</Text>
                    </Column>
                  </Row>
                </List>
              </Column>
            </Column>
          </Column>
          <Column className="items-center justify-start lg:ml-[55px] xl:ml-[63px] ml-[71px] 3xl:ml-[85px] w-[60%]">
            <Grid className="lg:gap-[12px] xl:gap-[14px] gap-[16px] 3xl:gap-[19px] grid grid-cols-2 w-[100%]">
              <Stack className="lg:h-[292px] xl:h-[334px] h-[375px] 2xl:h-[376px] 3xl:h-[451px] w-[100%]">
                <Image
                  src={"images/img_image_10.svg"}
                  className="absolute lg:h-[292px] xl:h-[334px] h-[375px] 2xl:h-[376px] 3xl:h-[451px] inset-[0] object-cover rounded-radius6 w-[100%]"
                  alt="Image"
                />
                <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[2%] w-[74%]">
                  <Stack className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[9%]">
                    <Image
                      src={"images/img_misctag.svg"}
                      className="absolute lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] inset-[0] object-cover w-[100%]"
                      alt="MiscTag"
                    />
                    <Image
                      src={"images/img_heart_4.svg"}
                      className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="Heart"
                    />
                  </Stack>
                  <Column className="lg:mt-[164px] xl:mt-[188px] mt-[212px] 3xl:mt-[254px] w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 tracking-ls1 w-[auto]">{`Urbano Jacket`}</Text>
                      <RatingBar
                        className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[52px] xl:mx-[60px] mx-[68px] 3xl:mx-[81px]"
                        value={5}
                        starCount={5}
                        activeColor="var(--deep_orange_A200)"
                        size={((window.innerWidth - 15) * 16) / 1440}
                      ></RatingBar>
                      <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[10px] xl:mx-[12px] mx-[14px] 3xl:mx-[16px] not-italic text-bluegray_300 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[auto]">{`watchmenow`}</Text>
                      <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] mx-[100px] 3xl:mx-[120px] lg:mx-[77px] xl:mx-[88px] text-deep_orange_A201 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-right tracking-ls1 w-[auto]">{`$99`}</Text>
                    </Column>
                  </Column>
                </Column>
              </Stack>
              <Stack className="lg:h-[292px] xl:h-[334px] h-[375px] 2xl:h-[376px] 3xl:h-[451px] w-[100%]">
                <Image
                  src={"images/img_image_11.svg"}
                  className="absolute lg:h-[292px] xl:h-[334px] h-[375px] 2xl:h-[376px] 3xl:h-[451px] inset-[0] object-cover rounded-radius6 w-[100%]"
                  alt="Image"
                />
                <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[2%] w-[74%]">
                  <Stack className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[9%]">
                    <Image
                      src={"images/img_misctag_1.svg"}
                      className="absolute lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] inset-[0] object-cover w-[100%]"
                      alt="MiscTag"
                    />
                    <Image
                      src={"images/img_heart_5.svg"}
                      className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="Heart"
                    />
                  </Stack>
                  <Column className="lg:mt-[164px] xl:mt-[188px] mt-[212px] 3xl:mt-[254px] w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 tracking-ls1 w-[auto]">{`Urbano Jacket`}</Text>
                      <RatingBar
                        className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[52px] xl:mx-[60px] mx-[68px] 3xl:mx-[81px]"
                        value={5}
                        starCount={5}
                        activeColor="var(--deep_orange_A200)"
                        size={((window.innerWidth - 15) * 16) / 1440}
                      ></RatingBar>
                      <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[10px] xl:mx-[12px] mx-[14px] 3xl:mx-[16px] not-italic text-bluegray_300 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[auto]">{`watchmenow`}</Text>
                      <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] mx-[100px] 3xl:mx-[120px] lg:mx-[77px] xl:mx-[88px] text-deep_orange_A201 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-right tracking-ls1 w-[auto]">{`$99`}</Text>
                    </Column>
                  </Column>
                </Column>
              </Stack>
              <Stack className="lg:h-[292px] xl:h-[334px] h-[375px] 2xl:h-[376px] 3xl:h-[451px] w-[100%]">
                <Image
                  src={"images/img_image_12.svg"}
                  className="absolute lg:h-[292px] xl:h-[334px] h-[375px] 2xl:h-[376px] 3xl:h-[451px] inset-[0] object-cover rounded-radius6 w-[100%]"
                  alt="Image"
                />
                <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[2%] w-[74%]">
                  <Stack className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[9%]">
                    <Image
                      src={"images/img_misctag_2.svg"}
                      className="absolute lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] inset-[0] object-cover w-[100%]"
                      alt="MiscTag"
                    />
                    <Image
                      src={"images/img_heart_6.svg"}
                      className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="Heart"
                    />
                  </Stack>
                  <Column className="lg:mt-[164px] xl:mt-[188px] mt-[212px] 3xl:mt-[254px] w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 tracking-ls1 w-[auto]">{`Urbano Jacket`}</Text>
                      <RatingBar
                        className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[52px] xl:mx-[60px] mx-[68px] 3xl:mx-[81px]"
                        value={5}
                        starCount={5}
                        activeColor="var(--deep_orange_A200)"
                        size={((window.innerWidth - 15) * 16) / 1440}
                      ></RatingBar>
                      <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[10px] xl:mx-[12px] mx-[14px] 3xl:mx-[16px] not-italic text-bluegray_300 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[auto]">{`watchmenow`}</Text>
                      <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] mx-[100px] 3xl:mx-[120px] lg:mx-[77px] xl:mx-[88px] text-deep_orange_A201 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-right tracking-ls1 w-[auto]">{`$99`}</Text>
                    </Column>
                  </Column>
                </Column>
              </Stack>
              <Stack className="lg:h-[292px] xl:h-[334px] h-[375px] 2xl:h-[376px] 3xl:h-[451px] w-[100%]">
                <Image
                  src={"images/img_image_13.svg"}
                  className="absolute lg:h-[292px] xl:h-[334px] h-[375px] 2xl:h-[376px] 3xl:h-[451px] inset-[0] object-cover rounded-radius6 w-[100%]"
                  alt="Image"
                />
                <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[2%] w-[74%]">
                  <Stack className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[9%]">
                    <Image
                      src={"images/img_misctag_3.svg"}
                      className="absolute lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] inset-[0] object-cover w-[100%]"
                      alt="MiscTag"
                    />
                    <Image
                      src={"images/img_heart_7.svg"}
                      className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="Heart"
                    />
                  </Stack>
                  <Column className="lg:mt-[164px] xl:mt-[188px] mt-[212px] 3xl:mt-[254px] w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 tracking-ls1 w-[auto]">{`Urbano Jacket`}</Text>
                      <RatingBar
                        className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[52px] xl:mx-[60px] mx-[68px] 3xl:mx-[81px]"
                        value={5}
                        starCount={5}
                        activeColor="var(--deep_orange_A200)"
                        size={((window.innerWidth - 15) * 16) / 1440}
                      ></RatingBar>
                      <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[10px] xl:mx-[12px] mx-[14px] 3xl:mx-[16px] not-italic text-bluegray_300 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[auto]">{`watchmenow`}</Text>
                      <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] mx-[100px] 3xl:mx-[120px] lg:mx-[77px] xl:mx-[88px] text-deep_orange_A201 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-right tracking-ls1 w-[auto]">{`$99`}</Text>
                    </Column>
                  </Column>
                </Column>
              </Stack>
              <Stack className="lg:h-[292px] xl:h-[334px] h-[375px] 2xl:h-[376px] 3xl:h-[451px] w-[100%]">
                <Image
                  src={"images/img_image_14.svg"}
                  className="absolute lg:h-[292px] xl:h-[334px] h-[375px] 2xl:h-[376px] 3xl:h-[451px] inset-[0] object-cover rounded-radius6 w-[100%]"
                  alt="Image"
                />
                <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[2%] w-[74%]">
                  <Stack className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[9%]">
                    <Image
                      src={"images/img_misctag_4.svg"}
                      className="absolute lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] inset-[0] object-cover w-[100%]"
                      alt="MiscTag"
                    />
                    <Image
                      src={"images/img_heart_8.svg"}
                      className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="Heart"
                    />
                  </Stack>
                  <Column className="lg:mt-[164px] xl:mt-[188px] mt-[212px] 3xl:mt-[254px] w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 tracking-ls1 w-[auto]">{`Urbano Jacket`}</Text>
                      <RatingBar
                        className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[52px] xl:mx-[60px] mx-[68px] 3xl:mx-[81px]"
                        value={5}
                        starCount={5}
                        activeColor="var(--deep_orange_A200)"
                        size={((window.innerWidth - 15) * 16) / 1440}
                      ></RatingBar>
                      <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[10px] xl:mx-[12px] mx-[14px] 3xl:mx-[16px] not-italic text-bluegray_300 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[auto]">{`watchmenow`}</Text>
                      <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] mx-[100px] 3xl:mx-[120px] lg:mx-[77px] xl:mx-[88px] text-deep_orange_A201 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-right tracking-ls1 w-[auto]">{`$99`}</Text>
                    </Column>
                  </Column>
                </Column>
              </Stack>
              <Stack className="lg:h-[292px] xl:h-[334px] h-[375px] 2xl:h-[376px] 3xl:h-[451px] w-[100%]">
                <Image
                  src={"images/img_image_15.svg"}
                  className="absolute lg:h-[292px] xl:h-[334px] h-[375px] 2xl:h-[376px] 3xl:h-[451px] inset-[0] object-cover rounded-radius6 w-[100%]"
                  alt="Image"
                />
                <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[2%] w-[74%]">
                  <Stack className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[9%]">
                    <Image
                      src={"images/img_misctag_5.svg"}
                      className="absolute lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] inset-[0] object-cover w-[100%]"
                      alt="MiscTag"
                    />
                    <Image
                      src={"images/img_heart_9.svg"}
                      className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="Heart"
                    />
                  </Stack>
                  <Column className="lg:mt-[164px] xl:mt-[188px] mt-[212px] 3xl:mt-[254px] w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 tracking-ls1 w-[auto]">{`Urbano Jacket`}</Text>
                      <RatingBar
                        className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[52px] xl:mx-[60px] mx-[68px] 3xl:mx-[81px]"
                        value={5}
                        starCount={5}
                        activeColor="var(--deep_orange_A200)"
                        size={((window.innerWidth - 15) * 16) / 1440}
                      ></RatingBar>
                      <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[10px] xl:mx-[12px] mx-[14px] 3xl:mx-[16px] not-italic text-bluegray_300 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[auto]">{`watchmenow`}</Text>
                      <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] mx-[100px] 3xl:mx-[120px] lg:mx-[77px] xl:mx-[88px] text-deep_orange_A201 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-right tracking-ls1 w-[auto]">{`$99`}</Text>
                    </Column>
                  </Column>
                </Column>
              </Stack>
              <Stack className="lg:h-[292px] xl:h-[334px] h-[375px] 2xl:h-[376px] 3xl:h-[451px] w-[100%]">
                <Image
                  src={"images/img_image_16.svg"}
                  className="absolute lg:h-[292px] xl:h-[334px] h-[375px] 2xl:h-[376px] 3xl:h-[451px] inset-[0] object-cover rounded-radius6 w-[100%]"
                  alt="Image"
                />
                <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[2%] w-[74%]">
                  <Stack className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[9%]">
                    <Image
                      src={"images/img_misctag_6.svg"}
                      className="absolute lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] inset-[0] object-cover w-[100%]"
                      alt="MiscTag"
                    />
                    <Image
                      src={"images/img_heart_10.svg"}
                      className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="Heart"
                    />
                  </Stack>
                  <Column className="lg:mt-[164px] xl:mt-[188px] mt-[212px] 3xl:mt-[254px] w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 tracking-ls1 w-[auto]">{`Urbano Jacket`}</Text>
                      <RatingBar
                        className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[52px] xl:mx-[60px] mx-[68px] 3xl:mx-[81px]"
                        value={5}
                        starCount={5}
                        activeColor="var(--deep_orange_A200)"
                        size={((window.innerWidth - 15) * 16) / 1440}
                      ></RatingBar>
                      <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[10px] xl:mx-[12px] mx-[14px] 3xl:mx-[16px] not-italic text-bluegray_300 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[auto]">{`watchmenow`}</Text>
                      <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] mx-[100px] 3xl:mx-[120px] lg:mx-[77px] xl:mx-[88px] text-deep_orange_A201 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-right tracking-ls1 w-[auto]">{`$99`}</Text>
                    </Column>
                  </Column>
                </Column>
              </Stack>
              <Stack className="lg:h-[292px] xl:h-[334px] h-[375px] 2xl:h-[376px] 3xl:h-[451px] w-[100%]">
                <Image
                  src={"images/img_image_17.svg"}
                  className="absolute lg:h-[292px] xl:h-[334px] h-[375px] 2xl:h-[376px] 3xl:h-[451px] inset-[0] object-cover rounded-radius6 w-[100%]"
                  alt="Image"
                />
                <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[2%] w-[74%]">
                  <Stack className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[9%]">
                    <Image
                      src={"images/img_misctag_7.svg"}
                      className="absolute lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] inset-[0] object-cover w-[100%]"
                      alt="MiscTag"
                    />
                    <Image
                      src={"images/img_heart_11.svg"}
                      className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      alt="Heart"
                    />
                  </Stack>
                  <Column className="lg:mt-[164px] xl:mt-[188px] mt-[212px] 3xl:mt-[254px] w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 tracking-ls1 w-[auto]">{`Urbano Jacket`}</Text>
                      <RatingBar
                        className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[52px] xl:mx-[60px] mx-[68px] 3xl:mx-[81px]"
                        value={5}
                        starCount={5}
                        activeColor="var(--deep_orange_A200)"
                        size={((window.innerWidth - 15) * 16) / 1440}
                      ></RatingBar>
                      <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[10px] xl:mx-[12px] mx-[14px] 3xl:mx-[16px] not-italic text-bluegray_300 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[auto]">{`watchmenow`}</Text>
                      <Text className="font-medium lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] mx-[100px] 3xl:mx-[120px] lg:mx-[77px] xl:mx-[88px] text-deep_orange_A201 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-right tracking-ls1 w-[auto]">{`$99`}</Text>
                    </Column>
                  </Column>
                </Column>
              </Stack>
            </Grid>
            <Button className="bg-deep_orange_A200 font-bold lg:mt-[56px] xl:mt-[64px] mt-[72px] 3xl:mt-[86px] mx-[auto] lg:py-[15px] xl:py-[17px] py-[20.1px] 2xl:py-[20px] 3xl:py-[24px] rounded-radius8 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 tracking-ls1 w-[14%]">{`See More`}</Button>
          </Column>
        </Row>
        <Column className="bg-white_A700 items-center justify-center lg:mt-[124px] xl:mt-[142px] mt-[160px] 3xl:mt-[192px] mx-[auto] w-[85%]">
          <Text className="font-bold 3xl:mt-[112px] lg:mt-[73px] xl:mt-[83px] mt-[94px] mx-[auto] text-center lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 tracking-ls1 w-[auto]">{`Join Our News Letters`}</Text>
          <Text className="font-normal leading-lh12500 lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] mx-[auto] not-italic text-bluegray_300 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 tracking-ls1 w-[49%]">{`Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster`}</Text>
          <Row className="bg-gray_100 items-center justify-between lg:mb-[62px] xl:mb-[71px] mb-[80px] 3xl:mb-[96px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] mx-[auto] rounded-radius8 w-[66%]">
            <Text className="font-normal lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:my-[17px] xl:my-[19px] my-[22px] 3xl:my-[26px] not-italic text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[auto]">{`Insert your mail here`}</Text>
            <Image
              src={"images/img_button_12.svg"}
              className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] 3xl:mr-[10px] lg:mr-[7px] xl:mr-[8px] mr-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain rounded-radius8 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
              alt="Button"
            />
          </Row>
        </Column>
        <footer className="lg:mt-[124px] xl:mt-[142px] mt-[160px] 3xl:mt-[192px] w-[100%]">
          <Row className="bg-white_A700 items-center justify-start w-[100%]">
            <div className="bg-gray_300 lg:h-[280px] xl:h-[321px] h-[360px] 2xl:h-[361px] 3xl:h-[433px] ml-[104px] 3xl:ml-[124px] lg:ml-[80px] xl:ml-[92px] lg:my-[45px] xl:my-[51px] my-[58px] 3xl:my-[69px] lg:w-[280px] xl:w-[320px] w-[360px] 3xl:w-[432px]"></div>
            <Column className="items-start lg:mb-[45px] xl:mb-[51px] mb-[58px] 3xl:mb-[69px] lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] lg:mt-[53px] xl:mt-[61px] mt-[69px] 3xl:mt-[82px] w-[57%]">
              <Column className="w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text className="font-bold text-deep_orange_A200 lg:text-fs49 xl:text-fs56 text-fs64 3xl:text-fs76 text-left tracking-ls1 w-[auto]">{`Dealerz.`}</Text>
                  <Row className="font-merriweather lg:gap-[12px] xl:gap-[14px] gap-[16px] 3xl:gap-[19px] grid grid-cols-4 items-center justify-between mb-[18px] 3xl:mb-[21px] mt-[19px] 3xl:mt-[22px] lg:my-[14px] xl:my-[16px] w-[26%]">
                    <Column className="bg-deep_orange_A200 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
                      <Text className="font-bold mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[auto]">{`Yt`}</Text>
                    </Column>
                    <Column className="bg-deep_orange_A200 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
                      <Text className="font-bold mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[auto]">{`Fb`}</Text>
                    </Column>
                    <Column className="bg-deep_orange_A200 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
                      <Text className="font-bold mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:mr-[4px] xl:mr-[5px] mr-[6px] 3xl:mr-[7px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[auto]">{`Tw`}</Text>
                    </Column>
                    <Column className="bg-deep_orange_A200 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
                      <Text className="font-bold mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[auto]">{`Ig`}</Text>
                    </Column>
                  </Row>
                </Row>
              </Column>
              <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Privacy Policy`}</Text>
              <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Terms and Condition`}</Text>
              <Text className="font-bold xl:ml-[2px] lg:ml-[2px] ml-[3px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[123px] xl:mt-[141px] mt-[159px] 3xl:mt-[190px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`@2020 TanahAir Studio. All rights reserved.`}</Text>
            </Column>
          </Row>
        </footer>
      </Column>
    </>
  );
};

export default ShopPage;
