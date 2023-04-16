const data = [
  [{
    id: 1,
    title: "Berawa",
    location: "Canggu, Bali 🇮🇩",
    latitude: -8.6638,
    longitude: 115.1359,
    description: "A popular surf beach with soft sand and good waves, great for both beginner and experienced surfers.",
    break: "Berawa Beach has a smooth, sandy bottom that creates consistent waves for surfers.",
    levels: "Beginner - Intermediate, Left & Right Break",
    imageUrl: "https://i.ytimg.com/vi/XTuRFOLBzbU/maxresdefault.jpg",
    forecast: "4-6ft  /  14s  /  10mph offshore",
    videoUrl: "https://www.youtube.com/embed/pdGqoO-s_sg?autoplay=1&amp;mute=1&amp;controls=0",
    zoom: 12
  },
  {
    id: 2,
    title: "Batu Bolong",
    location: "Canggu, Bali 🇮🇩",
    latitude: -8.6595,
    longitude: 115.1301,
    description: "A laid-back beach with plenty of cafes and restaurants, famous for its historic Hindu temple and laid-back atmosphere.",
    break: "Batu Bolong Beach has a mixed bottom of rocks and sand that creates a unique surfing experience.",
    levels: "Intermediate - Advanced, Right Break",
    imageUrl: "https://i.ytimg.com/vi/vSOlFG_v9JQ/maxresdefault.jpg",
    forecast: "4-6ft  /  14s  /  10mph offshore"
  },
  {
    id: 3,
    title: "Echo",
    location: "Canggu, Bali 🇮🇩",
    latitude: -8.6551,
    longitude: 115.1254,
    description: "A secluded and quiet beach with crystal clear water, surrounded by cliffs and great for snorkeling.",
    break: "Echo Beach features a shallow reef bottom that provides powerful waves for advanced surfers.",
    levels: "Beginner - Intermediate, Right Break",
    imageUrl: "https://i.ytimg.com/vi/0eAxg5tHtMk/maxresdefault.jpg",
    forecast: "4-6ft  /  14s  /  10mph offshore"
  },
  {
    id: 4,
    title: "Pererenan",
    location: "Canggu, Bali 🇮🇩",
    latitude: -8.6518,
    longitude: 115.1215,
    description: "A quiet and serene beach known for its beautiful sunsets, perfect for relaxing and enjoying the peaceful atmosphere.",
    break: "Pererenan Beach has a flat, sandy bottom that creates fun and long rides for surfers of all levels.",
    levels: "Beginner - Intermediate, Left Break",
    imageUrl: "https://i.ytimg.com/vi/sXHrYzeh8Ro/maxresdefault.jpg",
    forecast: "4-6ft  /  14s  /  10mph offshore"
  }],
  [{
    id: 5,
    title: "Padang Padang",
    location: "Uluwatu, Bali 🇮🇩",
    latitude: -8.8111,
    longitude: 115.1038,
    description: "A small, scenic beach with a unique cave entrance and clear turquoise water, great for swimming and sunbathing.",
    break: "Padang Padang Beach has a reef bottom that creates fast and hollow waves, ideal for experienced surfers.",
    levels: "Level: Advanced, Right Break",
    imageUrl: "https://www.surfindonesia.com/wp-content/uploads/2020/09/padang-padang-right-baby-padang-padang.jpg?_t=1599516214",
    forecast: "6-9ft  /  16s  /  12mph offshore",
    videoUrl: "https://www.youtube.com/embed/js258P4f1-s?autoplay=1&amp;mute=1&amp;controls=0",
    zoom: 11
  },
  {
    id: 6,
    title: "Ulu",
    location: "Uluwatu, Bali 🇮🇩",
    latitude: -8.8149,
    longitude: 115.0884,
    description: "A hidden and isolated beach with soft sand, great for privacy and enjoying nature.",
    break: "Ulu Beach boasts a coral reef bottom that creates challenging and consistent waves for intermediate surfers.",
    levels: "Intermediate - Advanced, Right Break",
    imageUrl: "https://www.surfindonesia.com/wp-content/uploads/2020/07/temples-uluwatu.jpg?_t=1598347870",
    forecast: "6-9ft  /  16s  /  12mph offshore"
  },
  {
    id: 7,
    title: "Balangan",
    location: "Uluwatu, Bali 🇮🇩",
    latitude: -8.7920,
    longitude: 115.1234,
    description: "A scenic and peaceful beach with a long stretch of sand and a few cafes, great for sunbathing and surfing.",
    break: "Balangan Beach has a steep and rocky bottom that creates powerful waves for advanced surfers.",
    levels: "Intermediate - Advanced, Left & Right Break",
    imageUrl: "https://i.ytimg.com/vi/SzCjNxcLTuI/maxresdefault.jpg",
    forecast: "4-6ft  /  12s  /  8mph offshore"
  },
  {
    id: 8,
    title: "Bingin",
    location: "Uluwatu, Bali 🇮🇩",
    latitude: -8.8057,
    longitude: 115.1130,
    description: "A popular surf beach with a laid-back vibe and stunning cliff views, great for both surfing and relaxing.",
    break: "Bingin Beach has a reef bottom with a shallow drop-off, creating exciting and fast waves for experienced surfers.",
    levels: "Intermediate - Advanced, Right Break",
    imageUrl: "https://www.swellbali.com/wp-content/uploads/2020/02/bali-surfing-1-1024x683.jpg",
    forecast: "4-6ft  /  12s  /  8mph offshore"
  },
  {
    id: 9,
    title: "Green Bowl",
    location: "Uluwatu, Bali 🇮🇩",
    latitude: -8.8487,
    longitude: 115.1710,
    description: "A secluded and pristine beach with a unique green lagoon, great for swimming and snorkeling.",
    break: "Green Bowl Beach has a reef bottom with a deep trough, providing long and fast rides for skilled surfers.",
    levels: "Intermediate - Advanced, Right Break",
    imageUrl: "https://indonesiansurfguide.com/wp-content/uploads/2021/08/Green-bowl-line-up-min.JPG-scaled.jpg",
    forecast: "4-6ft  /  12s  /  8mph offshore"
  },
  {
    id: 10,
    title: "Dreamland",
    location: "Uluwatu, Bali 🇮🇩",
    latitude: -8.7993,
    longitude: 115.1177,
    description: "A well-known surf beach with long stretches of soft sand and great waves, popular among surfers and beachgoers alike.",
    break: "Dreamland Beach has a shallow reef bottom with a sloping wave, perfect for beginners and intermediate surfers.",
    levels: "Beginner - Intermediate, Left & Right Break",
    imageUrl: "https://www.swellbali.com/wp-content/uploads/2021/05/7N2A7131-768x614.jpg",
    forecast: "4-6ft  /  12s  /  8mph offshore"
  },
  {
    id: 11,
    title: "Impossibles",
    location: "Uluwatu, Bali 🇮🇩",
    latitude: -8.8089,
    longitude: 115.1073,
    description: "A challenging surf beach known for its consistent and powerful waves, popular among experienced surfers.",
    break: "Impossibles Beach has a reef bottom that creates long and fast waves for experienced surfers.",
    levels: "Advanced, Right Break",
    imageUrl: "https://www.surfertoday.com/images/stories/surfingimpossibles.jpg",
    forecast: "4-6ft  /  12s  /  8mph offshore"
  },
  {
    id: 12,
    title: "Nyang Nyang",
    location: "Uluwatu, Bali 🇮🇩",
    latitude: -8.8392,
    longitude: 115.0934,
    description: "A secluded and breathtaking beach with a long stretch of white sand and clear water, great for swimming and sunbathing.",
    break: "Nyang Nyang Beach has a sandy bottom with a shallow reef, providing fun and easy waves for all levels of surfers.",
    levels: "Intermediate, Right Break",
    imageUrl: "https://www.surfinbali.com/wp-content/uploads/2022/07/image-1024x683.webp",
    forecast: "4-6ft  /  12s  /  8mph offshore"
  },
  {
    id: 13,
    title: "Thomas Beach",
    location: "Uluwatu, Bali 🇮🇩",
    latitude: -8.8135,
    longitude: 115.0962,
    description: "A peaceful and uncrowded beach with a scenic view of the surrounding hills, great for relaxing and enjoying the natural beauty.",
    break: "Thomas Beach has a rocky bottom with a shallow reef, creating an exciting and challenging surf spot for advanced surfers.",
    levels: "Beginner - Intermediate, Left & Right Break",
    imageUrl: "https://www.jonnymelon.com/wp-content/uploads/2022/11/padang-padang-beach-8-1-1440x959.jpg",
    forecast: "4-6ft  /  12s  /  8mph offshore"
  }],
  [{
    id: 14,
    title: "Ocean Beach",
    location: "California, USA 🇺🇸",
    latitude: 37.7691,
    longitude: -122.5109,
    description: "A popular and lively beach with a long stretch of sand and a bustling atmosphere, great for swimming, sunbathing, and socializing.",
    break: "Ocean Beach has a wide sandy bottom that creates gentle and rolling waves, ideal for beginner surfers.",
    levels: "Intermediate, Right Break",
    imageUrl: "https://i.ytimg.com/vi/hA3QoWqEQ0U/maxresdefault.jpg",
    forecast: "4-6ft  /  14s  /  10mph offshore",
    videoUrl: "https://www.youtube.com/embed/YzTf9CyPpuo?autoplay=1&amp;mute=1&amp;controls=0",
    zoom: 4.25
  },
  {
    id: 15,
    title: "Malibu",
    location: "Malibu, California 🇺🇸",
    latitude: 34.0306,
    longitude: -118.7786,
    description: "A famous and iconic beach with a long stretch of sand, great for surfing, sunbathing, and celebrity spotting.",
    break: "Malibu Beach has a sandy bottom that creates fun and long rides for surfers of all levels.",
    levels: "Beginner - Intermediate, Left & Right Break",
    imageUrl: "https://malibuluxuryrealty.com/wp-content/uploads/2016/08/5036486731_5e873ab83b_b-1024x683.jpg",
    forecast: "4-6ft  /  14s  /  10mph offshore"
  },
  {
    id: 16,
    title: "Trestles",
    location: "California 🇺🇸",
    latitude: 33.3813,
    longitude: -117.5333,
    description: "A world-famous surf spot with long, fast, and fun waves, popular among both surfers and surf spectators.",
    break: "Trestles Beach has a sandy bottom with a shallow reef, providing playful waves for intermediate surfers.",
    levels: "Intermediate - Advanced, Left Break",
    imageUrl: "https://www.surfertoday.com/images/stories/lowertrestles2.jpg",
    forecast: "4-6ft  /  14s  /  10mph offshore",
  },
  {
    id: 17,
    title: "Huntington Beach",
    location: "Huntington Beach, California 🇺🇸",
    latitude: 33.6599,
    longitude: -117.9931,
    description: "A bustling and lively beach with a wide stretch of sand and a strong surf culture, popular for surfing and sunbathing.",
    break: "Huntington Beach has a wide, flat sandy bottom that creates consistent waves for surfers of all levels.",
    levels: "Beginner - Intermediate, Right Break",
    imageUrl: "https://i.ytimg.com/vi/WizqThrnyBE/maxresdefault.jpg",
    forecast: "4-6ft  /  14s  /  10mph offshore"
  }],
  [{
    id: 18,
    title: "Honolua Bay",
    location: "Maui, Hawaii 🇺🇸",
    latitude: 20.9638,
    longitude: -156.6345,
    description: "A secluded and scenic bay with clear turquoise water, great for snorkeling, swimming, and surfing.",
    break: "Honolua Bay has a reef bottom with a deep trough, providing long and fast rides for skilled surfers.",
    levels: "Advanced, Left & Right Break",
    imageUrl: "https://i.ytimg.com/vi/Kyhb1o0W-hQ/maxresdefault.jpg",
    forecast: "4-6ft / 14s / 10mph offshore",
    videoUrl: "https://www.youtube.com/embed/yO1izVb7vcM?autoplay=1&amp;mute=1&amp;controls=0",
    zoom: 7
  },
  {
    id: 19,
    title: "Kahului Harbor",
    location: "Maui, Hawaii 🇺🇸",
    latitude: 20.9033,
    longitude: -156.4507,
    description: "A bustling commercial harbor with a few beaches and scenic views of the surrounding mountains, great for fishing, boating, and exploring.",
    break: "Kahului Harbor has a rocky and sandy bottom that creates a unique and challenging surfing experience.",
    levels: "Beginner, Left & Right Break",
    imageUrl: "https://ec2-im-1.msw.ms/md/image.php?id=418881&type=PHOTOLAB&resize_type=STREAM_MEDIUM&fromS3",
    forecast: "2-3ft / 10s / 5mph offshore"
  },
  {
    id: 20,
    title: "Ho'okipa Beach",
    location: "Maui, Hawaii 🇺🇸",
    latitude: 20.9700,
    longitude: -156.3500,
    description: "A world-famous surf spot with fast and hollow waves, popular among experienced surfers.",
    break: "Ho'okipa Beach has a rocky reef bottom that provides powerful and fast waves for experienced surfers.",
    levels: "Intermediate - Advanced, Right Break",
    imageUrl: "https://spot-thumbnails.cdn-surfline.com/spots/5842041f4e65fad6a7708de6/5842041f4e65fad6a7708de6_1500.jpg",
    forecast: "4-6ft / 14s / 10mph offshore"
  },
  {
    id: 21,
    title: "Pu'u'auli Point",
    location: "Maui, Hawaii 🇺🇸",
    latitude: 21.0388,
    longitude: -156.6652,
    description: "A secluded and pristine beach with a scenic view of the ocean, great for swimming and sunbathing in peace and quiet.",
    break: "Pu'u'auli Point has a rocky reef bottom with a deep trough, creating challenging and fast waves for advanced surfers.",
    levels: "Intermediate - Advanced, Right Break",
    imageUrl: "https://lushpalm.com/wp-content/uploads/2017/11/oahu-surf-spots-off-the-wall.jpg",
    forecast: "4-6ft / 14s / 10mph offshore"
  }],
  [{
    id: 22,
    title: "Sayulita",
    location: "Nayarit, Mexico 🇲🇽",
    latitude: 20.9279,
    longitude: -105.4541,
    description: "A lively and vibrant surf town with a great surf scene and lively nightlife, popular among both locals and tourists.",
    break: "Sayulita Beach has a sandy bottom with a fun, peeling left and a hollow right, perfect for surfers of all levels.",
    levels: "Beginner - Advanced, Left & Right Break",
    imageUrl: "https://wildmex.com/wp-content/uploads/2021/03/waves-sayulita.jpg",
    forecast: "2-5ft / 8s / 10mph offshore",
    videoUrl: "https://www.youtube.com/embed/sDptJVgTbbU?autoplay=1&amp;mute=1&amp;controls=0",
    zoom: 9
    },
    {
    id: 23,
    title: "San Pancho",
    location: "Nayarit, Mexico 🇲🇽",
    latitude: 20.9048,
    longitude: -105.4593,
    description: "A charming and relaxed surf town with a long, wide beach and a small town vibe, great for a laid-back surf holiday.",
    break: "San Pancho Beach has a sandy bottom with a fun and mellow wave, ideal for beginner and intermediate surfers.",
    levels: "Beginner - Intermediate, Right Break",
    imageUrl: "https://www.lowpressure.co.uk/surftravelplanner/images/Nayarit.jpg",
    forecast: "2-5ft / 8s / 10mph offshore"
    },
    {
    id: 24,
    title: "Punta de Mita",
    location: "Nayarit, Mexico 🇲🇽",
    latitude: 20.9069,
    longitude: -105.4752,
    description: "An exclusive and upscale surf town with world-class waves and luxury amenities, popular among pro surfers and the wealthy.",
    break: "Punta de Mita has a rocky bottom with fast and hollow waves, ideal for experienced surfers.",
    levels: "Intermediate - Advanced, Left & Right Break",
    imageUrl: "https://villaexperience.com/wp-content/uploads/2021/12/san-pancho-surf-break-1024x683.jpeg",
    forecast: "4-8ft / 12s / 12mph offshore"
    },
    {
    id: 25,
    title: "Lo de Marcos",
    location: "Nayarit, Mexico 🇲🇽",
    latitude: 21.1319,
    longitude: -105.1786,
    description: "A small and peaceful surf town with a serene beach and friendly locals, great for a quiet surf holiday.",
    break: "Lo de Marcos Beach has a sandy bottom with a fun and mellow wave, ideal for beginner and intermediate surfers.",
    levels: "Beginner - Intermediate, Right Break",
    imageUrl: "https://www.playasyplazas.com/wp-content/uploads/2017/12/DSC_0179.jpg.webp",
    forecast: "2-5ft / 8s / 10"
    }],
    [{
      id: 26,
      title: "Great Western Beach",
      location: "Newquay, UK 🇬🇧",
      latitude: 50.4154,
      longitude: -5.0801,
      description: "Vibrant beach with a lively atmosphere and plenty of restaurants and cafes, great for a fun day out.",
      break: "Great Western Beach has a sandy bottom that creates small and gentle waves, suitable for beginner surfers.",
      levels: "Beginner, Right Break",
      imageUrl: "http://4.bp.blogspot.com/-0_PiufXIp6U/TWFtBgbWNYI/AAAAAAAAADc/FUD2MUefYwI/s1600/1.jpg",
      forecast: "2-3ft / 8s / 8mph offshore",
      videoUrl: "https://www.youtube.com/embed/0tVXrtxu7BU?autoplay=1&amp;mute=1&amp;controls=0",
      zoom: 12
      },
      {
      id: 27,
      title: "Fistral Beach",
      location: "Newquay, UK 🇬🇧",
      latitude: 50.4173,
      longitude: -5.1047,
      description: "Famous surf spot with a wide sandy beach and consistent waves, great for surfers of all levels.",
      break: "Fistral Beach has a sandy bottom that creates fun and rideable waves, ideal for beginners and experienced surfers alike.",
      levels: "Beginner - Advanced, Right & Left Break",
      imageUrl: "https://www.carvemag.com/wp-content/uploads/2019/03/watergate1.jpg",
      forecast: "3-6ft / 10s / 15mph offshore"
      },
      {
      id: 28,
      title: "Towan Beach",
      location: "Newquay, UK 🇬🇧",
      latitude: 50.4169,
      longitude: -5.0797,
      description: "Popular family beach with a large expanse of soft sand and safe swimming conditions.",
      break: "Towan Beach has a gradual slope and minimal reef, providing easy and gentle waves for beginner surfers.",
      levels: "Beginner, Right Break",
      imageUrl: "https://www.surf-forecast.com/system/images/15023/large/Towan.jpg?1447720401",
      forecast: "2-4ft / 8s / 10mph offshore"
    }]
]

export default data;
