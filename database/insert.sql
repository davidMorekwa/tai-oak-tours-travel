-- Active: 1746446975436@@127.0.0.1@3306@travel-agency

-- 4 DAY MARA NAKURU
INSERT INTO `tours` (
    `title`,
    `country`,
    `duration_days`,
    `image`,
    `description`,
    `low_season_price`,
    `high_season_price`,
    `rating`,
    `is_featured`,
    `highlights`,
    `created_at`,
    `updated_at`
) VALUES (
    '4 DAYS MARA NAKURU',
    'Kenya',
    4,
    'storage/assets/cheetah-lanndscape.jpg',
    'These 4 days Kenya safari to Masai Mara & Lake Nakuru safari covers the top Kenya wildlife parks: Masai Mara National game reserve famous for its population of lions, leopards, and cheetahs, and also yearly migration of zebra & wildebeest which occurs from July to October from Serengeti in Tanzania. Lake Nakuru National Park, found at the foot of the Great Rift Valley, you are assured of seeing the rhinos in black and white.',
    650.00,
    850.00,
    4.5, -- Or a default rating like 4.5
    0,    -- Assuming 0 for false, 1 for true
    'Masai Mara National game reserve,  Lake Nakuru National Park,  Lions,  Leopards,  Cheetahs,  Zebra & Wildebeest Migration,  Black and White Rhinos, Great Rift Valley Viewpoint',
    NOW(),
    NOW()
);
INSERT INTO `itineraries` (
    `tour_id`,
    `day_number`,
    `title`,
    `description`,
    `created_at`,
    `updated_at`
) VALUES (
    1, -- tour_id
    1, -- day_number
    'Nairobi - Maasai Mara', -- title
    'You\'ll be picked up from your agreed location, then make your way to the Masai Mara National Reserve through a smooth drive along the Great Rift.\nThereafter Stop at the Great Rift Valley Viewpoint along the way for a wonderful sightseeing break. The Great Rift Valley is a highlight of any trip to Kenya, where\nbreathtaking natural scenery combines with some of Africa’s most memorable experiences.\nWe\'ll continue with our journey to the Masai Mara. Arrive in time for lunch, check in and have some afternoon rest. Later on, your driver will pick you up for an evening game drive. Evening game drives are great! Get to enjoy the final catch of the game as they are out of their hides getting their dinner and sunbathing. Other animals graze in groups as they find a place to rest for the night.\nAt this time, some animals (nocturnal) come out of their hiding to start their hunt.\nMeals and overnight at Miti Mingi Eco Camp /LENCHADA TOURIST CAMP/RHONO TOURIST CAMP', -- description
    NOW(),
    NOW()
), (
    1, -- tour_id
    2, -- day_number
    'MASAI MARA FULL DAY', -- title
    'After your breakfast, you will be picked up by your driver for a full-day game drive at the Masai Mara. What a day! Masai Mara is one of the most famous and important wildlife conservation and wilderness areas in Africa, world-renowned for its exceptional populations of lion, African leopard, cheetah and African bush elephant.\nThe Masai Mara is the only protected area in Kenya with an indigenous black rhino population, unaffected by translocations, and due to its size, is able to support one of the largest populations in Africa. Hippopotamuses and crocodiles are found in large groups in the Mara and Talek Rivers. Visit Mara River and the Border of Kenya and Tanzania in the park\nYou will have lunch at a picnic site near the river followed by an afternoon game drive until sunset when you\'ll return to your camp.\nMeals and overnight at Miti Mingi Eco Camp /LENCHADA TOURIST CAMP/RHONO TOURIST CAMP', -- description
    NOW(),
    NOW()
), (
    1, -- tour_id
    3, -- day_number
    'MASAI MARA – NAKURU', -- title
    'Early morning breakfast and leave for Lake Nakuru National Park arriving in time for lunch with game drive en-route to find leopards which are frequently sighted in Lake Nakuru National Park, take a further drive to seek out the two species of rhino found in the park – Black and White Rhino. Lake Nakuru National Park is also known for many species of birds and thousands of flamingos.\nDinner and overnight at Legacy Hotel', -- description
    NOW(),
    NOW()
),(
    1, -- tour_id
    4, -- day_number
    'LAKE NAKURU NATIONAL PARK-NAIROBI', -- title
    'Early morning breakfast. After breakfast, you leave for Nairobi. You will be dropped off at your agreed location or at the airport.\nMeal plan: Breakfast & Lunch', -- description
    NOW(),
    NOW()
);

-- 5 DAYS MASAI MArA NAKURU NAIVASHA
-- Insert statement for the 'tours' table for the 5-day safari
INSERT INTO `tours` (
    `title`,
    `country`,
    `duration_days`,
    `image`,
    `description`,
    `low_season_price`,
    `high_season_price`,
    `rating`,
    `is_featured`,
    `highlights`,
    `created_at`,
    `updated_at`
) VALUES (
    '5 DAYS MASAI MARA NAKURU NAIVASHA SAFARI',
    'Kenya',
    5,
    'storage/assets/white-birds-landscape.jpeg', -- Placeholder image, update as needed
    'This safari covers the Great Rift Valley. Lake Nakuru, which is home to hundreds of thousands of flamingos, pelicans, and numerous other bird life, Lake Naivasha, and Hell’s Gate. You will also visit the Masai Mara, which has been declared one of the seven wonders of the world for its spectacular wildebeest migration. It is clear that there is so much to expect in this safari.',
    715.00,
    915.00,
    4.5, -- Or a default rating like 4.6
    0,    -- Assuming 0 for false, 1 for true
    'Great Rift Valley,  Lake Nakuru,  Flamingos & Pelicans,  Lake Naivasha,  Hell’s Gate National Park,  Masai Mara,  Wildebeest Migration,  Evening & Full-Day Game Drives,  Black & White Rhino Sighting',
    NOW(),
    NOW()
);

-- Assuming the tour inserted above gets id = 2.
-- If you know the ID, replace 2 with the actual ID.

