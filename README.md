# end-with-a-bang
## PLAY FOR FREE HERE : -> Add link GitPages

## UI Screenshot 
![Screenshot] -> (https://github.com/tanjamilisavljevic/end-with-a-bang/blob/main/img/screenshotIndex.png)<br>
![Screenshot] -> (https://github.com/tanjamilisavljevic/end-with-a-bang/blob/main/img/screenshotlevel2.png)<br>
![Screenshot] -> (https://github.com/tanjamilisavljevic/end-with-a-bang/blob/main/img/screenshotlvl3.png)<br>
![Screenshot] -> (https://github.com/tanjamilisavljevic/end-with-a-bang/blob/main/img/screenshotlevel4.png)<br>

## Our mission : 
Apply our freshly learned HTML , JS, CSS & HTML skills to create a fun groupproject.<br>
We've created a knock-off Flappy Bird game as a tribute to our coach Bert. Hence the name ! <br>
Get through the four levels, each level designed by a groupmember. Levels have been designed as followed <br>
  - Home screen : Tanja
  - Level 1 : Glenn
  - Level 2 : Jonathan
  - Level 3 : Tanja
  - Level 4 : Dennis
  
  ## How it works : 
  Get Bert through the four levels by jumping through the needed amount of beacons. Needed scores : 
   - Level 1 : 10 Points
   - Level 2 : 15 Points
   - Level 3 : 25 Points 
   - Level 4 : 30 Points 
   
Once the score is reached, an alert will show up, getting you to the next level.<br>
Beat the bosslevel, and Bert can rest in peace and eternal gratitude for his salvation.
 
 ## How the code works
Each pipe is one element of 800px high. The "hole" spawns by a random math generator.<br>
Depending on the level , the hole is set between 150 - 180px, bert is 80px. <br>
Hitboxes are based on the top of Bert, and the left top of the pipe. If you hit it in the set dimensions <br>
the game will reward a point and spawn a new random pipie - OR - you didn't make it and an alert <br>
tells you to try again, with the set score. <br>

The difficult part was setting the score equal to the localstorage. The counterUp function checks if <br>
the browsers supports and allready has a local storage, if not we create a new one each time, called counter. <br>
When it's game over and you play again, the counter gets reset with resetCounter, and the game creates a new one.<br>
Due the deadline we didn't make it more advanced, ideally the localstorage would contain and memorise user names <br>4
and set highscore of the class, this is a WIP. <br>

## Special features 
- CSS : 
  - text animation on Home Page (animate class used)
  - start game button dissapears after click with interval (opacity used) 
  - timer in level 2 

- JS :
  - set / reset local storage for score
  - animation of pipes with math.random function (animationiteration)
  - game over alert with custom sound
  - 2d effects in level 3 
  - simple boolean used to stop animations after winning
  
- HTML : 
  - Audio tag for music player 
  - og meta tags
  - favicons
  <br>
    - As most browsers decided to cut Autoplay, it was hard finding out how to make the bg music work <br>
    the only way to make the music loop and autoplay, was to do this combined with the mute method. <br>
    This creates the option for the player to turn on the music whilst playing the level. <br>
    Normies can play in silence ;) . 
- Other : 
  - custom music samples and bg track. All royalty free under creative license.( This game is made for educational purposes).<br>
  - custom 8 bit avatars in level 3
  - Insane lava floor in level 2
  - background changes when game starts in level 2
  - level 1 had sharks, but wwe removed those becasuse it wwas too scary ! 


# The experience 

Creating this project was a fun but exhausting ride. We've created this with 4 people in 4 days by the time this is live. <br>
During this project we highly improved on our understanding and applyiance of bigger concepts .<br>
Eveyday we brainstormed and updated eachother on Discord, and made sure to Git push and - pull in the morning and evening. <br>
Creating a game like  this is super fun CSS & HTML, the Javascript on the other hand got more and more complex the deeper we got. 
<br>
## The struggles 

- responsiveness : We started out on Desktop-first, which made it rather impossible to make everything equally responsive .<br>
Because of the mathematical logic in the CSS and JS, hardcoded pixel sizes prevented the use of percentages, therefore this is WIP. 

- Creating the timer after the start game click. Jonathan got it to appear, but the animationiteration kept going, which made it useless. <br>

- Fine tuning the gravity for each level

- Getting the local Storage linked with the highscore. We didn't have the time to manipulate the counter object and user input. 

- Stopping the animation without adding too much if statements

- Stop Bert from getting sp00ked  !

# What we have learned with this project : 

- Team work and communicating like a GIT pro ; Push - Pull - restore - commit - add - reset --hard - 
- Adapting to deadlines and TODO schedules on a daily base
- Decision making and task management 
- Discipline whilst working remote 
- Staying focussed on what's important in a project, what is the essence of it's core ? 
- Logic in Javascript
- 2D Game development in Javascript (it was more fun then we thought ! ) 
- setting up local storage, where to inspect it, it's purpose 
- getComputedStyle grabs css of specified element. // getPropertyValue to specify elemet (bertTop in this project)
- Creating simple games can be very complex

## Sources and Software used in this project : 
VSCODE
PHPStorm
Favicon
8bit converter
GitHub
GitHubPages
Ubuntu
GitBash
Ableton LS 9
Windows 10 / Firefox (level 4)


    
