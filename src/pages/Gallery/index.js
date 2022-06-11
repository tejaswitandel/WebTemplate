import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Input } from "components/Input";
import { Stack } from "components/Stack";
import { Grid } from "components/Grid";
import { Button } from "components/Button";
import { Slider } from "components/Slider";

const GalleryPage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-gray_100 font-dmsans items-center justify-start mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Column className="w-[100%]">
            <Row className="bg-white_A700 items-center justify-start w-[100%]">
              <Text className="cursor-pointer hover:font-bold font-bold lg:mb-[16px] xl:mb-[18px] mb-[21px] 3xl:mb-[25px] 3xl:ml-[112px] lg:ml-[73px] xl:ml-[83px] ml-[94px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] text-deep_orange_A200 lg:text-fs30 xl:text-fs34 text-fs39 3xl:text-fs46 text-left tracking-ls1 w-[auto]">{`Dealerz.`}</Text>
              <Image
                src={"images/img_phone_1.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[24px] xl:mb-[28px] mb-[32px] 3xl:mb-[38px] lg:ml-[592px] xl:ml-[677px] ml-[762px] 3xl:ml-[914px] lg:mt-[28px] xl:mt-[32px] mt-[37px] 3xl:mt-[44px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Phone"
              />
              <Text className="cursor-pointer hover:font-bold font-medium lg:mb-[27px] xl:mb-[31px] mb-[35px] 3xl:mb-[42px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mt-[30px] xl:mt-[34px] mt-[39px] 3xl:mt-[46px] hover:text-deep_orange_A200 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Call Center`}</Text>
              <Image
                src={"images/img_truckdelivery_1.svg"}
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
                  src={"images/img_vector_1.svg"}
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
                  src={"images/img_heart_1.svg"}
                  className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                  alt="Heart"
                />
                <Stack className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] w-[19%]">
                  <Image
                    src={"images/img_shoppingcart_1.svg"}
                    className="absolute bottom-[0] lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] left-[0] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                    alt="ShoppingCart"
                  />
                  <Column className="absolute bg-deep_orange_A200 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-start right-[0] rounded-radius50 top-[0] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                    <Text className="font-medium xl:mb-[1px] lg:mb-[1px] mb-[2px] xl:mt-[2px] lg:mt-[2px] mt-[3px] mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[auto]">{`3`}</Text>
                  </Column>
                </Stack>
                <Image
                  src={"images/img_userprofile2_1.svg"}
                  className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[20px] xl:ml-[23px] ml-[26px] 3xl:ml-[31px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                  alt="UserProfile2"
                />
                <Image
                  src={"images/img_notificationbe_1.svg"}
                  className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                  alt="NotificationBe"
                />
              </Row>
            </Row>
          </Column>
        </header>
        <Stack className="bg-white_A700 lg:h-[399px] xl:h-[456px] h-[512px] 2xl:h-[513px] 3xl:h-[615px] w-[100%]">
          <Image
            src={"images/img_maskgroup_1.svg"}
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
        <Column className="items-center justify-start xl:mt-[106px] mt-[120px] 3xl:mt-[144px] lg:mt-[93px] w-[100%]">
          <Text className="font-bold mx-[auto] text-center lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 tracking-ls1 w-[auto]">{`Our Gallery`}</Text>
          <Row className="items-center justify-start lg:mt-[43px] xl:mt-[49px] mt-[56px] 3xl:mt-[67px] mx-[auto] w-[82%]">
            <Text className="font-bold text-deep_orange_A200 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1 w-[auto]">{`All Products`}</Text>
            <Row className="items-center justify-between lg:ml-[52px] xl:ml-[60px] ml-[68px] 3xl:ml-[81px] w-[82%]">
              <Text className="font-bold text-bluegray_300 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1 w-[auto]">{`Coats & Jacket`}</Text>
              <Text className="font-bold text-bluegray_300 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1 w-[auto]">{`Dressed`}</Text>
              <Text className="font-bold text-bluegray_300 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1 w-[auto]">{`Playsuit`}</Text>
              <Text className="font-bold text-bluegray_300 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1 w-[auto]">{`Short`}</Text>
              <Text className="font-bold text-bluegray_300 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1 w-[auto]">{`Skirt`}</Text>
              <Text className="font-bold text-bluegray_300 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1 w-[auto]">{`T-Shirt`}</Text>
            </Row>
          </Row>
          <Grid className="lg:gap-[12px] xl:gap-[14px] gap-[16px] 3xl:gap-[19px] grid grid-cols-3 lg:mt-[56px] xl:mt-[64px] mt-[72px] 3xl:mt-[86px] mx-[auto] w-[86%]">
            <Column className="bg-white_A700 items-start justify-center w-[100%]">
              <Text className="font-bold lg:mt-[315px] xl:mt-[361px] mt-[406px] 3xl:mt-[487px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[auto]">{`Category Dress`}</Text>
              <Text className="font-bold lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left tracking-ls1 w-[auto]">{`Tropical Suit`}</Text>
              <Image
                src={"images/img_button_5.svg"}
                className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[53px] xl:mb-[61px] mb-[69px] 3xl:mb-[82px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Button"
              />
            </Column>
            <Column className="bg-white_A700 items-start justify-center w-[100%]">
              <Text className="font-bold lg:mt-[315px] xl:mt-[361px] mt-[406px] 3xl:mt-[487px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[auto]">{`Category Dress`}</Text>
              <Text className="font-bold lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left tracking-ls1 w-[auto]">{`Tropical Suit`}</Text>
              <Image
                src={"images/img_button_6.svg"}
                className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[53px] xl:mb-[61px] mb-[69px] 3xl:mb-[82px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Button"
              />
            </Column>
            <Column className="bg-white_A700 items-start justify-center w-[100%]">
              <Text className="font-bold lg:mt-[315px] xl:mt-[361px] mt-[406px] 3xl:mt-[487px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[auto]">{`Category Dress`}</Text>
              <Text className="font-bold lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left tracking-ls1 w-[auto]">{`Tropical Suit`}</Text>
              <Image
                src={"images/img_button_7.svg"}
                className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[53px] xl:mb-[61px] mb-[69px] 3xl:mb-[82px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Button"
              />
            </Column>
            <Column className="bg-white_A700 items-start justify-center w-[100%]">
              <Text className="font-bold lg:mt-[315px] xl:mt-[361px] mt-[406px] 3xl:mt-[487px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[auto]">{`Category Dress`}</Text>
              <Text className="font-bold lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left tracking-ls1 w-[auto]">{`Tropical Suit`}</Text>
              <Image
                src={"images/img_button_8.svg"}
                className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[53px] xl:mb-[61px] mb-[69px] 3xl:mb-[82px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Button"
              />
            </Column>
            <Column className="bg-white_A700 items-start justify-center w-[100%]">
              <Text className="font-bold lg:mt-[315px] xl:mt-[361px] mt-[406px] 3xl:mt-[487px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[auto]">{`Category Dress`}</Text>
              <Text className="font-bold lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left tracking-ls1 w-[auto]">{`Tropical Suit`}</Text>
              <Image
                src={"images/img_button_9.svg"}
                className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[53px] xl:mb-[61px] mb-[69px] 3xl:mb-[82px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Button"
              />
            </Column>
            <Column className="bg-white_A700 items-start justify-center w-[100%]">
              <Text className="font-bold lg:mt-[315px] xl:mt-[361px] mt-[406px] 3xl:mt-[487px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[auto]">{`Category Dress`}</Text>
              <Text className="font-bold lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left tracking-ls1 w-[auto]">{`Tropical Suit`}</Text>
              <Image
                src={"images/img_button_10.svg"}
                className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[53px] xl:mb-[61px] mb-[69px] 3xl:mb-[82px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Button"
              />
            </Column>
          </Grid>
          <Button className="bg-deep_orange_A200 font-bold lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] mx-[auto] lg:py-[15px] xl:py-[17px] py-[20.1px] 2xl:py-[20px] 3xl:py-[24px] rounded-radius8 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 tracking-ls1 w-[11%]">{`Find out More`}</Button>
        </Column>
        <Stack className="lg:h-[340px] xl:h-[388px] h-[436px] 2xl:h-[437px] 3xl:h-[524px] xl:mt-[106px] mt-[120px] 3xl:mt-[144px] lg:mt-[93px] mx-[auto] w-[86%]">
          <Image
            src={"images/img_arrowleft.svg"}
            className="absolute cursor-pointer lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] inset-y-[0] left-[0] my-[auto] object-contain lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"
            onClick={() => sliderRef.current?.slidePrev()}
            alt="ArrowLeft"
          />
          <Image
            src={"images/img_arrowright.svg"}
            className="absolute cursor-pointer lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] inset-y-[0] my-[auto] object-contain right-[0] lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"
            onClick={() => sliderRef.current?.slideNext()}
            alt="ArrowRight"
          />
          <Slider
            autoPlay
            autoPlayInterval={2000}
            slidesToShow={5}
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            activeSlideCSS="scale-[0.63]"
            magnifiedIndex={2}
            centerMode
            ref={sliderRef}
            className="absolute bg-white_A700 inset-x-[3%] inset-y-[0] w-[95%]"
            items={[...Array(15)].map(() => (
              <>
                <Text className="font-normal leading-lh12500 not-italic text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[100%]">
                  {
                    <>
                      {`I am very happy with the services provided, it is very helpful, starting`}
                      <br />
                      {`from the insight that the company gave from the start that I did not`}
                      <br />
                      {`understand what it was so I got knowledge and made my website`}
                      <br />
                      {`look better`}
                    </>
                  }
                </Text>
              </>
            ))}
          />
        </Stack>
        <Column className="bg-white_A700 items-center justify-center xl:mt-[106px] mt-[120px] 3xl:mt-[144px] lg:mt-[93px] mx-[auto] w-[85%]">
          <Text className="font-bold 3xl:mt-[112px] lg:mt-[73px] xl:mt-[83px] mt-[94px] mx-[auto] text-center lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 tracking-ls1 w-[auto]">{`Join Our News Letters`}</Text>
          <Text className="font-normal leading-lh12500 lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] mx-[auto] not-italic text-bluegray_300 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 tracking-ls1 w-[49%]">{`Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster`}</Text>
          <Row className="bg-gray_100 items-center justify-between lg:mb-[62px] xl:mb-[71px] mb-[80px] 3xl:mb-[96px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] mx-[auto] rounded-radius8 w-[66%]">
            <Text className="font-normal lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:my-[17px] xl:my-[19px] my-[22px] 3xl:my-[26px] not-italic text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[auto]">{`Insert your mail here`}</Text>
            <Image
              src={"images/img_button_11.svg"}
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

export default GalleryPage;