-- Insert statements for the 'itineraries' table for the 5-day safari
INSERT INTO `itineraries` (
    `tour_id`,
    `day_number`,
    `title`,
    `description`,
    `created_at`,
    `updated_at`
) VALUES (
    2, -- tour_id
    1, -- day_number
    'NAIROBI – MASAI MARA', -- title
    'You\'ll be picked up from your agreed location, then make your way to the Masai Mara National Reserve through a smooth drive along the Great Rift.\nThereafter Stop at the Great Rift Valley Viewpoint along the way for a wonderful sightseeing break. The Great Rift Valley is a highlight of any trip to Kenya, where breathtaking natural scenery combines with some of Africa’s most memorable experiences.\nWe\'ll continue with our journey to the Masai Mara. Arrive in time for lunch, check-in and have some afternoon rest. Later on, your driver will pick you up for an evening game drive. Evening game drives are great! Get to enjoy the final catch of the game as they are out of their hides getting their dinner and sunbathing. Other animals graze in groups as they find a place to rest for the night.\nAt this time, some animals (nocturnal) come out of their hiding to start their hunt.\nMeals and overnight at Miti Mingi Eco Camp /LENCHADA TOURIST CAMP/RHINO TOURIST CAMP', -- description
    NOW(),
    NOW()
),(
    2, -- tour_id
    2, -- day_number
    'MASAI MARA FULL DAY', -- title
    'After your breakfast, you will be picked up by your driver for a full-day game drive at the Masai Mara. What a day! Masai Mara is one of the most famous and important wildlife conservation and wilderness areas in Africa, world-renowned for its exceptional populations of lion, African leopard, cheetah and African bush elephant.\nThe Masai Mara is the only protected area in Kenya with an indigenous black rhino population, unaffected by translocations, and due to its size, is able to support one of the largest populations in Africa. Hippopotamuses and crocodiles are found in large groups in the Mara and Talek Rivers. Visit Mara river and the Border of Kenya and Tanzania in the park\nYou will have lunch at a picnic site near the river followed by an afternoon game drive until sunset when you\'ll return to your camp.\nMeals and overnight at Miti Mingi Eco Camp\nMeal plan: Breakfast, Lunch & Dinner', -- description
    NOW(),
    NOW()
),(
    2, -- tour_id
    3, -- day_number
    'MASAI MARA-LAKE NAKURU NATIONAL PARK', -- title
    'Early morning breakfast and leave for Lake Nakuru National Park arriving in time for lunch with game drive en-route to find leopards which are frequently sighted in Lake Nakuru National Park, take a further drive to seek out the two species of rhino found in the black – Black and White Rhino. Lake Nakuru National Park is also known for many species of birds and thousands of flamingos.\nDinner and overnight at Legacy Hotel\nMeal plan: Breakfast & Lunch', -- description
    NOW(),
    NOW()
),(
    2, -- tour_id
    4, -- day_number
    'LAKE NAKURU NATIONAL PARK-LAKE NAIVASHA/HELLSGATE', -- title
    'An early morning breakfast then drive to Lake Naivasha arriving late in the afternoon to Hell’s Gate National Park. This is the only park in Kenya where one can cycle or walk while seeing the animals. an optional boat trip boat trip at USD 20 PP where you will be able to see many species of birds and water animals e.g. hippos and have good pictures of them.\nOvernight stay at: Leisure Apex\nMeal plan: Breakfast, Lunch & Dinner', -- description
    NOW(),
    NOW()
),(
    2, -- tour_id
    5, -- day_number
    'LAKE NAIVASHA/HELLSGATE-NAIROBI', -- title
    'Early morning breakfast thereafter check out of the hotel proceed for optional activities at lake Naivasha and the Sanctuary visit at an additional cost and later on drive back to Nairobi\nan optional boat trip boat trip at USD 20 PP where you will be able to see many species of birds and water animals e.g. hippos and have good pictures of them.', -- description
    NOW(),
    NOW()
);

-- 6 DAYS KENYA ADVENTURE SAFARI
-- Insert statement for the 'tours' table for the 6-day Kenya Adventure Safari
INSERT INTO `tours` (
    `title`,
    `country`,
    `duration_days`,
    `image`,
    `description`,
    `low_season_price`,
    `high_season_price`,
    `rating`,
    `is_featured`,
    `highlights`,
    `created_at`,
    `updated_at`
) VALUES (
    '6 DAYS KENYA ADVENTURE SAFARI',
    'Kenya',
    6,
    'storage/assets/elephant-kilimanjaro-landscape.jpeg', -- Placeholder image, update as needed
    'This tour covers three world-class parks that are rich in diversity, wildlife, and culture. Your experience will include the dusty plains of Amboseli to the marshlands of Lake Nakuru, culminating at the "spotted land" of the Masai Mara National Reserve. These parks are popular among high-end tourists, backpackers, and even locals alike',
    880.00,
    1080.00,
    4.0, -- Or a default rating
    0,    -- Assuming 0 for false, 1 for true
    'Amboseli National Park,  Lake Nakuru National Park,  Masai Mara National Reserve,  Great Rift Valley Viewpoint,  Mount Kilimanjaro views,  Elephant herds,  Black & White Rhinos,  Flamingos,  Lions,  Leopards,  Cheetahs',
    NOW(),
    NOW()
);

-- Assuming the tour inserted above gets id = 3.
-- If you know the ID, replace 3 with the actual ID.

-- Insert statements for the 'itineraries' table for the 6-day safari
INSERT INTO `itineraries` (
    `tour_id`,
    `day_number`,
    `title`,
    `description`,
    `created_at`,
    `updated_at`
) VALUES (
    3, -- tour_id
    1, -- day_number
    'NAIROBI MASAI MARA', -- title
    'You\'ll be picked up from your agreed location, then make your way to the Masai Mara National Reserve through a smooth drive along the Great Rift. Thereafter Stop at the Great Rift Valley Viewpoint along the way for a wonderful sightseeing break. The Great Rift Valley is a highlight of any trip to Kenya, where breathtaking natural scenery combines with some of Africa’s most memorable experiences.\nWe\'ll continue with our journey to the Masai Mara. Arrive in time for lunch, check-in, and have some afternoon rest. Later on, your driver will pick you up for an evening game drive. Evening game drives are great! Get to enjoy the final catch of the game as they are out of their hides getting their dinner and sunbathing. Other animals graze in groups as they find a place to rest for the night.\nMeals and overnight atLENCHADA TOURIST CAMP/RHINO TOURIST CAMP\nMiti Mingi Eco Camp', -- description
    NOW(),
    NOW()
),(
    3, -- tour_id
    2, -- day_number
    'MASAI MARA FULL DAY', -- title
    'After your breakfast, you will be picked up by your driver for a full-day game drive at the Masai Mara. What a day! Masai Mara is one of the most famous and important wildlife conservation and wilderness areas in Africa, world-renowned for its exceptional populations of lion, African leopard, cheetah, and African bush elephant.\nThe Masai Mara is the only protected area in Kenya with an indigenous black rhino population, unaffected by translocations, and due to its size, is able to support one of the largest populations in Africa. Hippopotamuses and crocodiles are found in large groups in the Mara and Talek Rivers. Visit Mara river and the Border of Kenya and Tanzania in the park\nYou will have lunch at a picnic site near the river followed by an afternoon game drive until sunset when you\'ll return to your camp.\nMeals and overnight at Miti Mingi Eco Camp /Lenchada Tourist Camp/Rhino Tourist Camp', -- description
    NOW(),
    NOW()
),(
    3, -- tour_id
    3, -- day_number
    'MASAI MARA –LAKE NAKURU NATIONAL PARK', -- title
    'Early morning breakfast and leave for Lake Nakuru National Park arriving in time for lunch with game drive en-route to find leopards which are frequently sighted in Lake Nakuru National Park, leave for game drive, take a further drive to seek out the two species of rhino found in the black – Black and White Rhino. Lake Nakuru National Park is also known for many species of birds and thousands of flamingos. Dinner and overnight at your hotel.\nHotel Legacy Hotel', -- description
    NOW(),
    NOW()
),(
    3, -- tour_id
    4, -- day_number
    'LAKE NAKURU NATIONAL PARK-AMBOSELI', -- title
    'Early breakfast thereafter leave for Amboseli National Park with a hot lunch in Nairobi. Arriving at Amboseli National Park late evening for Dinner and overnight. Amboseli is famous for its scenery with a backdrop of snow-capped Mount Kilimanjaro, which dominates the landscape, and open plains.\nDinner and Overnight at Nyati Tented Camp', -- description
    NOW(),
    NOW()
),(
    3, -- tour_id
    5, -- day_number
    'FULL-DAY AMBOSELI NATIONAL PARK', -- title
    'Have an early morning breakfast with a packed lunch. A full-day game drive awaits you in the beautiful Amboseli! This park is the most visited park on Kenya safaris and one of Kenya’s oldest parks. Famously known for its wide range of elephants and splendid views of the African tallest mountain ‘’Mount Kilimanjaro”. Amboseli is one of the best parks in Kenya\'s "East African country’’ and the entire world where you can adventure a large number of free-roaming elephants in their peaceful natural environment and a rewardable scenic view of the ice capped mountain. The birdlife in this park is vast and evident. This park is also a landmark of wildlife species most especially the high population of African elephants that roam around the park’s premises, lions, buffaloes, leopards, giraffes, wildebeests, gazelles, topis, hyenas just to mention but a few.\nAfter such a fun-filled day, you will head back to your camp to have your dinner and rest as you enjoy spending the evening at leisure.', -- description
    NOW(),
    NOW()
),(
    3, -- tour_id
    6, -- day_number
    'AMBOSELI NATIONAL PARK-NAIROBI', -- title
    'Early morning game drives in search of animals killing and eating. You leave for Nairobi with a picnic lunch en route to Nairobi. In Nairobi, you will be dropped at the airport or the agreed location.', -- description
    NOW(),
    NOW()
);


