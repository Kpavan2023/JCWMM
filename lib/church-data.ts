export const CHURCH_INFO = {
  name: 'Jesus Christ Word Miracles Ministry',
  shortName: 'JCWMM',
  tagline: 'Sharing God\'s Word • Transforming Lives • Walking in Faith',
  founded: '2010',
  address: {
    street: 'JCWMM Church',
    city: 'Hyderabad',
    state: 'Telangana',
    country: 'India',
    full: 'JCWMM Church, Hyderabad, Telangana, India',
  },
  contact: {
    phone1: '+91 9700545494',
    phone2: '+91 8686861836',
    email: 'jcwmm.off@gmail.com',
    whatsapp: '+919700545494',
  },
  social: {
    youtube: 'https://www.youtube.com/@ProphetJudahAsher',
    facebook: 'https://www.facebook.com/ProphetJudahAsher',
    instagram: 'https://www.instagram.com/ProphetJudahAsher',
    telegram: 'https://t.me/ProphetJudahAsher',
    twitter: 'https://twitter.com/Iam_Judah_Asher',
  },
  location: {
  directions:
    'https://www.google.com/maps/place/JCWMM+Church/@17.4353984,78.4490905,21z/data=!4m6!3m5!1s0x3bcb910006dd8d83:0xe60192921bfababe!8m2!3d17.4355138!4d78.4493678!16s%2Fg%2F11zx6s8qld!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D',

  embed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.9067305154583!2d78.44909048103834!3d17.435398357673378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910006dd8d83%3A0xe60192921bfababe!2sJCWMM%20Church!5e0!3m2!1sen!2sin!4v1788181950905!5m2!1sen!2sin',

  latitude: 17.4355138,
  longitude: 78.4493678,
},
  services: [
    {
      id: 'sunday-worship',
      day: 'Sunday',
      name: 'Sunday Worship Service',
      time: '11:00 AM – 1:00 PM',
      icon: 'sun',
      description: 'Our main weekly gathering for praise, worship, and the preaching of God\'s Word.',
    },
    {
      id: 'saturday-prayer',
      day: 'Saturday',
      name: 'Saturday Prayer Service',
      time: '6:00 PM – 8:00 PM',
      icon: 'hands-praying',
      description: 'A dedicated time of corporate prayer, intercession, and seeking God\'s presence.',
    },
  ],
  mission:
    'To proclaim the Gospel, disciple believers, and serve the community with the love of Christ.',
  vision:
    'To build a Christ-centered church that transforms lives, strengthens families, and reaches nations through God\'s Word.',
};

export const BIBLE_VERSES = [
  {
    id: 1,
    verse:
      '"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."',
    reference: 'John 3:16',
    theme: 'salvation',
  },
  {
    id: 2,
    verse:
      '"I can do all this through him who gives me strength."',
    reference: 'Philippians 4:13',
    theme: 'strength',
  },
  {
    id: 3,
    verse:
      '"The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters."',
    reference: 'Psalm 23:1-2',
    theme: 'peace',
  },
  {
    id: 4,
    verse:
      '"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."',
    reference: 'Proverbs 3:5-6',
    theme: 'trust',
  },
  {
    id: 5,
    verse:
      '"For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future."',
    reference: 'Jeremiah 29:11',
    theme: 'hope',
  },
  {
    id: 6,
    verse:
      '"Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go."',
    reference: 'Joshua 1:9',
    theme: 'courage',
  },
  {
    id: 7,
    verse:
      '"Come to me, all you who are weary and burdened, and I will give you rest."',
    reference: 'Matthew 11:28',
    theme: 'rest',
  },
];

