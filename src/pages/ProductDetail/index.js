import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Input } from "components/Input";
import { Stack } from "components/Stack";
import { RatingBar } from "components/RatingBar";
import { List } from "components/List";
import { Line } from "components/Line";
import { PagerIndicator } from "components/PagerIndicator";

const ProductDetailPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-dmsans mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Column className="w-[100%]">
            <Row className="bg-white_A700 items-center justify-start w-[100%]">
              <Text className="cursor-pointer hover:font-bold font-bold lg:mb-[16px] xl:mb-[18px] mb-[21px] 3xl:mb-[25px] 3xl:ml-[112px] lg:ml-[73px] xl:ml-[83px] ml-[94px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] text-deep_orange_A200 lg:text-fs30 xl:text-fs34 text-fs39 3xl:text-fs46 text-left tracking-ls1 w-[auto]">{`Dealerz.`}</Text>
              <Image
                src={"images/img_phone_2.svg"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[24px] xl:mb-[28px] mb-[32px] 3xl:mb-[38px] lg:ml-[592px] xl:ml-[677px] ml-[762px] 3xl:ml-[914px] lg:mt-[28px] xl:mt-[32px] mt-[37px] 3xl:mt-[44px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Phone"
              />
              <Text className="cursor-pointer hover:font-bold font-medium lg:mb-[27px] xl:mb-[31px] mb-[35px] 3xl:mb-[42px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mt-[30px] xl:mt-[34px] mt-[39px] 3xl:mt-[46px] hover:text-deep_orange_A200 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Call Center`}</Text>
              <Image
                src={"images/img_truckdelivery_2.svg"}
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
                  src={"images/img_vector_2.svg"}
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
                  src={"images/img_heart_2.svg"}
                  className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                  alt="Heart"
                />
                <Stack className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] w-[19%]">
                  <Image
                    src={"images/img_shoppingcart_2.svg"}
                    className="absolute bottom-[0] lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] left-[0] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                    alt="ShoppingCart"
                  />
                  <Column className="absolute bg-deep_orange_A200 lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-start right-[0] rounded-radius50 top-[0] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                    <Text className="font-medium xl:mb-[1px] lg:mb-[1px] mb-[2px] xl:mt-[2px] lg:mt-[2px] mt-[3px] mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[auto]">{`3`}</Text>
                  </Column>
                </Stack>
                <Image
                  src={"images/img_userprofile2_2.svg"}
                  className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[20px] xl:ml-[23px] ml-[26px] 3xl:ml-[31px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                  alt="UserProfile2"
                />
                <Image
                  src={"images/img_notificationbe_2.svg"}
                  className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                  alt="NotificationBe"
                />
              </Row>
            </Row>
          </Column>
        </header>
        <Stack className="lg:h-[1614px] xl:h-[1846px] h-[2075px] 2xl:h-[2077px] 3xl:h-[2492px] w-[100%]">
          <div className="absolute bg-white_A700 lg:h-[399px] xl:h-[456px] h-[512px] 2xl:h-[513px] 3xl:h-[615px] top-[0] w-[100%]"></div>
          <Column className="absolute h-[max-content] inset-[0] justify-center m-[auto] w-[86%]">
            <Row className="items-end justify-between w-[100%]">
              <Column className="items-start justify-start w-[49%]">
                <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[auto]">{`Grocery > Fruits > Japan Oranges`}</Text>
                <Column className="lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] w-[100%]">
                  <Image
                    src={"images/img_imageplacehold.svg"}
                    className="lg:h-[575px] xl:h-[658px] h-[739px] 2xl:h-[740px] 3xl:h-[888px] object-cover w-[100%]"
                    alt="ImagePlacehold"
                  />
                </Column>
              </Column>
              <Column className="items-start justify-start lg:mt-[59px] xl:mt-[68px] mt-[77px] 3xl:mt-[92px] w-[41%]">
                <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] text-bluegray_900 lg:text-fs48 xl:text-fs55 text-fs62 3xl:text-fs74 text-left tracking-ls1 w-[auto]">{`Urbano Jacket`}</Text>
                <RatingBar
                  className="mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px]"
                  value={5}
                  starCount={5}
                  activeColor="var(--deep_orange_A201)"
                  size={((window.innerWidth - 15) * 32) / 1440}
                ></RatingBar>
                <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] text-deep_orange_A200 lg:text-fs48 xl:text-fs55 text-fs62 3xl:text-fs74 text-left tracking-ls1 w-[auto]">{`$99`}</Text>
                <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[32px] xl:mt-[37px] mt-[42px] 3xl:mt-[50px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[auto]">{`Details Product`}</Text>
                <Text className="font-normal leading-lh12500 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_700 text-left tracking-ls1 w-[100%]">
                  {
                    <>
                      {`Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company.`}
                      <br />
                      {``}
                      <br />
                      {`Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company.`}
                    </>
                  }
                </Text>
                <Column className="lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="font-bold lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Quantity`}</Text>
                    <Row className="bg-white_A700 items-center justify-center rounded-radius4 w-[22%]">
                      <Text className="font-normal lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`-`}</Text>
                      <Text className="font-normal lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`2`}</Text>
                      <Text className="font-normal lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] lg:ml-[24px] xl:ml-[27px] ml-[31px] 3xl:ml-[37px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`+`}</Text>
                    </Row>
                    <Text className="font-bold lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] text-deep_orange_A200 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[auto]">{`Add note`}</Text>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                    <Text className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`Sub Total`}</Text>
                    <Text className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[auto]">{`$10`}</Text>
                  </Row>
                  <Row className="items-center justify-start lg:mt-[34px] xl:mt-[39px] mt-[44px] 3xl:mt-[52px] w-[100%]">
                    <Row className="items-center justify-center outline outline-[1px] outline-deep_orange_A200 rounded-radius8 w-[28%]">
                      <Text className="font-bold lg:my-[14px] xl:my-[16px] my-[18.5px] 2xl:my-[18px] 3xl:my-[22px] text-deep_orange_A200 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[auto]">{`Wishlist`}</Text>
                      <Image
                        src={"images/img_group18_4.svg"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="Group18"
                      />
                    </Row>
                    <Row className="bg-deep_orange_A200 items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] rounded-radius8 w-[34%]">
                      <Text className="font-bold lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:my-[14px] xl:my-[16px] my-[18.5px] 2xl:my-[18px] 3xl:my-[22px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[auto]">{`Add to Cart`}</Text>
                      <Image
                        src={"images/img_group18_5.svg"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mr-[18px] xl:mr-[21px] mr-[24px] 3xl:mr-[28px] lg:my-[12px] xl:my-[14px] my-[16px] 3xl:my-[19px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="Group18"
                      />
                    </Row>
                  </Row>
                </Column>
              </Column>
            </Row>
            <Stack className="h-[1120px] 2xl:h-[1121px] 3xl:h-[1345px] lg:h-[872px] xl:h-[997px] lg:mt-[56px] xl:mt-[64px] mt-[72px] 3xl:mt-[86px] w-[100%]">
              <Column className="absolute inset-[0] items-start justify-start w-[100%]">
                <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs30 xl:text-fs34 text-fs39 3xl:text-fs46 text-gray_900 text-left tracking-ls1 w-[auto]">{`Description`}</Text>
                <Column className="lg:mt-[33px] xl:mt-[38px] mt-[43px] 3xl:mt-[51px] w-[100%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Text className="font-normal leading-lh12500 lg:mb-[518px] xl:mb-[592px] mb-[666px] 3xl:mb-[799px] ml-[1px] not-italic text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[49%]">
                      {
                        <>
                          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                          <br />
                          {``}
                          <br />
                          {`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo.`}
                        </>
                      }
                    </Text>
                    <div className="bg-gray_300 h-[1026px] 2xl:h-[1027px] 3xl:h-[1232px] lg:h-[798px] xl:h-[913px] rounded-radius8 w-[46%]"></div>
                  </Row>
                </Column>
              </Column>
              <Column className="absolute bottom-[0] items-start justify-start left-[0] w-[38%]">
                <Text className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs30 xl:text-fs34 text-fs39 3xl:text-fs46 text-gray_900 text-left tracking-ls1 w-[auto]">{`Reviews (2)`}</Text>
                <Column className="lg:mt-[39px] xl:mt-[45px] mt-[51px] 3xl:mt-[61px] w-[100%]">
                  <List
                    className="gap-[0] min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="items-start justify-between lg:my-[21px] xl:my-[24px] my-[28px] 3xl:my-[33px] w-[100%]">
                      <div className="bg-gray_300 lg:h-[50px] xl:h-[57px] h-[64px] 2xl:h-[65px] 3xl:h-[77px] lg:mb-[122px] xl:mb-[140px] mb-[158px] 3xl:mb-[189px] rounded-radius50 lg:w-[49px] xl:w-[56px] w-[64px] 3xl:w-[76px]"></div>
                      <Column className="items-start justify-start mt-[1px] w-[81%]">
                        <Row className="items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[77%]">
                          <Text className="font-bold lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[auto]">{`Alex Iwobi`}</Text>
                          <RatingBar
                            className="xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] xl:mt-[2px] lg:mt-[2px] mt-[3px]"
                            value={5}
                            starCount={5}
                            activeColor="var(--deep_orange_A201)"
                            size={((window.innerWidth - 15) * 24) / 1440}
                          ></RatingBar>
                        </Row>
                        <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[auto]">{`2 March 2021 at 06.30 pm`}</Text>
                        <Column className="lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                          <Row className="lg:gap-[6px] xl:gap-[7px] gap-[8px] 3xl:gap-[9px] grid grid-cols-4 items-center justify-between w-[100%]">
                            <div className="bg-gray_300 3xl:h-[106px] lg:h-[69px] xl:h-[79px] h-[88px] 2xl:h-[89px] rounded-radius4 3xl:w-[105px] lg:w-[68px] xl:w-[78px] w-[88px]"></div>
                            <div className="bg-gray_300 3xl:h-[106px] lg:h-[69px] xl:h-[79px] h-[88px] 2xl:h-[89px] rounded-radius4 3xl:w-[105px] lg:w-[68px] xl:w-[78px] w-[88px]"></div>
                            <div className="bg-gray_300 3xl:h-[106px] lg:h-[69px] xl:h-[79px] h-[88px] 2xl:h-[89px] rounded-radius4 3xl:w-[105px] lg:w-[68px] xl:w-[78px] w-[88px]"></div>
                            <div className="bg-gray_300 3xl:h-[106px] lg:h-[69px] xl:h-[79px] h-[88px] 2xl:h-[89px] rounded-radius4 3xl:w-[105px] lg:w-[68px] xl:w-[78px] w-[88px]"></div>
                          </Row>
                        </Column>
                        <Text className="font-normal leading-lh13000 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_800 text-left tracking-ls1 w-[100%]">{`Thank you for the article that was made, it really provides insight and knowledge that I didn't know before.`}</Text>
                      </Column>
                    </Row>
                    <Row className="items-start justify-between lg:my-[21px] xl:my-[24px] my-[28px] 3xl:my-[33px] w-[100%]">
                      <div className="bg-gray_300 lg:h-[50px] xl:h-[57px] h-[64px] 2xl:h-[65px] 3xl:h-[77px] lg:mb-[122px] xl:mb-[140px] mb-[158px] 3xl:mb-[189px] rounded-radius50 lg:w-[49px] xl:w-[56px] w-[64px] 3xl:w-[76px]"></div>
                      <Column className="items-start justify-start mt-[1px] w-[81%]">
                        <Row className="items-center justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[77%]">
                          <Text className="font-bold lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[auto]">{`Alex Iwobi`}</Text>
                          <RatingBar
                            className="xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] xl:mt-[2px] lg:mt-[2px] mt-[3px]"
                            value={5}
                            starCount={5}
                            activeColor="var(--deep_orange_A201)"
                            size={((window.innerWidth - 15) * 24) / 1440}
                          ></RatingBar>
                        </Row>
                        <Text className="font-normal mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[auto]">{`2 March 2021 at 06.30 pm`}</Text>
                        <Column className="lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                          <Row className="lg:gap-[6px] xl:gap-[7px] gap-[8px] 3xl:gap-[9px] grid grid-cols-4 items-center justify-between w-[100%]">
                            <div className="bg-gray_300 3xl:h-[106px] lg:h-[69px] xl:h-[79px] h-[88px] 2xl:h-[89px] rounded-radius4 3xl:w-[105px] lg:w-[68px] xl:w-[78px] w-[88px]"></div>
                            <div className="bg-gray_300 3xl:h-[106px] lg:h-[69px] xl:h-[79px] h-[88px] 2xl:h-[89px] rounded-radius4 3xl:w-[105px] lg:w-[68px] xl:w-[78px] w-[88px]"></div>
                            <div className="bg-gray_300 3xl:h-[106px] lg:h-[69px] xl:h-[79px] h-[88px] 2xl:h-[89px] rounded-radius4 3xl:w-[105px] lg:w-[68px] xl:w-[78px] w-[88px]"></div>
                            <div className="bg-gray_300 3xl:h-[106px] lg:h-[69px] xl:h-[79px] h-[88px] 2xl:h-[89px] rounded-radius4 3xl:w-[105px] lg:w-[68px] xl:w-[78px] w-[88px]"></div>
                          </Row>
                        </Column>
                        <Text className="font-normal leading-lh13000 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_800 text-left tracking-ls1 w-[100%]">{`Thank you for the article that was made, it really provides insight and knowledge that I didn't know before.`}</Text>
                      </Column>
                    </Row>
                  </List>
                </Column>
              </Column>
            </Stack>
          </Column>
        </Stack>
        <Column className="bg-white_A700 items-center justify-start lg:mt-[124px] xl:mt-[142px] mt-[160px] 3xl:mt-[192px] overflow-auto w-[100%]">
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
                src={"images/img_image_5.svg"}
                className="absolute lg:h-[351px] xl:h-[402px] h-[451px] 2xl:h-[452px] 3xl:h-[542px] inset-[0] object-cover rounded-radius6 w-[100%]"
                alt="Image"
              />
              <Column className="absolute items-start justify-start left-[3%] top-[2%] w-[80%]">
                <Stack className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[14%]">
                  <Image
                    src={"images/img_background_5.svg"}
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
                src={"images/img_image_6.svg"}
                className="absolute lg:h-[351px] xl:h-[402px] h-[451px] 2xl:h-[452px] 3xl:h-[542px] inset-[0] object-cover rounded-radius6 w-[100%]"
                alt="Image"
              />
              <Column className="absolute items-start justify-start left-[3%] top-[2%] w-[80%]">
                <Stack className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[14%]">
                  <Image
                    src={"images/img_background_6.svg"}
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
                src={"images/img_image_7.svg"}
                className="absolute lg:h-[351px] xl:h-[402px] h-[451px] 2xl:h-[452px] 3xl:h-[542px] inset-[0] object-cover rounded-radius6 w-[100%]"
                alt="Image"
              />
              <Column className="absolute items-start justify-start left-[3%] top-[2%] w-[80%]">
                <Stack className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[14%]">
                  <Image
                    src={"images/img_background_7.svg"}
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
                src={"images/img_image_8.svg"}
                className="absolute lg:h-[351px] xl:h-[402px] h-[451px] 2xl:h-[452px] 3xl:h-[542px] inset-[0] object-cover rounded-radius6 w-[100%]"
                alt="Image"
              />
              <Column className="absolute items-start justify-start left-[3%] top-[2%] w-[80%]">
                <Stack className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[14%]">
                  <Image
                    src={"images/img_background_8.svg"}
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
                  src={"images/img_image_9.svg"}
                  className="absolute lg:h-[351px] xl:h-[402px] h-[451px] 2xl:h-[452px] 3xl:h-[542px] inset-[0] object-cover rounded-radius6 w-[100%]"
                  alt="Image"
                />
                <Column className="absolute items-start justify-start left-[3%] top-[2%] w-[80%]">
                  <Stack className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] w-[14%]">
                    <Image
                      src={"images/img_background_9.svg"}
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
            className="h-[16px] lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:mt-[109px] xl:mt-[125px] mt-[141px] 3xl:mt-[169px] mx-[auto] w-[auto]"
            count={5}
            activeCss="inline-block cursor-pointer rounded-radius50 w-[16px] h-[16px] bg-lime_900"
            activeIndex={undefined}
            inactiveCss="inline-block cursor-pointer rounded-radius50 w-[16px] h-[16px] bg-gray_301"
            sliderRef={undefined}
            selectedWrapperCss="2xl:mx-[12px] 3xl:mx-[14px] inline-block lg:mx-[9px] mx-[12.00px] xl:mx-[10px]"
            unselectedWrapperCss="2xl:mx-[12px] 3xl:mx-[14px] inline-block lg:mx-[9px] mx-[12.00px] xl:mx-[10px]"
          />
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

export default ProductDetailPage;
