---
sidebar_position: 7
---

# Release notes 

## 2.1 - Ratio

### Floor Price
We introduced a new metric for collections. It is a floor price metric and it shows the price of the cheapest NFT in the collection. You can see that metric if you go to the Top Collection rankings, or with other collection stats on the collection page.

### Notifications
- Tip notification - now you can see the amount of tip inside the notification
- Collection offer notification - when the user creates a collection offer, all collection NFT owners will receive a notification about that offer. The first one to accept the offer gets the sale.
- Private auction notification - when the user creates a private auction, the target buyer gets a notification about it
- Comment likes notification - you get notified when someone likes your NFT or Post comment
- We also fixed some email notification amount problems


### Other changes
- Some code refactorings
- Various performance optimizations
- Various bug fixes


## 2.0 - Reborn

In Endemic 2.0 Ether is not the only currency for trading with NFTs. Now you can use Aurora and Wrapped NEAR as well. Also, Endemic fees are different for trading in different tokens.

### Private sale

If you decide to sell your NFT to someone you know but without putting your NFT publicly on sale, you can do that now. 

### Collection offer

If you want NFT from some collection but can't decide which one you like you can create a Collection Offer. The first NFT owner that accepts the offer gets the money and you get his NFT.

### Sidebar

We improved our profile menu. Now it's a sidebar and other than links to some user-specific pages you can see the state of your wallet balances for tokens that you can use on Endemic.

### Other changes
- By adding sorting option on the Artists page now it is easier to find artists you like
- We updated the form for adding a new collection. Now you can set royalties for collection NFTs as you create a collection.
- We improved filtering NFTs on the Artwork page. Now it is easier to find NFT you like in some price range.
- We optimized NFT minting so now you will pay fewer gas fees when minting NFT
- We also optimized filters on the Activity page. If you are interested in what happens in the marketplace it is more intuitive now than before.
- We improved UI for the NFT activity history
- Some code refactorings
- Various performance optimizations
- Various bug fixes

## 1.8 - Gloom
- Added dutch auction support
- Introduced user updates, now you can tell your followers what's going on
- Redesigned home and collection pages

## 1.7 - Slung
- Redesigned home page
- Added top buyers, sellers and collections sections
- Added better rankings
- Redesigned activity page

## 1.6 - Heist
- Increased the size of NFT image 
- Added more NFTs from artist when viewing NFT page
- Improved NFT full-screen mode
- Completed infrastructure for multi-chain support
- Added Latest Artwork to home page
- Various bug fixes
- UI improvements and fixes
  
## 1.5 - Squad
- Added activiy tab on user profiles
- Added ability to like NFT comments
- Added redundancy to IPFS pins
  
## 1.4 - Found

## Filters redesign
We did some styling and functional changes to our NFT filters. Now it's easier to filter NFTs on explore and artist pages.

## Other changes
- Implemented various END token vesting components
- Refactored parts of the system to support multiple blockchains such as Ethereum and NEAR
- Various bug fixes

## 1.3 - Smelt

## Navigation redesign
We did some styling and functional changes to our navigation bar. We improved the search bar, so now you can see search results more clearly.

## Notifications
Now you can receive notifications in-app too, not only via email. There is a new notification button in the navigation bar where you can see the latest events that happened with your account.

## Other changes
- Added option to filter user NFTs by collection.
- Added activity tab on collection page
- Increased file upload size limit from 32MB to 50MB
- Various bug fixes and performance improvements

## 1.2 - Choke

### Tips

Added option to tip another user for some amount of ether. You can do this from NFT and account pages.

## Rankings
Rankings is the new page where you can see some interesting metrics like: 
- top collections
- top sellers
- top buyers
- most liked NFTs
  
Activities and Rankings pages are grouped together in a new navigation item called Stats. 

## Badges
Badges are introduced as a recognition for our users and artists. There are 4 of them: 
- USER - you earn this badge by setting up your username
- COLLECTOR - you earn this badge by buying one or more NFTs in our marketplace
- VERIFIED ARTIST - these are artists verified by Endemic team
- SUPERSTAR - this is badge for truly premium artists

## Other changes
- Option to resend email address verification every minute
- Cropping profile image and collection image
- Added reminder to cancel NFT auction if trying to transfer NFT that is on sale
- Social links on collection page
- Various bugfixes
- Performance improvements

## 1.1 - Cynic

### NFT offers
Added ability to make an offer in ETH for an NFT. You decide how much you're willing to offer and NFT owner decides if he wants to sell. Owner can see received offers in 2 ways. 
- **NFT Details** - we added new tab Offers on NFT page. Tab contains all the offers received for the particular NFT
- **Offers Page** - from the account dropdown user can navigate to offers page. From there user can see all offers for every NFT that he currently owns

### Email notifications
You can now enter and verify your email with Endemic. Verifying email will allow you to receive notifications about various events that happen on Endemic. Email and notifications can be setup on the profile settings page. We currently support 5 events: 
- **NFT comments** - when somebody leaves comment on your NFT
- **NFT likes** - when somebody likes your NFT
- **New followers** - when somebody follows you
- **NFT sold** - when somebody buys your NFT
- **NFT offer received** - when somebody offers to buy your NFT
- **NFT offer accepted** - when somebody accepts your offer to buy an NFT

### 3D model support
Added support for .glb files. Uploading glb files requires additional thumbnail to be uploaded.

### Other changes
- Added support for new lines in NFT descriptions and user bios
- Added support for webm video files
- Codebase preparations for multi-chain support
- Discord sales bot
- Various bugfixes 
- Performance improvements