export const MINISTRIES = [
  {
    id: 'children',
    name: "Children's Ministry",
    icon: 'baby',
    description:
      'Nurturing the faith of our youngest members through age-appropriate Bible lessons, worship, and activities that build a strong foundation in Christ.',
    color: 'from-sky-400 to-blue-500',
  },
  {
    id: 'youth',
    name: 'Youth Fellowship',
    icon: 'users',
    description:
      'Empowering teens and young adults to grow in their faith, develop godly character, and discover their God-given purpose.',
    color: 'from-blue-500 to-royal-700',
  },
  {
    id: 'women',
    name: "Women's Fellowship",
    icon: 'heart',
    description:
      'A sisterhood of faith that encourages, uplifts, and equips women to walk boldly in their calling as daughters of God.',
    color: 'from-rose-400 to-pink-600',
  },
  {
    id: 'men',
    name: "Men's Fellowship",
    icon: 'shield',
    description:
      'Building men of God who lead their families, serve their community, and stand firm in biblical principles and integrity.',
    color: 'from-royal-700 to-blue-900',
  },
  {
    id: 'prayer',
    name: 'Prayer Ministry',
    icon: 'hands',
    description:
      'Interceding for the church, community, and nations. Every prayer is lifted with faith, believing God answers when we seek Him.',
    color: 'from-gold-500 to-amber-600',
  },
  {
    id: 'choir',
    name: 'Choir & Worship Team',
    icon: 'music',
    description:
      'Leading the congregation into the presence of God through anointed music, praise, and heartfelt worship that glorifies Jesus.',
    color: 'from-teal-400 to-cyan-600',
  },
  {
    id: 'evangelism',
    name: 'Evangelism',
    icon: 'megaphone',
    description:
      'Carrying the Good News of Jesus Christ beyond the church walls — to the streets, villages, and every corner of our city and beyond.',
    color: 'from-orange-400 to-red-500',
  },
  {
    id: 'outreach',
    name: 'Community Outreach',
    icon: 'globe',
    description:
      'Serving the poor, feeding the hungry, and caring for the vulnerable — putting faith into action as the hands and feet of Jesus.',
    color: 'from-green-400 to-emerald-600',
  },
];

export const SERMONS = [
  {
    id: 1,
    title: 'Anointing — Walking in God\'s Power',
    speaker: 'Prophet Judah Asher (Naresh)',
    date: '2025',
    scripture: 'Acts 10:38',
    category: 'Anointing',
    thumbnail: `https://img.youtube.com/vi/cfpuRdVn-s0/maxresdefault.jpg`,
    youtubeUrl: 'https://www.youtube.com/watch?v=cfpuRdVn-s0',
    duration: 'Full Message',
  },
  {
    id: 2,
    title: 'The Anointing of Cyrus',
    speaker: 'Prophet Judah Asher (Naresh)',
    date: '2025',
    scripture: 'Isaiah 45:1',
    category: 'Prophetic',
    thumbnail: `https://img.youtube.com/vi/dMgBupA3wvY/maxresdefault.jpg`,
    youtubeUrl: 'https://www.youtube.com/watch?v=dMgBupA3wvY',
    duration: 'Full Message',
  },
  {
    id: 3,
    title: 'The Mystery of Deliverance',
    speaker: 'Prophet Judah Asher (Naresh)',
    date: '2025',
    scripture: 'Mark 16:17',
    category: 'Deliverance',
    thumbnail: `https://img.youtube.com/vi/A3Eb2TJCX-M/maxresdefault.jpg`,
    youtubeUrl: 'https://www.youtube.com/watch?v=A3Eb2TJCX-M',
    duration: 'Full Message',
  },
  {
    id: 4,
    title: 'How God Works Behind the Scenes',
    speaker: 'Prophet Judah Asher (Naresh)',
    date: '2025',
    scripture: 'Romans 8:28',
    category: 'Faith',
    thumbnail: 'https://img.youtube.com/vi/QjnYU0WZU5M/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/live/QjnYU0WZU5M?si=ZGNCIwJa5hl6f0yU',
    duration: 'Full Message',
  },
  {
    id: 5,
    title: 'Prophetic Sunday Service',
    speaker: 'Prophet Judah Asher (Naresh)',
    date: '2025',
    scripture: 'Amos 3:7',
    category: 'Prophetic',
    thumbnail: 'https://img.youtube.com/vi/jGYYGjwhOls/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=jGYYGjwhOls',
    duration: 'Full Message',
  },
  {
    id: 6,
    title: 'స్వస్థత అంటే ఏమిటి ? || What Is Healing ?',
    speaker: 'Prophet Judah Asher (Naresh)',
    date: '2025',
    scripture: 'Isaiah 61:1',
    category: 'Healing',
    thumbnail: 'https://img.youtube.com/vi/mdI9wmrh60w/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/live/mdI9wmrh60w?si=tJTRIw8R3QFg9HPx',
    duration: 'Full Message',
  },
];

export const SERMON_CATEGORIES = ['All', 'Anointing', 'Prophetic', 'Faith', 'Deliverance', 'Healing', 'Prayer', 'Word of God'];

