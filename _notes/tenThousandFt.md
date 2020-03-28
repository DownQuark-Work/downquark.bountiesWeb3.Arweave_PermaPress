# LinkedPermaWeb

## Base
> NOTE: changing d3 to jit
- ~~d3~~jit will be outside of any shadow root.
    - http://philogb.github.io/jit/static/v20/Jit/Examples/Spacetree/example2.html
    - http://philogb.github.io/jit/static/v20/Docs/files/Core/Core-js.html
  - Seems like putting it inside of one could cause unneeded complications
    - see below for elements included in d3
- Will contain module inputs for:
  - Instructions
  - Log (section='arweave | user | comments')
  - Options
  - Profile
  - StatsDapp

### Modules
- Instructions
  - [Components]:
    - instructions
- UserLog
  - [Components]:
    - avatar
    - entry
    - boxContent(type="input" color="hex | rgba")
    - boxSlot [input]
- Options
  - [Components]:
    - boxContent (type="button | input" color="hex | rgba")
    - boxSlot [dependent on _boxContent_ type]
- Profile
  - Will contain information about the user
  - [Components]:
    - preferences
    - statsUser
    - avatar
- StatsDapp
  - [Components]:
    - boxContent (type="stat" color="hex | rgba")
    - boxSlot [stat]

### Components
- avatar
  - <img>
- boxContent [dependent on _attribute_: **type**]
  - ? <button>
  - ? <input>
  - ? <div>
  - ? <ul>
- boxSlot
  - [button]
    - <span>
    - {event, listener, function}
  - [input]
    - <input>
    - <label>
    - {event, listener, function}
  - [stat]
    - <i> (_font awesome?_)
    - <strong>
    - <label>
  - [log]
    - <li>
    - <strong>
    - <label>
    - <span>
- entry
  - <h2>
  - <p>
  - <time datetime>
- instructions
    - Graceful deg for IE
  - <summary>
  - <details>
- preferences
  - <ul>
    - <li>
  - <input>
- statsUser
  - <ul>
    - <li>

### D3 Elements
- Title
- Link
- [if saved to permaweb]
  - Image
  - Created at Timestamp
  - blockchain transaction link
- [if **NOT** saved to permaweb]
  - _+_ icon
    - opens unsaved link
  - input
    - insert saved permaweb url
      - TODO: see if we can automate this

---
## Front End Break Down

### D3
- Will look like a mind map
  - disconnected nodes
    - center node will be base url that was saved
      - will have unique color
    - linked nodes of same color on short _arms_ will be internal links
    - linked nodes of diff color on long _arms_ will be external links
  - on **HOVER** _ALL_ links/urls/nodes that have been saved to perma web will:
    - display thumbnail img of saved site
      - will include created timestamp
      - will include transaction link
        - username if available ?
  - on **CLICK** _ALL_ unsaved links will:
    - open link in new window/tab
    - display form to allow user to paste transaction ID
      - TODO: see if we can automate this
        - SHOULD BE ABLE TO! `async createTransaction(attributes, jwk) {`
          - pass in data and all the other info needed

### Instructions
- Will accordion style down and up to display how the dApp works
- For IE will toggle open and closed

### Log (section='arweave')
- Will be card like and show logs `<ul><li>` pertaining to entire dApp
### Log (section='user')
- Will be card like and show logs pertaining to specific user
### Log (section='comments')
- Will be card like and show logs pertaining to comments
### Options
- Will control filtering and display of the d3 graph based on user input
### Profile
- Will contain info related to current user
  - avatar
  - name
  - email
  - amount of sites saved to perma web from dApp
  - amount of previously saved sites viewed
  - amount of new sites explored (saved or not the count increases)
### StatsDapp
  - Will contain info related to entire application
    - amount of total pages saved
    - most recent page saved
    - amount of unique users who have saved pages
    - top user who has saved page?


---
## ~~Back End Break Down~~ [_**DEPRECATED**_]
###### Pretty sure I can handle all of this just from what is returned with the txn queries
### Internal Fetches
- [GET] User specific stats
- [GET] App specific stats
### External Endpoints
- [GET] /recent/{amt}
  - utilize something along the lines of:
    - https://mdflqndwudrx.arweave.net/A7ctf1azriZxHGWKurMQfDFrGOncG-MBn4A59Tt1kzw/index.html#/transactions
  - filter Content-Type === 'text/html'
    - _**return**_
      - txn
      - page:url
      - page:title
      - page:timestamp
      - data
- [GET] /links?url={url+encoded+url}
  - scrape url
  - _**return**_
    - internal links
    - external links

---
## Dev Plan
- [X] Architect FE
- [X] Mock d3
- [ ] Build Components
- [X] ~~Mock Internal Fetches~~
- [X] ~~Mock External Endpoints~~
- [X] ~~Create Internal Fetches~~
- [X] ~~Replace Mock Internal Fetches~~
- [X] ~~Create External Fetches~~
- [X] ~~Replace Mock External Fetches~~
- [ ] Parse Returned txn info for Internal and External fetches 
  - [X] Initial Internal
  - [ ] Initial External
  - [ ] onClick Internal
  - [ ] onClick External
- [ ] Parse User Info
- [ ] Build Modules
- [ ] Construct App
- [ ] Enable _Options_ functionality
- [ ] Enable auto saving links on **click**