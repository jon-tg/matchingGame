document.addEventListener('DOMContentLoaded', startGame);
let header= document.createElement('h2');
let description=document.createElement('p');
let easy=null;
let medium=null;
let hard=null;
let gameboard=null;
let interval=null;
let highScore_display=null;
let highScore=null;
let pokeballs=null;
let randomIndex=0;
let assetsIndex=0;
let options=[];
let score=0;
let active_pairs=[];
let start_sound=new Audio('audio/start.wav');
let click_sound= new Audio('audio/click.wav');
let match_sound= new Audio('audio/match.wav');
let wrong_sound= new Audio('audio/wrong.mp3');


function startGame()
{
    let highscoreAchieved=false;
    let easy=document.createElement('button');
    let medium=document.createElement('button');
    let hard=document.createElement('button');

    header.textContent='Memory Matching Madness';
    header.style.top='35vh';
    description.style.top='35vh';
    header.id='start-header';
    document.body.appendChild(header);
    description.textContent='Play a fast game of memory and try to beat your best time';
    description.classList.add('description');
    document.body.appendChild(description);
    easy.classList.add('start-buttons');
    medium.classList.add('start-buttons');
    hard.classList.add('start-buttons');


    easy.textContent='Easy';
    medium.textContent='Medium';
    hard.textContent='Hard';

    document.body.appendChild(easy);
    document.body.appendChild(medium);
    document.body.appendChild(hard);

    
    if (highScore_display) highScore_display.remove();

    easy.addEventListener('click', easySetUp);
    medium.addEventListener('click', mediumSetUp);
    hard.addEventListener('click', hardSetUp);

    function easySetUp()
    {
        start_sound.play();

        if (gameboard)
            gameboard.remove();

        let assets = [
            'images/ditto.png', 'images/pikachu.png','images/snorlax.png','images/meowth.png',
            'images/psyduck.png','images/jigglypuff.png','images/ghastly.png','images/gloom.png','images/yanma.png',
            'images/eevee.png','images/duskull.png','images/voltorb.png','images/breloom.png','images/staryu.png',
            'images/egg.png','images/gilgar.png','images/hoothoot.png','images/hoppip.png',
            'images/polywhirl.png','images/magemite.png','images/whismur.png', 'images/wingull.png','images/teddi.png','images/spheal.png','images/sudowoodoo.png','images/aggron.png',
            'images/bellsprout.png','images/celebi.png','images/sandrew.png','images/swinub.png','images/charmander.png'
        ];

        gameboard=document.createElement('div');
        gameboard.id='gameboard';
        gameboard.style.left='35vw';
        document.body.appendChild(gameboard);
        

        options=[0,0,1,1,2,2,3,3,4,4,5,5];
        active_pairs=[];

        for (let i=0; i<6; i++)
        {
            active_pairs.push(i);

        }
 
        for (let i=0; i<12; i++)
        {

            randomIndex=parseInt(Math.random()*options.length);
            assetsIndex=options[randomIndex];
            options.splice(randomIndex,1)
            pokeballs=document.createElement('img');
            pokeballs.src='images/pokeball.png';
            pokeballs.classList.add('pokeballs');
            pokeballs.setAttribute('data-secret-src', assets[assetsIndex]);
            pokeballs.style.width='7vw';
            gameboard.style.width='35vw';
            gameboard.appendChild(pokeballs);


        }

        newGame()

    }

    function mediumSetUp()
    {
        start_sound.play();

        if (gameboard)
            gameboard.remove();

        let assets = [
            'images/ditto.png', 'images/pikachu.png','images/snorlax.png','images/meowth.png',
            'images/psyduck.png','images/jigglypuff.png','images/ghastly.png','images/gloom.png','images/yanma.png',
            'images/eevee.png','images/duskull.png','images/voltorb.png','images/breloom.png','images/staryu.png',
            'images/egg.png','images/gilgar.png','images/hoothoot.png','images/hoppip.png',
            'images/polywhirl.png','images/magemite.png','images/whismur.png', 'images/wingull.png','images/teddi.png','images/spheal.png','images/sudowoodoo.png','images/aggron.png',
            'images/bellsprout.png','images/celebi.png','images/sandrew.png','images/swinub.png','images/charmander.png'
        ];

        gameboard=document.createElement('div');
        gameboard.style.left='35vw';
        gameboard.id='gameboard';

        document.body.appendChild(gameboard);
        

         options=[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
         active_pairs=[];

        for (let i=0; i<10; i++)
        {
            active_pairs.push(i);

        }
 
        for (let i=0; i<20; i++)
        {

            randomIndex=parseInt(Math.random()*options.length);
            assetsIndex=options[randomIndex];
            options.splice(randomIndex,1)
            pokeballs=document.createElement('img');
            pokeballs.src='images/pokeball.png';
            pokeballs.classList.add('pokeballs');
            pokeballs.setAttribute('data-secret-src', assets[assetsIndex]);
            pokeballs.style.width='7vw';
            gameboard.style.width='35vw';
            gameboard.appendChild(pokeballs);


        }

        newGame()

    }

    function hardSetUp()
    
    {
        start_sound.play();

        if (gameboard)
            gameboard.remove();

        let assets = [
            'images/ditto.png', 'images/pikachu.png','images/snorlax.png','images/meowth.png',
            'images/psyduck.png','images/jigglypuff.png','images/ghastly.png','images/gloom.png','images/yanma.png',
            'images/eevee.png','images/duskull.png','images/voltorb.png','images/breloom.png','images/staryu.png',
            'images/egg.png','images/gilgar.png','images/hoothoot.png','images/hoppip.png',
            'images/polywhirl.png','images/magemite.png','images/whismur.png', 'images/wingull.png','images/teddi.png','images/spheal.png','images/sudowoodoo.png','images/aggron.png',
            'images/bellsprout.png','images/celebi.png','images/sandrew.png','images/swinub.png','images/charmander.png'
        ];

        gameboard=document.createElement('div');
        gameboard.style.left='27vw';
        gameboard.id='gameboard';

        document.body.appendChild(gameboard);
        

         options=[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14];
         active_pairs=[];

        for (let i=0; i<15; i++)
        {
            active_pairs.push(i);

        }
 
        for (let i=0; i<30; i++)
        {

            randomIndex=parseInt(Math.random()*options.length);
            assetsIndex=options[randomIndex];
            options.splice(randomIndex,1)
            pokeballs=document.createElement('img');
            pokeballs.src='images/pokeball.png';
            pokeballs.classList.add('pokeballs');
            pokeballs.setAttribute('data-secret-src', assets[assetsIndex]);
            pokeballs.style.width='7vw';
            gameboard.appendChild(pokeballs);


        }

        newGame()

    }

    function newGame()
    {
        header.textContent='Ready, Set, Match!'
        header.style.top='0';
        description.style.top='0';
        easy.remove();
        medium.remove();
        hard.remove();

        header.style.top='0';
        description.style.top='0';


        let time=0;
        let gameover=false;
        description.textContent='Time: 0';

        
        if (interval) {
            clearInterval(interval);
        }

        interval = setInterval(() => {
            if (!gameover) {
                time += 1;
                description.textContent = `Time: ${time}`;
            }
        }, 1000);


        let last_clicked = null;
        let clickable = true;
        let clicks=0;


        document.querySelectorAll('.pokeballs').forEach(function hiddenImages(element) {
            element.addEventListener('click', function clickHandler(event) {
                let clickedElement = event.currentTarget;
                if (clickedElement.classList.contains('match')||gameover || !clickable) return; 
                if (clickedElement === last_clicked) return;

                clicks++
                if (clicks>2) return;

                clickedElement.src = clickedElement.getAttribute('data-secret-src');
                
                click_sound.play();
        
                if (last_clicked !== null) {
                    let lastClickedElement = last_clicked;

                    setTimeout(function flipCard() {
                        if (lastClickedElement.getAttribute('data-secret-src') !== clickedElement.getAttribute('data-secret-src')) {
                            wrong_sound.play(); 
                            lastClickedElement.src = 'images/pokeball.png';
                            clickedElement.src = 'images/pokeball.png';
                        } else {
                            match_sound.play();
                            lastClickedElement.classList.add('match');
                            clickedElement.classList.add('match');
                            lastClickedElement.removeEventListener('click', clickHandler);
                            clickedElement.removeEventListener('click', clickHandler);
                            active_pairs.pop();

                            if (active_pairs.length==0)
                            {
                                gameover=true;
                                score=time;

                                if (localStorage.getItem('highscore')===null)  
                                {
                                    highScore=10000;
                                    localStorage.setItem('highscore', highScore)

                                }
                                else {
                                    highScore = parseInt(localStorage.getItem('highscore'));
                                }
                                
                                if (score<localStorage.getItem('highscore'))
                                {
                                    localStorage.setItem('highscore', score);
                                    highscoreAchieved=true;
                                    highScore=score;
                                }

                                gameOver();
                            }
                    
                        }

                        clicks=0;
                        last_clicked = null;
                        clickable = true;  

                    }, 700);

                } else {
                    last_clicked = clickedElement;
                }
            
            });
           
        });

        function gameOver()
        {
        
            header.textContent='Game Over!';
            header.style.top='29vh';
            description.style.top='27vh';
            header.style.fontSize='6em';
            description.style.margin='.3vh'
            highScore_display=document.createElement('p');
            highScore_display.style.top='25vh';
            highScore_display.classList.add('description');
            description.textContent=`High score: ${highScore}`;
            document.body.appendChild(highScore_display);
            description.style.fontSize='4em';

            if (highscoreAchieved)
            {
                highScore_display.textContent=`You achieved a new high score: ${score}`;
            }

            else 
            {
                highScore_display.textContent=`Your score: ${score}`;
            }

        
            for (let pokeball of document.querySelectorAll('.pokeballs'))
            {
                pokeball.remove();
            }

            let play_again=document.createElement('button');
            play_again.id='play-again';
            play_again.style.top='24vh';
            play_again.textContent='play-again';
            document.body.appendChild(play_again);
            play_again.onclick=()=>{
                start_sound.play();
                play_again.remove();
                header.style.fontSize='3em';
                description.style.fontSize='2em';
                startGame();
            }
        }

    }
}