-- 7 DAYS KENYA ADVENTURE SAFARI
-- Insert statement for the 'tours' table for the 7-day (actually 10-day) Kenya & Tanzania Adventure Safari
INSERT INTO `tours` (
    `title`,
    `country`,
    `duration_days`,
    `image`,
    `description`,
    `low_season_price`,
    `high_season_price`,
    `rating`,
    `is_featured`,
    `highlights`,
    `created_at`,
    `updated_at`
) VALUES (
    '10 DAYS KENYA-TANZANIA ADVENTURE SAFARI', -- Title as provided
    'Kenya & Tanzania', -- Country based on itinerary
    10, -- Duration based on detailed itinerary and pricing
    'storage/assets/wildebeest-landscape.jpg', -- Placeholder image, update as needed
    'Kenya and Tanzania are worldly known destinations with specific Masai Mara and Serengeti wildlife hubs. Your tour will be full of adventure as you get to see the big five and many more. Serengeti and Masai Mara are \'rich\' parks which will be worth your time. In addition, the Amboseli National Park with its vastly populated elephants will make your adventure more spectacular. This tour will be worth your time and money.',
    1750.00,
    1950.00,
    4.5, -- Or a default rating
    0,    -- Assuming 0 for false, 1 for true
    'Masai Mara,  Serengeti National Park,  Amboseli National Park,  Ngorongoro Crater,  Big Five,  Wildebeest Migration,  Elephant Herds,  Great Rift Valley,  Lake Nakuru',
    NOW(),
    NOW()
);

-- Assuming the tour inserted above gets id = 4.
-- If you know the ID, replace 4 with the actual ID.

-- Insert statements for the 'itineraries' table for the 10-day safari
INSERT INTO `itineraries` (
    `tour_id`,
    `day_number`,
    `title`,
    `description`,
    `created_at`,
    `updated_at`
) VALUES (
    4, -- tour_id
    1, -- day_number
    'NAIROBI-MAASAI MARA GAME RESERVE.', -- title
    'Depart from Nairobi via the floor of the Great Rift Valley and have the first stop over at the famous view point to have the scenic view of the rifts then proceed to Narok to have hot lunch then finally to the camp. After rest you will have an evening game tracking then dinner and overnight at the camp.\nAccommodation: Lenchada Tourist Camp/Rhino camp Tourist Camp/ Miti Mingi Eco Camp\nMeals: Breakfast, Lunch and Dinner', -- description
    NOW(),
    NOW()
), (
    4, -- tour_id
    2, -- day_number
    'MAASAI MARA GAME RESERVE FULL DAY.', -- title
    'Have breakfast at the camp then set out for the morning game drive before 8:00 Am till 5:00 Pm and then have picnic lunch. Maasai Mara is unique in its ways and is covered with savannah grassland on rolling hills which is a scenic view. It also has a good track network which allows for close proximity of wildlife and nice photograph captures. Visit to the Maasai village is at your own pleasure and optional at a charge of 10$ per person. Dinner and overnight at the camp. game drive until sunset. After you drive, you will return to your camp for dinner and your overnight stay.\nAccommodation: Lenchada Tourist Camp/Rhino Camp Tourist Camp/ Miti Mingi Eco Camp\nMeals: Breakfast, Lunch and Dinner', -- description
    NOW(),
    NOW()
),(
    4, -- tour_id
    3, -- day_number
    'MAASAI MARA GAME RESERVE- LAKE NAKURU NATIONAL PARK.', -- title
    'Have breakfast visit Masai village for 10$ then proceed to Nakuru with packed lunches. The drive takes you through the scenic Great Rift Valley, offering picturesque views of Lake Naivasha. Here, you can opt for a fun boat ride, an activity that costs $20 and provides a closer look at the aquatic life and bird species. Continue your journey to Nakuru, where you will check in at your hotel for the night.\nAccommodation: Legacy Hotel/Buraha/Hill Court Hotel\nMeals: Breakfast, Lunch, Dinner', -- description
    NOW(),
    NOW()
),(
    4, -- tour_id
    4, -- day_number
    'LAKE NAKURU NATIONAL PARK-AMBOSELI NATIONAL PARK.', -- title
    'Have breakfast at the hotel then leave for the game drive in Lake Nakuru National Park known for its variety of birds including the flamingos. Enjoy the view of hippos, buffaloes, and crocodiles then later have your lunch en route to Amboseli National Park. Check-in at the camp for dinner and overnight.\nAccommodation: Nyati Camp Meals: Breakfast, Lunch, Dinner', -- description
    NOW(),
    NOW()
),(
    4, -- tour_id
    5, -- day_number
    'AMBOSELI THE WHOLE DAY', -- title
    'Have breakfast then have an early morning game drive in Amboseli game drive and enjoy the close proximity of animal viewing especially the amazing elephant size and their matriarchs (old female elephant leaders) and the variety of birds found in the park. Have a picnic lunch then dinner and overnight at the camp.\nAccommodation: Nyati Camp Meals: Breakfast, Lunch, Dinner', -- description
    NOW(),
    NOW()
),(
    4, -- tour_id
    6, -- day_number
    'AMBOSELI- NAMANGA BORDER – ARUSHA.', -- title
    'Have breakfast then set out for the early game drive in the swampy park and enjoy a variety of herbivores wallowing in the muddy swamps like the hippos and the large elephants and their cubs and a variety of other wildlife then drive to the Namanga border where you will meet our driver who will transfer you to Arusha Hotel booked bed and breakfast\nAccommodation: Charity Hotel/Parachichi guest house /Epic Grand Hotel Meals: Breakfast & Lunch', -- description
    NOW(),
    NOW()
),(
    4, -- tour_id
    7, -- day_number
    'ARUSHA – SERENGETI NATIONAL PARK', -- title
    'Breakfast at your Arusha Hotel, meet our staff and driver-guide for briefing about the whole trip, and leave Arusha for a 6-hour drive to Serengeti National Park with lunch en-route. Upon arrival at the main gate, have the registration done then with a game drive to the camp which is located at the Central Serengeti. Today you are scheduled for at least 3 3-hour game drive, then dinner will be served at Seronera Camp followed by overnight at the same camp.\nAccommodation: Seronera Camp Meals: Breakfast, Lunch, Dinner', -- description
    NOW(),
    NOW()
),(
    4, -- tour_id
    8, -- day_number
    'SERENGETI NATIONAL PARK – NGORONGORO CRATER.', -- title
    'Early breakfast at the camp then leaves with picnic lunches for at least a 6-hour Game drive within Serengeti National Park. Here you will track the wildebeest, Zebras, Giraffes, Lions, Lionesses, black rhinos, Cheetahs, Leopard, Hyena, Bushbuck, lesser kudu, wild dog, Kongoni, impala, grant’s gazelle, black-backed jackal, Mongoose, Olive baboons, Vervet Monkeys among other animals are found here and you will be lucky to some of them. By noon leave the park with a stopover at Olduvai Gorge at an extra cost of USD $35 per person. By evening arrive at the conservancy area where you will have dinner and overnight at Simba camp.\nAccommodation: Simba Camp Meals: Breakfast, Lunch, Dinner', -- description
    NOW(),
    NOW()
),(
    4, -- tour_id
    9, -- day_number
    'NGORONGORO CRATER – ARUSHA TOWN', -- title
    'Breakfast at the camp, then leave for a game drive within the Ngorongoro crater where you will be able to descend with a game drive with the view of Common Lions, African Elephants, Black Rhino, blue wildebeest, Leopard, Cheetah, Hyena. Wild dogs, Grant’s Zebras, African buffalo, and Hippopotamus at the crater rim.\nHave the picnic lunch at the crater rim then starts ascending to the main gate, exit the crater after the 6 hours, and drive to Arusha where you will be dropped at your Arusha Hotel.\nAccommodation: Charity Hotel/Parachichi guest house /Epic Grand Hotel Meals: Breakfast & Lunch', -- description
    NOW(),
    NOW()
),(
    4, -- tour_id
    10, -- day_number
    'DEPARTURE.', -- title
    'After breakfast check out and either be transferred to Arusha airport or catch a shuttle bus back to Nairobi. If you return to Nairobi, you will meet our staff, share your experience, and be dropped at your Nairobi Hotel or airport to catch a flight back home or to another destination.', -- description
    NOW(),
    NOW()
);

