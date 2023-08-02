<template>
  <div class="mx-0 max-[768px]:mt-40 lg:mx-[8%] my-[2%]">
    <ul class="text-[14px] text-[#1D1F22] font-normal flex gap-2">
      <li class="border-e px-2"><NuxtLink to="#">Home</NuxtLink></li>
      <li class=""><NuxtLink to="#">Cart</NuxtLink></li>
    </ul>
    <div class="bg-[#F1F2F3] my-2 flex flex-row sm:hidden">
      <SfIconArrowBack size="sm" class="m-1 !w-10" />
      <div class="w-full text-center">
        <span class="font-normal text-[16px] text-[#43464E] text-center"
          >My Cart</span
        >
      </div>
    </div>
    <div class="flex flex-col md:flex-row justify-between">
      <div class="w-full md:w-[60%] order-last md:-order-first text-center">
        <div class="hidden">
          <div class="relative max-w-[531px] h-[361px]"></div>
          <div class="text-[36px] font-semibold text-[#5ECE7B] mt-[80px]">
            Your cart is empty
          </div>
          <div
            class="text-[13px] lg:text-[16px] font-normal text-[#43464E] text-center mt-[16px]"
          >
            Looks like you haven’t added any items to the<br />
            bag yet. Start shopping to fill it in.
          </div>
          <SfButton
            type="button"
            variant="primary"
            class="w-[75%] text-white py-4 !bg-[#5ECE7B] mt-[80px] leading-loose font-semibold text-[13px] lg:text-[16px] rounded-none mx-5 uppercase"
          >
            START SHOPPING
          </SfButton>
        </div>
        <!-- Cart Product -->
        <div class="mx-[3%] my-3 pb-8 sm:my-3 sm:mx-1">
          <div class="flex justify-between border-b-2 py-2">
            <div class="flex mx-3">
              <div class="relative sm:py-4 pe-3">
                <div
                  class="flex absolute bottom-[6%] sm:bottom-[13%] w-[80%] mx-[6%] justify-center py-1 border bg-slate-50"
                >
                  <SfButton
                    type="button"
                    variant="tertiary"
                    :disabled="count <= min"
                    square
                    class="rounded-r-none text-[#43464E] p-0"
                    :aria-controls="inputId"
                    aria-label="Decrease value"
                    @click="dec()"
                  >
                    <SfIconRemove />
                  </SfButton>
                  <input
                    :id="inputId"
                    v-model="count"
                    type="number"
                    role="spinbutton"
                    class="appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
                    :min="min"
                    :max="max"
                    @input="handleOnChange"
                  />
                  <SfButton
                    type="button"
                    variant="tertiary"
                    :disabled="count >= max"
                    square
                    class="rounded-l-none p-0"
                    :aria-controls="inputId"
                    aria-label="Increase value"
                    @click="inc()"
                  >
                    <SfIconAdd />
                  </SfButton>
                </div>
              </div>
              <div class="flex flex-col sm:justify-between py-1 sm:py-2">
                <ul
                  class="text-start text-[16px] sm:text-[13px] lg:text-[16px] font-normal text-[#43464E]"
                >
                  <li>Cream Beach</li>
                  <li>Bag</li>
                  <li>Modern Style</li>
                  <li class="text-[18px] text-[#1D1F22] py-2">$ 50.00</li>
                </ul>
                <ul
                  class="text-start text-[16px] sm:text-[13px] lg:text-[16px] font-normal py-2 text-[#43464E]"
                >
                  <li>
                    Size:<span
                      class="text-[#1D1F22] font-semibold sm:font-normal ps-2"
                      >Xs</span
                    >
                  </li>
                  <li>
                    Color:<span
                      class="text-[#1D1F22] font-semibold sm:font-normal ps-2"
                      >Brown</span
                    >
                  </li>
                </ul>
                <span
                  class="sm:hidden text-[14px] font-normal text-end underline py-2 text-[#72757E] whitespace-nowrap"
                  >Remove from cart</span
                >
              </div>
            </div>
            <div class="relative sm:flex w-[45%] pt-3 hidden">
              <div class="text-start sm:flex flex-col justify-between">
                <ul class="text-[14px] font-normal underline">
                  <li>Edit</li>
                  <li>Save for later</li>
                  <li>Add to compare</li>
                  <li>Add message or gift wrap</li>
                </ul>
                <div class="text-[14px] font-light text-[#72757E]">
                  Usually arrives in 5-13 business days. A shipping timeline
                  specific to your destination can be viewed in Checkout.
                </div>
              </div>
              <div>
                <span
                  class="absolute sm:top-0 sm:right-0 text-[14px] font-normal text-end underline text-[#72757E] whitespace-nowrap"
                  >Remove from cart</span
                >
              </div>
            </div>
            <div>
              <SfButton
                type="button"
                @click="open = true"
                class="absolute sm:hidden right-0"
              >
                <SfIconMoreVert size="sm" />
              </SfButton>
            </div>
          </div>
          <div class="flex justify-between border-b-2 py-2">
            <div class="flex mx-3">
              <div class="relative sm:py-4 pe-3">
                <div
                  class="flex absolute bottom-[6%] sm:bottom-[13%] w-[80%] mx-[6%] justify-center py-1 border bg-slate-50"
                >
                  <SfButton
                    type="button"
                    variant="tertiary"
                    :disabled="count <= min"
                    square
                    class="rounded-r-none text-[#43464E] p-0"
                    :aria-controls="inputId"
                    aria-label="Decrease value"
                    @click="dec()"
                  >
                    <SfIconRemove />
                  </SfButton>
                  <input
                    :id="inputId"
                    v-model="count"
                    type="number"
                    role="spinbutton"
                    class="appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
                    :min="min"
                    :max="max"
                    @input="handleOnChange"
                  />
                  <SfButton
                    type="button"
                    variant="tertiary"
                    :disabled="count >= max"
                    square
                    class="rounded-l-none p-0"
                    :aria-controls="inputId"
                    aria-label="Increase value"
                    @click="inc()"
                  >
                    <SfIconAdd />
                  </SfButton>
                </div>
              </div>
              <div class="flex flex-col sm:justify-between py-1 sm:py-2">
                <ul
                  class="text-start text-[16px] sm:text-[13px] lg:text-[16px] font-normal text-[#43464E]"
                >
                  <li>Cream Beach</li>
                  <li>Bag</li>
                  <li>Modern Style</li>
                  <li class="text-[18px] text-[#1D1F22] py-2">$ 50.00</li>
                </ul>
                <ul
                  class="text-start text-[16px] sm:text-[13px] lg:text-[16px] font-normal py-2 text-[#43464E]"
                >
                  <li>
                    Size:<span
                      class="text-[#1D1F22] font-semibold sm:font-normal ps-2"
                      >Xs</span
                    >
                  </li>
                  <li>
                    Color:<span
                      class="text-[#1D1F22] font-semibold sm:font-normal ps-2"
                      >Brown</span
                    >
                  </li>
                </ul>
                <span
                  class="sm:hidden text-[14px] font-normal text-end underline py-2 text-[#72757E] whitespace-nowrap"
                  >Remove from cart</span
                >
              </div>
            </div>
            <div class="relative sm:flex w-[45%] pt-3 hidden">
              <div class="text-start sm:flex flex-col justify-between">
                <ul class="text-[14px] font-normal underline">
                  <li>Edit</li>
                  <li>Save for later</li>
                  <li>Add to compare</li>
                  <li>Add message or gift wrap</li>
                </ul>
                <div class="text-[14px] font-light text-[#72757E]">
                  Usually arrives in 5-13 business days. A shipping timeline
                  specific to your destination can be viewed in Checkout.
                </div>
              </div>
              <div>
                <span
                  class="absolute sm:top-0 sm:right-0 text-[14px] font-normal text-end underline text-[#72757E] whitespace-nowrap"
                  >Remove from cart</span
                >
              </div>
            </div>
            <SfButton
              type="button"
              @click="open = true"
              class="absolute sm:hidden right-0"
            >
              <SfIconMoreVert size="sm" />
            </SfButton>
          </div>
          <div class="flex justify-between border-b-2 py-2">
            <div class="flex mx-3">
              <div class="relative sm:py-4 pe-3">
                <div
                  class="flex absolute bottom-[6%] sm:bottom-[13%] w-[80%] mx-[6%] justify-center py-1 border bg-slate-50"
                >
                  <SfButton
                    type="button"
                    variant="tertiary"
                    :disabled="count <= min"
                    square
                    class="rounded-r-none text-[#43464E] p-0"
                    :aria-controls="inputId"
                    aria-label="Decrease value"
                    @click="dec()"
                  >
                    <SfIconRemove />
                  </SfButton>
                  <input
                    :id="inputId"
                    v-model="count"
                    type="number"
                    role="spinbutton"
                    class="appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
                    :min="min"
                    :max="max"
                    @input="handleOnChange"
                  />
                  <SfButton
                    type="button"
                    variant="tertiary"
                    :disabled="count >= max"
                    square
                    class="rounded-l-none p-0"
                    :aria-controls="inputId"
                    aria-label="Increase value"
                    @click="inc()"
                  >
                    <SfIconAdd />
                  </SfButton>
                </div>
              </div>
              <div class="flex flex-col sm:justify-between py-1 sm:py-2">
                <ul
                  class="text-start text-[16px] sm:text-[13px] lg:text-[16px] font-normal text-[#43464E]"
                >
                  <li>Cream Beach</li>
                  <li>Bag</li>
                  <li>Modern Style</li>
                  <li class="text-[18px] text-[#1D1F22] py-2">$ 50.00</li>
                </ul>
                <ul
                  class="text-start text-[16px] sm:text-[13px] lg:text-[16px] font-normal py-2 text-[#43464E]"
                >
                  <li>
                    Size:<span
                      class="text-[#1D1F22] font-semibold sm:font-normal ps-2"
                      >Xs</span
                    >
                  </li>
                  <li>
                    Color:<span
                      class="text-[#1D1F22] font-semibold sm:font-normal ps-2"
                      >Brown</span
                    >
                  </li>
                </ul>
                <span
                  class="sm:hidden text-[14px] font-normal text-end underline py-2 text-[#72757E] whitespace-nowrap"
                  >Remove from cart</span
                >
              </div>
            </div>
            <div class="relative sm:flex w-[45%] pt-3 hidden">
              <div class="text-start sm:flex flex-col justify-between">
                <ul class="text-[14px] font-normal underline">
                  <li>Edit</li>
                  <li>Save for later</li>
                  <li>Add to compare</li>
                  <li>Add message or gift wrap</li>
                </ul>
                <div class="text-[14px] font-light text-[#72757E]">
                  Usually arrives in 5-13 business days. A shipping timeline
                  specific to your destination can be viewed in Checkout.
                </div>
              </div>
              <div>
                <span
                  class="absolute sm:top-0 sm:right-0 text-[14px] font-normal text-end underline text-[#72757E] whitespace-nowrap"
                  >Remove from cart</span
                >
              </div>
            </div>
            <SfButton
              type="button"
              @click="open = true"
              class="absolute sm:hidden right-0"
            >
              <SfIconMoreVert size="sm" />
            </SfButton>
          </div>
        </div>

        <div
          class="pb-14 mb-4 flex justify-between px-2 text-[16px] text-[#43464E] sm:hidden font-normal"
        >
          <span>Additional Information</span> <SfIconArrowForward size="sm" />
        </div>
      </div>
      <div class="w-full md:w-[35%] order-first md:order-last bg-[#F1F2F3]">
        <div class="mt-6">
          <div class="mx-4 lg:mx-14 pb-11">
            <p class="font-semibold text-[24px] mb-10">Totals</p>
            <div class="mb-6 flex justify-between">
              <p class="text-[#43464E] text-[18px] font-[400px]">Product</p>
              <p class="text-black text-[20px] font-bold">3</p>
            </div>
            <div class="mb-6 flex justify-between">
              <p class="text-[#43464E] text-[18px] font-[400px]">Subtotal</p>
              <p class="text-black text-[20px] font-bold">$129.99</p>
            </div>
            <div class="flex justify-between mb-11">
              <p class="text-[#43464E] text-[18px] font-[400px]">Shipping</p>
              <p class="text-black text-[20px] font-bold">$4.99</p>
            </div>
            <hr class="border-b-2 border-white mb-9" />
            <div class="flex justify-between text-black font-bold">
              <p class="text-[20px] font-normal sm:font-bold">Total price:</p>
              <p class="text-[20px] font-bold">0</p>
            </div>
          </div>
          <SfButton
            type="button"
            class="mt-16 hidden sm:block w-[90%] rounded-none !bg-[#5ECE7B] py-4 font-semibold text-[13px] lg:text-[16px] leading-loose text-white text-center mx-4"
            >GO TO CHECKOUT</SfButton
          >
          <SfButton
            type="button"
            class="mt-4 w-[90%] hidden sm:block rounded-none !bg-black pb-4 font-semibold text-[13px] lg:text-[16px] leading-loose text-white text-center mx-4 mb-5"
            >GO BACK SHOPPING</SfButton
          >
          <SfButton
            type="button"
            class="mt-16 w-[90%] hidden rounded-none !bg-black py-4 font-semibold text-[13px] lg:text-[16px] leading-loose text-white text-center mx-4 mb-14"
            >GO BACK SHOPPING</SfButton
          >
          <span
            class="text-[14px] font-normal flex text-[#1D1F22] sm:justify-center mx-4 mb-7"
          >
            <SfIconEmail class="px-1" />Send my basket to email</span
          >
        </div>
        <span
          class="font-light text-[13px] lg:text-[16px] text-[#43464E] px-6 hidden sm:block"
        >
          Helpful information:
          <ul
            class="list-disc list-inside font-light text-[13px] lg:text-[16px] leading-6 !text-[#43464E] px-6"
          >
            <li class="my-2">
              Questions? Chat with us or call 1.888.282.6060.
            </li>
            <li class="my-3">
              Shipping internationally? Choose your destination & currency.
            </li>
            <li class="my-2">Shipping methods & charges</li>
          </ul>
        </span>
      </div>
    </div>
    <!-- <SfButton type="button" @click="open = true" >  <SfIconMoreVert size="sm" /> </SfButton> -->
    <div class="h-[10%]">
      <transition
        enter-active-class="transition duration-500 ease-in-out"
        leave-active-class="transition duration-500 ease-in-out"
        enter-from-class="translate-y-full"
        enter-to-class="translate-y-0"
        leave-from-class="translate-y-0"
        leave-to-class="translate-y-full"
      >
        <SfDrawer
          ref="drawerRef"
          v-model="open"
          :placement="placement"
          :class="[
            'top-auto',
            'bg-neutral-50',
            'border',
            'border-gray-300',
            { 'max-h-[70px]': placement === 'bottom' || placement === 'top' },
            { 'max-w-[370px]': placement === 'left' || placement === 'right' },
          ]"
        >
          <div class="p-5 px-10 bg-white">
            <h2 class="text-center text-[#1D1F22] pb-4 font-bold">
              Cream Beach Bag Modern Style
            </h2>
            <ul class="text-[16px] font-normal text-center">
              <li class="py-2 font-semibold text-[#72757E] uppercase">Edit</li>
              <li class="py-2 font-semibold text-[#72757E] uppercase">
                Save for later
              </li>
              <li class="py-2 font-semibold text-[#72757E] uppercase">
                Add to compare
              </li>
              <li class="py-2 font-semibold text-[#72757E] uppercase">
                Add message or gift wrap
              </li>
              <li class="py-2 font-semibold text-[#72757E] uppercase">Share</li>
              <li class="py-2 font-semibold text-[#72757E] uppercase">
                Cancel
              </li>
            </ul>
          </div>
        </SfDrawer>
      </transition>
    </div>
    <!-- Mobile Navbar Bottom -->

    <nav
      class="bottom-0 min-w-[300px] w-full fixed flex flex-row bg-white text-primary-700 sm:hidden shadow-[0_3px_3px_-3px_rgba(#FF0000)] shadow-white"
    >
      <SfButton
        v-for="item in items"
        :key="item.label"
        variant="tertiary"
        :class="[
          ' text-[12px] !px-0 w-full flex flex-col !gap-0 rounded-none text-[#43464E] hover:text-primary-800 hover:bg-primary-100 active:text-[#5ECE7B] active:bg-primary-200',
          { 'text-primary-900 bg-primary-200': selectedItem === item.label },
        ]"
        @click="onClickHandler(item.label)"
      >
        <template #prefix>
          <Component :is="item.icon" />
        </template>
        {{ item.label }}
      </SfButton>
      <div
        class="relative inline-flex items-center justify-center font-medium text-[12px] py-2 gap-2 w-full leading-6 flex-col"
      >
        <div
          class="absolute w-14 h-14 rounded-full border-2 bottom-10 flex justify-center items-center"
          :class="cart ? 'bg-[#5ECE7B]' : 'bg-black'"
        >
          <SfIconArrowForward
            size="sm"
            class="!w-[100%] !text-center fill-white"
            v-if="cart"
          />
          <SfIconClose
            size="sm"
            class="!w-[100%] text-center fill-white"
            v-else
          />
        </div>
        <div class="h-3"></div>
        <span class="text-[#43464E]">{{
          cart ? "Checkout" : "Exit Cart"
        }}</span>
      </div>
    </nav>
  </div>
