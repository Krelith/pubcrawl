# pubcrawl
A Pub Crawl app -- DAT504 Project

As of latest commit:
-- Run app.js from project folder
-- Go to localhost:3000

Page should display with The Cider House pinned on the map. The location is stored as lat/long in the mLab database and forwarded to the map draw function (found in public/js/script.js).

Right now, the Mongo data is being written into a .json file in the public folder whenever the app is started from node. We could do with pulling the array directly and dynamically, if possible (without bridging through a local text file which gets updated once per app start).

Pubs now generate in random sets of ten and are marked on the map. Appropriate names and descriptions are listed in the below div (no styling applied yet).

--------------- Kev