-- 7 DAYS KENYA TANZANIA
-- Insert statement for the 'tours' table for the 7-day Kenya Tanzania Safari
INSERT INTO `tours` (
    `title`,
    `country`,
    `duration_days`,
    `image`,
    `description`,
    `low_season_price`,
    `high_season_price`,
    `rating`,
    `is_featured`,
    `highlights`,
    `created_at`,
    `updated_at`
) VALUES (
    '7 DAYS KENYA TANZANIA',
    'Kenya & Tanzania',
    7,
    'storage/assets/giraffe-kilimanjaro-landscape.jpeg', -- Placeholder image, update as needed
    'This 7-day super adventure at Amboseli National Park and Tanzania adventure is an all-around fun-filled trip in Kenya\'s second largest park and Tanzania parks. Amboseli is famously known for its wide range of elephants and splendid views of the African tallest mountain ‘’Mount Kilimanjaro”. Amboseli is one of the best parks in Kenya\'s ‘’East African countries and the entire world where you can adventure a large number of free-roaming elephants in their peaceful natural environment.',
    1045.00,
    1045.00, -- Using the single quoted price for both seasons
    4.5, -- Or a default rating
    0,    -- Assuming 0 for false, 1 for true
    'Amboseli National Park,  Serengeti National Park,  Ngorongoro Crater,  Mount Kilimanjaro views,  Elephant herds,  Big Five sighting possibility,  Maasai village visit (optional)',
    NOW(),
    NOW()
);

-- Assuming the tour inserted above gets id = 5.
-- If you know the ID, replace 5 with the actual ID.

-- Insert statements for the 'itineraries' table for the 7-day safari
INSERT INTO `itineraries` (
    `tour_id`,
    `day_number`,
    `title`,
    `description`,
    `created_at`,
    `updated_at`
) VALUES (
    5, -- tour_id
    1, -- day_number
    'NAIROBI-AMBOSELI', -- title
    'You will be picked up by one of our representatives who will brief you on the tour and your expectations. You will then hit the road to the famous Amboseli National Park. In Amboseli National Park, you may have the chance to see the \'Big Five\' and a variety of other games with the snow-capped Mount Kilimanjaro, the highest in Africa, in the background. You will also be visiting the Maasai village to catch a glimpse of their way of life for 20 $. Dinner and your overnight stay will be at the Nyati tented camp on a full-board basis.\nAccommodation: Nyati camp Meals: Breakfast & Lunch', -- description
    NOW(),
    NOW()
), (
    5, -- tour_id
    2, -- day_number
    'FULL-DAY AMBOSELI NATIONAL PARK', -- title
    'Have an early morning breakfast with a packed lunch. A full-day game drive awaits you in the beautiful Amboseli! This park is the most visited park on Kenya safaris and one of Kenya’s oldest parks. Famously known for its wide range of elephants and splendid views of the tallest African mountain ‘’Mount Kilimanjaro”. Amboseli is one of the best parks in Kenya\'s "East African country’’ and the entire world where you can adventure a large number of free-roaming elephants in their peaceful natural environment and a rewardable scenic view of the ice-capped mountain. The birdlife in this park is vast and evident. This park is also a landmark of wildlife species most especially the high\nthe population of African elephants that roam around the park’s premises, lions, buffaloes, leopards, giraffes, wildebeests, gazelles, Topis, and hyenas just to mention but a few.\nAfter such a fun-filled day, you will head back to your camp to have your dinner and rest as you enjoy spending the evening at leisure.\nAccommodation: Nyati camp Meals: Breakfast & Lunch', -- description
    NOW(),
    NOW()
), (
    5, -- tour_id
    3, -- day_number
    'AMBOSELI NATIONAL PARK-NAMANGA BORDER-ARUSHA', -- title
    'Have breakfast then set out for the early game drive in the swampy park and enjoy a variety of herbivores wallowing in the muddy swamps like the hippos and the large elephants and their cubs and a variety of other wildlife then drive to the Namanga border where you will meet our driver who will transfer you to Arusha Hotel booked on bed and breakfast.\nAccommodation: Charity Hotel /Parachichi guest house /Meals: Breakfast & Lunch', -- description
    NOW(),
    NOW()
), (
    5, -- tour_id
    4, -- day_number
    'ARUSHA – SERENGETI NATIONAL PARK', -- title
    'Breakfast at your Arusha Hotel, meet our staff and driver-guide for briefing about the whole trip, and leave Arusha for a 6-hour drive to Serengeti National Park with lunch en route. Upon arrival at the main gate, have the registration done then with a game drive to the camp which is located at the Central Serengeti. Today you are scheduled for at least 3 3-hour game drive, then dinner will be served at Seronera Camp followed by overnight at the same camp.\nMeals: Breakfast, Lunch, Dinner', -- description
    NOW(),
    NOW()
), (
    5, -- tour_id   
    5, -- day_number
    'SERENGETI NATIONAL PARK – NGORONGORO CRATER.', -- title
    'Early breakfast at the camp then leave with picnic lunches for at least a 6-hour Game drive within Serengeti National Park. Here you will track the wildebeest, Zebras, Giraffes, Lions, Lionesses, black rhinos, Cheetahs, Leopard, Hyenas, Bushbuck, lesser kudu, wild dog, Kongoni, impala, grant’s gazelle, black-backed jackal, Mongoose, Olive baboons, Vervet Monkeys among other animals are found here and you will be lucky to some of them. By noon leave the park with a stopover at Olduvai Gorge at an extra cost of USD $35 per person. By evening arrive at the conservancy area where you will have dinner and overnight at Simba camp.\nMeals: Breakfast, Lunch, Dinner', -- description
    NOW(),
    NOW()
), (
    5, -- tour_id
    6, -- day_number
    'NGORONGORO CRATER – ARUSHA TOWN', -- title
    'Breakfast at the camp, then leave for a game drive within the Ngorongoro crater where you will be able to descend with a game drive with the view of Common Lions, African Elephants, Black Rhino, blue wildebeest, Leopard, Cheetah, Hyena. Wild dogs, Grant’s Zebras, African buffalo, and Hippopotamus at the crater rim.\nHave a picnic lunch at the crater Rim then start ascending to the main gate, exit the crater after 6 hours, and drive to Arusha where you will be dropped at your Arusha Hotel.\nAccommodation: Charity Hotel /Parachichi guest house Meals: Breakfast & Lunch', -- description
    NOW(),
    NOW()
), (
    5, -- tour_id
    7, -- day_number
    'DEPARTURE.', -- title
    'After breakfast check out and either be transferred to Arusha airport or catch a shuttle bus back to Nairobi. If you return to Nairobi, you will meet our staff, share your experience, and be dropped off at your Nairobi Hotel or airport to catch a flight back home or to another destination.', -- description
    NOW(),
    NOW()
);

