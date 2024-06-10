"use client";
import React, { useEffect, useState } from "react";

function Menu() {
  const MENU: any = [
    {
      image: "113.jpg",
      name: "Fresh Juices",
      items: [
        { name: "POMEGRANATE", pic: "POMEGRANATE.jpg" },
        { name: "PAPAYA", pic: "pappaya.jpg" },
        { name: "COCKTAIL", pic: "COCKTAIL.jpg" },
        { name: "SWEET MELON", pic: "SWEET MELON.jpg" },
        { name: "ORANGE", pic: "orange_juice.jpg" },
        { name: "PINEAPPLE", pic: "pineapple.jpg" },
        { name: "CARROT", pic: "carrot.jpg" },
        { name: "APPLE", pic: "apple.jpg" },
        { name: "STRAWBERRY", pic: "stowbery.jpg" },
        { name: "AVOCADO", pic: "avocado_juice.jpg" },
        { name: "LEMON MINT", pic: "lemion.jpg" },
        { name: "WATERMELON", pic: "watermalon.jpg" },
        { name: "BANANA", pic: "" },
        { name: "MANGO", pic: "mango.jpg" },
        { name: "KIWI", pic: "" },
        { name: "GUAVA", pic: "" },
        { name: "CHICKOO", pic: "" },
        { name: "GRAPE", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "112.jpg",
      name: "Special Juices",
      items: [
        { name: "CRYSTAL", pic: "boost.jpg" },
        { name: "ABADI", pic: "boost.jpg" },
        { name: "SALOOM", pic: "saloom_juice.jpg" },
        { name: "ABOOD", pic: "abood_juice.jpg" },
        { name: "50/50", pic: "50_50_special.jpg" },
        { name: "THABAKATH", pic: "boost.jpg" },
        { name: "HT SPECIAL JUICE", pic: "boost.jpg" },
        { name: "FALAK", pic: "boost.jpg" },
        { name: "MANGO PASSION", pic: "mango_passion.jpg" },
        { name: "EMIRATES COCKTAIL", pic: "boost.jpg" },
        { name: "CORNICHE", pic: "boost.jpg" },
        { name: "BURJ AL ARAB", pic: "boost.jpg" },
        { name: "AWAR DALB", pic: "boost.jpg" },
        { name: "LEXUS", pic: "boost.jpg" },
        { name: "MANGOSTA", pic: "mangosta.jpg" },
        { name: "BANANA STRAWBERRY", pic: "boost.jpg" },
        { name: "HAFEETHY", pic: "boost.jpg" },
        { name: "BROKEN HEART", pic: "boost.jpg" },
        { name: "ARABIAN NIGHT", pic: "boost.jpg" },
        { name: "LAILA MAJNU", pic: "boost.jpg" },
        { name: "HABTOOR CITY", pic: "boost.jpg" },
        { name: "MAREENA", pic: "boost.jpg" },
        { name: "DEFOOD EXPRESS", pic: "boost.jpg" },
        { name: "BLUEBERRY BOOSTER", pic: "boost.jpg" },
        { name: "BLUEBERRY MANGO", pic: "boost.jpg" },
        { name: "BLUEBERRY AVOCADO", pic: "boost.jpg" },
        { name: "BLUEBERRY BANANA", pic: "boost.jpg" },
        { name: "BLUEBERRY STRAWBERRY", pic: "boost.jpg" },
        // -----------Healthy--------------
        { name: "BY FIVE", pic: "boost.jpg" },
        { name: "HANGOVER CURE", pic: "boost.jpg" },
        { name: "POWER BOOSTER", pic: "boost.jpg" },
        { name: "LIVER CURE", pic: "boost.jpg" },
        { name: "Bottle Juice", pic: "boost.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "111.jpg",
      name: "Milkshakes",
      items: [
        { name: "Vanilla", pic: "" },
        { name: "Pista", pic: "" },
        { name: "Strawberry", pic: "" },
        { name: "Chocolate", pic: "" },
        { name: "LOTUS CRUSH MILK", pic: "" },
        { name: "GALAXY CRUSH MILK", pic: "galaxy_crush_milk.jpg" },
        { name: "OREO CRUSH MILK", pic: "oreo_crush_milk.jpg" },
        { name: "Pistachio", pic: "" },
        { name: "BOUNTY CRUSH MILK", pic: "" },
        { name: "NUTELLA CRUSH MILK", pic: "" },
        { name: "SNICKERS CRUSH MILK", pic: "" },
        { name: "CAPPUCCINO CRUSH MILK", pic: "" },
        { name: "KITKAT CRUSH MILK", pic: "" },
        { name: "TWIX CRUSH MILK", pic: "" },
        { name: "KINDER CRUSH MILK", pic: "" },
        { name: "COLD COFFEE", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "114.jpg",
      name: "Faloodha",
      items: [
        { name: "Mango Falooda", pic: "" },
        { name: "House Of Tea Falooda", pic: "" },
        { name: "Strawberry Falooda", pic: "" },
        { name: "Mix Ice Cream", pic: "" },
        { name: "Avocado Falooda", pic: "" },
        { name: "Falooda", pic: "" },
        { name: "Oats, Dates, Banana, Milk", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "113.jpg",
      name: "Roob",
      items: [
        { name: "Roob Passion", pic: "" },
        { name: "Roob Ruman", pic: "" },
        { name: "Roob Mango", pic: "" },
        { name: "Roob Strawberry", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "113.jpg",
      name: "Slush",
      items: [
        { name: "Mix Berry", pic: "" },
        { name: "Mango Slush", pic: "" },
        { name: "Blue Slush", pic: "" },
        { name: "Passion Fruit", pic: "passion_fruit.jpg" },
        { name: "Strawberry", pic: "stow.jpg" },
        { name: "Watermelon", pic: "watermallon.jpg" },
        { name: "Blue Curacao", pic: "blue.jpg" },
        { name: "Mango", pic: "mango.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "112.jpg",
      name: "Mojito",
      items: [
        { name: "Strawberry Passion Mojito", pic: "passion_fruit_mojito.jpg" },
        { name: "Blueberry Passion Mojito", pic: "passion_fruit_mojito.jpg" },
        { name: "Mix Berry Passion Mojito", pic: "passion_fruit_mojito.jpg" },
        { name: "Green Apple Mojito", pic: "" },
        { name: "Lemon Mojito", pic: "" },
        { name: "Mojito Red Bull", pic: "" },
        { name: "Mojito Vitaene C", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "111.jpg",
      name: "Bricks",
      items: [
        { name: "Watermelon Brick", pic: "" },
        { name: "Pineapple Brick", pic: "" },
        { name: "Mix Fruit Brick", pic: "" },
        { name: "Mango Brick", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "114.jpg",
      name: "Brosted Chicken",
      items: [
        { name: "SNACK MEAL", pic: "" },
        { name: "DINNER MEAL", pic: "" },
        { name: "JUMBO MEAL", pic: "" },
        { name: "HOUSE MEAL", pic: "" },
        { name: "STRIPS MEAL", pic: "" },
        { name: "FAMILY MEAL", pic: "" },
        { name: "FAMILY BUCKET", pic: "" },
        { name: "PARTY MEAL", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "113.jpg",
      name: "Appetizers",
      items: [
        { name: "CURLY FRIES CHEESE", pic: "" },
        { name: "POPCORN WITH CHEESE CHEETOS", pic: "cheetos_zinger_combo.jpg" },
        { name: "POTATO SPICY CHEESE", pic: "" },
        { name: "POPCORN WITH SAUCE", pic: "" },
        { name: "CHILLI CHEETOS FRIES", pic: "" },
        { name: "POTATO CHEESE CHEETOS", pic: "" },
        { name: "BEEFY FRIES", pic: "" },
        { name: "CHEESY FRIES", pic: "" },
        { name: "CHEESY WEDGES", pic: "" },
        { name: "HOTDOG FRIES", pic: "" },
        { name: "FRENCH FRIES", pic: "" },
        { name: "MIXED POTATO CHEESE", pic: "" },
        { name: "ONION RINGS", pic: "" },
        { name: "SPICY FRIES", pic: "" },
        { name: "POTATO WEDGES", pic: "" },
        { name: "POTATO RINGS", pic: "" },
        { name: "CHICKEN CRISPY SPECIAL SAUCE", pic: "" },
        { name: "CRISPY NUGGETS WITH SP. SAUCE", pic: "" },
        { name: "MOZZARELLA STICK", pic: "" },
        { name: "DYNAMITE CHICKEN", pic: "" },
        { name: "DYNAMITE SHRIMPS", pic: "" },
        { name: "CHICKEN POPCORN", pic: "" },
        { name: "PRAWNS POPCORN", pic: "" },
        { name: "CHICKEN CHEETOS POPCORN", pic: "" },
        { name: "DYNAMITE POPCORN", pic: "" },
        { name: "POTATO SHAKE", pic: "" },
        { name: "FRIES HOTDOG CUP", pic: "" },
        { name: "ZINKER CHEESE SHAKE", pic: "" },
        { name: "ALA KAIFAK", pic: "" },
        { name: "FANTASIA", pic: "" },
        { name: "HOUSE SPECIAL", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },

    {
      image: "113.jpg",
      name: "Indomic",
      items: [
        { name: "CHEESE", pic: "" },
        { name: "HOTDOG", pic: "" },
        { name: "CHICKEN", pic: "" },
        { name: "MEAT", pic: "" },
        { name: "VEGETABLE", pic: "" },
        { name: "CHEESE CHEETOS", pic: "" },
        { name: "CHIPS OMAN", pic: "" },
        { name: "INDOMIE PLAIN", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "112.jpg",
      name: "Fresh Burger",
      items: [
        { name: "FRESH BURGER", pic: "" },
        { name: "GRAND BURGER", pic: "" },
        { name: "FRESH BURGER CHEETOS", pic: "" },
        { name: "BURGERISTA BEEF", pic: "fress_beef_burger.jpg" },
        { name: "CLASSIC BURGER", pic: "" },
        { name: "TURKEY CHICKEN BURGER", pic: "" },
        { name: "MIX CHEESE BURGER", pic: "" },
        { name: "DYNAMITE BURGER", pic: "" },
        { name: "SIGNATURE", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "111.jpg",
      name: "Zinger Special",
      items: [
        { name: "CRISPY CHEETOS", pic: "" },
        { name: "SP ZINGER BURGER", pic: "" },
        { name: "TEXAS CRUNCHY", pic: "" },
        { name: "ZINGER DOUBLE", pic: "" },
        { name: "ZINGER TURKEY DOUBLE", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "114.jpg",
      name: "Burger Sandwiches",
      items: [
        { name: "KHALEEJ DOUBLE BURGER", pic: "" },
        { name: "MAL MAL MATHAFI BURGER", pic: "" },
        { name: "CRISPY ZINGER BURGER", pic: "" },
        { name: "TIKKA BURGER", pic: "" },
        { name: "JUMBO PRAWNS BURGER", pic: "" },
        { name: "CHI. LEMON BURGER", pic: "" },
        { name: "DOUBLE BURGER", pic: "" },
        { name: "FISH BURGER", pic: "" },
        { name: "KHALEEJ BURGER", pic: "khaleej_burger.jpg" },
        { name: "ZINGER BURGER", pic: "" },
        { name: "ITALIAN BURGER", pic: "" },
        { name: "BURGER CHI/BEEF", pic: "" },
        { name: "VEGETABLE BURGER", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "113.jpg",
      name: "Grilled Burger",
      items: [
        { name: "Grilled Burger", pic: "" },
        { name: "Iphone Pro Max", pic: "" },
        { name: "KGF Burger", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "113.jpg",
      name: "Spanish & Italian",
      items: [
        { name: "Spanish Spicy Zinger Double", pic: "" },
        { name: "Spanish Wrap", pic: "" },
        { name: "Italian Zinger Double", pic: "" },
        { name: "Italian Zinger Burger", pic: "" },
        { name: "Italian Wrap", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "112.jpg",
      name: "Combo Meals",
      items: [
        { name: "BURGER MEAL", pic: "" },
        { name: "ZINGER BURGER MEAL", pic: "" },
        { name: "ZINGER WRAP MEAL", pic: "" },
        { name: "KIDS MEAL", pic: "" },
        { name: "KIDS NUGGETS", pic: "" },
        { name: "WOW BURGER", pic: "" },
        { name: "HOUSE OF TEA SP BURGER", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "111.jpg",
      name: "Combo Sandwiches",
      items: [
        { name: "MATHAFI COMBO", pic: "" },
        { name: "CALZONI COMBO", pic: "" },
        { name: "GRAND ZINGER COMBO", pic: "" },
        { name: "CHICKEN CHILLI COMBO", pic: "" },
        { name: "SHEESH TAWOOK COMBO", pic: "sheesh_tawook_combo.jpg" },
        { name: "FISH FILLET DOMBO", pic: "" },
        { name: "ZINGER COMBO", pic: "zinger_combo.jpg" },
        { name: "CHAJUN COMBE", pic: "" },
        { name: "CHICKEN NUGGETS COMBO", pic: "" },
        { name: "TIKKA COMBO", pic: "" },
        { name: "KABAB COMBO(CHI/BEEF)", pic: "" },
        { name: "CHICKEN FILLET COMBO", pic: "" },
        { name: "HOTDOG COMBO", pic: "" },
        { name: "CHICKEN LEMON COMBO", pic: "" },
        { name: "EGG BOILED COMBO", pic: "" },
        { name: "ZINGER CHEETOS COMBO", pic: "zinger_cheetos_burger.jpg" },
        { name: "SPANISH COMBO", pic: "" },
        { name: "ORILLED COMBO", pic: "" },
        { name: "ZINGER TURKEY COMBO", pic: "" },
        { name: "KOFTA COMBO", pic: "" },
        { name: "TURKISH FILLET COMBO", pic: "" },
        { name: "THIGHS COMBO", pic: "" },
        { name: "JUMBO PRAWNS COMBO", pic: "" },
        { name: "ZINGER PRAWNS COMBO", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "114.jpg",
      name: "House Special",
      items: [
        { name: "SEMI HOTDOG", pic: "" },
        { name: "KITCHEN HASSAN", pic: "" },
        { name: "SEMI PULLED", pic: "" },
        { name: "SEMI ZINGER", pic: "" },
        { name: "SEMI CHEETOS HOTDOG", pic: "" },
        { name: "SEMI ZINGER CHEETOS", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "113.jpg",
      name: "Club Sandwiches",
      items: [
        { name: "MEGA CLUB MAJLIS", pic: "mega club majlis.jpg" },
        { name: "MAJLIS CLUB", pic: "majlis club.jpg" },
        { name: "FAMILY MIX", pic: "family mix.jpg" },
        {
          name: "HOUSE OF TEA SPECIAL CLUB",
          pic: "house of tea special club.jpg",
        },
        { name: "ZINGER CLUB", pic: "zinger club.jpg" },
        { name: "ARABIC CLUB", pic: "emarati club.jpg" },
        { name: "EXPRESS CLUB", pic: "express club.jpg" },
        { name: "CHEETOS CLUB", pic: "cheetos club.jpg" },
        { name: "MEGA CLUB", pic: "mega club.jpg" },
        { name: "MIX CLUB", pic: "mix club.jpg" },
        { name: "IPHONE", pic: "iphone club.jpg" },
        { name: "VEG. CLUB", pic: "veg club.jpg" },
        { name: "CHI/BEEF CLUB", pic: "chi_beef club.jpg" },
        { name: "MATHAFI CLUB", pic: "mathafi club.jpg" },
        { name: "EMARAT CLUB", pic: "emarati club.jpg" },
        { name: "SHAWARMA CLUB", pic: "shawarma club.jpg" },
        { name: "HOTDOG CLUB", pic: "hotdog club.jpg" },
        { name: "LULU CLUB", pic: "lulu club.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "112.jpg",
      name: "Arabian Sandwiches",
      items: [
        { name: "FRANCISCO ARABIC", pic: "francisco_arabic.jpg" },
        { name: "CHEETOS ARABIC", pic: "" },
        { name: "ZINGER MATHAR", pic: "" },
        { name: "HASSAN MATHAR", pic: "" },
        { name: "ISMAYIL MATHAR", pic: "" },
        { name: "MARIYAM MATHAR", pic: "" },
        { name: "CHICKEN TANDOORI MIX", pic: "" },
        { name: "CHICKEN LEMON ARABIC", pic: "" },
        { name: "SHEESH TAWOOK ARABIC", pic: "" },
        { name: "ZINGER ARABIC", pic: "" },
        { name: "TANDOORI ARABIC", pic: "" },
        { name: "SHAWARMA ARABIC", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "111.jpg",
      name: "Poratta Sandwiches",
      items: [
        { name: "House Of Tea Sp.", pic: "" },
        { name: "Zinger Poratta", pic: "Zinger Poratta.jpg" },
        { name: "Sheesh Tawooq Poratta", pic: "Sheesh Tawooq.jpg" },
        { name: "Nuggets Poratta", pic: "Nuggets Poratta.jpg" },
        { name: "London Poratta", pic: "London Poartta.jpg" },
        { name: "Tikka Sp. Poratta", pic: "Tikka Sp Poratta.jpg" },
        { name: "Kabab Poratta", pic: "Kebab Poratta.jpg" },
        { name: "Burger Poratta", pic: "Burger Poratta.jpg" },
        { name: "Cajun Poratta", pic: "Cajun Poratta.jpg" },
        { name: "Fillet Poratta", pic: "Fillet Poratta.jpg" },
        { name: "Prawns Poratta", pic: "Prawns Poratta.jpg" },
        { name: "Oman Chips Poratta", pic: "Oman Chips Porattta.jpg" },
        { name: "Beef Nashif Poratta", pic: "Beef Nashif Poratta.jpg" },
        { name: "Chi. Lemon Poratta", pic: "Chi Lemon Poratta.jpg" },
        { name: "Keema Poratta", pic: "Keema Poaratta.jpg" },
        { name: "Dynamite Paris Poratta", pic: "Dynmite Poratta.jpg" },
        { name: "Hotdog Poratta", pic: "Hot Dog Poratta.jpg" },
        { name: "Chilli Poratta", pic: "Chilli Poratta.jpg" },
        { name: "Samosa Fransisco Poratta", pic: "Samoosa Poratta.jpg" },
        { name: "Minhali Poratta", pic: "Minhali Poratta.jpg" },
        { name: "Khalifa Poratta", pic: "Khalifa Poratta.jpg" },
        { name: "GMC Poratta", pic: "GMC Poratta.jpg" },
        { name: "Francisco Poratta", pic: "Franicsco Poratta.jpg" },
        { name: "Dubai Poratta", pic: "Dubai Poratta.jpg" },
        { name: "Omplete Poratta", pic: "Omplete Porata.jpg" },
        { name: "Egg Tomato Poratta", pic: "Egg Tomatto Poratta.jpg" },
        { name: "Thartheeb Poratta", pic: "Tharheeb Poratta.jpg" },
        { name: "Nutella Poratta", pic: "Nuteela Poratta.jpg" },
        { name: "Falafel Poratta", pic: "" },
        { name: "Egg Boiled Poratta", pic: "Egg Boiled Poratta.jpg" },
        { name: "Cheese Zaatar Poratta", pic: "Chese Zathar Poratta.jpg" },
        { name: "Cheese Poratta", pic: "" },
        { name: "Rubiyan Fransisco", pic: "" },
        { name: "Chicken Chilli Cheetos", pic: "Chicken Chilli Poratta.jpg" },
        { name: "Expo Poratta", pic: "Expo Poratta.jpg" },
        { name: "Pubg Poratta", pic: "Pubg Poratta.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "114.jpg",
      name: "Wrap Sandwiches",
      items: [
        { name: "Abdul Azeez Special", pic: "" },
        { name: "Zinger Wrap", pic: "zinger_wrap.jpg" },
        { name: "Mathafi Wrap", pic: "mathafi_wrap.jpg" },
        { name: "Noggets Wrap", pic: "" },
        { name: "Kabab Wrap", pic: "" },
        { name: "Egg Wrap", pic: "" },
        { name: "Twister Wrap", pic: "" },
        { name: "Tikka Wrap", pic: "" },
        { name: "Falafel Wrap", pic: "" },
        { name: "HOUSE OF TEA SPECIAL COMBO", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "113.jpg",
      name: "Diet Club & Sandwiches",
      items: [
        { name: "SPECIAL DIET MEAL", pic: "" },
        { name: "HOTDOG DIET SANDWICH JUICE", pic: "" },
        { name: "EGG DIET SANDWICH", pic: "" },
        { name: "Diet Egg", pic: "" },
        { name: "Diet Chicken Club", pic: "" },
        { name: "Veg. Diet Club", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "112.jpg",
      name: "Plate Items",
      items: [
        { name: "Fruit Salad Plate", pic: "" },
        { name: "MINI SAMOSA SP CHEESE, CHICKEN, KEEMA, VEG", pic: "" },
        { name: "CHICKEN CHILLI PLATE", pic: "" },
        { name: "BEEF NASHIF PLATE", pic: "" },
        { name: "FRANSISCO PLATE", pic: "" },
        { name: "NUGGETS PLATE", pic: "nuggets_arabic.jpg" },
        { name: "FASDOLIYA PLATE", pic: "" },
        { name: "JUMBO PRAWNS PLATE", pic: "" },
        { name: "BUTTERFLY PRAWNS", pic: "" },
        { name: "DAL PLATE", pic: "" },
        { name: "EGG HALF FRY", pic: "" },
        { name: "KEEMA PLATE", pic: "" },
        { name: "HOTDOG PLATE", pic: "" },
        { name: "FOUL", pic: "" },
        { name: "TUNA PLATE", pic: "" },
        { name: "EGG TOMATO PLATE", pic: "" },
        { name: "BREAD TOAST", pic: "" },
        { name: "VEG SAMOSA", pic: "" },
        { name: "POTATO SAMOSA", pic: "" },
        { name: "CHEESE SAMOSA", pic: "" },
        { name: "CHICKEN SAMOSA", pic: "" },
        { name: "KEEMA SAMOSA", pic: "" },
        { name: "CHIPS OMAN SAMOSA", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "111.jpg",
      name: "Tea & Coffiee",
      items: [
        { name: "Sahlab", pic: "sahlab.jpg" },
        { name: "Habbath Al Hamara, VEG", pic: "habbat al hamra.jpg" },
        { name: "Cappuccino", pic: "cappuccino.jpg" },
        { name: "SAMOSA TEA COMBO", pic: "sammosa&tea.jpg" },
        { name: "Karak Ginger", pic: "" },
        { name: "Karak Zater", pic: "" },
        { name: "Black Tea", pic: "" },
        { name: "Lemon Tea", pic: "" },
        { name: "Strawberry Tea", pic: "" },
        { name: "Pistachio Milk", pic: "pista milk.jpg" },
        { name: "Fresh Milk Zafran", pic: "fresh milk saffron.jpg" },
        { name: "Oats with Milk", pic: "oats with milk.jpg" },
        { name: "Karak Zafran", pic: "karak saffron.jpg" },
        { name: "Muhallebi", pic: "muhallebia.jpg" },
        { name: "Corn Flakes", pic: "cornflakes.jpg" },
        { name: "Hot Chocolate", pic: "hot chocolate.jpg" },
        { name: "Corn Flakes Chocolate", pic: "cornflakes chocolate.jpg" },
        { name: "Horlicks", pic: "horlicks.jpg" },
        { name: "Fresh Milk Zafran", pic: "fresh milk saffron.jpg" },
        { name: "Fresh Milk Cardamon", pic: "" },
        { name: "Fresh Milk Cappuccino", pic: "" },
        { name: "Fresh Milk Boost", pic: "" },
        { name: "Fresh Milk Nescafe", pic: "" },
        { name: "Fresh Milk Zater", pic: "" },
        { name: "Fresh Milk Ginger", pic: "" },
        { name: "Fresh Milk Halba", pic: "" },
        { name: "Fresh Milk Vanilla", pic: "" },
        { name: "Fresh Milk Maramiya", pic: "" },
        { name: "Fresh Milk Strawberry", pic: "" },
        { name: "Fresh Milk Anise", pic: "" },
        { name: "F.Milk Chamomile W Anise", pic: "" },
        { name: "Black Coffee", pic: "" },
        { name: "White Coffee", pic: "" },
        { name: "Cappuccino Caramel", pic: "cappuccino.jpg" },
        { name: "Cappuccino Vanilla", pic: "cappuccino.jpg" },
        { name: "Cappuccino Mocha", pic: "cappuccino.jpg" },
        { name: "Turkish coffee", pic: "turkish coffee.jpg" },
        { name: "Arabic Coffee", pic: "arabic coffee.jpg" },
        { name: "Saudi Gava", pic: "saudi coffee.jpg" },
        { name: "Karak Tea", pic: "" },
        { name: "Boost", pic: "boost.jpg" },
        { name: "Biscuit Tea", pic: "biscuit tea.jpg" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "114.jpg",
      name: "Hot Drinks",
      items: [
        { name: "Yansoon", pic: "" },
        { name: "Cinnamon", pic: "" },
        { name: "Ginger", pic: "" },
        { name: "Karkadi", pic: "" },
        { name: "Lemon Ginger", pic: "" },
        { name: "Chocolate", pic: "" },
        { name: "Chamomile", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "113.jpg",
      name: "Tea Bag",
      items: [
        { name: "Black", pic: "" },
        { name: "Green Mint", pic: "" },
        { name: "Twinings", pic: "" },
        { name: "Anise", pic: "" },
        { name: "Cinnamon", pic: "" },
        { name: "Zater", pic: "" },
        { name: "Royal", pic: "" },
        { name: "Moroccan", pic: "" },
        { name: "Strawberry", pic: "" },
        { name: "Lemon Tea", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "114.jpg",
      name: "Flask",
      items: [
        { name: "Karak Tea", pic: "" },
        { name: "Horlicks", pic: "" },
        { name: "Habbath Al Hamra", pic: "" },
        { name: "Sahlab", pic: "" },
        { name: "Arabic Gava", pic: "" },
      ],
      dis: "Sed ut perspiciatis unde",
    },
    {
      image: "113.jpg",
      name: "Cake Items",
      items: [
        { name: "LONDON CAKE", pic: "" },
        { name: "LOTUS CAKE", pic: "" },
        { name: "HONEY CAKE", pic: "" },
        { name: "HONEY LATTE", pic: "" },
        { name: "DREAM CAKE", pic: "" },
        { name: "ZAFRAN CAKE", pic: "" },
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
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-x-20 mt-14">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className=" bg-black flex flex-col justify-center col-span-5 col-start-2 py-5">
              {MENU.map((item: any, index: number) => (
                <div key={index} className="flex gap-8 hover:bg-zinc-900 p-7 px-10 duration-500 group">
                  <div className="w-28 group-hover:w-32 duration-300 h-20 rounded-xl overflow-hidden box-border">
                    <img
                      src={`images/${item.image}`}
                      className="h-full w-full object-cover group-hover:rotate-2 group-hover:scale-110 duration-300"
                    />
                  </div>
                  <div className="w-full">
                    <h5 className="text-3xl">{item.item}</h5>
                    <div className="count-before text-primary text-Merienda w-full flex justify-end text-4xl">
                      <p className="text-right bg-black pl-4 z-10 group-hover:bg-zinc-900 duration-300">
                        {index + 1}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-6 h-[300px] overflow-hidden">
              <img src="images/113.jpg" alt="" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-7">
            <div className="col-span-6 h-[300px] overflow-hidden">
              <img src="images/113.jpg" alt="" />
            </div>
            <div className=" bg-black flex flex-col justify-center col-span-5 py-5">
              {MENU.map((item: any, index: number) => (
                <div key={index} className="flex gap-8 hover:bg-zinc-900 p-7 px-10 duration-500 group">
                  <div className="w-28 group-hover:w-32 duration-300 h-20 rounded-xl overflow-hidden box-border">
                    <img
                      src={`images/${item.image}`}
                      className="h-full w-full object-cover group-hover:rotate-2 group-hover:scale-110 duration-300"
                    />
                  </div>
                  <div className="w-full">
                    <h5 className="text-3xl">{item.item}</h5>
                    <div className="count-before text-primary text-Merienda w-full flex justify-end text-4xl">
                      <p className="text-right bg-black pl-4 z-10 group-hover:bg-zinc-900 duration-300">
                        {index + 6}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
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
                className="flex gap-y-3 md:gap-y-5 py-3 group"
              >
                {/* {item.name.charAt(0).toUpperCase() + item.name.slice(1)} */}

                {/* <div className="w-28 duration-300 h-20 rounded-xl overflow-hidden box-border">
                    <img
                      src={`images/${item.image}`}
                      className="h-full w-full object-cover group-hover:rotate-2 group-hover:scale-110 duration-300"
                    />
                  </div> */}
                <div className="w-full">
                  <h5 className="text-xl md:text-2xl group-hover:text-zinc-300 duration-300">
                    {item.name}
                  </h5>
                  <div className="count-before text-primary md:w-full flex justify-end text-xl md:text-4xl">
                    <p className="text-right bg-black pl-4 z-10 text-Merienda group-hover:text-white duration-300">
                      {item.items.length}
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
                className={`grid grid-cols-1 md:grid-cols-3 gap-5  ${
                  index % 2 === 1 && "border-y-2 border-zinc-800 "
                } py-5 `}
              >
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