</template>
  <script setup>
import { ref } from "vue";
import { useCounter } from "@vueuse/core";

import {
  SfButton,
  SfIconHome,
  SfIconMenu,
  SfIconShoppingCartCheckout,
  SfIconArrowForward,
  SfIconArrowBack,
  SfIconFavorite,
  SfIconPerson,
  SfIconAdd,
  SfIconEmail,
  SfIconRemove,
  useId,
  SfDrawer,
  SfDrawerPlacement,
  SfIconMoreVert,
} from "@storefront-ui/vue";
import { SfIconClose, useTrapFocus } from "@storefront-ui/vue";

const items = [
  {
    label: "Home",
    icon: SfIconHome,
  },
  {
    label: "Menu",
    icon: SfIconMenu,
  },
  {
    label: "Watchlist",
    icon: SfIconFavorite,
  },
  {
    label: "Account",
    icon: SfIconPerson,
  },
  // {
  //   label: 'Checkout',
  //   icon: SfIconArrowForward,
  // },
];
const selectedItem = ref("");
function onClickHandler(itemLabel) {
  selectedItem.value = itemLabel;
}
const cart = ref("cart");
const min = ref(1);
const max = ref(999);
const inputId = useId();
const { count, inc, dec, set } = useCounter(1, {
  min: min.value,
  max: max.value,
});

