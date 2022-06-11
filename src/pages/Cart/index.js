import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Input } from "components/Input";
import { Stack } from "components/Stack";
import { List } from "components/List";
import { Button } from "components/Button";
import { Line } from "components/Line";
import { PagerIndicator } from "components/PagerIndicator";

const CartPage = () => {
  const navigate = useNavigate();

  const handleNavigate1 = () => navigate("/gallery");

  return (
    <>
      <Column className="bg-gray_100 font-dmsans items-center justify-start mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Column className="w-[100%]">
            <Row className="bg-white_A700 items-center justify-start w-[100%]">
              <Text className="cursor-pointer hover:font-bold font-bold lg:mb-[16px] xl:mb-[18px] mb-[21px] 3xl:mb-[25px] 3xl:ml-[112px] lg:ml-[73px] xl:ml-[83px] ml-[94px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] text-deep_orange_A200 lg:text-fs30 xl:text-fs34 text-fs39 3xl:text-fs46 text-left tracking-ls1 w-[auto]">{`Dealerz.`}</Text>
              <Image
                src={"images/img_phone.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[24px] xl:mb-[28px] mb-[32px] 3xl:mb-[38px] lg:ml-[592px] xl:ml-[677px] ml-[762px] 3xl:ml-[914px] lg:mt-[28px] xl:mt-[32px] mt-[37px] 3xl:mt-[44px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Phone"
              />
              <Text className="cursor-pointer hover:font-bold font-medium lg:mb-[27px] xl:mb-[31px] mb-[35px] 3xl:mb-[42px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mt-[30px] xl:mt-[34px] mt-[39px] 3xl:mt-[46px] hover:text-deep_orange_A200 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Call Center`}</Text>
              <Image
                src={"images/img_truckdelivery.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[24px] xl:mb-[28px] mb-[32px] 3xl:mb-[38px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:mt-[28px] xl:mt-[32px] mt-[37px] 3xl:mt-[44px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="TruckDelivery"
              />
              <Text className="cursor-pointer hover:font-bold font-medium lg:mb-[27px] xl:mb-[31px] mb-[35px] 3xl:mb-[42px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mt-[30px] xl:mt-[34px] mt-[39px] 3xl:mt-[46px] hover:text-deep_orange_A200 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Shipping & Returns`}</Text>
            </Row>
            <Row className="items-start justify-start lg:my-[21px] xl:my-[24px] my-[28px] 3xl:my-[33px] w-[100%]">
              <Row className="items-center justify-center mb-[18px] 3xl:mb-[21px] 3xl:ml-[112px] lg:ml-[73px] xl:ml-[83px] ml-[94px] mt-[19px] 3xl:mt-[22px] lg:my-[14px] xl:my-[16px] w-[18%]">
                <Text
                  className="common-pointer font-medium lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]"
                  onClick={handleNavigate1}
                >{`Shop`}</Text>
                <Text className="font-medium lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Promo`}</Text>
                <Text className="font-medium lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`About`}</Text>
                <Text className="font-medium lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Blog`}</Text>
              </Row>
              <div className="3xl:ml-[110px] bg-transparent border-0 lg:ml-[71px] ml-[92px] w-[40%] xl:ml-[81px] input-wrap">
                <Image
                  src={"images/img_vector.svg"}
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
                  src={"images/img_heart.svg"}
                  className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                  alt="Heart"
                />
                <Stack className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] w-[19%]">
                  <Image
                    src={"images/img_shoppingcart.svg"}
                    className="absolute bottom-[0] lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] left-[0] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                    alt="ShoppingCart"
                  />
                  <Column className="absolute bg-deep_orange_A200 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-start right-[0] rounded-radius50 top-[0] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                    <Text className="font-medium xl:mb-[1px] lg:mb-[1px] mb-[2px] xl:mt-[2px] lg:mt-[2px] mt-[3px] mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[auto]">{`3`}</Text>
                  </Column>
                </Stack>
                <Image
                  src={"images/img_userprofile2.svg"}
                  className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[20px] xl:ml-[23px] ml-[26px] 3xl:ml-[31px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                  alt="UserProfile2"
                />
                <Image
                  src={"images/img_notificationbe.svg"}
                  className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                  alt="NotificationBe"
                />
              </Row>
            </Row>
          </Column>
        </header>
        <Stack className="bg-white_A700 lg:h-[399px] xl:h-[456px] h-[512px] 2xl:h-[513px] 3xl:h-[615px] w-[100%]">
          <Image
            src={"images/img_maskgroup.svg"}
            className="absolute lg:h-[399px] xl:h-[456px] h-[512px] 2xl:h-[513px] 3xl:h-[615px] inset-[0] object-cover w-[100%]"
            alt="MaskGroup"
          />
          <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[7%] w-[43%]">
            <Text className="font-bold leading-lh12000 mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs49 xl:text-fs56 text-fs64 3xl:text-fs76 text-gray_900 text-left tracking-ls1 w-[97%]">
              {
                <>
                  {`Our Gallery, `}
                  <br />
                  {`Your Dreams!`}
                </>
              }
            </Text>
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
        <Row className="items-start justify-evenly xl:mt-[106px] mt-[120px] 3xl:mt-[144px] lg:mt-[93px] w-[100%]">
          <Column className="items-start justify-start w-[43%]">
            <Row className="items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[71%]">
              <Text className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`1. Shopping Cart`}</Text>
              <Text className="font-bold lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[auto]">{`2. Checkout`}</Text>
              <Text className="font-bold lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[auto]">{`3. Order Succesed`}</Text>
            </Row>
            <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left tracking-ls1 w-[auto]">{`My Cart`}</Text>
            <Column className="lg:mt-[51px] xl:mt-[58px] mt-[66px] 3xl:mt-[79px] w-[100%]">
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Row className="items-center justify-between lg:my-[21px] xl:my-[24px] my-[28px] 3xl:my-[33px] w-[100%]">
                  <div className="bg-gray_300 lg:h-[156px] xl:h-[178px] h-[200px] 2xl:h-[201px] 3xl:h-[241px] rounded-radius4 lg:w-[155px] xl:w-[177px] w-[200px] 3xl:w-[240px]"></div>
                  <Column className="items-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[62%]">
                    <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[auto]">{`Tropical Playsuit`}</Text>
                    <Column className="lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="font-bold xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Size               :`}</Text>
                        <Text className="font-bold xl:mr-[107px] mr-[121px] 3xl:mr-[145px] lg:mr-[94px] xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-right tracking-ls1 w-[auto]">{`M`}</Text>
                      </Row>
                      <Row className="items-center justify-start xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
                        <Text className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Quantity     :`}</Text>
                        <Text className="font-bold lg:ml-[56px] xl:ml-[64px] ml-[72px] 3xl:ml-[86px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-right tracking-ls1 w-[auto]">{`-         5         +`}</Text>
                      </Row>
                      <Row className="items-end justify-start lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] w-[100%]">
                        <Text className="font-bold xl:mb-[2px] lg:mb-[2px] mb-[3px] text-deep_orange_A200 lg:text-fs48 xl:text-fs55 text-fs62 3xl:text-fs74 text-left tracking-ls1 w-[auto]">{`$99`}</Text>
                        <Image
                          src={"images/img_button.svg"}
                          className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[50px] xl:ml-[57px] ml-[65px] 3xl:ml-[78px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] object-contain rounded-radius8 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                          alt="Button"
                        />
                        <Row className="items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] outline outline-[1px] outline-deep_orange_A200 rounded-radius8 w-[37%]">
                          <Text className="font-bold lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] text-deep_orange_A200 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[auto]">{`Wishlist`}</Text>
                          <Image
                            src={"images/img_group18.svg"}
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mr-[18px] xl:mr-[21px] mr-[24px] 3xl:mr-[28px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="Group18"
                          />
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:my-[21px] xl:my-[24px] my-[28px] 3xl:my-[33px] w-[100%]">
                  <div className="bg-gray_300 lg:h-[156px] xl:h-[178px] h-[200px] 2xl:h-[201px] 3xl:h-[241px] rounded-radius4 lg:w-[155px] xl:w-[177px] w-[200px] 3xl:w-[240px]"></div>
                  <Column className="items-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[62%]">
                    <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[auto]">{`Tropical Playsuit`}</Text>
                    <Column className="lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="font-bold xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Size               :`}</Text>
                        <Text className="font-bold xl:mr-[107px] mr-[121px] 3xl:mr-[145px] lg:mr-[94px] xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-right tracking-ls1 w-[auto]">{`M`}</Text>
                      </Row>
                      <Row className="items-center justify-start xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
                        <Text className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Quantity     :`}</Text>
                        <Text className="font-bold lg:ml-[56px] xl:ml-[64px] ml-[72px] 3xl:ml-[86px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-right tracking-ls1 w-[auto]">{`-         5         +`}</Text>
                      </Row>
                      <Row className="items-end justify-start lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] w-[100%]">
                        <Text className="font-bold xl:mb-[2px] lg:mb-[2px] mb-[3px] text-deep_orange_A200 lg:text-fs48 xl:text-fs55 text-fs62 3xl:text-fs74 text-left tracking-ls1 w-[auto]">{`$99`}</Text>
                        <Image
                          src={"images/img_button_1.svg"}
                          className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[45px] xl:ml-[51px] ml-[58px] 3xl:ml-[69px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] object-contain rounded-radius8 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                          alt="Button"
                        />
                        <Row className="items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] outline outline-[1px] outline-deep_orange_A200 rounded-radius8 w-[37%]">
                          <Text className="font-bold lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] text-deep_orange_A200 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[auto]">{`Wishlist`}</Text>
                          <Image
                            src={"images/img_group18_1.svg"}
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mr-[18px] xl:mr-[21px] mr-[24px] 3xl:mr-[28px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="Group18"
                          />
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:my-[21px] xl:my-[24px] my-[28px] 3xl:my-[33px] w-[100%]">
                  <div className="bg-gray_300 lg:h-[156px] xl:h-[178px] h-[200px] 2xl:h-[201px] 3xl:h-[241px] rounded-radius4 lg:w-[155px] xl:w-[177px] w-[200px] 3xl:w-[240px]"></div>
                  <Column className="items-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[62%]">
                    <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[auto]">{`Tropical Playsuit`}</Text>
                    <Column className="lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="font-bold xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Size               :`}</Text>
                        <Text className="font-bold xl:mr-[107px] mr-[121px] 3xl:mr-[145px] lg:mr-[94px] xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-right tracking-ls1 w-[auto]">{`M`}</Text>
                      </Row>
                      <Row className="items-center justify-start xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
                        <Text className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Quantity     :`}</Text>
                        <Text className="font-bold lg:ml-[56px] xl:ml-[64px] ml-[72px] 3xl:ml-[86px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-right tracking-ls1 w-[auto]">{`-         5         +`}</Text>
                      </Row>
                      <Row className="items-end justify-start lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] w-[100%]">
                        <Text className="font-bold xl:mb-[2px] lg:mb-[2px] mb-[3px] text-deep_orange_A200 lg:text-fs48 xl:text-fs55 text-fs62 3xl:text-fs74 text-left tracking-ls1 w-[auto]">{`$99`}</Text>
                        <Image
                          src={"images/img_button_2.svg"}
                          className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[50px] xl:ml-[57px] ml-[65px] 3xl:ml-[78px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] object-contain rounded-radius8 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                          alt="Button"
                        />
                        <Row className="items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] outline outline-[1px] outline-deep_orange_A200 rounded-radius8 w-[37%]">
                          <Text className="font-bold lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] text-deep_orange_A200 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[auto]">{`Wishlist`}</Text>
                          <Image
                            src={"images/img_group18_2.svg"}
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mr-[18px] xl:mr-[21px] mr-[24px] 3xl:mr-[28px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="Group18"
                          />
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:my-[21px] xl:my-[24px] my-[28px] 3xl:my-[33px] w-[100%]">
                  <div className="bg-gray_300 lg:h-[156px] xl:h-[178px] h-[200px] 2xl:h-[201px] 3xl:h-[241px] rounded-radius4 lg:w-[155px] xl:w-[177px] w-[200px] 3xl:w-[240px]"></div>
                  <Column className="items-start lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[62%]">
                    <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[auto]">{`Tropical Playsuit`}</Text>
                    <Column className="lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text className="font-bold xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Size               :`}</Text>
                        <Text className="font-bold xl:mr-[107px] mr-[121px] 3xl:mr-[145px] lg:mr-[94px] xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-right tracking-ls1 w-[auto]">{`M`}</Text>
                      </Row>
                      <Row className="items-center justify-start xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
                        <Text className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Quantity     :`}</Text>
                        <Text className="font-bold lg:ml-[56px] xl:ml-[64px] ml-[72px] 3xl:ml-[86px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-right tracking-ls1 w-[auto]">{`-         5         +`}</Text>
                      </Row>
                      <Row className="items-end justify-start lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] w-[100%]">
                        <Text className="font-bold xl:mb-[2px] lg:mb-[2px] mb-[3px] text-deep_orange_A200 lg:text-fs48 xl:text-fs55 text-fs62 3xl:text-fs74 text-left tracking-ls1 w-[auto]">{`$99`}</Text>
                        <Image
                          src={"images/img_button_3.svg"}
                          className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[50px] xl:ml-[57px] ml-[65px] 3xl:ml-[78px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] object-contain rounded-radius8 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                          alt="Button"
                        />
                        <Row className="items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] outline outline-[1px] outline-deep_orange_A200 rounded-radius8 w-[37%]">
                          <Text className="font-bold lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] my-[10.5px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] text-deep_orange_A200 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[auto]">{`Wishlist`}</Text>
                          <Image
                            src={"images/img_group18_3.svg"}
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mr-[18px] xl:mr-[21px] mr-[24px] 3xl:mr-[28px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="Group18"
                          />
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Row>
              </List>
            </Column>
          </Column>
          <Column className="items-center justify-start lg:mb-[245px] xl:mb-[281px] mb-[316px] 3xl:mb-[379px] lg:mt-[142px] xl:mt-[162px] mt-[183px] 3xl:mt-[219px] w-[35%]">
            <Column className="bg-white_A700 items-start justify-center xl:mr-[2px] lg:mr-[2px] mr-[3px] rounded-radius8 w-[99%]">
              <Text className="font-bold lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] lg:mx-[38px] xl:mx-[43px] mx-[49px] 3xl:mx-[58px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[auto]">{`Have a Coupon?`}</Text>
              <Input
                className="placeholder:bg-transparent bg-white_A700 border border-deep_orange_A200 border-solid font-normal lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:mx-[38px] xl:mx-[43px] mx-[49px] 3xl:mx-[58px] not-italic lg:pl-[10px] xl:pl-[11px] pl-[13px] 3xl:pl-[15px] lg:py-[16px] xl:py-[18px] py-[21.1px] 2xl:py-[21px] 3xl:py-[25px] rounded-radius8 placeholder:text-bluegray_300 text-bluegray_300 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1 w-[81%]"
                name="Input your emai"
                placeholder={`Input your email here`}
              ></Input>
              <Button className="bg-deep_orange_A200 font-bold lg:mb-[25px] xl:mb-[29px] mb-[33px] 3xl:mb-[39px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:mx-[38px] xl:mx-[43px] mx-[49px] 3xl:mx-[58px] lg:py-[12px] xl:py-[14px] py-[16.1px] 2xl:py-[16px] 3xl:py-[19px] rounded-radius8 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 tracking-ls1 w-[19%]">{`Apply`}</Button>
            </Column>
            <Column className="items-start justify-start lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] w-[100%]">
              <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[auto]">{`Cart Totals`}</Text>
              <Column className="lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[100%]">
                <Row className="items-center justify-start w-[100%]">
                  <Text className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Subtotal`}</Text>
                  <Text className="font-normal lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`$150`}</Text>
                </Row>
                <Row className="items-center justify-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <Text className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Shipping`}</Text>
                  <Text className="font-normal lg:ml-[59px] xl:ml-[68px] ml-[77px] 3xl:ml-[92px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Free Shipping`}</Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] w-[100%]">
                  <Text className="font-normal lg:ml-[113px] xl:ml-[129px] ml-[146px] 3xl:ml-[175px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Shipping to Sidney`}</Text>
                  <Text className="font-bold text-deep_orange_A200 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[auto]">{`Change`}</Text>
                </Row>
                <Row className="items-center justify-start lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Total`}</Text>
                  <Text className="font-bold ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`$350`}</Text>
                </Row>
                <Button className="bg-deep_orange_A200 font-bold lg:mt-[43px] xl:mt-[49px] mt-[56px] 3xl:mt-[67px] lg:py-[15px] xl:py-[17px] py-[20.1px] 2xl:py-[20px] 3xl:py-[24px] rounded-radius8 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 tracking-ls1 w-[100%]">{`Checkout`}</Button>
              </Column>
            </Column>
          </Column>
        </Row>
        <Column className="bg-white_A700 items-center justify-start xl:mt-[106px] mt-[120px] 3xl:mt-[144px] lg:mt-[93px] overflow-auto w-[100%]">
          <Text className="font-bold mt-[108px] 3xl:mt-[129px] lg:mt-[84px] xl:mt-[96px] mx-[auto] text-center lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 tracking-ls1 w-[auto]">{`Top Items`}</Text>
          <Text className="font-normal leading-lh12500 lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] mx-[auto] not-italic text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 tracking-ls1 w-[51%]">
            {
              <>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod `}
                <br />
                {`tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`}
              </>
            }
          </Text>
          <List
            className="lg:gap-[12px] xl:gap-[14px] gap-[16px] 3xl:gap-[19px] grid grid-cols-5 min-h-[auto] lg:mt-[54px] xl:mt-[62px] mt-[70px] 3xl:mt-[84px] w-[100%]"
            orientation="horizontal"
          >
            <Stack className="lg:h-[351px] xl:h-[402px] h-[451px] 2xl:h-[452px] 3xl:h-[542px] w-[100%]">
              <Image
                src={"images/img_image.svg"}
                className="absolute lg:h-[351px] xl:h-[402px] h-[451px] 2xl:h-[452px] 3xl:h-[542px] inset-[0] object-cover rounded-radius6 w-[100%]"
                alt="Image"
              />
              <Column className="absolute items-start justify-start left-[3%] top-[2%] w-[80%]">
                <Stack className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[14%]">
                  <Image
                    src={"images/img_background.svg"}
                    className="absolute lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] inset-[0] object-cover rounded-radius6 w-[100%]"
                    alt="Background"
                  />
                  <Text className="absolute bottom-[5%] font-medium inset-x-[0] mx-[auto] text-center text-deep_orange_A200 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[max-content]">{`SALE`}</Text>
                </Stack>
                <Column className="lg:mt-[238px] xl:mt-[272px] mt-[306px] 3xl:mt-[367px] w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 tracking-ls1 w-[auto]">{`Tracksuit Hyped`}</Text>
                    <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[21px] xl:mx-[24px] mx-[27px] 3xl:mx-[32px] not-italic text-bluegray_300 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[auto]">{`Apple Cherry`}</Text>
                    <Column className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]">
                      <Row className="items-center justify-center w-[100%]">
                        <Stack className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] w-[15%]">
                          <Text className="absolute font-medium right-[0] text-deep_orange_A200 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-right tracking-ls1 w-[auto]">{`$384`}</Text>
                          <Line className="absolute bottom-[40%] h-[1px] inset-x-[0] mx-[auto] w-[98%]" />
                        </Stack>
                        <Text className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-right tracking-ls1 w-[auto]">{`$454`}</Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Stack>
            <Stack className="lg:h-[351px] xl:h-[402px] h-[451px] 2xl:h-[452px] 3xl:h-[542px] w-[100%]">
              <Image
                src={"images/img_image_1.svg"}
                className="absolute lg:h-[351px] xl:h-[402px] h-[451px] 2xl:h-[452px] 3xl:h-[542px] inset-[0] object-cover rounded-radius6 w-[100%]"
                alt="Image"
              />
              <Column className="absolute items-start justify-start left-[3%] top-[2%] w-[80%]">
                <Stack className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[14%]">
                  <Image
                    src={"images/img_background_1.svg"}
                    className="absolute lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] inset-[0] object-cover rounded-radius6 w-[100%]"
                    alt="Background"
                  />
                  <Text className="absolute bottom-[5%] font-medium inset-x-[0] mx-[auto] text-center text-deep_orange_A200 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[max-content]">{`SALE`}</Text>
                </Stack>
                <Column className="lg:mt-[238px] xl:mt-[272px] mt-[306px] 3xl:mt-[367px] w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 tracking-ls1 w-[auto]">{`Tracksuit Hyped`}</Text>
                    <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[21px] xl:mx-[24px] mx-[27px] 3xl:mx-[32px] not-italic text-bluegray_300 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[auto]">{`Apple Cherry`}</Text>
                    <Column className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]">
                      <Row className="items-center justify-center w-[100%]">
                        <Stack className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] w-[15%]">
                          <Text className="absolute font-medium right-[0] text-deep_orange_A200 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-right tracking-ls1 w-[auto]">{`$384`}</Text>
                          <Line className="absolute bottom-[40%] h-[1px] inset-x-[0] mx-[auto] w-[98%]" />
                        </Stack>
                        <Text className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-right tracking-ls1 w-[auto]">{`$454`}</Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Stack>
            <Stack className="lg:h-[351px] xl:h-[402px] h-[451px] 2xl:h-[452px] 3xl:h-[542px] w-[100%]">
              <Image
                src={"images/img_image_2.svg"}
                className="absolute lg:h-[351px] xl:h-[402px] h-[451px] 2xl:h-[452px] 3xl:h-[542px] inset-[0] object-cover rounded-radius6 w-[100%]"
                alt="Image"
              />
              <Column className="absolute items-start justify-start left-[3%] top-[2%] w-[80%]">
                <Stack className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[14%]">
                  <Image
                    src={"images/img_background_2.svg"}
                    className="absolute lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] inset-[0] object-cover rounded-radius6 w-[100%]"
                    alt="Background"
                  />
                  <Text className="absolute bottom-[5%] font-medium inset-x-[0] mx-[auto] text-center text-deep_orange_A200 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[max-content]">{`SALE`}</Text>
                </Stack>
                <Column className="lg:mt-[238px] xl:mt-[272px] mt-[306px] 3xl:mt-[367px] w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 tracking-ls1 w-[auto]">{`Tracksuit Hyped`}</Text>
                    <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[21px] xl:mx-[24px] mx-[27px] 3xl:mx-[32px] not-italic text-bluegray_300 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[auto]">{`Apple Cherry`}</Text>
                    <Column className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]">
                      <Row className="items-center justify-center w-[100%]">
                        <Stack className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] w-[15%]">
                          <Text className="absolute font-medium right-[0] text-deep_orange_A200 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-right tracking-ls1 w-[auto]">{`$384`}</Text>
                          <Line className="absolute bottom-[40%] h-[1px] inset-x-[0] mx-[auto] w-[98%]" />
                        </Stack>
                        <Text className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-right tracking-ls1 w-[auto]">{`$454`}</Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Stack>
            <Stack className="lg:h-[351px] xl:h-[402px] h-[451px] 2xl:h-[452px] 3xl:h-[542px] w-[100%]">
              <Image
                src={"images/img_image_3.svg"}
                className="absolute lg:h-[351px] xl:h-[402px] h-[451px] 2xl:h-[452px] 3xl:h-[542px] inset-[0] object-cover rounded-radius6 w-[100%]"
                alt="Image"
              />
              <Column className="absolute items-start justify-start left-[3%] top-[2%] w-[80%]">
                <Stack className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[14%]">
                  <Image
                    src={"images/img_background_3.svg"}
                    className="absolute lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] inset-[0] object-cover rounded-radius6 w-[100%]"
                    alt="Background"
                  />
                  <Text className="absolute bottom-[5%] font-medium inset-x-[0] mx-[auto] text-center text-deep_orange_A200 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[max-content]">{`SALE`}</Text>
                </Stack>
                <Column className="lg:mt-[238px] xl:mt-[272px] mt-[306px] 3xl:mt-[367px] w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 tracking-ls1 w-[auto]">{`Tracksuit Hyped`}</Text>
                    <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:mx-[21px] xl:mx-[24px] mx-[27px] 3xl:mx-[32px] not-italic text-bluegray_300 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[auto]">{`Apple Cherry`}</Text>
                    <Column className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]">
                      <Row className="items-center justify-center w-[100%]">
                        <Stack className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] w-[15%]">
                          <Text className="absolute font-medium right-[0] text-deep_orange_A200 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-right tracking-ls1 w-[auto]">{`$384`}</Text>
                          <Line className="absolute bottom-[40%] h-[1px] inset-x-[0] mx-[auto] w-[98%]" />
                        </Stack>
                        <Text className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-right tracking-ls1 w-[auto]">{`$454`}</Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Stack>
            <Stack className="lg:h-[351px] xl:h-[402px] h-[451px] 2xl:h-[452px] 3xl:h-[542px] w-[100%]">
              <Stack className="absolute lg:h-[351px] xl:h-[402px] h-[451px] 2xl:h-[452px] 3xl:h-[542px] inset-[0] w-[100%]">
                <Image
                  src={"images/img_image_4.svg"}
                  className="absolute lg:h-[351px] xl:h-[402px] h-[451px] 2xl:h-[452px] 3xl:h-[542px] inset-[0] object-cover rounded-radius6 w-[100%]"
                  alt="Image"
                />
                <Column className="absolute items-start justify-start left-[3%] top-[2%] w-[80%]">
                  <Stack className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[14%]">
                    <Image
                      src={"images/img_background_4.svg"}
                      className="absolute lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] inset-[0] object-cover rounded-radius6 w-[100%]"
                      alt="Background"
                    />
                    <Text className="absolute bottom-[5%] font-medium inset-x-[0] mx-[auto] text-center text-deep_orange_A200 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[max-content]">{`SALE`}</Text>
                  </Stack>
                  <Column className="items-end lg:mt-[238px] xl:mt-[272px] mt-[306px] 3xl:mt-[367px] w-[100%]">
                    <Text className="font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 tracking-ls1 w-[auto]">{`Tracksuit Hyped`}</Text>
                  </Column>
                </Column>
              </Stack>
              <Column className="absolute bottom-[6%] inset-x-[0] mx-[auto] w-[51%]">
                <Text className="font-normal mx-[auto] not-italic text-bluegray_300 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[auto]">{`Apple Cherry`}</Text>
                <Row className="items-center justify-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]">
                  <Stack className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] w-[23%]">
                    <Text className="absolute font-medium right-[0] text-deep_orange_A200 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-right tracking-ls1 w-[auto]">{`$384`}</Text>
                    <Line className="absolute bottom-[40%] h-[1px] inset-x-[0] mx-[auto] w-[98%]" />
                  </Stack>
                  <Text className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-right tracking-ls1 w-[auto]">{`$454`}</Text>
                </Row>
              </Column>
            </Stack>
          </List>
          <PagerIndicator
            className="h-[16px] lg:mb-[34px] xl:mb-[39px] mb-[44px] 3xl:mb-[52px] lg:mt-[109px] xl:mt-[125px] mt-[141px] 3xl:mt-[169px] mx-[auto] w-[auto]"
            count={5}
            activeCss="inline-block cursor-pointer rounded-radius50 w-[16px] h-[16px] bg-lime_900"
            activeIndex={undefined}
            inactiveCss="inline-block cursor-pointer rounded-radius50 w-[16px] h-[16px] bg-gray_301"
            sliderRef={undefined}
            selectedWrapperCss="2xl:mx-[12px] 3xl:mx-[14px] inline-block lg:mx-[9px] mx-[12.00px] xl:mx-[10px]"
            unselectedWrapperCss="2xl:mx-[12px] 3xl:mx-[14px] inline-block lg:mx-[9px] mx-[12.00px] xl:mx-[10px]"
          />
        </Column>
        <Column className="bg-white_A700 items-center justify-center xl:mt-[106px] mt-[120px] 3xl:mt-[144px] lg:mt-[93px] mx-[auto] w-[85%]">
          <Text className="font-bold 3xl:mt-[112px] lg:mt-[73px] xl:mt-[83px] mt-[94px] mx-[auto] text-center lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 tracking-ls1 w-[auto]">{`Join Our News Letters`}</Text>
          <Text className="font-normal leading-lh12500 lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] mx-[auto] not-italic text-bluegray_300 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 tracking-ls1 w-[49%]">{`Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster`}</Text>
          <Row className="bg-gray_100 items-center justify-between lg:mb-[62px] xl:mb-[71px] mb-[80px] 3xl:mb-[96px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] mx-[auto] rounded-radius8 w-[66%]">
            <Text className="font-normal lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:my-[17px] xl:my-[19px] my-[22px] 3xl:my-[26px] not-italic text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[auto]">{`Insert your mail here`}</Text>
            <Image
              src={"images/img_button_4.svg"}
              className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] 3xl:mr-[10px] lg:mr-[7px] xl:mr-[8px] mr-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain rounded-radius8 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
              alt="Button"
            />
          </Row>
        </Column>
        <footer className="xl:mt-[106px] mt-[120px] 3xl:mt-[144px] lg:mt-[93px] w-[100%]">
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

export default CartPage;
