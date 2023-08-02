<template>
    <div>
        <div class="hidden md:block ">
            <div class="flex justify-end lg:justify-between  items-center py-5  w-full border-l-[0.5px] border-zinc-700 px-5 h-auto text-white bg-[#2e5f59] font-bold text-[12px] 2xl:text-[14px] cursor-pointer font-sans ">
    
                <NuxtLink to="#" class="hidden lg:block px-3 text-[#fcc61a] leading-4 font-normal text-xs">
                    <div class="flex">
                        <img src="../assets/icons/briefcase.svg" alt="" class="w-[15px] h-[15px] me-1 mt-[2px]">
                        <span>Open a business account - Get Volume Pricing</span>
                    </div>
    
                </NuxtLink>
                <div class="flex justify-center items-center gap-1  lg:px-0">
                    <NuxtLink to="#" class=" hover:text-green-400"> Trade Professional Application</NuxtLink>
                    <NuxtLink to="#" class=" flex ps-2  me-1 lg:ps-4 lg:pe-1 hover:text-green-400"> My Quote <span class="bg-red-500 rounded-full   h-5 w-5  ms-1  flex justify-center">0</span></NuxtLink>
    
                    <NuxtLink to="#" class=" hover:text-green-400"> My Orders</NuxtLink>
                    <NuxtLink to="#" class=" hover:text-green-400">My Rewards</NuxtLink>
                    <NuxtLink to="#" class=" flex ms-1 hover:text-green-400"> Sign in <p class="px-1">or</p>
                    </NuxtLink>
                    <NuxtLink to="#" class="ms-1 hover:text-green-400"> Register</NuxtLink>
                    <NuxtLink to="#" class="  hover:text-green-400">Contact Us</NuxtLink>
                </div>
            </div>
    
            <div class="px-4 min-[1480px]:px-[100px] grid grid-cols-4 grid-flow-col ">
    
                <img src="https://cdn11.bigcommerce.com/s-phjrc3z910/images/stencil/300w/image-manager/superior-lighting-logo.png" alt="no logo img" class="px-2 py-2 mt-4">
    
                <div class="col-span-3 flex justify-between">
                    <div class=" px-6 py-5 xl:me-7 gap-0 text-left xl:text-center w-full">
                        <div class="font-semibold text-[21px] min-[1452px]:text-5xl">1-800-432-7995</div>
                        <div class="font-normal text-base w-full  2xl:text-2xl">Open Mon.- Fri. 8:30AM - 5:30PM EST</div>
                        <div class="flex w-100 border-[2px] border-[#2e5f59]   min-[1452px]:mt-4 w-full">
                            <input type="text" placeholder="Search for led bulbs, lights, fixtures and more…" class="py-[12px] border-0 focus:outline-none px-3 text-xl w-full">
                            <font-awesome-icon icon="fa-solid fa-search" size="xl" class="px-3 py-[12px]" />
                        </div>
                    </div>
                    <div class="w-100 lg:w-full ">
                        <div class=" pe-4 lg:mt-5 pt-0 lg:pt-6 min-[1480px]:px-0  min-[1452px]:mt-[40px] min-[1480px]:mt-[30px]   float-right "><span class="px-5 min-[1480px]:px-0  text-[12px]">Session #: M7714575</span></div>
                        <div class="grid grid-cols-3 mb-2 gap-4 lg:gap-0 lg:flex  justify-between mt-[42px] lg:mt-16 min-[1480px]:mt-28 text-3 xl:text-4 font-normal w-full ">
    
                            <div class="px-0 xl:px-2 self-center flex w-full">
                                <img src="../assets/icons/icon-chat.svg" alt="">
                                <span class="hidden lg:block px-0 py-3">Live Chat</span>
                            </div>
                            <div class="px-0 xl:px-2 self-center flex w-full">
                                <img src="../assets/icons/icon-account.svg" alt="">
                                <span class="hidden lg:block px-0 py-3">Account</span>
                            </div>
                            <div class="px-0 xl:px-2 self-center flex w-full ">
                                <img src="../assets/icons/icon-cart.svg" alt="">
                                <div class="absolute bg-[#FF0000] rounded-full ms-6  h-5 w-5 ps-1 text-white me-5">0</div>
                                <span class="hidden lg:block py-3">Cart</span>
                            </div>
                            <button class="bg-[#FF0000] px-1 xl:px-3 col-span-3 text-sm border text-white rounded-md py-2 self-center">CHECKOUT</button>
                        </div>
                    </div>
                </div>
    
            </div>
            <div class="bg-[#2e5f59] w-full ">
                <div class="min-[1826px]:mx-auto min-[1826px]:container mx-0">
                    <div class="grid grid-flow-col  w-full  text-[13px] text-white text-center  lg:px-[84px] min-[1480px]:px-0 min-[1480px]:text-[16px] min-[1826px]:text-sm py-0 2xl:uppercase max-w-[1700px]">
    
                        <div class="flex justify-center hover:text-black hover:bg-white cursor-pointer py-3 w-full px-2 text-[13px] tracking-wide h-full border-l-[0.5px] border-zinc-700   uppercase">
                            <div class="flex justify-center items-center">Clearance
                                <font-awesome-icon icon="fas fa-angle-double-down" class="text-red-500 px-1" />
                            </div>
                        </div>
                        <div class="group">
                            <div class=" hover:text-black hover:bg-white cursor-pointer py-3 h-full w-full px-2 text-[13px] tracking-wide border-l-[0.5px] border-zinc-700 uppercase"><span class="flex justify-center items-center ">LED Bulbs
                                    <font-awesome-icon icon="fas fa-angle-double-down" class="text-red-500 px-1" /></span>
                                <div class="absolute hidden group-hover:block  mt-3 me-60 max-w-[1100px]">
                                    <Headerdata />
                                </div>
                            </div>
    
                        </div>
                        <div class="group">
                            <div class=" hover:text-black hover:bg-white cursor-pointer py-3 w-full  px-2 text-[13px] tracking-wide h-full border-l-[0.5px] border-zinc-700 uppercase"><span class="flex  justify-center items-center">Led Fixtures
                                    <font-awesome-icon icon="fas fa-angle-double-down" class="text-red-500 px-1" /></span>
                                <div class=" absolute hidden group-hover:block mt-3 me-40 max-w-[1100px]">
                                    <Headerdata />
                                </div>
                            </div>
                        </div>
                        <div class="group">
                            <div class=" hover:text-black hover:bg-white cursor-pointer py-3 h-full  px-2 text-[13px] tracking-wide  w-full border-l-[0.5px] border-zinc-700 uppercase"><span class="flex  justify-center items-center">Solar Lights
                                    <font-awesome-icon icon="fas fa-angle-double-down" class="text-red-500 px-1" /></span>
                                <div class=" absolute hidden group-hover:block mt-3 max-w-[1100px]">
                                    <Headerdata />
                                </div>
                            </div>
                        </div>
                        <div class="group">
                            <div class=" flex justify-center hover:text-black hover:bg-white cursor-pointer py-3 h-full  px-2 text-[13px] tracking-wide  w-full border-l-[0.5px] border-zinc-700 uppercase"><span class="flex  justify-center items-center">Emergency/ Exists
                                    <font-awesome-icon icon="fas fa-angle-double-down" class="text-red-500 px-1" /></span>
                                <div class=" absolute hidden group-hover:block mt-8 max-w-[1100px]">
                                    <Headerdata />
                                </div>
                            </div>
                        </div>
                        <div class="group">
                            <div class="flex justify-center hover:text-black hover:bg-white cursor-pointer py-3 w-full px-2 text-[13px] tracking-wide h-full border-l-[0.5px] border-zinc-700 uppercase"><span class="flex  justify-center items-center">More Lights
                                    <font-awesome-icon icon="fas fa-angle-double-down" class="text-red-500 px-1" /></span>
                                <div class="absolute hidden group-hover:block mt-8 max-w-[1100px]">
                                    <Headerdata />
                                </div>
                            </div>
                        </div>
    
                        <div class="flex justify-center hover:text-black hover:bg-white cursor-pointer py-3 h-full px-2 text-[13px] tracking-wide  w-full border-l-[0.5px] border-zinc-700 uppercase"><span class="flex justify-center items-center">Bulk Pricing
                                <font-awesome-icon icon="fas fa-angle-double-down" class="text-red-500 px-1" /></span></div>
                        <div class="flex justify-center bg-[#2e5f59] hover:text-black hover:bg-white cursor-pointer py-3 w-full px-2 text-[13px] tracking-wide h-full border-x-[0.5px] border-zinc-700 uppercase"><span class="flex justify-center items-center"> Rewards
                                <font-awesome-icon icon="fas fa-angle-double-down" class="text-red-500 px-1" /></span></div>
    
                    </div>
                </div>
            </div>
    
        </div>
    
        <div class="md:hidden pt-6">
            <div class="fixed top-0 w-full  bg-white z-[9999]">
                <div class="fixed top-0 w-full bg-white z-[9999]">
                    <div class="flex justify-between bg-[#2e5f59] text-[13px] px-4 py-2 text-sm text-white">
                        <span>1-800-432-7995</span>
                        <span class="text-[13px]">$9.95 Flat Rate Shipping</span>
                    </div>
                    <div class="flex justify-between px-7 items-center ">
                        <div class="transition-transform duration-300 relative" @click="isMobileOpen=!isMobileOpen">
                            <div class="relative flex overflow-hidden items-center justify-center w-[50px] h-[50px] transform transition-all">
                                <div class="flex flex-col justify-between w-[30px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                                    <div :class="{'translate-y-6 delay-400': isMobileOpen}" class="bg-black h-[3px] w-7 transform transition-all duration-100 origin-left"></div>
                                    <div :class="{'translate-y-6 delay-400': isMobileOpen}" class="bg-black h-[3px] w-7 rounded transform transition-all duration-100"></div>
                                    <div :class="{'translate-y-6': isMobileOpen}" class="bg-black h-[3px] w-7 transform transition-all duration-100 origin-right"></div>
    
                                    <div class="absolute items-center justify-between transform transition-all duration-400 top-2.5   flex w-0 " :class="{'w-12 translate-x-0': isMobileOpen, '-translate-x-16': !isMobileOpen}">
                                        <div class="absolute bg-black h-[3px] w-7 transform transition-all duration-400 rotate-0 delay-100 " :class="{'rotate-45': isMobileOpen, '-translate-x-0': !isMobileOpen}"></div>
                                        <div class="absolute bg-black h-[3px] w-7 transform transition-all duration-400 delay-100 " :class="{'-rotate-45': isMobileOpen, '-rotate-0': !isMobileOpen}"></div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                        <div class="w-full ">
                            <img src="https://cdn11.bigcommerce.com/s-phjrc3z910/images/stencil/300w/image-manager/superior-lighting-logo.png" alt="no logo img" class="h-[63px] w-[158px]" />
    
                        </div>
                        <div class="flex px-2 ">
                            <img src="../assets/icons/icon-account-mobile.svg" alt="" class="px-3 text-[#2e5f59]">
    
                            <div class="hidden sm:block w-full  text-right px-2 pt-1 text-[#2e5f59]" @click="showSearchbar=!showSearchbar">
                                <font-awesome-icon icon="fa-solid fa-search" size="xl" />
                            </div>
                            <img src="../assets/icons/icon-cart-mobile.svg" alt="" class="ps-3 me-8">
                        </div>
    
                    </div>
    
                </div>
                <div class="flex w-100 border-[1px] sm:border-2 rounded-md sm:rounded-none  border-[#2e5f59] ps-4 pe-0 my-2 mx-4 mt-32 sm:mx-0 py-0" v-if="showSearchbar">
                    <input type="text" placeholder="Search…" class="py-2 text-md w-full border-0 focus:outline-none ">
                    <button type="submit" class="  focus:outline-none focus:shadow-outline">
                        <div class=" sm:hidden">
                            <font-awesome-icon icon="fa-solid fa-search" size="lg" class="px-3 py-3" />
                        </div>
                        <div class="hidden px-2 h-10   text-white sm:block py-2 bg-[#2e5f59] ">
                            Close
                        </div>
                    </button>
    
                </div>
            </div>
    
            <div>
    
                <div class=" flex  flex-col p-6 top-[108px] w-full mt-16  bg-[#2e5f59] absolute overflow-auto z-[999]" v-if="isMobileOpen">
                    <div class="text-center  mx-8 pb-6">
                        <p class="text-[26px] text-white mb-3">
                            1-800-432-7995
                        </p>
                        <div class="bg-white mx-auto px-2  w-40 py-1">
                            <common.ClickForRecords />
                        </div>
    
                    </div>
                    <div class=" text-white  font-medium py-5 text-[14px] px-1 tracking-[1px]">
                        <div class=" border-y-2 py-5">
                            <div class=" cursor-pointer py-4 w-full shadow-[0_3px_3px_-3px_rgba(#FF0000)] shadow-[#2c4c47] ease-in-out duration-300" @click="hoveredClearnces=!hoveredClearnces"><span class="flex justify-between px-3">Best seller
                                    <font-awesome-icon icon="fas fa-angle-double-up" class="text-white px-1" :class="{ 'rotate-180': hoveredClearnces }" /></span>
                                <div class=" mt-[17px] w-full  ease-in-out duration-300" v-if="hoveredClearnces">
                                    <Headerdata />
                                </div>
                            </div>
    
                            <div class=" cursor-pointer py-4  w-full  shadow-[0_3px_3px_-3px_rgba(#FF0000)] shadow-[#2c4c47]"><span class="flex justify-between px-3">Clearance
                                    <font-awesome-icon icon="fas fa-angle-double-up" class="text-white px-1" :class="{ 'rotate-180': hoveredBulbs }" /></span>
                            </div>
    
                            <div class=" cursor-pointer py-4  w-full shadow-[0_3px_3px_-3px_rgba(#FF0000)] shadow-[#2c4c47]" @click="hoveredBulbs=!hoveredBulbs"><span class="flex justify-between px-3">LED Bulbs
                                    <font-awesome-icon icon="fas fa-angle-double-up" class="text-white px-1" :class="{ 'rotate-180': hoveredBulbs }" /></span>
                                <div class=" mt-[17px] w-full transition-transform duration-300" v-if="hoveredBulbs">
                                    <Headerdata />
                                </div>
                            </div>
                            <div class="  cursor-pointer py-4   w-full shadow-[0_3px_3px_-3px_rgba(#FF0000)] shadow-[#2c4c47]" @click="hoveredFixtures=!hoveredFixtures"><span class="flex justify-between px-3">Led Fixtures
                                    <font-awesome-icon icon="fas fa-angle-double-up" class="text-white px-1" :class="{ 'rotate-180': hoveredFixtures }" /></span>
                                <div class="absolute mt-[17px] w-full transition-transform duration-300" v-if="hoveredFixtures">
                                    <Headerdata />
    
                                </div>
                            </div>
                            <div class=" cursor-pointer py-4   w-full shadow-[0_3px_3px_-3px_rgba(#FF0000)] shadow-[#2c4c47]" @click="hoveredLights=!hoveredLights"><span class="flex justify-between px-3">Solar Lights
                                    <font-awesome-icon icon="fas fa-angle-double-up" class="text-white px-1" :class="{ 'rotate-180': hoveredLights }" /></span>
                                <div class="absolute mt-[17px] w-full transition-transform duration-300" v-if="hoveredLights">
                                    <Headerdata />
    
                                </div>
                            </div>
                            <div class="  cursor-pointer py-4    w-full shadow-[0_3px_3px_-3px_rgba(#FF0000)] shadow-[#2c4c47]" @click="hoveredEmergency=!hoveredEmergency"><span class="flex justify-between px-3">Emergency/Exists
                                    <font-awesome-icon icon="fas fa-angle-double-up" class="text-white px-1" :class="{ 'rotate-180': hoveredEmergency }" /> </span>
                                <div class="absolute mt-[17px] w-full transition-transform duration-300" v-if="hoveredEmergency">
                                    <Headerdata />
    
                                </div>
                            </div>
                            <div class="  cursor-pointer py-4 w-full shadow-[0_3px_3px_-3px_rgba(#FF0000)] shadow-[#2c4c47] " @click="hoveredBulbs=!hoveredBulbs"><span class="flex justify-between px-3">More Lights
                                    <font-awesome-icon icon="fas fa-angle-double-up" class="text-white px-1" :class="{ 'rotate-180': hoveredBulbs }" /></span>
                                <div class="absolute mt-[17px] w-full transition-transform duration-300" v-if="hoveredMoreLight">
                                    <Headerdata />
    
                                </div>
                            </div>
                            <div class="  cursor-pointer py-4  w-full shadow-[0_3px_3px_-3px_rgba(#FF0000)] shadow-[#2c4c47]"><span class="flex justify-between px-3">Bulk Pricing
                                    <font-awesome-icon icon="fas fa-angle-double-up" class="text-white px-1" :class="{ 'rotate-180': hoveredBulbs }" /></span></div>
                            <div class="  cursor-pointer py-4   w-full  shadow-[0_3px_3px_-3px_rgba(#FF0000)] shadow-[#2c4c47]"><span class="flex justify-between px-3">Rewards
                                    <font-awesome-icon icon="fas fa-angle-double-up" class="text-white px-1" :class="{ 'rotate-180': hoveredBulbs }" /></span></div>
                        </div>
    
                    </div>
                    <div class="flex flex-col justify-between font-normal text-xs text-white px-1 py-5 tracking-[1px]">
                        <NuxtLink to="#" class="p-4 hover:text-green-400"> Trade Professional Application</NuxtLink>
                        <NuxtLink to="#" class="py-4 ps-4 hover:text-green-400"> My Quote <span class="bg-red-500 rounded-full  h-[20px] w-[20px] px-[5px] me-5">0</span></NuxtLink>
    
                        <NuxtLink to="#" class="p-4 mt-2 hover:text-green-400"> My Quotes</NuxtLink>
                        <NuxtLink to="#" class="p-4 hover:text-green-400"> My Orders</NuxtLink>
                        <NuxtLink to="#" class="p-4 hover:text-green-400">My Rewards</NuxtLink>
                        <NuxtLink to="#" class="p-4 hover:text-green-400"> Sign in</NuxtLink>
                        <p class="px-6">or</p>
                        <NuxtLink to="#" class="p-4 hover:text-green-400"> Register</NuxtLink>
                        <NuxtLink to="#" class="p-4 hover:text-green-400">Order History</NuxtLink>
                        <NuxtLink to="#" class="p-4 hover:text-green-400">Contact Us</NuxtLink>
                        <NuxtLink to="#" class="p-4 hover:text-green-400">Sign out</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <script setup>
    import {
        ref
    } from 'vue';
    const hoveredClearnces = ref(false);
    const hoveredBulbs = ref(false);
    const hoveredFixtures = ref(false);
    const hoveredLights = ref(false);
    const hoveredEmergency = ref(false);
    const hoveredMoreLight = ref(false);
    const isMobileOpen = ref(false);
    const showSearchbar = ref(true);
    </script>
    
    <style scoped>
    
    </style>