-- 8 DAYS KENYA ADVENTURE
-- Insert statement for the 'tours' table for the 8-day Kenya Adventure Safari
INSERT INTO `tours` (
    `title`,
    `country`,
    `duration_days`,
    `image`,
    `description`,
    `low_season_price`,
    `high_season_price`,
    `rating`,
    `is_featured`,
    `highlights`,
    `created_at`,
    `updated_at`
) VALUES (
    '8 DAYS KENYA ADVENTURE SAFARI',
    'Kenya',
    8,
    'storage/assets/masai-mara-hot-air-balloon-landscape.jpg', -- Placeholder image, update as needed
    'This is a week-long magical expedition to view the breathtaking roof of Africa, Kilimanjaro, and huge herds of elephants at Amboseli. You\'ll then head to the Rift Valley lakes i.e. Lake Naivasha, famous for huge flower farms and Hell\'s Gate National Park then to Lake Nakuru, famous for rhinos and flamingos. The tour climaxes at the world-famous Masai Mara National Reserve',
    1290.00,
    1590.00,
    4.0, -- Or a default rating
    0,    -- Assuming 0 for false, 1 for true
    'Amboseli National Park,  Mount Kilimanjaro views,  Lake Naivasha,  Hell\'s Gate National Park,  Lake Nakuru,  Rhinos,  Flamingos,  Masai Mara National Reserve,  Big Five,  Great Migration (seasonal)',
    NOW(),
    NOW()
);

-- Assuming the tour inserted above gets id = 6.
-- If you know the ID, replace 6 with the actual ID.

-- Insert statements for the 'itineraries' table for the 8-day safari
INSERT INTO `itineraries` (
    `tour_id`,
    `day_number`,
    `title`,
    `description`,
    `created_at`,
    `updated_at`
) VALUES (
    6, -- tour_id
    1, -- day_number
    'NAIROBI - MASAI MARA', -- title
    'You will be picked up from your hotel in Nairobi or Jomo Kenyatta International Airport and driven to the Masai Mara National Reserve. Upon arrival, you will have a hot lunch before embarking on an afternoon game drive. The Masai Mara, situated at an altitude of 1650 meters (5414 feet) and covering 1,510 square kilometers (almost 600 square miles), forms the northern extension of the Serengeti National Park in Tanzania. The name "Mara" means spotted or dappled in the Masai language, reflecting the mosaic of rolling grasslands, small brush-covered hills, riverine bush, and forests along the Mara River and its tributaries.\nOvernight Stay: Lenchada/Rhino Camp/Miti Mingi Tented Camp\nMeal Plan: Lunch & Dinner', -- description
    NOW(),
    NOW()
), (
    6, -- tour_id
    2, -- day_number
    'MASAI MARA FULL DAY', -- title
    'Enjoy a full-day game drive in the Masai Mara with a picnic lunch provided. The reserve is home to the “Big Five” (lion, leopard, African elephant, Cape buffalo, and black rhinoceros). Although the black rhino population was severely reduced by poaching in the 1970s and early 1980s, it has slowly increased to around 23 individuals by 1999. Large groups of hippopotamuses and crocodiles are found in the Mara and Talek rivers. You will also see leopards, hyenas, cheetahs, jackals, and bat-eared foxes. The Great Migration, involving approximately 1,300,000 wildebeests, 500,000 Thomson’s gazelles, 97,000 Topis, 18,000 elands, and 200,000 zebras, occurs from July to October.\nOvernight Stay: Lenchada /Rhino Camp/Miti Mingi/Mara Forest\nMeal Plan: Breakfast, Lunch & Dinner', -- description
    NOW(),
    NOW()
), (
    6, -- tour_id
    3, -- day_number
    'MASAI MARA FULL DAY', -- title
    'Enjoy a full-day game drive in the Masai Mara with a picnic lunch provided. The reserve is home to the “Big Five” (lion, leopard, African elephant, Cape buffalo, and black rhinoceros). Although the black rhino population was severely reduced by poaching in the 1970s and early 1980s, it has slowly increased to around 23 individuals by 1999. Large groups of hippopotamuses and crocodiles are found in the Mara and Talek rivers. You will also see leopards, hyenas, cheetahs, jackals, and bat-eared foxes. The Great Migration, involving approximately 1,300,000 wildebeests, 500,000 Thomson’s gazelles, 97,000 Topis, 18,000 elands, and 200,000 zebras, occurs from July to October.\nOvernight Stay: Lenchada /Rhino Camp/Miti Mingi/Mara Forest\nMeal Plan: Breakfast, Lunch & Dinner', -- description
    NOW(),
    NOW()
), (
    6, -- tour_id
    4, -- day_number
    'MASAI MARA - LAKE NAIVASHA', -- title
    'An early morning breakfast. You will have time to visit Masai Village which is an optional activity at USD 10 PP and then depart for Naivasha with lunch at Narok. After lunch you drive to Lake Naivasha arriving late in the afternoon for a walking safari at the famous Hells Gate with an optional bicycle ride @ $10 an optional boat trip @ $20 per person and where you will be able to see many species of birds and water animals e.g. hippos and have good pictures of them.\nOvernight Stay: Leisure Apex/Jazza Resort\nMeal Plan: Breakfast, Lunch & Dinner', -- description
    NOW(),
    NOW()
),(
    6, -- tour_id
    5, -- day_number
    'LAKE NAIVASHA-LAKE NAKURU NATIONAL PARK', -- title
    'Early morning breakfast and leave for Lake Nakuru National Park arriving with game drive en-route to find leopards which are frequently sighted in Lake Nakuru National Park. Have picnic lunch, then proceed with the game drive, take a further drive to seek out the two species of rhino found in the black – Black and White Rhino. Lake Nakuru National Park is also known for many species of birds and thousands of flamingos.\nOvernight Stay: Legacy Hotel/Buraha Resort/Hill court resort\nMeal Plan: Breakfast, Lunch & Dinner', -- description
    NOW(),
    NOW()
),(
    6, -- tour_id
    6, -- day_number
    'LAKE NAKURU NATIONAL PARK-AMBOSELI', -- title
    'After breakfast, you leave for Amboseli National Park with a hot lunch at Nairobi. Arriving at your camp late evening. Amboseli is famous for its scenery with a backdrop of snow-capped Mount Kilimanjaro, which dominates the landscape, and open plains. Dinner and overnight at your camp.\nMeals and overnight at Nyati Camp Amboseli\nMeal Plan: Breakfast, Lunch & Dinner', -- description
    NOW(),
    NOW()
), (
    6, -- tour_id
    7, -- day_number
    'AMBOSELI NATIONAL PARK FULL DAY', -- title
    'Early morning breakfast after which leave with packed lunch for the full day game drive where you will spend time in the park in search of its popular residents like the well-known predators and their opponents like the zebra, Giraffe, Hippo and big Elephants with a view of Mt Kilimanjaro.\nMeals and overnight at Nyati Camp Amboseli\nMeal Plan: Breakfast, Lunch & Dinner', -- description
    NOW(),
    NOW()
),(
    6, -- tour_id
    8, -- day_number
    'AMBOSELI NATIONAL PARK –NAIROBI', -- title
    'Early morning breakfast then check out of the camp, proceed for morning game drive thereafter drive back to Nairobi with picnic lunch en-route to Nairobi. In Nairobi, you will be dropped at your hotel or at the airport for your return flight.', -- description
    NOW(),
    NOW()
);