export const EVENTS = [
  {
    id: 1,
    title: 'Special Service',
    date: '',
    time: '',
    description:
  'No special services are currently scheduled. We will update this section when a special service is announced.' +
  'Join us every week for worship, prayer, the preaching of God’s Word, and fellowship in the presence of the Holy Spirit. Everyone is warmly welcome.',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Special',
    featured: true,
  },
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: '/church_gallery/church-3.png',
    category: 'Worship',
    caption: 'Sunday Worship Service',
  },
  {
    id: 2,
    src: '/church_gallery/church-4.png',
    category: 'Prayer Meetings',
    caption: 'Saturday Prayer Service',
  },
  {
    id: 3,
    src: '/church_gallery/church-5.JPG',
    category: 'Youth',
    caption: 'Prophet sharing Gods Word with the Youth',
  },
    {
    id: 6,
    src: '/church_gallery/church-8.png',
    category: 'Christmas',
    caption: 'Christmas Celebration',
  },
  {
    id: 5,
    src: '/church_gallery/church-7.JPG',
    category: 'Youth',
    caption: 'Youth Fellowship Meeting',
  },
   

  {
    id: 7,
    src: '/church_gallery/church-9.png',
    category: 'Easter',
    caption: 'Easter Sunday Service',
  },
  {
    id: 8,
    src: '/church_gallery/church-1.jpg',
    category: 'Outreach Programs',
    caption: 'Community Outreach',
  },
  {
    id: 11,
    src: '/church_gallery/church-27.jpeg',
    category: 'Worship',
    caption: 'Evening Worship Night',
  },
   {
    id: 13,
    src: '/church_gallery/church-12.jpeg',
    category: 'Worship',
    caption: 'Evening Worship Night',
  },
   {
    id: 14,
    src: '/church_gallery/church-14.jpeg',
    category: 'Worship',
    caption: 'Evening Worship Night',
  },
   {
    id: 16,
    src: '/church_gallery/church-16.jpeg',
    category: 'Worship',
    caption: 'Evening Worship Night',
  },
   {
    id: 17,
    src: '/church_gallery/church-17.jpeg',
    category: 'Worship',
    caption: 'Evening Worship Night',
  },
  {
    id: 19,
    src: '/church_gallery/church-19.jpeg',
    category: 'Prayer Meetings',
    caption: 'Prophetic prayer and family blessing',
  },
  {
    id: 20,
    src: '/church_gallery/church-20.jpeg',
    category: 'Prayer Meetings',
    caption: 'Prophetic prayer and family blessing',
  },
  {
    id: 21,
    src: '/church_gallery/church-21.jpeg',
    category: 'Prayer Meetings',
    caption: 'Prophetic prayer and family blessing',
  },
  {
    id: 22,
    src: '/church_gallery/church-22.jpeg',
    category: 'Worship',
    caption: 'Evening Worship Night',
  },
  {
    id: 23,
    src: '/church_gallery/church-23.jpeg',
    category: 'Worship',
    caption: 'Evening Worship Night',
  },
  {
    id: 24,
    src: '/church_gallery/church-24.jpeg',
    category: 'Worship',
    caption: 'Evening Worship Night',
  },
  {
    id: 25,
    src: '/church_gallery/church-25.jpeg',
    category: 'Prayer Meetings',
    caption: 'Sunday Prayer Service',
  },
  {
    id: 26,
    src: '/church_gallery/church-26.jpeg',
    category: 'Worship',
    caption: 'Sunday Worship Service',
  },
  {
    id: 28,
    src: '/church_gallery/church-28.jpeg',
    category: 'Worship',
    caption: 'Sunday Worship Service',
  },
     {
    id: 42,
    src: '/church_gallery/church-42.jpeg',
    category: 'Prayer Meetings',
    caption: 'A family coming together for personal prayer with Prophet Judah Asher',
  },
    {
    id: 30,
    src: '/church_gallery/church-30.jpeg',
    category: 'Worship',
    caption: 'Evening Worship Night',
  },
    {
    id: 31,
    src: '/church_gallery/church-31.jpeg',
    category: 'Worship',
    caption: 'Evening Worship Night',
  },
    {
    id: 32,
    src: '/church_gallery/church-32.jpeg',
    category: 'Worship',
    caption: 'Evening Worship Night',
  },
    {
    id: 33,
    src: '/church_gallery/church-33.jpeg',
    category: 'Worship',
    caption: 'Evening Worship Night',
  },
    {
    id: 35,
    src: '/church_gallery/church-35.jpeg',
    category: 'Prayer Meetings',
    caption: 'personally praying for each family and laying hands for healing',
  }, {
    id: 36,
    src: '/church_gallery/church-36.jpeg',
    category: 'Prayer Meetings',
    caption: 'Receiving prophetic guidance, prayer, and laying on of hands',
  }, {
    id: 37,
    src: '/church_gallery/church-37.jpeg',
    category: 'Prayer Meetings',
    caption: 'Receiving prophetic guidance, prayer, and laying on of hands',
  }, {
    id: 39,
    src: '/church_gallery/church-39.jpeg',
    category: 'Prayer Meetings',
    caption: 'Receiving prophetic guidance, prayer, and laying on of hands',
  }, {
    id: 40,
    src: '/church_gallery/church-40.jpeg',
    category: 'Prayer Meetings',
    caption: 'Prophet personally praying and ministering to each family',
  }, {
    id: 41,
    src: '/church_gallery/church-43.jpeg',
    category: 'Prayer Meetings',
    caption: 'A family coming together for personal prayer with Prophet Judah Asher',
  }, {
    id: 46,
    src: '/church_gallery/church-46.jpeg',
    category: 'Prayer Meetings',
    caption: 'personally praying for each family and laying hands for healing',
  },
 
];

