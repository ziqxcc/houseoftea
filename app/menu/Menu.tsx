"use client";
import React, { useEffect, useState } from "react";

function Menu() {
  const MENU: any = [
    {
      image: "113.jpg",
      name: "Fresh Juices",
      items: [
        { name: "POMEGRANATE", pic: "Pomegrenate.jpg" },
        { name: "PAPAYA", pic: "pappaya.jpg" },
        { name: "COCKTAIL", pic: "COCKTAIL.jpg" },
        { name: "SWEET MELON", pic: "SWEET MELON.jpg" },
        { name: "ORANGE", pic: "Orange.jpg" },
        { name: "PINEAPPLE", pic: "pineapple.jpg" },
        { name: "CARROT", pic: "carrot.jpg" },
        { name: "APPLE", pic: "apple.jpg" },
        { name: "STRAWBERRY", pic: "Strawberry.jpg" },
        { name: "AVOCADO", pic: "Avacado.jpg" },
        { name: "LEMON MINT", pic: "Lemon Mint.jpg" },
        { name: "WATERMELON", pic: "Watermelon.jpg" },
        { name: "BANANA", pic: "Banana.jpg" },
        { name: "MANGO", pic: "mango.jpg" },
        { name: "KIWI", pic: "Kiwi.jpg" },
        { name: "GUAVA", pic: "Guava.jpg" },
        { name: "CHICKOO", pic: "Chicku.jpg" },
        { name: "GRAPE", pic: "Grape.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "112.jpg",
      name: "Special Juices",
      items: [
        { name: "CRYSTAL", pic: "Crystal.jpg" },
        { name: "ABADI", pic: "Abadi.jpg" },
        { name: "SALOOM", pic: "Salom.jpg" },
        { name: "ABOOD", pic: "Abood.jpg" },
        { name: "50/50", pic: "50x50.jpg" },
        { name: "THABAKATH", pic: "Tabakath.jpg" },
        { name: "HT SPECIAL JUICE", pic: "House Of Tea Sp Juice.jpg" },
        { name: "FALAK", pic: "Falak.jpg" },
        { name: "MANGO PASSION", pic: "Mango Passion.jpg" },
        { name: "EMIRATES COCKTAIL", pic: "Emirate Cocktail.jpg" },
        { name: "CORNICHE", pic: "Corniche.jpg" },
        { name: "BURJ AL ARAB", pic: "Burj Al Arab.jpg" },
        { name: "AWAR DALB", pic: "Avar Al Qalb.jpg" },
        { name: "LEXUS", pic: "Lexus.jpg" },
        { name: "MANGOSTA", pic: "Mangoista.jpg" },
        { name: "BANANA STRAWBERRY", pic: "Banana Strwberry.jpg" },
        { name: "HAFEETHY", pic: "Hafeety.jpg" },
        { name: "BROKEN HEART", pic: "Broken Heart.jpg" },
        { name: "ARABIAN NIGHT", pic: "Arabian Night.jpg" },
        { name: "LAILA MAJNU", pic: "Laila Majnu.jpg" },
        { name: "HABTOOR CITY", pic: "Habtoor City.jpg" },
        { name: "MAREENA", pic: "Mareena.jpg" },
        { name: "DEFOOD EXPRESS", pic: "Deefod Expres.jpg" },
        // { name: "BLUEBERRY BOOSTER", pic: "boost.jpg" },
        // { name: "BLUEBERRY MANGO", pic: "boost.jpg" },
        // { name: "BLUEBERRY AVOCADO", pic: "boost.jpg" },
        // { name: "BLUEBERRY BANANA", pic: "boost.jpg" },
        // { name: "BLUEBERRY STRAWBERRY", pic: "boost.jpg" },
        // -----------Healthy--------------
        { name: "BY FIVE", pic: "By five.jpg" },
        { name: "HANGOVER CURE", pic: "Hangover Cure.jpg" },
        { name: "POWER BOOSTER", pic: "Power Booster.jpg" },
        { name: "LIVER CURE", pic: "Liver Cure.jpg" },
        { name: "Bottle Juice", pic: "Bottle Juice.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "111.jpg",
      name: "Milkshakes",
      items: [
        { name: "Vanilla", pic: "Vannila Milkshake.jpg" },
        { name: "Pista", pic: "Pissta Milkshake.jpg" },
        { name: "Strawberry", pic: "Strawberry Milkshake.jpg" },
        { name: "Chocolate", pic: "Chcolate Milkshake.jpg" },
        { name: "LOTUS CRUSH MILK", pic: "Lotus Crsh Milk.jpg" },
        { name: "GALAXY CRUSH MILK", pic: "Glaxy Crsh Milk.jpg" },
        { name: "OREO CRUSH MILK", pic: "Oreo Crush Milk.jpg" },
        { name: "Pistachio", pic: "Pistachio.jpg" },
        { name: "BOUNTY CRUSH MILK", pic: "Bounty Crush Milk.jpg" },
        { name: "NUTELLA CRUSH MILK", pic: "Nuetella Crush Milk.jpg" },
        { name: "SNICKERS CRUSH MILK", pic: "Snickers Crush Milk.jpg" },
        { name: "CAPPUCCINO CRUSH MILK", pic: "Cappuchino Crush Milk.jpg" },
        { name: "KITKAT CRUSH MILK", pic: "Kit Kat Crush Milk.jpg" },
        { name: "TWIX CRUSH MILK", pic: "Twix Crush Milk.jpg" },
        { name: "KINDER CRUSH MILK", pic: "Kinder Crush Milk.jpg" },
        { name: "COLD COFFEE", pic: "Cold Coffee.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "114.jpg",
      name: "Faloodha",
      items: [
        { name: "Mango Falooda", pic: "Mango Falooda.jpg" },
        { name: "House Of Tea Falooda", pic: "House Of Tea Sp Falooda.jpg" },
        { name: "Strawberry Falooda", pic: "Strwberyy Falooda.jpg" },
        { name: "Mix Ice Cream", pic: "Mix Cream.jpg" },
        { name: "Avocado Falooda", pic: "Avacado Falooda.jpg" },
        { name: "Falooda", pic: "Falooda.jpg" },
        {
          name: "Oats, Dates, Banana, Milk",
          pic: "Oats Dates Banana Milk.jpg",
        },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "113.jpg",
      name: "Roob",
      items: [
        { name: "Roob Passion", pic: "Roob Passion.jpg" },
        { name: "Roob Ruman", pic: "Roob Ruman.jpg" },
        { name: "Roob Mango", pic: "Roob Mango.jpg" },
        { name: "Roob Strawberry", pic: "Roob Strawberry.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "113.jpg",
      name: "Slush",
      items: [
        { name: "Mix Berry", pic: "Mix Berry.jpg" },
        { name: "Mango Slush", pic: "Mango Slush.jpg" },
        { name: "Blue Slush", pic: "Blue Slush.jpg" },
        { name: "Passion Fruit", pic: "Pssion Fruit Mojito.jpg" },
        { name: "Strawberry", pic: "Strawberry Mojito.jpg" },
        { name: "Watermelon", pic: "Watermelon1.jpg" },
        { name: "Blue Curacao", pic: "Bluecaraco.jpg" },
        { name: "Mango", pic: "Mango Bricks.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "112.jpg",
      name: "Mojito",
      items: [
        { name: "Strawberry Passion Mojito", pic: "Mango Mojito.jpg" },
        { name: "Blueberry Passion Mojito", pic: "Mango Mojito.jpg" },
        { name: "Mix Berry Passion Mojito", pic: "Mango Mojito.jpg" },
        { name: "Green Apple Mojito", pic: "Mango Mojito.jpg" },
        { name: "Lemon Mojito", pic: "Mango Mojito.jpg" },
        { name: "Mojito Red Bull", pic: "Mango Mojito.jpg" },
        { name: "Mojito Vitaene C", pic: "Mango Mojito.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "111.jpg",
      name: "Bricks",
      items: [
        { name: "Watermelon Brick", pic: "Watermelon Brick.jpg" },
        { name: "Pineapple Brick", pic: "Pineapple Bricks.jpg" },
        { name: "Mix Fruit Brick", pic: "Mixed Bricks.jpg" },
        { name: "Mango Brick", pic: "Mango Bricks.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "114.jpg",
      name: "Brosted Chicken",
      items: [
        { name: "SNACK MEAL", pic: "Snack Meal.jpg" },
        { name: "DINNER MEAL", pic: "Dinner Meal.jpg" },
        { name: "JUMBO MEAL", pic: "Jumbo Meal.jpg" },
        { name: "HOUSE MEAL", pic: "House Meal.jpg" },
        { name: "STRIPS MEAL", pic: "Strips Meal.jpg" },
        { name: "FAMILY MEAL", pic: "Family Meal.jpg" },
        { name: "FAMILY BUCKET", pic: "Family Bucket.jpg" },
        // { name: "PARTY MEAL", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "113.jpg",
      name: "Appetizers",
      items: [
        { name: "CURLY FRIES CHEESE", pic: "Curly Fries W Cheeese.jpg" },
        { name: "POPCORN WITH CHEESE CHEETOS", pic: "popcorn w cheetos.jpg",},
        { name: "POTATO SPICY CHEESE", pic: "Potato Spicy Cheese.jpg" },
        { name: "POPCORN WITH SAUCE", pic: "popcorn w sauce.jpg" },
        { name: "CHILLI CHEETOS FRIES", pic: "Chilli Cheetos Fries.jpg" },
        { name: "POTATO CHEESE CHEETOS", pic: "popcorn w cheetos.jpg" },
        { name: "BEEFY FRIES", pic: "Beefy Fries.jpg" },
        { name: "CHEESY FRIES", pic: "Cheesy Fries.jpg" },
        { name: "CHEESY WEDGES", pic: "Cheesy Wedges.jpg" },
        { name: "HOTDOG FRIES", pic: "Hot Dog Fries.jpg" },
        { name: "FRENCH FRIES", pic: "French Fries.jpg" },
        { name: "MIXED POTATO CHEESE", pic: "Mixed Poatato Cheese.jpg" },
        { name: "ONION RINGS", pic: "OniN rINGS.jpg" },
        { name: "SPICY FRIES", pic: "Spicy Fries.jpg" },
        { name: "POTATO WEDGES", pic: "Potato wedges.jpg" },
        { name: "POTATO RINGS", pic: "Potato Ring.jpg" },
        { name: "CHICKEN CRISPY SPECIAL SAUCE", pic: "Chicken Crispy Special Sauce.jpg" },
        { name: "CRISPY NUGGETS WITH SP. SAUCE", pic: "Crispy Nuggets Sp sauce.jpg" },
        { name: "MOZZARELLA STICK", pic: "Mozzarela Stick.jpg" },
        { name: "DYNAMITE CHICKEN", pic: "Dynamite Chicken.jpg" },
        { name: "DYNAMITE SHRIMPS", pic: "Dynamate Prawns.jpg" },
        { name: "CHICKEN POPCORN", pic: "Chicken Popcorn.jpg" },
        { name: "PRAWNS POPCORN", pic: "Dynamate Prawns.jpg" },
        { name: "CHICKEN CHEETOS POPCORN", pic: "Chicken Cheetos Popcorn.jpg" },
        { name: "DYNAMITE POPCORN", pic: "Dynamite Popcorn.jpg" },
        { name: "POTATO SHAKE", pic: "Potato Shake.jpg" },
        { name: "FRIES HOTDOG CUP", pic: "Fries Hot Dog.jpg" },
        { name: "ZINKER CHEESE SHAKE", pic: "Zinger Cheese Shake.jpg" },
        { name: "ALA KAIFAK", pic: "Ala Khaifak.jpg" },
        { name: "FANTASIA", pic: "Fantasia.jpg" },
        { name: "HOUSE SPECIAL", pic: "House Special.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },

    {
      image: "113.jpg",
      name: "Indomic",
      items: [
        { name: "CHEESE", pic: "Indomie.jpg" },
        { name: "HOTDOG", pic: "Indomie.jpg" },
        { name: "CHICKEN", pic: "Indomie.jpg" },
        { name: "MEAT", pic: "Indomie.jpg" },
        { name: "VEGETABLE", pic: "Indomie.jpg" },
        { name: "CHEESE CHEETOS", pic: "Indomie.jpg" },
        { name: "CHIPS OMAN", pic: "Indomie.jpg" },
        { name: "INDOMIE PLAIN", pic: "Indomie.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "112.jpg",
      name: "Fresh Burger",
      items: [
        { name: "FRESH BURGER", pic: "Fresh Burger Chicken Beef.jpg" },
        { name: "GRAND BURGER", pic: "Grand Burger.jpg" },
        { name: "FRESH BURGER CHEETOS", pic: "Fresh Cheetos Burger.jpg" },
        { name: "BURGERISTA BEEF", pic: "Burgerista.jpg" },
        { name: "CLASSIC BURGER", pic: "Classic Beef.jpg" },
        { name: "TURKEY CHICKEN BURGER", pic: "Turkey Burger.jpg" },
        { name: "MIX CHEESE BURGER", pic: "Mix Cheese.jpg" },
        { name: "DYNAMITE BURGER", pic: "Dynamite Burger.jpg" },
        { name: "SIGNATURE", pic: "Siganatre Burger.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "111.jpg",
      name: "Zinger Special",
      items: [
        { name: "CRISPY CHEETOS", pic: "Crispy Cheetos Burger.jpg" },
        { name: "SP ZINGER BURGER", pic: "Sp Zinger Burger.jpg" },
        { name: "TEXAS CRUNCHY", pic: "Texas Burger.jpg" },
        { name: "ZINGER DOUBLE", pic: "Zinger Double.jpg" },
        { name: "ZINGER TURKEY DOUBLE", pic: "Zinger Turkey.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "114.jpg",
      name: "Burger Sandwiches",
      items: [
        { name: "KHALEEJ DOUBLE BURGER", pic: "khaleej Burger.jpg" },
        { name: "MAL MAL MATHAFI BURGER", pic: "Mal mal Mthafi Burger.jpg" },
        { name: "CRISPY ZINGER BURGER", pic: "Crispy Zinger Burger.jpg" },
        { name: "TIKKA BURGER", pic: "Tikka Burger.jpg" },
        { name: "JUMBO PRAWNS BURGER", pic: "Jumbo Prawns Burger.jpg" },
        // { name: "CHI. LEMON BURGER", pic: "" },
        { name: "DOUBLE BURGER", pic: "Double Burger.jpg" },
        { name: "FISH BURGER", pic: "Fish Burger.jpg" },
        { name: "KHALEEJ BURGER", pic: "Khaleej Burger Single.jpg" },
        { name: "ZINGER BURGER", pic: "Zinger Burger.jpg" },
        { name: "ITALIAN BURGER", pic: "Italian Burger.jpg" },
        { name: "BURGER CHI/BEEF", pic: "Burger Chicken  Beef.jpg" },
        { name: "VEGETABLE BURGER", pic: "Veg Burger.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "113.jpg",
      name: "Grilled Burger",
      items: [
        { name: "Grilled Burger", pic: "Grilled Burger.jpg" },
        { name: "Iphone Pro Max", pic: "I Phone Burger.jpg" },
        { name: "KGF Burger", pic: "kGF Burger.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "113.jpg",
      name: "Spanish & Italian",
      items: [
        { name: "Spanish Spicy Zinger Double", pic: "Spanish Spicy Zinger.jpg" },
        { name: "Spanish Wrap", pic: "Spanish Wrap.jpg" },
        { name: "Italian Zinger Double", pic: "Italian Zinger Double.jpg" },
        { name: "Italian Zinger Burger", pic: "Italian Zinger.jpg" },
        { name: "Italian Wrap", pic: "italian wrap.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "112.jpg",
      name: "Combo Meals",
      items: [
        { name: "BURGER MEAL", pic: "Burger Meal.jpg" },
        { name: "ZINGER BURGER MEAL", pic: "Zinger meal.jpg" },
        { name: "ZINGER WRAP MEAL", pic: "Zinger Wrp Meal.jpg" },
        { name: "KIDS MEAL", pic: "Kids Meal.jpg" },
        // { name: "KIDS NUGGETS", pic: "" },
        // { name: "WOW BURGER", pic: "" },
        // { name: "HOUSE OF TEA SP BURGER", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "111.jpg",
      name: "Combo Sandwiches",
      items: [
        { name: "MATHAFI COMBO", pic: "Mathafi poratta.jpg" },
        { name: "CALZONI COMBO", pic: "Calzoni Combo.jpg" },
        { name: "GRAND ZINGER COMBO", pic: "Grand Zinger Combo.jpg" },
        { name: "CHICKEN CHILLI COMBO", pic: "Chicken Chilli Combo.jpg" },
        { name: "SHEESH TAWOOK COMBO", pic: "Shish Tawwok Combo.jpg" },
        { name: "FISH FILLET DOMBO", pic: "Fish Fillet Combo.jpg" },
        { name: "ZINGER COMBO", pic: "Zinger Combo.jpg" },
        { name: "CHAJUN COMBE", pic: "Cajun Combo.jpg" },
        { name: "CHICKEN NUGGETS COMBO", pic: "Chicken Nuggets Combo.jpg" },
        { name: "TIKKA COMBO", pic: "Tikka Combo.jpg" },
        { name: "KABAB COMBO(CHI/BEEF)", pic: "Kbab Combo.jpg" },
        { name: "CHICKEN FILLET COMBO", pic: "Chicken Fillet Combo.jpg" },
        { name: "HOTDOG COMBO", pic: "Hot Dog Combo.jpg" },
        { name: "CHICKEN LEMON COMBO", pic: "Chicken Lemon Combo.jpg" },
        { name: "EGG BOILED COMBO", pic: "Egg Boiled Combo.jpg" },
        { name: "ZINGER CHEETOS COMBO", pic: "Zinger Chettos Combo.jpg" },
        { name: "SPANISH COMBO", pic: "Spanish Combo.jpg" },
        // { name: "ORILLED COMBO", pic: "" },
        { name: "ZINGER TURKEY COMBO", pic: "Zinger Turkey Combo.jpg" },
        { name: "KOFTA COMBO", pic: "Kofta Combo.jpg" },
        { name: "TURKISH FILLET COMBO", pic: "Turkish Fillet Combo.jpg" },
        { name: "THIGHS COMBO", pic: "Thighs Combo.jpg" },
        { name: "JUMBO PRAWNS COMBO", pic: "Jumbo Prwns Combo.jpg" },
        { name: "ZINGER PRAWNS COMBO", pic: "zinger prawns combo.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "114.jpg",
      name: "House Special",
      items: [
        { name: "SEMI HOTDOG", pic: "Semi Hot Dog.jpg" },
        { name: "KITCHEN HASSAN", pic: "Kitchen hassan.jpg" },
        { name: "SEMI PULLED", pic: "Semi Pulled.jpg" },
        { name: "SEMI ZINGER", pic: "Semi Zinger.jpg" },
        { name: "SEMI CHEETOS HOTDOG", pic: "Semi Chettos.jpg" },
        { name: "SEMI ZINGER CHEETOS", pic: "Semi Zinger.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "113.jpg",
      name: "Club Sandwiches",
      items: [
        { name: "MEGA CLUB MAJLIS", pic: "mega club majlis.jpg" },
        // { name: "MAJLIS CLUB", pic: "majlis club.jpg" },
        { name: "FAMILY MIX", pic: "family mix.jpg" },
        {
          name: "HOUSE OF TEA SPECIAL CLUB",
          pic: "House Of Tea Sp.jpg",
        },
        { name: "ZINGER CLUB", pic: "zinger club.jpg" },
        { name: "ARABIC CLUB", pic: "Emarat Club.jpg" },
        { name: "EXPRESS CLUB", pic: "express club.jpg" },
        { name: "CHEETOS CLUB", pic: "Chettos Club.jpg" },
        { name: "MEGA CLUB", pic: "mega club.jpg" },
        // { name: "MIX CLUB", pic: "mix club.jpg" },
        { name: "IPHONE", pic: "I phone Club.jpg" },
        { name: "VEG. CLUB", pic: "veg club.jpg" },
        { name: "CHI/BEEF CLUB", pic: "Chicken Beef Club.jpg" },
        { name: "MATHAFI CLUB", pic: "mathafi club.jpg" },
        { name: "EMARAT CLUB", pic: "Emarat Club.jpg" },
        { name: "SHAWARMA CLUB", pic: "shawarma club.jpg" },
        { name: "HOTDOG CLUB", pic: "Hot Dog Club.jpg" },
        { name: "LULU CLUB", pic: "lulu club.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "112.jpg",
      name: "Arabian Sandwiches",
      items: [
        { name: "FRANCISCO ARABIC", pic: "Fransico Arabic1.jpg" },
        { name: "CHEETOS ARABIC", pic: "cheetos club.jpg" },
        { name: "ZINGER MATHAR", pic: "Zinger Mathar.jpg" },
        { name: "HASSAN MATHAR", pic: "Hassan Mtar.jpg" },
        { name: "ISMAYIL MATHAR", pic: "Ismail Mathar.jpg" },
        // { name: "MARIYAM MATHAR", pic: "" },
        { name: "CHICKEN TANDOORI MIX", pic: "Chicken Tandoori.jpg" },
        { name: "CHICKEN LEMON ARABIC", pic: "Chicken Lemon Arbice.jpg" },
        { name: "SHEESH TAWOOK ARABIC", pic: "Shish Tawooq Arbic.jpg" },
        { name: "ZINGER ARABIC", pic: "Zinger Arbic.jpg" },
        { name: "TANDOORI ARABIC", pic: "Tandoori Arbic.jpg" },
        { name: "SHAWARMA ARABIC", pic: "Shawarama Arabic.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "111.jpg",
      name: "Poratta Sandwiches",
      items: [
        { name: "House Of Tea Sp.", pic: "House Tea sp Poratta.jpg" },
        { name: "Zinger Poratta", pic: "Zinger poratta.jpg" },
        { name: "Sheesh Tawooq Poratta", pic: "shish tawooq Poratta.jpg" },
        { name: "Nuggets Poratta", pic: "Nuggets Poratta.jpg" },
        { name: "London Poratta", pic: "Londan poratta.jpg" },
        { name: "Tikka Sp. Poratta", pic: "Tikka Sp Poratta.jpg" },
        { name: "Kabab Poratta", pic: "Kabab Poratta.jpg" },
        { name: "Burger Poratta", pic: "Burger Poratta.jpg" },
        { name: "Cajun Poratta", pic: "Cajun Poratta.jpg" },
        { name: "Fillet Poratta", pic: "Fillet Poratta.jpg" },
        { name: "Prawns Poratta", pic: "Prawns Poratta.jpg" },
        { name: "Oman Chips Poratta", pic: "Oman Chips Poratta.jpg" },
        { name: "Beef Nashif Poratta", pic: "Beef Nashif Poratta.jpg" },
        { name: "Chi. Lemon Poratta", pic: "Chicken Lemon Poratta.jpg" },
        { name: "Keema Poratta", pic: "Keema Poratta.jpg" },
        { name: "Dynamite Paris Poratta", pic: "Dynamite Paris Poratta.jpg" },
        { name: "Hotdog Poratta", pic: "Hot Dog Poratta.jpg" },
        { name: "Chilli Poratta", pic: "Chilli Poratta.jpg" },
        { name: "Samosa Fransisco Poratta", pic: "Samoosa Fransico.jpg" },
        { name: "Minhali Poratta", pic: "Minhali  Poratta.jpg" },
        { name: "Khalifa Poratta", pic: "Khalifa Poratta.jpg" },
        { name: "GMC Poratta", pic: "Gmc Poratta.jpg" },
        { name: "Francisco Poratta", pic: "Fransisco Poratta.jpg" },
        { name: "Dubai Poratta", pic: "Dubai Poratta.jpg" },
        { name: "Omplete Poratta", pic: "Omblete poratta.jpg" },
        { name: "Egg Tomato Poratta", pic: "Egg tomato poratta.jpg" },
        { name: "Thartheeb Poratta", pic: "thartheeb poratta.jpg" },
        { name: "Nutella Poratta", pic: "Nuetella poratta.jpg" },
        { name: "Falafel Poratta", pic: "Falafil Poratta.jpg" },
        { name: "Egg Boiled Poratta", pic: "Egg Boiled Poratta.jpg" },
        { name: "Cheese Zaatar Poratta", pic: "Cheese Zatar poratta.jpg" },
        { name: "Cheese Poratta", pic: "Cheese Poratta.jpg" },
        { name: "Rubiyan Fransisco", pic: "Rubiyan Fransico Poratta.jpg" },
        { name: "Chicken Chilli Cheetos", pic: "Chicken Chilli Cheetos.jpg" },
        { name: "Expo Poratta", pic: "Expo Poratta.jpg" },
        { name: "Pubg Poratta", pic: "Pubg Poratta.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "114.jpg",
      name: "Wrap Sandwiches",
      items: [
        { name: "Abdul Azeez Special", pic: "Abudul Azeez Sp Wrap.jpg" },
        { name: "Zinger Wrap", pic: "Zinger Wrap.jpg" },
        { name: "Mathafi Wrap", pic: "Mathafi Wrap.jpg" },
        { name: "Noggets Wrap", pic: "Nuggets Wrap.jpg" },
        { name: "Kabab Wrap", pic: "Kabab Wrap.jpg" },
        { name: "Egg Wrap", pic: "Egg Wrap.jpg" },
        { name: "Twister Wrap", pic: "Twister Wrap.jpg" },
        { name: "Tikka Wrap", pic: "Tikka Wrap.jpg" },
        { name: "Falafel Wrap", pic: "Falafil Wrap.jpg" },
        { name: "HOUSE OF TEA SPECIAL COMBO", pic: "House Of Tea Special Combo.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "113.jpg",
      name: "Diet Club & Sandwiches",
      items: [
        { name: "SPECIAL DIET MEAL", pic: "SP diet Meal.jpg" },
        { name: "HOTDOG DIET SANDWICH JUICE", pic: "Hot Dog Diet Sandwich.jpg" },
        { name: "EGG DIET SANDWICH", pic: "Egg Deit Sandwich.jpg" },
        { name: "Diet Egg", pic: "Egg Deit Sandwich.jpg" },
        { name: "Diet Chicken Club", pic: "Deit Chicken Club.jpg" },
        { name: "Veg. Diet Club", pic: "Veg Deeit Club.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "112.jpg",
      name: "Plate Items",
      items: [
        // { name: "Fruit Salad Plate", pic: "" },
        { name: "MINI SAMOSA SP CHEESE, CHICKEN, KEEMA, VEG", pic: "Mini Samoosa.jpg" },
        { name: "CHICKEN CHILLI PLATE", pic: "Chicken Chilli.jpg" },
        { name: "BEEF NASHIF PLATE", pic: "Beef Nashif Plate.jpg" },
        { name: "FRANSISCO PLATE", pic: "Fransico Plate.jpg" },
        { name: "NUGGETS PLATE", pic: "Nuggets Plate.jpg" },
        { name: "FASDOLIYA PLATE", pic: "Fasooliya Plate.jpg" },
        { name: "JUMBO PRAWNS PLATE", pic: "Jumbo Prawns Plate.jpg" },
        { name: "BUTTERFLY PRAWNS", pic: "Butter Fly Prawns Plate.jpg" },
        { name: "DAL PLATE", pic: "Dal Plate.jpg" },
        { name: "EGG HALF FRY", pic: "Egg Half Fry.jpg" },
        { name: "KEEMA PLATE", pic: "Kemma Plate.jpg" },
        { name: "HOTDOG PLATE", pic: "Hot Dog pLATE.jpg" },
        { name: "FOUL", pic: "fOUL.jpg" },
        { name: "TUNA PLATE", pic: "Tuna Plate.jpg" },
        { name: "EGG TOMATO PLATE", pic: "Egg Tomato Plate.jpg" },
        // { name: "BREAD TOAST", pic: "" },
        { name: "VEG SAMOSA", pic: "Samoosa.jpg" },
        { name: "POTATO SAMOSA", pic: "Samoosa.jpg" },
        { name: "CHEESE SAMOSA", pic: "Samoosa.jpg" },
        { name: "CHICKEN SAMOSA", pic: "Samoosa.jpg" },
        { name: "KEEMA SAMOSA", pic: "Samoosa.jpg" },
        { name: "CHIPS OMAN SAMOSA", pic: "Samoosa.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "111.jpg",
      name: "Tea & Coffiee",
      items: [
        { name: "Sahlab", pic: "Sahalab.jpg" },
        { name: "Habbath Al Hamara, VEG", pic: "Habbath Al Hamra.jpg" },
        { name: "Cappuccino", pic: "Cappucino.jpg" },
        { name: "SAMOSA TEA COMBO", pic: "Samoosa Tea Combo.jpg" },
        { name: "Karak Ginger", pic: "Arbic Cofe.jpg" },
        { name: "Karak Zater", pic: "Arbic Cofe.jpg" },
        { name: "Black Tea", pic: "Arbic Cofe.jpg" },
        { name: "Lemon Tea", pic: "Arbic Cofe.jpg" },
        { name: "Strawberry Tea", pic: "Arbic Cofe.jpg" },
        { name: "Pistachio Milk", pic: "Pistachio Milk.jpg" },
        { name: "Fresh Milk Zafran", pic: "Fresh Milk Zafran.jpg" },
        { name: "Oats with Milk", pic: "Oats W Milk.jpg" },
        { name: "Karak Zafran", pic: "Karak Zafran.jpg" },
        { name: "Muhallebi", pic: "Muhalebi.jpg" },
        { name: "Corn Flakes", pic: "Corn Flakes.jpg" },
        { name: "Hot Chocolate", pic: "hot chocolate.jpg" },
        { name: "Corn Flakes Chocolate", pic: "Chocolate Corn fLAKES.jpg" },
        { name: "Horlicks", pic: "horlicks.jpg" },
        { name: "Fresh Milk Zafran", pic: "Fresh Milk Zafran.jpg" },
        { name: "Fresh Milk Cardamon", pic: "Fresh Milk Zafran.jpg" },
        { name: "Fresh Milk Cappuccino", pic: "Fresh Milk Zafran.jpg" },
        { name: "Fresh Milk Boost", pic: "Fresh Milk Zafran.jpg" },
        { name: "Fresh Milk Nescafe", pic: "Fresh Milk Zafran.jpg" },
        { name: "Fresh Milk Zater", pic: "Fresh Milk Zafran.jpg" },
        { name: "Fresh Milk Ginger", pic: "Fresh Milk Zafran.jpg" },
        { name: "Fresh Milk Halba", pic: "Fresh Milk Zafran.jpg" },
        { name: "Fresh Milk Vanilla", pic: "Fresh Milk Zafran.jpg" },
        { name: "Fresh Milk Maramiya", pic: "Fresh Milk Zafran.jpg" },
        { name: "Fresh Milk Strawberry", pic: "Fresh Milk Zafran.jpg" },
        { name: "Fresh Milk Anise", pic: "Fresh Milk Zafran.jpg" },
        { name: "F.Milk Chamomile W Anise", pic: "Fresh Milk Zafran.jpg" },
        { name: "Black Coffee", pic: "boost.jpg" },
        { name: "White Coffee", pic: "horlicks.jpg" },
        { name: "Cappuccino Caramel", pic: "Cappucino.jpg" },
        { name: "Cappuccino Vanilla", pic: "Cappucino.jpg" },
        { name: "Cappuccino Mocha", pic: "Cappucino.jpg" },
        { name: "Turkish coffee", pic: "Turkish Cofee.jpg" },
        { name: "Arabic Coffee", pic: "Arbic Cofe.jpg" },
        { name: "Saudi Gava", pic: "Saudi Gava.jpg" },
        { name: "Karak Tea", pic: "Karak Tea.jpg" },
        { name: "Boost", pic: "boost.jpg" },
        { name: "Biscuit Tea", pic: "Biscut Tea.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    // {
    //   image: "114.jpg",
    //   name: "Hot Drinks",
    //   items: [
    //     { name: "Yansoon", pic: "" },
    //     { name: "Cinnamon", pic: "" },
    //     { name: "Ginger", pic: "" },
    //     { name: "Karkadi", pic: "" },
    //     { name: "Lemon Ginger", pic: "" },
    //     { name: "Chocolate", pic: "" },
    //     { name: "Chamomile", pic: "" },
    //   ],
    //   dis: "Sed ut perspiciatis unde",
    // },
    // {
    //   image: "113.jpg",
    //   name: "Tea Bag",
    //   items: [
    //     { name: "Black", pic: "" },
    //     { name: "Green Mint", pic: "" },
    //     { name: "Twinings", pic: "" },
    //     { name: "Anise", pic: "" },
    //     { name: "Cinnamon", pic: "" },
    //     { name: "Zater", pic: "" },
    //     { name: "Royal", pic: "" },
    //     { name: "Moroccan", pic: "" },
    //     { name: "Strawberry", pic: "" },
    //     { name: "Lemon Tea", pic: "" },
    //   ],
    //   dis: "Sed ut perspiciatis unde",
    // },
    {
      image: "114.jpg",
      name: "Flask",
      items: [
        { name: "Karak Tea", pic: "Flask Tea.jpg" },
        { name: "Horlicks", pic: "Flask Tea.jpg" },
        { name: "Habbath Al Hamra", pic: "Flask Tea.jpg" },
        { name: "Sahlab", pic: "Flask Tea.jpg" },
        { name: "Arabic Gava", pic: "Flask Tea.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "113.jpg",
      name: "Cake Items",
      items: [
        { name: "LONDON CAKE", pic: "Londan Cake.jpg" },
        { name: "LOTUS CAKE", pic: "Lotus Cake.jpg" },
        { name: "HONEY CAKE", pic: "Honey Cake.jpg" },
        { name: "HONEY LATTE", pic: "Honey Late.jpg" },
        { name: "DREAM CAKE", pic: "Dream Cake.jpg" },
        { name: "ZAFRAN CAKE", pic: "Zafran Cake.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
  ];

  const [activeSection, setActiveSection] = useState<string>("one");

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;
    let newActiveSection = "one";

    MENU.forEach((name: any, i: any) => {
      const sectionElement = document.getElementById(name);
      if (sectionElement && sectionElement.offsetTop <= scrollPosition) {
        newActiveSection = name;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active section

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black flex flex-col items-center w-full">
      <section className="w-[80%] max-w-[1200px] flex flex-col items-center py-28 text-white">
        <p className="text-primary uppercase">CHOOSE BEST OF</p>
        <h5 className="sub-title" data-aos="fade-up">
          House of Tea Menu
        </h5>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 mt-10 w-full gap-10">
          <div className=" bg-black w-full SideBar" id="SideBar">
            {MENU.map((item: any, index: number) => (
              <a
                href={`#${item.name}`}
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(item.name)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex gap-y-3 md:gap-y-5 py-3 group">
                <div className="w-full">
                  <h5 className="text-xl md:text-2xl group-hover:text-zinc-300 duration-300">
                    {item.name}
                  </h5>
                  <div className="count-before text-primary md:w-full flex justify-end text-xl md:text-4xl">
                    <p className="text-right bg-black pl-4 z-10 text-Merienda group-hover:text-white duration-300">
                      {/* {item.items.length} */}&gt;
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div
            className={`md:col-span-3 bg-secondary rounded-2xl flex gap-5 flex-col md:p-7 md:h-[2900px] overflow-y-scroll`}
          >
            {MENU.map((item: any, index: number) => (
              <section
                key={index}
                id={item.name}
                className={`grid grid-cols-1 md:grid-cols-3 gap-5 relative ${
                  index % 2 === 1 && "border-y-2 border-zinc-800 "
                } py-5 `}
              ><h1 className="absolute -top-4 outline-2 outline-zinc-900 text-zinc-300">{item.name}</h1>
                {item.items.map((item: any, index: number) => (
                  <div
                    key={index}
                    className=" flex flex-col items-start gap-2 group"
                  >
                    <div className="w-full h-48 rounded-lg overflow-hidden">
                      <img
                        src={`menu/${item.pic || "eeee.png"}`}
                        className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 duration-300"
                      />
                    </div>
                    <h5 className="text-white text-lg duration-300 group-hover:text-xl">
                      {item.name}
                    </h5>
                  </div>
                ))}
              </section>
            ))}
          </div>
        </div>
        <div className=" bg-black grid gap-3 w-full">
          {MENU.map((item: any, index: number) => (
            <div
              key={index}
              className="md:hidden bg-secondary collapse collapse-arrow"
            >
              <input
                type="radio"
                name="my-accordion-2"
                defaultChecked={index === 0}
              />
              <div className="collapse-title text-xl font-medium">
                <div className="w-full flex items-center justify-between">
                  <h5>{item.name}</h5>
                  <p className="text-primary mr-4 text-Merienda group-hover:text-white duration-300">
                    {item.items.length}
                  </p>
                </div>
              </div>
              <div className="collapse-content grid grid-cols-2 gap-4">
                {item.items.map((item: any, index: number) => (
                  <div
                    key={index}
                    className=" flex flex-col items-start gap-2 group"
                  >
                    <div className="w-full h-32 rounded-lg overflow-hidden">
                      <img
                        src={`menu/${item.pic || "eeee.png"}`}
                        className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 duration-300"
                      />
                    </div>
                    <h5 className="text-white  duration-300 group-hover:text-[17px]">
                      {item.name}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;