-- 10 DAYS KENYA-TANZANIA SAFARI
-- Insert statement for the 'tours' table for the 10-day Kenya Tanzania Safari
INSERT INTO `tours` (
    `title`,
    `country`,
    `duration_days`,
    `image`,
    `description`,
    `low_season_price`,
    `high_season_price`,
    `rating`,
    `is_featured`,
    `highlights`,
    `created_at`,
    `updated_at`
) VALUES (
    '10 DAYS KENYA TANZANIA SAFARI',
    'Kenya & Tanzania',
    10,
    'storage/assets/ngorongoro-crater-landscape.jpg', -- Placeholder image, update as needed
    'Kenya and Tanzania are worldly known destinations with specific Masai Mara and Serengeti wildlife hubs. Your tour will be full of adventure as you get to see the big five and many more. Serengeti and Masai Mara are \'rich\' parks which will be worth your time. In addition, the Amboseli National Park with its vastly populated elephants will make your adventure more spectacular. This tour will be worth your time and money.',
    1750.00,
    1950.00,
    4.5, -- Or a default rating
    0,    -- Assuming 0 for false, 1 for true
    'Masai Mara,  Serengeti National Park,  Amboseli National Park,  Ngorongoro Crater,  Big Five,  Wildebeest Migration,  Elephant Herds,  Great Rift Valley,  Lake Nakuru',
    NOW(),
    NOW()
);

-- Assuming the tour inserted above gets id = 7.
-- If you know the ID, replace 7 with the actual ID.

