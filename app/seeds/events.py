from app.models import db, Event


# Adds a demo user, you can add other users here if you want
def seed_events():
    one = Event(
        host_id=1, venue_id=4, category_id=13, name='Back to Circle Nights', description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', start_time='2021-12-16', end_time='2021-12-17', capacity=300, image='https://cdn.vox-cdn.com/thumbor/HX2ED0PEAL7G3gGqCl2TWz1nrqc=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9983223/26165798_10155904030228608_8327478344339878533_n.jpg', cost=40)
    two = Event(
        host_id=1, venue_id=5, category_id=9, name='Lets talk about Stumph', description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', start_time='2021-09-16', end_time='2021-09-16', capacity=100, image='https://amishhandcrafted.com/wp-content/uploads/steamer-trunk/Steamer-trunk-in-maple-1-e1574720093489.jpg', cost=0)
    three = Event(
        host_id=2, venue_id=3, category_id=9, name='Food World Fair', description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', start_time='2021-10-07', end_time='2021-10-09', capacity=10000, image='https://media2.fdncms.com/phx/imager/u/magnum/11825797/arizona-state-fair-concerts-2021-canceled-veterans-memorial-coliseum.jpg?cb=1629406937', cost=25)
    four = Event(
        host_id=3, venue_id=1, category_id=9, name='My 4th wedding', description='Come to my fourth wedding and see me cry', start_time='2021-11-04', end_time='2021-11-04', capacity=10000, image='https://images.squarespace-cdn.com/content/v1/5afeff3b85ede1f676dc7b97/1536949548287-JLSPNHW1QR2X3OJQV5KI/hm_549.jpg', cost=80)
    five = Event(
        host_id=6, venue_id=2, category_id=4, name='Every Weekend @ Greenpoint Terminal Market.', description='Greenpoint Terminal Market is an outdoor flea located on the waterfront with gorgeous views of the Manhattan skyline, showcasing over 100 vendors: from vintage and antiques to local art and design, fresh fashion and a variety of international food. This is a space for small businesses and craft makers to grow. The market was born in 2020 during the COVID-19 pandemic and despite all the challenges that represented, GTM was able to create a safe space for vendors and guests. Due to the spike in COVID cases presented at the beginning of last winter, we had to close our doors to the public to reopen on May 2nd. Our goal is to create a space for the community to gather and do more than eat and shop, we want a space for the community to get together and have fun. We have ample outdoor space available for a great variety of activities which include live music, shows and outdoor activities for the whole family. Programming- August 28th: Outdoor Yoga experience with GlassHouseYoga Multiple classes 9 am - 2 pm Music By: Little Slugger - 12-2 Castle Black- 3-5 Indonesian Independence day by I.G.A. New York - all day Programming- August 29th: Outdoor Yoga experience with GlassHouseYoga Multiple classes 9 am - 2 pm Cars & Coffee 9am - 2pm Caroeira and Free Roda by Piao capoeira 12.30pm HotHoneySundays - 2pm - 6pm Greenpoint Terminal Market will be open to the public from 10 am to 6pm on Saturdays and Sundays at 2 Noble Street, Brooklyn NY, 11222. Follow us on IG to stay tuned!', start_time='2021-08-28', end_time='2021-08-29', capacity=500, image='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F132449231%2F481178327451%2F1%2Foriginal.20210416-155008?h=2000&w=720&auto=format%2Ccompress&q=75&sharp=10&s=56ae3bf73c8dcbf43375bab3b1f20b7c', cost=0)
    six = Event(
        host_id=5, venue_id=2, category_id=8, name='Sunset Party Yacht Cruise Around NYC', description='Are you ready to mingle and party on this beautiful, huge yacht!!?? Come enjoy breathtaking sunset views on this fun and safe sunset cruise through NYC and sail by the Brooklyn Bridge, The Statue of Liberty, and the beautiful New York City Skyline on this spacious vessel to let loose with your squad on a 100 ft, 2-deck private yacht! ***Sanitizing stations & Masks available + Temperature readings upon entry so we can create a safe haven for our attendees*** Dance the night away on the Hottest Yacht Party Cruise with the best DJs while enjoying the the NYC Skyline! Sail through the city and take in the sights while you enjoy music and drinks for the night. Grab your friends or come alone and get ready to enjoy an experience you won\'t forget! * Live DJ & Dance Floor (DJ Plays All The Hits) * All Ages (21 & Over) Are Welcome To Attend. Dress to impress * Much Of The Crowd Is Single So It\'s A Great Place To Meet That Special Someone! * About 70% Come Alone So Don\'t Worry If You\'re Coming By Yourself * 2 Fully Stocked Cash Bars So You Can Enjoy Amazing Cocktails * Live DJ & Dance Floor (DJ Plays All The Top Hits, Dance Music, Hip Hop and More) * Dress Code - Neat and/or Stylish - No Tank Tops, Gym Wear Or Baseball Caps (You Don\'t Have To Get Overly Dressed Up -- Some People Dress Up And Others Stay Semi Casual) * A Wide Assortment Of Food Is Available For Purchase On The Yacht * Please Arrive No Later Than The Listed Event Start Time WHERE THE BOAT IS LOCATED: Skyport Marina at 23rd St. & FDR Drive A recent review of one of our past cruises: "I had an absolute blast! I came by myself and wasn\'t sure exactly what to expect but to my pleasant surprise everyone was super friendly and I met a whole bunch of people right away. A lot of people also came on their own so everyone was excited to get know other people. The DJ was outstanding and the views were AMAZING! I tested out my photography skills and got some great pics. I can\'t wait to go back on another cruise!" - Melissa D., NYC', start_time='2021-09-26', end_time='2021-09-26', capacity=150, image='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F133188817%2F195573731624%2F1%2Foriginal.20210423-173531?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C40%2C640%2C320&s=55910bd572fa63042998be31f70eb380', cost=29.99)
    seven = Event(
        host_id=7, venue_id=1, category_id=10, name='Healthy on the Hudson x lululemon Yoga', description='HRPK has teamed up with some of the best in fitness to bring you a dynamic lineup of Healthy on the Hudson classes this summer. Join our group runs, learn a new yoga flow, or try out HIIT classes. These free workouts are adaptable to all levels and are here to help you sweat and stay healthy! Tuesdays at Hudson River Park\'s Pier 64 from 6:30 - 7:30 PM, come to stretch and reset with a welcoming yoga class, adaptable to all levels of ability. Instruction will take place weekly from Tuesday, June 15 - September 28. **Bring your own mat** for this event! Registration in advance is required and space is limited - please do not register if you are not able to make it. Check out our social feeds for schedule updates and weather cancellations. Please note there will be no classes Monday, July 5 and Monday, September 6. High Intensity Interval Training MONDAYS Pier 26 at N Moore St. Led by lululemon Yoga TUESDAYS Pier 64 at W 24 St. Led by lululemon High Intensity Interval Training WEDNESDAYS Pier 46 at Charles St. Led by lululemon Run Club THURSDAYS Pier 40 at Houston St. Led by lululemon Tai Chi FRIDAYS Pier 84 at W 44 St. Led by Laughing Dragon Tai Chi Chuan Pilates SATURDAYS Pier 62 at W 22 St. Led by Chelsea Piers Fitness', start_time='2021-08-31', end_time='2021-08-31', capacity=50, image='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F137245547%2F258978357777%2F1%2Foriginal.20210601-161240?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C55%2C3000%2C1500&s=c3047c5939ef01c393fe080d1d9e88eb', cost=0)
    eight = Event(
        host_id=8, venue_id=5, category_id=5, name='ONLINE: Let\'s Meditate New York : Free Guided Meditation Classes', description='You will find experience of this online class very real life like and in fact more attentive and personal. You learn and practice meditation and learn how to to use and apply it to situations in life. The gentle and easy technique shared is known as \'Sahaja Yoga\' meditation and is practiced in more than 100 countries and is always free. It was founded in 1970 by Shri Mataji Nirmala Devi. How to join? https://zoom.us/j/9181716151 We recommend joining by laptop for better experience. You can join up to 30 minutes before start of event if you have some queries or would like some one to one help before meditation session starts. This is a recurring session that serves beginners and above. No prior experience needed. If you are unable to join us don\'t worry, you can always rejoin us on any subsequent date. After few sessions you are placed in next level where introduction is skipped and we share more techniques. Expected Outcome of class? 1. Learn how to meditate at home 2. Learn best practices and techniques 3. Experience the \'awakening\' of healing energy within us that gives peace and balance 4. Sahaja Yoga meditation toolkit resources to apply techniques learnt in daily life Want to know more? Meditation is proven by science to be beneficial. in Sahaja Yoga you will be able to perceive the awakening and balance that comes along. Join us on Facebook for more resources. https://www.facebook.com/groups/WeMeditateGroup https://sahajayogareview.wordpress.com/ https://www.freemeditation.com/ Please feel free to email or WhatsApp following in case you have more questions or face difficulties joining Zoom session. We will try to keep you informed about more meditation events. Bhargava.potukuchi@gmail.com +15132038961 Stay safe and keep meditating! #free # guided #meditation # meditate #kundalini #social #language #culture #sahaja #transformation #peace #meditation #stress #depression #wellness #international #guided #experiences #sahaja yoga #Shri Mataji #Nirmala Devi #review #anxiety #center #Yoga #classes #retreat #center #meditate', start_time='2021-09-05', end_time='2021-09-05', capacity=100, image='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F109553943%2F27956923095%2F1%2Foriginal.20181221-213715?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=18%2C152%2C910%2C455&s=8bb3925d761bea9f4a50c57ab8c3e490', cost=0)
    nine = Event(
        host_id=9, venue_id=4, category_id=7, name='Caribbean Fridays At Jimmys With Free Rum Punch', description='WELCOME TO THE ONLY REAL AUTHENTIC CARIBBEAN EVENT IN NYC..... EVERY FRIDAY COME GET A TASTE OF THE CARIBBEAN FLAVORS. About this event & Every Friday The real real Authentic Caribbean Fridays S﻿oca, Regga,Dancehall an More Free Rum Punch from 11pm to Midnight Ladies Free x Gents Reduced w/RSVP b4 12 Location : Jimmy\'s 38 156 W 38th St, New York, NY 10018 Time 11pm - 4am BIRTHDAY PACKAGES 212-651-9069 ---- GENTS NO Plain T-Shirts | NO Boots | NO Hats | NO Sweats | NO Hoodies | No Sports wear | Designer T-Shirts & Sneakers Allowed Check out Upcoming special Events below : Escapetodr.com', start_time='2021-09-03', end_time='2021-09-04', capacity=200, image='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F141242673%2F66299487319%2F1%2Foriginal.20210710-091202?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C368%2C1594%2C797&s=e62758bb17c93c3fe68f7c206e644a82', cost=0)
    ten = Event(
        host_id=10, venue_id=4, category_id=8, name='Lifestyle Saturdays Everyone No Cover + Free Drinks', description='Best party in time square Returns Mandatory vaccination is not needed ( we will be doing temperature check ) About this event Lifestyle Saturdays EVERYONE FREE w| RSVP LADIES FREE B4 12AM | GUYS FREE B4 11:30PM Free Drinks Until Midnight -- Music By Power 105 Dj Self @JIMMY\'S 38 | 156 W 38TH btwn 7th & Bway Kitchen Open OH, IT\'S YOUR BIRTHDAY?! Celebrate your special day with us & get catered to like royalty with ... Birthday Shoutouts | Personal Birthday Flyer For More Info Call | Text | Bottle service 212-651-9069 STRICT DRESS CODE Mandatory Sexy & City Chic GENTS NO Plain T-Shirts | NO Boots | NO Hats | NO Sweats | NO Hoodies | No Sports wear | Designer T-Shirts & Sneakers Allowed LADIES NO Sneakers | NO Flip-Flops DOORS OPEN 11PM | 21+ ID Required ----- Check out Upcoming special Events below : Escapetodr.com', start_time='2021-09-11', end_time='2021-09-12', capacity=300, image='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F145903757%2F66299487319%2F1%2Foriginal.20210829-062047?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C188%2C1024%2C512&s=009121d73618ea987b358612c7844653', cost=20)
    eleven = Event(
        host_id=11, venue_id=3, category_id=2, name='Free Networking Event In NYC', description='* You will not be able to sign up at the venue. Whether you are an entrepreneur, small business owner or business professional, this event is the perfect opportunity to get away from your desk, have some cocktails and network with potential business partners, investors, industry professionals and new clients.... Or just come on out and make some new friends! We\'ve witnessed countless business connections and friendships form at our past events. QUICK NOTE: THIS EVENT MAY NOT BE HAPPENING ON THE DATE LISTED BUT SIGN UP AND WE\'LL KEEP YOU NOTIFIED ABOUT THE DATE IT\'S HAPPENING ON AND ALSO MORE UPCOMING SOCIAL & NETWORKING EVENTS IN NYC. //// Want to see all of the most fun events coming in NYC? Go to FriendzyEvents.com and join the mailing list or go to the following link and then click the "Follow" button. You\'ll then be notified when new events are posted: http://bestsocialevents.eventbrite.com //// Admission is free of charge and there are no speakers or sales pitches, just a great night connecting with real people. Bring your business cards, make new friends, meet your next business connection or simply mingle with accomplished individuals. * You will not be able to sign up at the venue. You have to get your free ticket here online and show it to the event host (either print it or show digital ticket on your phone) FAQ: Can I come alone? Absolutely! Typically about 75% of the crowd comes alone What is the suggested age range? All ages are welcome How many people will be there? Based on past events we expect between 100 and 200 people to be in attendance Is there music? Yes, there will be great music playing at just the right volume for mingling Are there drinks? Yes, there\'s a full menu of great drink specials available at the bar. What is the dress code? While there\'s no official dress code we ask that you don\'t wear gym gear or baseball caps. What you wear to work in likely perfectly fine. Who attends the event? Professionals of all sorts and ages. Can I arrive late? Absolutely. Arrive any time you\'d like. The event officially starts at 6:30 but if traveling in from a distance you\'re welcome to arrive at 7:30 or after. An email we received about one of our recent events: "Thank you so much for throwing such a great event. The crowd was really great and everyone was super friendly. As a busy professional I don\'t get that much time to get out and meet people so it was nice to be in such a relaxed environment. Event well done!" - Danielle, NYC', start_time='2021-09-15', end_time='2021-09-15', capacity=1000, image='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F121284241%2F195573731624%2F1%2Foriginal.jpg?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C67%2C582%2C291&s=e4ebb3cf3b6e823f0ce633cc0bbdfeb9', cost=0)
    twelve = Event(
        host_id=5, venue_id=2, category_id=8, name='Taste Saturdays Day Party at Rosebar DC Rooftop', description='The All New Taste Saturdays Day Party at Rosebar DC 4PM-9PM About this event Doors open 4-9pm RSVP for Complimentary Admission before 5pm. Complimentary Admission is subject to change on holidays and days with special guest hosts. For Bottle Service Text 202-830-2776 Hookah Available Rosebar Lounge, the distinct addition to the District’s nightlife, is an outdoor rooftop cocktail lounge and Nightclub, located on Connecticut Ave, the center of DuPont Circle. The "Taste Saturdays" brand, encompasses a Miami inspired day party experience, fusing Trap, Hip-Hop, Latin, and Afrobeats music to create the premier international fun party vibe in the heart of the nation\'s capital! With music by some of the top DJ\'s in DC and the rest of the country, this promises to be the Day Party of the summer! Text 202-830-2776 for all inquiries and Day Party table/bottle service reservations!', start_time='2021-10-04', end_time='2021-10-05', capacity=250, image='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F138208787%2F48058654074%2F1%2Foriginal.20210609-211543?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C153%2C1000%2C500&s=2f849dd1bcdd9c5cc155dfe14788953a', cost=20)


    db.session.add(one)
    db.session.add(two)
    db.session.add(three)
    db.session.add(four)
    db.session.add(five)
    db.session.add(six)
    db.session.add(seven)
    db.session.add(eight)
    db.session.add(nine)
    db.session.add(ten)
    db.session.add(eleven)
    db.session.add(twelve)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_events():
    db.session.execute('TRUNCATE events RESTART IDENTITY CASCADE;')
    db.session.commit()
