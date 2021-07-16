# end-with-a-bang
## PLAY FOR FREE HERE : https://tanjamilisavljevic.github.io/end-with-a-bang/
## UI Screenshot 
![Screenshot](https://github.com/tanjamilisavljevic/end-with-a-bang/blob/main/img/screenshotIndex.png)<br>
![Screenshot](https://github.com/tanjamilisavljevic/end-with-a-bang/blob/main/img/screenshotlevel2.png)<br>
![Screenshot](https://github.com/tanjamilisavljevic/end-with-a-bang/blob/main/img/screenshotlvl3.png)<br>
![Screenshot](https://github.com/tanjamilisavljevic/end-with-a-bang/blob/main/img/screenshotlevel4.png)<br>

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

# A word from the creators : 
## Glenn - Level 1 

## Jonathan - Level 2 
Theme Fire Dragon

Bert is being chased by the fire dragon and the only way he can save the world is by finishing this cruel fire level by avoiding the firepipes that are coming at him at high speed !
Will he be able to save the world? Well it's in your hands ! It's up to you to save the world!
Do you have the courage, are you brave enough to accept this challenge?
Press the button and save the world !
Some special features:
- The play button that starts the game and slowly fades away.
- A countdown section which counts down from 3 to 1
- A score section which keeps you posted about the score
- When you hit something you will get a confirm box, when pressing OK you will start over and cancel to go back to the homepage
- When you finish the level you will also get a confirm box congratulating you for passing this level. When you press OK it will go to the next level (level3) and cancel to go back to the homepage.
- Moving lava (be careful not to burn yourself!)

## Tanja - Index & Level 3 
Level 3 is MS-DOS inspired. I used HTML, CSS and JavaScript and built this level in PhpStorm. <br>
I used CSS animations, flexbox, grid and the level is responsive up to a point. Mobile responsiveness is still a work-in-progress. : - )<br> As far as JavaScript goes, all the functionalities have been extracted into functions. More refactoring coming soon! : - ) Thank you, Dennis, for sharing your JavaScript code and the super cool sound effects! Thanks, Jonathan, for the amazing teamwork and the invaluable insight!

## Dennis - Level 4
The last level is the final and therefore the " hardest " level. The main difficulty is scoring the required 30 points, gravity and hole are set on novice. <br>
The theme is NES evil, with some Castlevania vibes . Only real ones wil recognize ! <br>
During this project i mainly focussed on the logic and Javascript, as i wanted to start with the most difficult part of the game. <br>
There is still a lot of optimisation and refactoring possibilities, these are added as WIP. DUe deadlines and task managemenet we've focussed on the <br>
main functionalities, and making work on all the levels. This so we can present a consistent project, with appealing mechanics. <br>
Idealy the player wants to try again, instead of playing once and telling 'cool game bro !'. Responsivness is a big struggle , as this game is <br>
created Desktop first. We could have used Bootstrap to tackle this, we'll try this next time to save time. Flappy Bert Mobile version is coming up tho, so stay tuned ;) ! 

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


    