export const GALLERY_CATEGORIES = [
  'All',
  'Worship',
  'Prayer Meetings',
  'Baptism',
  'Youth',
  'Christmas',
  'Easter',
  'Church Anniversary',
  'Outreach Programs',
];

export const TESTIMONIES = [
  {
    id: 1,
    name: 'K Pavan Kumar',
    role: 'Youth Member',
    testimony:
      "Coming to JCWMM was the turning point of my life. I had lost all hope, but through the prayers of this church and the Word of God, I was completely healed and restored. God is truly alive here!",
    image: '/testimonies/Pavan_Church.jpg',
    years: '1 year',
  },
  {
    id: 2,
    name: 'James K.',
    role: 'Youth Member',
    testimony:
      "The Youth Fellowship at JCWMM changed everything for me. I came in confused about my future, but through godly mentors and the Word, I now walk in purpose and clarity. This church is family.",
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    years: '2 years',
  },
  {
    id: 3,
    name: 'Grace A.',
    role: 'Women\'s Fellowship',
    testimony:
      "I was in a difficult marriage and on the verge of giving up. The Women's Fellowship and pastoral counseling helped us work through our challenges. Today, our family is restored and stronger than ever!",
    image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=300',
    years: '5 years',
  },
  {
    id: 4,
    name: 'David R.',
    role: 'Men\'s Fellowship',
    testimony:
      "After losing my job, I was devastated. The Men's Fellowship surrounded me, prayed with me, and supported me. Within two months, God opened a door ten times better. His Word never fails!",
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300',
    years: '4 years',
  },
  {
    id: 5,
    name: 'Mary P.',
    role: 'Prayer Ministry',
    testimony:
      "I was diagnosed with a serious illness and the doctors gave me little hope. The prayer warriors of this church stood in the gap for me. Six months later, I was declared completely healed. Glory to God!",
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    years: '6 years',
  },
];

export const CORE_BELIEFS = [
  {
    icon: 'book-open',
    title: 'The Bible',
    description: 'We believe the Bible is the inspired, infallible Word of God — our ultimate authority for faith and life.',
  },
  {
    icon: 'cross',
    title: 'Salvation',
    description: 'We believe salvation is by grace through faith in Jesus Christ alone — His death, burial, and resurrection.',
  },
  {
    icon: 'flame',
    title: 'The Holy Spirit',
    description: 'We believe in the present-day work of the Holy Spirit — including gifts, healing, and transformation.',
  },
  {
    icon: 'users',
    title: 'The Church',
    description: 'We believe the local church is God\'s instrument for discipleship, fellowship, and world missions.',
  },
  {
  icon: 'sparkles',
  title: 'God\'s Power',
  description: 'We believe God\'s power brings healing, restoration, and transformed lives for His glory.',
},
  {
    icon: 'sunrise',
    title: 'The Second Coming',
    description: 'We believe in the imminent, glorious return of Jesus Christ to establish His eternal kingdom.',
  },
];
