## ToDoList

### none of this is in any kind of order

- [X] define collision checks in Planet, Goal, Ship
  * decide were to define checks (on Planets? on Ship?)
  * write #isCollided?(){} or some such thing
  * add collision detection methods to Space
  * add calls to those methods in Game#step OR Space#step (see Space Step below)

- [ ] Space#step
  * called in Game#step
  * needs to do the following things (might be forgetting some things)
    - move all objects
    - check all collisions ?? (see above)
    - call #collide methods on either Planets or Goal or Ship or some combination thereof to enact change in movement/visuals when things do indeed collide

- [ ] Ship Launch Mechanic
  * remember/lookup how to capture mouse coords onClick
  * define a helper to calculate the needed velocity vector of ship
    - this needs scale and direction in the form of a coordinate pair to add/subtract from Ship.pos
    - apply this change in pos from Space#step, maybe call the method Ship#move(vel)??
  * Game needs to have a state for this, I think. Game.flying or something, to disable click handler while ship is flying

- [ ] Ship aiming pointer
  * maybe render an arrow wherever the mouse is currently pointing, to show where the player is aiming?
  * alternative would be to make the mouse a crosshair, might be intuitive enough (design decision)


- [ ] Planet and Goal render methods
  * ctx.drawSomeCoolShit etc. (probably just circles at first)
  * call these methods in Space#draw (probably iterate through all drawable objects and call #draw on all of them)

- [ ] Planet and Goal gravity methods
  * this is more discussion than a todo - we have some options
    - setup radii for the layers of significant gravitational force.
    - OR run the gravitational_force method on all objects and ship every Game#step and translate that into a vel pair to affect the ship's movement. the exact nature of this is again a design choice.

- [ ] Menu Creation
  * 'Click here to play and have fun and give us jobs!'

#### Far away goals
- page layout
- styling
- sprites for objects (tiny little cat spaceship!)
- audio pewpew!
- moar levels!
- sweet victory screen