const placement = ref < `${SfDrawerPlacement}` > "left";
const open = ref(false);
const drawerRef = ref();
const getCartQuery = gql`
  query getCart {
    site {
      cart {
        entityId
        currencyCode
        isTaxIncluded
        baseAmount {
          currencyCode
          value
        }
        discountedAmount {
          currencyCode
          value
        }
        amount {
          currencyCode
          value
        }
        discounts {
          entityId
          discountedAmount {
            currencyCode
            value
          }
        }
        lineItems {
          physicalItems {
            entityId
            parentEntityId
            variantEntityId
            productEntityId
            sku
            name
            url
            imageUrl
            brand
            quantity
            isTaxable
            discounts {
              entityId
              discountedAmount {
                currencyCode
                value
              }
            }
            discountedAmount {
              currencyCode
              value
            }
            couponAmount {
              currencyCode
              value
            }
            listPrice {
              currencyCode
              value
            }
            originalPrice {
              currencyCode
              value
            }
            salePrice {
              currencyCode
              value
            }
            extendedListPrice {
              currencyCode
              value
            }
            extendedSalePrice {
              currencyCode
              value
            }
            isShippingRequired
            selectedOptions {
              entityId
              name
              ... on CartSelectedCheckboxOption {
                value
                valueEntityId
              }
              ... on CartSelectedDateFieldOption {
                date {
                  utc
                }
              }
              ... on CartSelectedFileUploadOption {
                fileName
              }
              ... on CartSelectedMultiLineTextFieldOption {
                text
              }
              ... on CartSelectedMultipleChoiceOption {
                value
                valueEntityId
              }
              ... on CartSelectedNumberFieldOption {
                number
              }
              ... on CartSelectedTextFieldOption {
                text
              }
            }
            giftWrapping {
              name
              amount {
                currencyCode
                value
              }
              message
            }
          }
          digitalItems {
            entityId
            parentEntityId
            variantEntityId
            productEntityId
            sku
            name
            url
            imageUrl
            brand
            quantity
            isTaxable
            discounts {
              entityId
              discountedAmount {
                currencyCode
                value
              }
            }
            discountedAmount {
              currencyCode
              value
            }
            couponAmount {
              currencyCode
              value
            }
            listPrice {
              currencyCode
              value
            }
            originalPrice {
              currencyCode
              value
            }
            salePrice {
              currencyCode
              value
            }
            extendedListPrice {
              currencyCode
              value
            }
            extendedSalePrice {
              currencyCode
              value
            }
            selectedOptions {
              entityId
              name
              ... on CartSelectedCheckboxOption {
                value
                valueEntityId
              }
              ... on CartSelectedDateFieldOption {
                date {
                  utc
                }
              }
              ... on CartSelectedFileUploadOption {
                fileName
              }
              ... on CartSelectedMultiLineTextFieldOption {
                text
              }
              ... on CartSelectedMultipleChoiceOption {
                value
                valueEntityId
              }
              ... on CartSelectedNumberFieldOption {
                number
              }
              ... on CartSelectedTextFieldOption {
                text
              }
            }
          }
          giftCertificates {
            entityId
            name
            theme
            amount {
              currencyCode
              value
            }
            isTaxable
            sender {
              name
              email
            }
            recipient {
              name
              email
            }
            message
          }
          customItems {
            entityId
            sku
            name
            quantity
            listPrice {
              currencyCode
              value
            }
            extendedListPrice {
              currencyCode
              value
            }
          }
          totalQuantity
        }
        createdAt {
          utc
        }
        updatedAt {
          utc
        }
        locale
      }
    }
  }
`;
const { data: cartData } = await useAsyncQuery(getCartQuery)
console.log(cartData);
useTrapFocus(drawerRef, { activeState: open });
</script>
  <style></style>
  