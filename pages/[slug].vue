<template>
  <div class="max-[777px]:mt-40 mx-[8%]">
    <p class="text-[#989898] text-[13px] flex flex-wrap">
      Home
      <img
        src="../assets/icons/right-arrow.svg"
        alt=""
        class="h-[13px] mt-[3px] mx-[14px]"
      />
      LED Fixtures
      <img
        src="../assets/icons/right-arrow.svg"
        alt=""
        class="h-[13px] mt-[3px] mx-[14px]"
      />
      LED Roadway Dusk to Dawn Barn Lights
      <img
        src="../assets/icons/right-arrow.svg"
        alt=""
        class="h-[13px] mt-[3px] mx-[14px]"
      />
      70 Watt LED Dusk To Dawn Light With Photocell - 10000 Lumens - 5000K
      Daylight - 120-277V - Silver Finish - IncludesArm/Wall Mount
    </p>
    <h1 class="text-[26px] px-4 sm:hidden mb-3 text-black font-semibold">
      {{ productsDetails?.site?.route?.node?.name }}
    </h1>
    <!-- {{variants}} -->
    <div class="sm:flex cursor-pointer my-4">
      <div class="w-full sm:w-[50%] lg:w-[40%]">
        <div
          class="image-slider w-full flex flex-col lg:flex-row gap-2 p-2 md:p-0 top-32"
        >
          <Carousel
            v-bind="settings"
            :breakpoints="breakpoints"
            class="top-10 order-2 mb-4 lg:hidden"
          >
            <Slide v-for="slide in productImages" :key="slide">
              <div class="carousel__item border p-1 border-[#dbdbdb]">
                <img
                  :src="slide"
                  alt=""
                  class="w-[80px] h-[80px] m-1 me-2 lg:mb-2 border-1 border-[#dbdbdb]"
                  @click="images = slide"
                />
              </div>
            </Slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
          <div class="hidden lg:block">
            <div
              class="carousel-vue w-fit order-2 lg:order-first h-[85px] lg:min-h-fit flex flex-row lg:block"
            >
              <button
                @click="prevSlide"
                class="bg-gray-300 hidden lg:block w-[80px] h-5 lg:h-7"
              >
                <img
                  src="../assets/icons/up-arrow-svgrepo-com.svg"
                  alt=""
                  class="w-20 h-6 opacity-25"
                />
              </button>
              <div
                class="carousel-container flex flex-row h-[385px] w-fit overflow-hidden my-2 scroll-smooth"
                ref="carouselContainer"
              >
                <div
                  class="carousel flex flex-row lg:flex-col max-w-[700px]"
                  ref="carousel"
                >
                  <div
                    class="cursor-pointer flex min-w-fit w-[80px] h-[80px] border my-1 p-1 border-[#dbdbdb] order-2 lg:order-first"
                    :id="`thumbnail-${index}`"
                    v-for="(image, index) in productImages"
                    :key="index"
                  >
                    <img
                      :src="image"
                      alt="no img"
                      class="w-full h-[70px] lg:mb-2 border-[#dbdbdb]"
                      @click="images = image"
                    />
                  </div>
                </div>
              </div>
              <button
                @click="nextSlide"
                class="hidden lg:block bg-gray-300 w-[80px] h-5 lg:h-7"
              >
                <img
                  src="../assets/icons/down-arrow-svgrepo-com.svg"
                  alt=""
                  class="w-20 h-6 opacity-25"
                />
              </button>
            </div>
          </div>
          <div class="mb-2 sm:w-[100%] lg:w-[75%]">
            <div
              class="py-2 border-2 flex flex-col border-[#dde] group-[.carousel__prev]:opacity-0 group-[.carousel__next]:opacity-0"
            >
              <img
                :src="images"
                alt="no img"
                class="w-auto h-[300px] md:w-full order-last"
              />
              <div
                class="flex order-start sm:order-last justify-center w-[100%] sm:justify-end self-end mb-2"
              >
                <img
                  src="https://www.superiorlighting.com/content/vspfiles/photos/manufacturers/Superior%20Lighting.jpg"
                  alt=""
                  class="w-1/2"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="text-center w-[100%] px-3 lg:mx-14 order-last flex justify-center rounded-md mt-8"
        >
          <button
            class="text-white flex bg-[#2e5f59] w-fit py-2 rounded-md justify-center mx-2 min-[870px]:mx-8 lg:mx-14 px-4 my-1"
          >
            <img
              src="../assets/icons/pdf-icon.svg"
              alt=""
              class="w-6 h-6 mx-2"
            />
            View Spec Sheet
          </button>
        </div>
      </div>
      <div class="mx-2 sm:w-[50%] lg:w-[60%]">
        <div class="lg:flex lg:w-[100%]">
          <div class="lg:w-[70%]">
            <div class="sm:px-4 py-2">
              <h1
                class="text-[26px] sm:text-[34px] lg:text-[18px] hidden sm:block mb-3 text-black font-semibold"
              >
                {{ productsDetails?.site?.route?.node?.name }}
              </h1>
              <div class="flex sm:block justify-between">
                <div
                  class="lg:flex order-last justify-between lg:border-b-2 border-black py-2"
                >
                  <div class="flex justify-end lg:justify-start">
                    <div class="flex justify-end py-1">
                      <img
                        src="../assets/icons/star.svg"
                        alt=""
                        class="w-3 h-3"
                      />
                      <img
                        src="../assets/icons/star.svg"
                        alt=""
                        class="w-3 h-3"
                      />
                      <img
                        src="../assets/icons/star.svg"
                        alt=""
                        class="w-3 h-3"
                      />
                      <img
                        src="../assets/icons/star.svg"
                        alt=""
                        class="w-3 h-3"
                      />
                      <img
                        src="../assets/icons/star.svg"
                        alt=""
                        class="w-3 h-3"
                      />
                    </div>
                    <div>
                      <span
                        class="font-bold text-[#2e5f59] hover:text-[#3396dd] ms-2 flex text-[12px] justify-end sm:justify-start"
                        >335 Reviews</span
                      >
                    </div>
                  </div>
                  <div>
                    <span
                      class="text-[#2e5f59] hover:text-[#3396dd] right-0 flex text-[12px] font-bold justify-end"
                    >
                      <img
                        src="../assets/icons/chat-icon.svg"
                        alt=""
                        class="w-4 h-4 mt-1 me-1"
                      />1 Questions \ 1 Answers</span
                    >
                  </div>
                </div>
                <div
                  class="flex flex-row sm:flex-col order-1 lg:flex-row justify-between py-3"
                >
                  <span
                    class="text-black text-[24px] lg:text-[15px] font-normal lg:font-semibold"
                    >${{ productPrice }}</span
                  >
                  <span
                    class="text-[26px] text-[#4F4F4F] lg:text-black hidden sm:block lg:text-[12px]"
                    >You will earn 0 Reward Points with this Purchase.</span
                  >
                </div>
              </div>
              <div>
                <div>
                  <div
                    class="border border[#e5e2e2] text-black px-3 py-3 text-[14px] font-bold"
                    :class="optionbox === false ? 'bg-white' : 'bg-[#e4e4e4]'"
                  >
                    <div @click="showoptionbox" class="flex justify-between">
                      Choose Your Option
                      <font-awesome-icon
                        icon="fas fa-angle-down"
                        class="right-0"
                        :class="optionbox === true ? 'rotate-180' : ''"
                      />
                    </div>
                    <div>
                      <div
                        class="lg:flex justify-between p-4"
                        v-for="(variantName, index) in Object.keys(
                          productOptions
                        )"
                        :key="variantName"
                      >
                        <label for="watt" class="pe-4 py-2 text-black font-bold"
                          >{{ variantName }}:<span class="text-[#989898]"
                            >*</span
                          ></label
                        >
                        <div class="lg:ms-0 w-full border border-[#e5e2e2]">
                          <select
                            v-model="selectedOptions[variantName]"
                            class="w-full p-3 font-thin focus:outline-none"
                          >
                            <option :value="undefined">Select an option</option>
                            <option
                              :value="
                                variant?.node?.options?.edges?.[index]?.node
                                  ?.values?.edges?.[0]?.node?.label
                              "
                              v-for="variant in productOptions[variantName]"
                              :key="variant?.node?.entityId"
                            >
                              {{
                                variant?.node?.options?.edges?.[index]?.node
                                  ?.values?.edges?.[0]?.node?.label
                              }} (Starting at ${{ variant?.node?.prices?.price?.value }})
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-between py-4">
                    <button
                      class="bg-[#254f49] text-[14px] text-white py-2 w-full lg:w-fit px-3 lg:rounded-md whitespace-nowrap uppercase font-thin"
                    >
                      TEMP/COLOR GUIDE
                    </button>
                    <div class="hidden lg:block">
                      <button
                        class="bg-[#254f49] text-[14px] text-white py-2 px-3 rounded-md uppercase font-thin flex"
                      >
                        <img
                          src="https://cdn.convertcart.com/uploads/87b231f3.png"
                          alt=""
                          class="w-4 h-5 me-1 mt-1"
                        />warranty
                      </button>
                    </div>
                  </div>
                  <div class="pb-2 mb-4">
                    <a
                      href="javascript:void(0)"
                      class="text-red-500 italic text"
                      >Click here to see all option pricing</a
                    >
                    <div class="block lg:hidden">
                      <button
                        class="bg-[#254f49] text-[14px] text-white py-2 px-3 mt-2 rounded-md uppercase font-thin flex"
                      >
                        <img
                          src="https://cdn.convertcart.com/uploads/87b231f3.png"
                          alt=""
                          class="w-4 h-5 me-1 mt-1"
                        />warranty
                      </button>
                    </div>
                  </div>
                  <div class="hidden sm:block">
                    <span class="text-black font-semibold text-[14px]">
                      Quick Search Code:
                      <span
                        class="text-[#6B6B6B] font-normal lg:font-semibold lg:text-black"
                        >SC11086</span
                      ><br />
                      SKU:
                      <span
                        class="text-[#6B6B6B] font-normal lg:font-semibold lg:text-black"
                        >{{ productsDetails?.site?.route?.node?.sku }}</span
                      ><br />
                      Special Instructions:
                      <span
                        class="text-[#6B6B6B] font-normal lg:font-semibold lg:text-black"
                        >Price is per individual unit.</span
                      ><br />
                      Availability:
                      <span
                        class="text-[#6B6B6B] font-normal lg:font-semibold lg:text-black"
                      >
                        Usually Ships in 1 to 2 Business Days</span
                      ><br />
                      Bulk Pricing:
                      <span
                        class="text-[#2e5f59] font-normal lg:font-semibold hover:text-[#a5a5a5]"
                        >Buy in bulk and save</span
                      >
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:bg-[#0000000d] h-fit lg:w-[30%]">
            <h1
              class="text-[#4F4F4F] lg:text-red-500 text-[14px] lg:text-[20px] hidden sm:block font-normal lg:font-extrabold ps-5 pt-3"
            >
              ${{ productPrice }}
              <span
                class="text-[#4F4F4F] text-[14px] font-normal lg:font-bold lg:ms-2"
                >In stock</span
              >
            </h1>
            <div>
              <div
                class="py-3 ps-5 lg:border-y-2 border-[#dde] mt-[10px] mb-5 flex sm:block justify-center"
              >
                <p
                  class="mb-1 font-semibold text-[12px] text-black hidden lg:block"
                >
                  Quantity
                </p>
                <div class="flex font-normal">
                  <div class="border px-5 py-3 me-1 bg-white">{{ count }}</div>
                  <div class="">
                    <div
                      class="lg:border bg-white px-3 block sm:hidden lg:block"
                      @click="count = count + 1"
                    >
                      <font-awesome-icon
                        icon="fas fa-plus"
                        class="text-black"
                      />
                    </div>
                    <div
                      class="lg:border bg-white px-3 block sm:hidden lg:block"
                      @click="deleteAddToCartValue"
                    >
                      <font-awesome-icon
                        icon="fas fa-minus"
                        class="text-black"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="text-black text-[13px] lg:text-[14px] font-semibold px-5 text-center"
              >
                Order now to receive as soon as
              </div>
              <div class="text-red-500 text-[15px] font-semibold text-center">
                Tue, July 25
              </div>
              <div class="text-center flex flex-col mt-2">
                <button
                  class="text-white bg-[#0373ba] sm:bg-[#2e5f59] lg:bg-[#0373ba] px-8 lg:px-2 self-start py-3 lg:w-[100%] whitespace-nowrap sm:w-fit w-full flex justify-center gap-1 my-4 sm:my-2"
                  ref="myElement"
                  @click="addToCart"
                >
                  <img src="../assets/icons/cart.svg" alt="" class="w-4 h-6" />
                  ADD TO CART
                </button>
                <button
                  class="text-white hidden bg-red-500 lg:bg-[#64afd4] px-5 lg:self-center lg:px-4 self-start py-2 lowercase mx-4 my-8 lg:my-2 text-[12px] group hover:relative hover:z-0 sm:inline-block rounded-md"
                >
                  Click for Quantity Discounts
                  <span
                    class="hidden group-hover:block after:absolute lg:bg-white rounded-lg text-[#333] border-[#ddd] bg-[#eee] uppercase text-center py-5 absolute z-10 bottom-[110%] p-2 w-[120%] left-[20%] ms-[-50px] text-[12px] font-bold after:top-[100%] after:left-[50%] after:content-[''] after:border-[10px] after:ms-[-5px] after:border-b-transparent after:border-x-transparent after:border-white"
                    >Orders over $500 can qualify for additional volume
                    discounts and or free shipping. Please call our sales dept
                    during business hours at 800-432-7995 or add item to quote
                    below.</span
                  >
                </button>
                <button
                  class="text-white bg-[#2e5f59] px-5 sm:self-center py-3 sm:w-fit sm:mx-4 mt-4 sm:mt-2 lg:mb-8 rounded-md whitespace-nowrap"
                >
                  Add to Quote
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 py-5 border-y-2">
          <ul class="grid grid-cols-2 sm:grid-cols-4">
            <li
              class="flex flex-col text-center text-[#4F4F4f] text-[14px] font-normal gap-2 my-4 sm:my-0"
            >
              <img
                src="https://cdn.convertcart.com/uploads/6cbf686f.png"
                alt=""
                class="h-[46px] w-[39px] self-center"
              />40+ years of superior service
            </li>
            <li
              class="flex flex-col text-center text-[#4F4F4f] text-[14px] font-normal gap-2 my-4 sm:my-0"
            >
              <img
                src="https://cdn.convertcart.com/uploads/9b379735.png"
                alt=""
                class="h-[45px] w-[49px] self-center"
              />No hassle 14 days returns
            </li>
            <li
              class="flex flex-col text-center text-[#4F4F4f] text-[14px] font-normal gap-2 my-4 sm:my-0"
            >
              <img
                src="https://cdn.convertcart.com/uploads/18a925fd.png"
                alt=""
                class="h-[47px] w-[61px] pt-4 self-center"
              />American owned and operated
            </li>
            <li
              class="flex flex-col text-center text-[#4F4F4f] text-[14px] font-normal gap-2 my-4 sm:my-0"
            >
              <img
                src="https://cdn.convertcart.com/uploads/772fc40c.png"
                alt=""
                class="h-[45px] w-[39px] self-center"
              />
              Specialize in business and Govt accounts
            </li>
          </ul>
        </div>
        <div class="block border-t mt-5 border-[#dde] sm:hidden">
          <div
            class="text-[14px] text-[#4F4F4F] lg:text-black mt-2 font-normal"
          >
            You will earn 0 Reward Points with this Purchase.
          </div>
          <br />
          <div class="text-black mt-[50px] font-semibold text-[14px]">
            <span class="text-[#6B6B6B] font-normal"> Quick Search Code: </span>
            <span
              class="text-[#6B6B6B] font-normal lg:font-semibold lg:text-black"
              >SC11086</span
            ><br />
            SKU:
            <span
              class="text-[#6B6B6B] font-normal lg:font-semibold lg:text-black"
              >{{ productsDetails?.site?.route?.node?.sku }}</span
            ><br />
            <button
              class="text-white bg-[#FF0000] lg:bg-[#64afd4] px-5 w-fit min-[540px]:ms-0 uppercase lg:self-center py-[6px] whitespace-nowrap my-7 self-center lg:my-2 text-[12px] group hover:relative hover:z-0 inline-block rounded-md"
            >
              Click for Quantity Discounts
              <span
                class="hidden group-hover:block after:absolute lg:bg-white rounded-lg text-[#333] border-[#ddd] bg-[#eee] uppercase text-center py-5 absolute z-10 bottom-[110%] p-2 w-[120%] left-[20%] ms-[-50px] text-[12px] font-bold after:top-[100%] after:left-[50%] after:content-[''] after:border-[10px] after:ms-[-5px] after:border-b-transparent after:border-x-transparent after:border-white"
                >Orders over $500 can qualify for additional volume discounts
                and or free shipping. Please call our sales dept during business
                hours at 800-432-7995 or add item to quote below.</span
              ></button
            ><br />
            Special Instructions:
            <span
              class="text-[#6B6B6B] font-normal lg:font-semibold lg:text-black"
              >Price is per individual unit.</span
            ><br />
            Availability:
            <span
              class="text-[#6B6B6B] font-normal lg:font-semibold lg:text-black"
            >
              Usually Ships in 1 to 2 Business Days</span
            ><br />
            Bulk Pricing:
            <span
              class="text-[#2e5f59] font-normal lg:font-semibold hover:text-[#a5a5a5]"
              >Buy in bulk and save</span
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-[##fff] shadow-lg shadow-black absolute hidden left-0 bg-white bottom-0 z-10 transition-all duration-300 cubic-bezier[.25,.8,.25,1]"
      ref="stickyFooter"
    >
      <footer
        class="sticky-footer h-[70px] z-50 border flex justify-between py-2 px-6 bottom-0 w-full fixed bg-white"
      >
        <img
          src="https://cdn11.bigcommerce.com/s-phjrc3z910/images/stencil/original/products/11086/24747/7101CAAL080-2__58415.1530552583.1280.1280__73627.1617123622.jpg?c=2"
          alt=""
          class="w-[54px] h-[54px] hidden sm:block border"
        />
        <h1
          class="text-center text-[#2d2d2d] font-bold tracking-[.25px] leading-tight text-[14px] overflow-hidden truncate self-center"
        >
          {{ productsDetails?.site?.route?.node?.name }}
        </h1>
        <div class="flex">
          <div class="flex px-3 text-black border-[#dbdbdb] mx-3">
            <span
              class="py-4 px-6 border flex justify-between mx-1 border-[##dbdbdb]"
              >{{ count }}</span
            >
            <div>
              <div
                class="border border-[#dbdbdb] px-3"
                @click="count = count + 1"
              >
                <font-awesome-icon icon="fas fa-plus" class="text-black" />
              </div>
              <div
                class="border border-[#dbdbdb] px-3"
                @click="deleteAddToCartValue"
              >
                <font-awesome-icon icon="fas fa-minus" class="text-black" />
              </div>
            </div>
          </div>
          <button
            class="text-white bg-[#2e5f59] px-2 w-24 sm:px-8 py-2 flex sm:w-fit justify-center rounded-lg text-[14px] whitespace-nowrap"
          >
            <span class="hidden mt-2 sm:block"> Add to Quote </span>
            <img
              src="../assets/icons/cart.svg"
              alt=""
              class="w-7 sm:w-4 sm:h-5 my-2 sm:mx-1"
            />
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>
    <script setup>
import { onMounted, onUnmounted } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Slide } from "vue3-carousel";

const route = useRoute();
let whereto = "/" + route.params.slug;
const query = gql`
  query ($slug: String!) {
    site {
      categoryTree {
        ...CategoryFields
        children {
          ...CategoryFields
          children {
            ...CategoryFields
          }
        }
      }
      route(path: $slug) {
        node {
          __typename
          id
          ... on Product {
            name
            description
            sku
            entityId
            addToCartUrl
            seo {
              pageTitle
              metaDescription
              metaKeywords
            }
            prices {
              price {
                currencyCode
                value
              }
            }
            variants(first: 60) {
              edges {
                node {
                  sku
                  entityId
                  inventory {
                    isInStock
                  }
                  prices {
                    price {
                      value
                    }
                  }
                  metafields(
                    namespace: "slighting"
                    keys: ["images"]
                    first: 2
                  ) {
                    edges {
                      node {
                        id
                        entityId
                        key
                        value
                      }
                      cursor
                    }
                  }
                  options {
                    edges {
                      node {
                        displayName
                        entityId
                        values {
                          edges {
                            node {
                              label
                              entityId
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
              }
            }
            images {
              edges {
                node {
                  urlOriginal
                }
              }
            }
            categories {
              edges {
                node {
                  name
                  path
                }
              }
            }
            brand {
              name
            }
            customFields {
              edges {
                node {
                  name
                  value
                }
              }
            }
          }
        }
      }
    }
  }
  fragment CategoryFields on CategoryTreeItem {
    name
    path
    entityId
  }
`;

const createCartMutation = gql`
  mutation createCartSimple($createCartInput: CreateCartInput!) {
    cart {
      createCart(input: $createCartInput) {
        cart {
          entityId
          lineItems {
            physicalItems {
              name
              quantity
            }
            digitalItems {
              name
              quantity
            }
            giftCertificates {
              name
            }
            customItems {
              name
              quantity
            }
          }
        }
      }
    }
  }
`;

const {
  data: productsDetails,
  error,
  refresh,
} = await useAsyncQuery(query, { slug: whereto });

const productImages = computed(() => {
  return productsDetails?.value?.site?.route?.node?.images?.edges?.map(
    (el) => el.node.urlOriginal
  );
});
const productPrice =
  productsDetails?.value?.site?.route?.node?.prices?.price?.value;
const productOptiondisplayName =
  productsDetails?.value?.site?.route?.node?.variants?.edges?.[0]?.node
    ?.options;
const images = ref("");
var optionbox = ref(false);
var count = ref(0);
const carouselContainer = ref(null);
const carousel = ref(null);
const hideDirectionButtons = ref(false);
const screenWidth = ref(0);
const variants = ref([]);
const productOptions = ref({});
const selectedOptions = ref({});

console.log("productsDetails", productsDetails.value);

variants.value = productsDetails?.value?.site?.route?.node?.variants?.edges;
productOptiondisplayName?.edges.forEach((edge, index) => {
  productOptions.value[edge?.node?.displayName] = variants.value.filter(
    (variant, vIndex) => {
      return (
        variants.value.findIndex(
          (x) =>
            x?.node?.options?.edges?.[index]?.node?.values?.edges?.[0]?.node
              ?.label ===
            variant?.node?.options?.edges?.[index]?.node?.values?.edges?.[0]
              ?.node?.label
        ) === vIndex
      );
    }
  );
});
console.log("check varients", productOptions.value);

const deleteAddToCartValue = () => {
  if (count.value > 0) {
    count.value = count.value - 1;
  }
};

const addToCart = async () => {
  const { mutate: createCart } = useMutation(createCartMutation);
  const result = await createCart({
    createCartInput: {
      lineItems: [
        {
          quantity: 1,
          productEntityId: 112,
          variantEntityId: 78,
        },
      ],
    },
  });
  console.log(result);
};
const showoptionbox = () => {
  optionbox.value = !optionbox.value;
  const screenwidth = screen.width;
  console.log("width", screenwidth);
};
const stickyFooter = ref(null);
onMounted(() => {
  images.value = productImages?.value[0];
  screenWidth.value = screen.width;

  onresize = function () {
    screenWidth.value = screen.width;
  };
  window.addEventListener("scroll", checkElementVisibility);
});

onUnmounted(() => {
  document.removeEventListener("scroll", () => {});
  window.removeEventListener("scroll", checkElementVisibility);
});
const myElement = ref(null);
function checkElementVisibility() {
  const fixme = stickyFooter.value;
  const element = myElement.value;
  if (element) {
    const bounding = element.getBoundingClientRect();
    if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    ) {
      fixme.style.display = "none";
    } else {
      fixme.style.display = "block";
    }
  }
}
function nextSlide() {
  carouselContainer.value.scrollTop += 80;
}
function prevSlide() {
  carouselContainer.value.scrollTop -= 80;
}
const settings = {
  itemsToShow: 1,
  snapAlign: "center",
};

const breakpoints = {
  300: {
    itemsToShow: 3,
    snapAlign: "center",
  },
  700: {
    itemsToShow: 3,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 5,
    snapAlign: "start",
  },
};
</script>