-- Insert statements for the 'itineraries' table for the 10-day safari
INSERT INTO `itineraries` (
    `tour_id`,
    `day_number`,
    `title`,
    `description`,
    `created_at`,
    `updated_at`
) VALUES (
    7, -- tour_id
    1, -- day_number
    'NAIROBI-MAASAI MARA GAME RESERVE.', -- title
    'Depart from Nairobi via the floor of the Great Rift Valley and have the first stop over at the famous view point to have the scenic view of the rifts then proceed to Narok to have hot lunch then finally to the camp. After rest you will have an evening game tracking then dinner and overnight at the camp.\nAccommodation: Lenchada Tourist Camp/Rhino camp Tourist Camp/ Miti Mingi Eco Camp\nMeals: Breakfast, Lunch and Dinner', -- description
    NOW(),
    NOW()
), (
    7, -- tour_id
    2, -- day_number
    'MAASAI MARA GAME RESERVE FULL DAY.', -- title
    'Have breakfast at the camp then set out for the morning game drive before 8:00 Am till 5:00 Pm and then have picnic lunch. Maasai Mara is unique in its ways and is covered with savannah grassland on rolling hills which is a scenic view. It also has a good track network which allows for close proximity of wildlife and nice photograph captures. Visit to the Maasai village is at your own pleasure and optional at a charge of 10$ per person. Dinner and overnight at the camp. game drive until sunset. After you drive, you will return to your camp for dinner and your overnight stay.\nAccommodation: Lenchada Tourist Camp/Rhino Camp Tourist Camp/ Miti Mingi Eco Camp\nMeals: Breakfast, Lunch and Dinner', -- description
    NOW(),
    NOW()
), (
    7, -- tour_id
    3, -- day_number
    'MAASAI MARA GAME RESERVE- LAKE NAKURU NATIONAL PARK.', -- title
    'Have breakfast visit Masai village for 10$ then proceed to Nakuru with packed lunches. The drive takes you through the scenic Great Rift Valley, offering picturesque views of Lake Naivasha. Here, you can opt for a fun boat ride, an activity that costs $20 and provides a closer look at the aquatic life and bird species. Continue your journey to Nakuru, where you will check in at your hotel for the night.\nAccommodation: Legacy Hotel/Buraha/Hill Court Hotel\nMeals: Breakfast, Lunch, Dinner', -- description
    NOW(),
    NOW()
), (
    7, -- tour_id
    4, -- day_number
    'LAKE NAKURU NATIONAL PARK-AMBOSELI NATIONAL PARK.', -- title
    'Have breakfast at the hotel then leave for the game drive in Lake Nakuru National Park known for its variety of birds including the flamingos. Enjoy the view of hippos, buffaloes, and crocodiles then later have your lunch en route to Amboseli National Park. Check-in at the camp for dinner and overnight.\nAccommodation: Nyati Camp Meals: Breakfast, Lunch, Dinner', -- description
    NOW(),
    NOW()
), (
    7, -- tour_id
    5, -- day_number
    'AMBOSELI THE WHOLE DAY', -- title
    'Have breakfast then have an early morning game drive in Amboseli game drive and enjoy the close proximity of animal viewing especially the amazing elephant size and their matriarchs (old female elephant leaders) and the variety of birds found in the park. Have a picnic lunch then dinner and overnight at the camp.\nAccommodation: Nyati Camp Meals: Breakfast, Lunch, Dinner', -- description
    NOW(),
    NOW()
), (
    7, -- tour_id
    6, -- day_number
    'AMBOSELI- NAMANGA BORDER – ARUSHA.', -- title
    'Have breakfast then set out for the early game drive in the swampy park and enjoy a variety of herbivores wallowing in the muddy swamps like the hippos and the large elephants and their cubs and a variety of other wildlife then drive to the Namanga border where you will meet our driver who will transfer you to Arusha Hotel booked bed and breakfast\nAccommodation: Charity Hotel/Parachichi guest house /Epic Grand Hotel Meals: Breakfast & Lunch', -- description
    NOW(),
    NOW()
), (
    7, -- tour_id
    7, -- day_number
    'ARUSHA – SERENGETI NATIONAL PARK', -- title
    'Breakfast at your Arusha Hotel, meet our staff and driver-guide for briefing about the whole trip, and leave Arusha for a 6-hour drive to Serengeti National Park with lunch en-route. Upon arrival at the main gate, have the registration done then with a game drive to the camp which is located at the Central Serengeti. Today you are scheduled for at least 3 3-hour game drive, then dinner will be served at Seronera Camp followed by overnight at the same camp.\nAccommodation: Seronera Camp Meals: Breakfast, Lunch, Dinner', -- description
    NOW(),
    NOW()
), (
    7, -- tour_id
    8, -- day_number
    'SERENGETI NATIONAL PARK – NGORONGORO CRATER.', -- title
    'Early breakfast at the camp then leaves with picnic lunches for at least a 6-hour Game drive within Serengeti National Park. Here you will track the wildebeest, Zebras, Giraffes, Lions, Lionesses, black rhinos, Cheetahs, Leopard, Hyena, Bushbuck, lesser kudu, wild dog, Kongoni, impala, grant’s gazelle, black-backed jackal, Mongoose, Olive baboons, Vervet Monkeys among other animals are found here and you will be lucky to some of them. By noon leave the park with a stopover at Olduvai Gorge at an extra cost of USD $35 per person. By evening arrive at the conservancy area where you will have dinner and overnight at Simba camp.\nAccommodation: Simba Camp Meals: Breakfast, Lunch, Dinner', -- description
    NOW(),
    NOW()
), (
    7, -- tour_id
    9, -- day_number
    'NGORONGORO CRATER – ARUSHA TOWN', -- title
    'Breakfast at the camp, then leave for a game drive within the Ngorongoro crater where you will be able to descend with a game drive with the view of Common Lions, African Elephants, Black Rhino, blue wildebeest, Leopard, Cheetah, Hyena. Wild dogs, Grant’s Zebras, African buffalo, and Hippopotamus at the crater rim.\nHave the picnic lunch at the crater rim then starts ascending to the main gate, exit the crater after the 6 hours, and drive to Arusha where you will be dropped at your Arusha Hotel.\nAccommodation: Charity Hotel/Parachichi guest house /Epic Grand Hotel Meals: Breakfast & Lunch', -- description
    NOW(),
    NOW()
), (
    7, -- tour_id
    10, -- day_number
    'DEPARTURE.', -- title
    'After breakfast check out and either be transferred to Arusha airport or catch a shuttle bus back to Nairobi. If you return to Nairobi, you will meet our staff, share your experience, and be dropped at your Nairobi Hotel or airport to catch a flight back home or to another destination.', -- description
    NOW(),
    NOW()
);

-- 11 DAYS KENYA TANZANIA
-- 11 DAYS KENYA TANZANIA
INSERT INTO `tours` (
    `title`,
    `country`,
    `duration_days`,
    `image`,
    `description`,
    `overview`,
    `highlights`,
    `low_season_price`,
    `high_season_price`,
    `rating`,
    `is_featured`,
    `created_at`,
    `updated_at`
) VALUES (
    '11 DAYS KENYA TANZANIA',
    'Kenya & Tanzania',
    11,
    'public/storage/assets/gazelle-landscape.jpeg', -- Placeholder image, please update as needed
    'Kenya and Tanzania are worldly known destinations with the specific Masai Mara and Serengeti wildlife hub. Your tour will be full of adventure as you get to see the big five and many more. Serengeti and Masai Mara are \'rich\' parks which will be worth your time. In addition, the Amboseli National Park with its vastly populated elephants will make your adventure more spectacular. This tour will be worth your time and money.',
    'Kenya and Tanzania are worldly known destinations with the specific Masai Mara and Serengeti wildlife hub. Your tour will be full of adventure as you get to see the big five and many more. Serengeti and Masai Mara are \'rich\' parks which will be worth your time. In addition, the Amboseli National Park with its vastly populated elephants will make your adventure more spectacular. This tour will be worth your time and money.',
    'Masai Mara, Serengeti National Park, Big Five, Amboseli National Park, Elephant Herds, Lake Nakuru National Park, Black & White Rhino, Flamingos, Great Rift Valley, Mount Longonot, Lake Naivasha, Mount Kilimanjaro views, Tarangire National Park, Baobab Trees, Ngorongoro Crater',
    1950.00, -- Please update with actual low season price
    2150.00, -- Please update with actual high season price
    4.5,  -- Default rating, adjust as needed
    0,    -- Assuming 0 for false, 1 for true
    NOW(),
    NOW()
);

-- Assuming the tour inserted above gets id = 8.
-- If you know the ID, replace 8 with the actual ID.
-- Or use: SET @tour_id = LAST_INSERT_ID(); and then use @tour_id for tour_id below.

