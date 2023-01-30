const data = [
  [{
    id: 1,
    title: "Berawa",
    location: "Canggu, Bali 🇮🇩",
    latitude: -8.6638,
    longitude: 115.1359,
    description: "Sandy beach break mixed with reefs, Beginner/intermediate level.",
    imageUrl: "https://i.ytimg.com/vi/XTuRFOLBzbU/maxresdefault.jpg",
    forecast: "• Forecast: 4-6ft  /  14s  /  10mph onshore",
    videoUrl: "https://www.youtube.com/embed/pdGqoO-s_sg?autoplay=1&amp;mute=1&amp;controls=0",
    zoom: 12
  },
  {
    id: 2,
    title: "Batu Bolong",
    location: "Canggu, Bali 🇮🇩",
    latitude: -8.6595,
    longitude: 115.1301,
    description: "Sandy beach break perfect for beginners. Very popular spot, may be crowded.",
    imageUrl: "https://i.ytimg.com/vi/vSOlFG_v9JQ/maxresdefault.jpg",
    forecast: "• Forecast: 4-6ft  /  14s  /  10mph onshore"
  },
  {
    id: 3,
    title: "Echo",
    location: "Canggu, Bali 🇮🇩",
    latitude: -8.6551,
    longitude: 115.1254,
    description: "Reef break more suitable for advanced surfers. Hot spot for competitions.",
    imageUrl: "https://i.ytimg.com/vi/0eAxg5tHtMk/maxresdefault.jpg",
    forecast: "• Forecast: 4-6ft  /  14s  /  10mph onshore"
  },
  {
    id: 4,
    title: "Pererenan",
    location: "Canggu, Bali 🇮🇩",
    latitude: -8.6518,
    longitude: 115.1215,
    description: "Reef break more suitable for advanced surfers. Possibly beginners when small.",
    imageUrl: "https://i.ytimg.com/vi/sXHrYzeh8Ro/maxresdefault.jpg",
    forecast: "• Forecast: 4-6ft  /  14s  /  10mph onshore"
  }],
  [{
    id: 5,
    title: "Padang Padang",
    location: "Uluwatu, Bali 🇮🇩",
    latitude: -8.8111,
    longitude: 115.1038,
    description: "wrong info: Sandy beach break mixed with reefs, Beginner/intermediate level.",
    imageUrl: "https://i.ytimg.com/vi/XTuRFOLBzbU/maxresdefault.jpg",
    forecast: "• Forecast: 6-9ft  /  16s  /  12mph offshore",
    videoUrl: "https://www.youtube.com/embed/js258P4f1-s?autoplay=1&amp;mute=1&amp;controls=0",
    zoom: 11
  },
  {
    id: 6,
    title: "Ulu",
    location: "Uluwatu, Bali 🇮🇩",
    latitude: -8.8149,
    longitude: 115.0884,
    description: "wrong info: Sandy beach break perfect for beginners. Very popular spot, may be crowded.",
    imageUrl: "https://i.ytimg.com/vi/vSOlFG_v9JQ/maxresdefault.jpg",
    forecast: "• Forecast: 6-9ft  /  16s  /  12mph offshore"
  },
  {
    id: 7,
    title: "Balangan",
    location: "Uluwatu, Bali 🇮🇩",
    latitude: -8.7920,
    longitude: 115.1234,
    description: "wrong info: Reef break more suitable for advanced surfers. Hot spot for competitions.",
    imageUrl: "https://i.ytimg.com/vi/0eAxg5tHtMk/maxresdefault.jpg",
    forecast: "• Forecast: 4-6ft  /  12s  /  8mph offshore"
  },
  {
    id: 8,
    title: "Bingin",
    location: "Uluwatu, Bali 🇮🇩",
    latitude: -8.8057,
    longitude: 115.1130,
    description: "wrong info: Reef break more suitable for advanced surfers. Possibly beginners when small.",
    imageUrl: "https://i.ytimg.com/vi/sXHrYzeh8Ro/maxresdefault.jpg",
    forecast: "• Forecast: 4-6ft  /  12s  /  8mph offshore"
  },
  {
    id: 9,
    title: "Green Bowl",
    location: "Uluwatu, Bali 🇮🇩",
    latitude: -8.8487,
    longitude: 115.1710,
    description: "wrong info: Reef break more suitable for advanced surfers. Possibly beginners when small.",
    imageUrl: "https://i.ytimg.com/vi/sXHrYzeh8Ro/maxresdefault.jpg",
    forecast: "• Forecast: 4-6ft  /  12s  /  8mph offshore"
  },
  {
    id: 10,
    title: "Dreamland",
    location: "Uluwatu, Bali 🇮🇩",
    latitude: -8.7993,
    longitude: 115.1177,
    description: "wrong info: Reef break more suitable for advanced surfers. Possibly beginners when small.",
    imageUrl: "https://i.ytimg.com/vi/sXHrYzeh8Ro/maxresdefault.jpg",
    forecast: "• Forecast: 4-6ft  /  12s  /  8mph offshore"
  },
  {
    id: 11,
    title: "Impossibles",
    location: "Uluwatu, Bali 🇮🇩",
    latitude: -8.8089,
    longitude: 115.1073,
    description: "wrong info: Reef break more suitable for advanced surfers. Possibly beginners when small.",
    imageUrl: "https://i.ytimg.com/vi/sXHrYzeh8Ro/maxresdefault.jpg",
    forecast: "• Forecast: 4-6ft  /  12s  /  8mph offshore"
  },
  {
    id: 12,
    title: "Nyang Nyang",
    location: "Uluwatu, Bali 🇮🇩",
    latitude: -8.8392,
    longitude: 115.0934,
    description: "wrong info: Reef break more suitable for advanced surfers. Possibly beginners when small.",
    imageUrl: "https://i.ytimg.com/vi/sXHrYzeh8Ro/maxresdefault.jpg",
    forecast: "• Forecast: 4-6ft  /  12s  /  8mph offshore"
  },
  {
    id: 13,
    title: "Thomas Beach",
    location: "Uluwatu, Bali 🇮🇩",
    latitude: -8.8135,
    longitude: 115.0962,
    description: "wrong info: Reef break more suitable for advanced surfers. Possibly beginners when small.",
    imageUrl: "https://i.ytimg.com/vi/sXHrYzeh8Ro/maxresdefault.jpg",
    forecast: "• Forecast: 4-6ft  /  12s  /  8mph offshore"
  }],
  [{
    id: 14,
    title: "Ocean Beach",
    location: "California 🇺🇸",
    latitude: 37.7691,
    longitude: -122.5109,
    description: "Consistent waves and good surf conditions. Can get windy and cold.",
    imageUrl: "https://i.ytimg.com/vi/hA3QoWqEQ0U/maxresdefault.jpg",
    forecast: "• Forecast: 4-6ft  /  14s  /  10mph onshore",
    videoUrl: "https://www.youtube.com/embed/YzTf9CyPpuo?autoplay=1&amp;mute=1&amp;controls=0",
    zoom: 4.25
  },
  {
    id: 15,
    title: "Malibu",
    location: "Malibu, California 🇺🇸",
    latitude: 34.0306,
    longitude: -118.7786,
    description: "Famous surf spot with a long-standing reputation. Can get crowded on weekends.",
    imageUrl: "https://malibuluxuryrealty.com/wp-content/uploads/2016/08/5036486731_5e873ab83b_b-1024x683.jpg",
    forecast: "• Forecast: 4-6ft  /  14s  /  10mph onshore"
  },
  {
    id: 16,
    title: "Trestles",
    location: "California 🇺🇸",
    latitude: 33.3813,
    longitude: -117.5333,
    description: "World-famous surf spot known for its quality waves. Can get crowded during peak surf seasons.",
    imageUrl: "https://www.surfertoday.com/images/stories/lowertrestles2.jpg",
    forecast: "• Forecast: 4-6ft  /  14s  /  10mph onshore",
  },
  {
    id: 17,
    title: "Huntington Beach",
    location: "Huntington Beach, California 🇺🇸",
    latitude: 33.6599,
    longitude: -117.9931,
    description: "World-renowned surf spot known for its long, consistent waves. Can get crowded on weekends.",
    imageUrl: "https://i.ytimg.com/vi/WizqThrnyBE/maxresdefault.jpg",
    forecast: "• Forecast: 4-6ft  /  14s  /  10mph onshore"
  }],
  [{
    id: 18,
    title: "Honolua Bay",
    location: "Maui, Hawaii 🇺🇸",
    latitude: 20.9638,
    longitude: -156.6345,
    description: "A beautiful reef break with challenging waves, suited for advanced surfers.",
    imageUrl: "https://i.ytimg.com/vi/Kyhb1o0W-hQ/maxresdefault.jpg",
    forecast: "• Forecast: 4-6ft / 14s / 10mph offshore",
    rank: "Advanced",
    videoUrl: "https://www.youtube.com/embed/yO1izVb7vcM?autoplay=1&amp;mute=1&amp;controls=0",
    zoom: 7
  },
  {
    id: 19,
    title: "Kahului Harbor",
    location: "Maui, Hawaii 🇺🇸",
    latitude: 20.9033,
    longitude: -156.4507,
    description: "A calm and sheltered beach break, perfect for beginner surfers.",
    imageUrl: "https://ec2-im-1.msw.ms/md/image.php?id=418881&type=PHOTOLAB&resize_type=STREAM_MEDIUM&fromS3",
    forecast: "• Forecast: 2-3ft / 10s / 5mph offshore",
    rank: "Beginner"
  },
  {
    id: 20,
    title: "Ho'okipa Beach",
    location: "Maui, Hawaii 🇺🇸",
    latitude: 20.9700,
    longitude: -156.3500,
    description: "A world-famous surf spot with fast and hollow waves, suited for advanced surfers.",
    imageUrl: "https://spot-thumbnails.cdn-surfline.com/spots/5842041f4e65fad6a7708de6/5842041f4e65fad6a7708de6_1500.jpg",
    forecast: "• Forecast: 4-6ft / 14s / 10mph offshore",
    rank: "Advanced"
  },
  {
    id: 21,
    title: "Pu'u'auli Point",
    location: "Maui, Hawaii 🇺🇸",
    latitude: 21.0388,
    longitude: -156.6652,
    description: "A fast and powerful reef break, suited for experienced surfers.",
    imageUrl: "https://lushpalm.com/wp-content/uploads/2017/11/oahu-surf-spots-off-the-wall.jpg",
    forecast: "• Forecast: 4-6ft / 14s / 10mph offshore",
    rank: "Intermediate"
  }]
]

export default data;