INSERT INTO `itineraries` (
    `tour_id`,
    `day_number`,
    `title`,
    `description`,
    `created_at`,
    `updated_at`
) VALUES (
    8, -- tour_id
    1, -- day_number
    'NAIROBI-MAASAI MARA GAME RESERVE', -- title
    'Welcome to Kenya! we will pick you up from the airport/ Hotel and leave for Masai Mara. We drive through the great Rift valley to the Maasai Mara National Park. This enormous reserve is actually part of the Serengeti Vast Plains famously known for its spectacular great Wild beast Migration and is home to big 5: Lion, Elephant, Leopard, Buffalo and Rhino. Lunch at our Camp and relax before departing for the afternoon drive. Other animals in the park include Maasai Giraffe, Buffalo, Eland and thousands of plain game including impala, zebra, Tophi, both Thompsons and Grant Gazelles.\nOvernight Stay in Camp Options: Flair Camp/ accommodation of similar standard\nMeal Plan: Lunch, Dinner', -- description
    NOW(),
    NOW()
), (
    8, -- tour_id
    2, -- day_number
    'MAASAI MARA GAME RESERVE FULL DAY', -- title
    'After the morning Breakfast, you will leave for a full day game drive with packed lunch. The search for the great wild animals continues. On the plains are large herds of Herbivores grazing and cheetahs and leopards hiding in their locations. The Masai Mara is regarded as the jewel of Kenya’s wildlife viewing areas. There have been some 95 species of mammals, amphibians and reptiles and over 400bird species recorded on the reserve.\nNowhere in Africa is wildlife more abundant, and it is for this reason a visitor hardly misses to see the big five (buffalo, elephant, leopard, lion, and rhino). The midday meals will be at the picnic site. Go through Mara River migration point. Later you will return to the camp for dinner.\nOvernight Stay in Camp Options: Flair Camp/ accommodation of similar standard\nMeal Plan: Breakfast, Lunch, Dinner', -- description
    NOW(),
    NOW()
), (
    8, -- tour_id
    3, -- day_number
    'MARA - LAKE NAKURU NATIONALPARK', -- title
    'Have a full breakfast then proceed to Lake Nakuru National Park Enjoy the beautiful scenery of Mount Longonot and Lake Naivasha and even enjoy an optional fun activity of boat riding for 20$. Then finally proceed to Nakuru. arriving in time for lunch with game drive en-route to find leopards which are frequently sighted in Lake Nakuru National Park. After lunch, you leave for game drive, take a further drive to seek out the two species of rhino found in the black – Black and White Rhino. Lake Nakuru National Park is also known for many species of birds and thousands of flamingos. while having your lunch en route.\nDinner and overnight at your hotel.\nOvernight Stay in Camp Options: Eduardo rustic/ accommodation of similar standard\nMeal Plan: Breakfast, Lunch, Dinner', -- description
    NOW(),
    NOW()
), (
    8, -- tour_id
    4, -- day_number
    'LAKE NAKURU -AMBOSELI NATIONAL PARK', -- title
    'After breakfast you leave for Amboseli National Park with a hot lunch at Nairobi. Arriving at Amboseli National Park late evening. Amboseli is famous for its scenery with a backdrop of snow-capped Mount Kilimanjaro, which dominates the landscape, and open plains. Dinner and overnight at your lodge. Check in at the camp for dinner and overnight.\nOvernight Stay in Camp Options: Nyati tented Camp/ accommodation of similar standard\nMeal Plan: Breakfast, Lunch, Dinner.', -- description
    NOW(),
    NOW()
), (
    8, -- tour_id
    5, -- day_number
    'AMBOSELI WHOLE DAY', -- title
    'Have breakfast then have an early morning game drive in Amboseli game drive and enjoy the close proximity of animal viewing especially the amazing elephant size and their matriarchs (old female elephant leaders) and the variety of birds found in the park. Have picnic lunch then dinner and overnight at the lodge.\nOvernight Stay in Camp Options: Nyati tented Camp/ accommodation of similar standard\nMeal Plan: Breakfast, Lunch, Dinner.', -- description
    NOW(),
    NOW()
), (
    8, -- tour_id
    6, -- day_number
    'AMBOSELI- NAMANGA BORDER – ARUSHA', -- title
    'Have early game drive in the swampy park and enjoy a variety of herbivores wallowing in the muddy swamps like the hippos and the large elephants and their cubs and a variety of other wildlife. Return and have breakfast at the camp then check out from the camp and drive to Namanga border where you will catch a shuttle bus to Arusha. Upon arrival meet our driver who will transfer you to Arusha Hotel booked on bed and breakfast.\nOvernight Stay in Camp Options: Charity Hotel/ accommodation of similar standard\nMeal Plan: Breakfast, Lunch, Dinner.', -- description
    NOW(),
    NOW()
), (
    8, -- tour_id
    7, -- day_number
    'ARUSHA TO TARANGIRE NATIONAL PARK', -- title
    'After breakfast, your adventure begins with a scenic drive from Arusha to Tarangire National Park, renowned for its vast elephant herds and iconic baobab trees. As you enter the park, you\'ll be greeted by the sight of these gentle giants roaming freely against a backdrop of striking landscapes. The park is also home to a variety of wildlife, including lions, leopards, zebras, and an array of bird species. Enjoy a full day of game drives, exploring the diverse terrain and spotting wildlife in their natural habitat. As the sun sets, you’ll head to your lodge for a restful night under the African stars.\nOvernight Stay in Camp Options: Twiga campsite/ accommodation of similar standard\nMeal Plan: Breakfast, Lunch, Dinner.', -- description
    NOW(),
    NOW()
), (
    8, -- tour_id
    8, -- day_number
    'TARANGIRE– SERENGETI NATIONAL PARK', -- title
    'Breakfast at your Arusha Hotel, meet our staff and driver guide for briefing about the whole trip, leave Arusha for a 6 hours’ drive to Serengeti National Park with lunch enroute. Upon arrival at the main gate, have the registration done then with a game drive to the camp which is located at the Central Serengeti. Today you are scheduled for at least 3hours game drive, then dinner will be served at Seronera Camp followed by overnight at the same camp.\nOvernight Stay in Camp Options: Seronera Campsite/ accommodation of similar standard\nMeal Plan: Breakfast, Lunch, Dinner.', -- description
    NOW(),
    NOW()
), (
    8, -- tour_id
    9, -- day_number
    'SERENGETI – NGORONGORO CRATER', -- title
    'Early breakfast at the camp then leaves with picnic lunches for at least 6hour Game drive within Serengeti National Park. Here you will tracker the wildebeest, Zebras, Giraffes, Lions, Lioness, black rhino, Cheetah, Leopard, Hyena, Bushbuck, lesser kudu, wild dog, Kongoni, impala, grant’s gazelle, black backed jackal, Mongoose, Olive baboons, Vervet Monkeys among other animals are found here and you will be lucky to some of them. By noon leave the park with a stopover at Olduvai Gorge at extra cost of usd $35 per person. By evening arrive at the conservancy area where you will have dinner and overnight at Simba camp.\nOvernight Stay in Camp Options: Simba campsite/ accommodation of similar standard\nMeal Plan: Breakfast, Lunch, Dinner.', -- description
    NOW(),
    NOW()
), (
    8, -- tour_id
    10, -- day_number
    'NGORONGORO CRATER – ARUSHA TOWN', -- title
    'Breakfast at the camp, then leave for a game drive within the Ngorongoro crater where you will be able to descend with a game drive with the view of Common Lions, African Elephants, Black Rhino, blue wildebeest, Leopard, Cheetah, Hyena. Wild dog, Grant’s Zebras, African buffalo and Hippopotamus at the crater rim. Have the picnic lunch at the crater rim then start ascending to the main gate, exit the crater after the 6 hours and drive to Arusha where you will be dropped at your Arusha Hotel.\nOvernight Stay in Camp Options: Simba campsite/ accommodation of similar standard\nMeal Plan: Breakfast, Lunch, Dinner.', -- description
    NOW(),
    NOW()
), (
    8, -- tour_id
    11, -- day_number
    'DEPARTURE', -- title
    'After breakfast check out of the hotel by 7:30am and either be transferred to Arusha airport or catch a shuttle back to Nairobi. If you return to Nairobi, you will meet our staff, share your experience and be dropped at your Nairobi Hotel or airport to catch a flight back home or to another destination.', -- description
    NOW(),
    NOW()
);
